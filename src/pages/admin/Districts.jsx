import { useMemo, useState } from "react";
import { Search, Building2, Download } from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import {
  districtStats,
  districtTypeOptions,
} from "../../data/admin/districtStats";
import { useSession } from "../../context/SessionContext";
import { isRegional } from "../../lib/scope";

const TYPE_VARIANT = {
  Metropolitan: "brand",
  Municipal: "info",
  District: "neutral",
};

export default function Districts() {
  const { user } = useSession();
  const regional = isRegional(user);

  // Scoped roles only ever have one MMDA to look at — their own
  const scopedStats = useMemo(
    () =>
      regional
        ? districtStats
        : districtStats.filter((d) => d.code === user.jurisdictionCode),
    [regional, user],
  );

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const filtered = useMemo(() => {
    return scopedStats.filter((d) => {
      const matchesSearch =
        !search.trim() || d.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = type === "all" || d.type === type;
      return matchesSearch && matchesType;
    });
  }, [scopedStats, search, type]);

  const metrics = useMemo(
    () => ({
      total: scopedStats.length,
      metropolitan: scopedStats.filter((d) => d.type === "Metropolitan").length,
      municipal: scopedStats.filter((d) => d.type === "Municipal").length,
      district: scopedStats.filter((d) => d.type === "District").length,
      syncing: scopedStats.filter((d) => d.status === "Syncing").length,
    }),
    [scopedStats],
  );

  const columns = [
    {
      key: "name",
      header: "MMDA",
      render: (d) => (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-[11px] font-semibold shrink-0">
            {d.code.slice(0, 3)}
          </div>
          <span className="font-medium text-slate-900">{d.name}</span>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (d) => <Badge variant={TYPE_VARIANT[d.type]}>{d.type}</Badge>,
    },
    {
      key: "total",
      header: "Total Reports",
      render: (d) => d.total.toLocaleString(),
    },
    { key: "pending", header: "Pending" },
    { key: "inProgress", header: "In Progress" },
    {
      key: "resolved",
      header: "Resolved",
      render: (d) => d.resolved.toLocaleString(),
    },
    { key: "officials", header: "Officials" },
    { key: "sla", header: "SLA Health", render: (d) => `${d.sla}% On Time` },
    {
      key: "status",
      header: "Gateway",
      render: (d) => (
        <Badge variant={d.status === "Connected" ? "success" : "warning"} dot>
          {d.status}
        </Badge>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Districts / MMDAs
          </h1>
          <p className="text-sm text-slate-500">
            {regional
              ? "Coverage and performance across all Metropolitan, Municipal, and District Assemblies."
              : `Performance overview for ${user.jurisdictionName}.`}
          </p>
        </div>
        <Button variant="outline" icon={Download}>
          Export MMDA Report
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <MetricCard
          label={regional ? "Total MMDAs" : "Your MMDA"}
          value={regional ? "43 / 43" : user.jurisdictionName}
          delta={regional ? "100% Region Connected" : user.role}
        />
        <MetricCard label="Metropolitan" value={metrics.metropolitan} />
        <MetricCard label="Municipal" value={metrics.municipal} />
        <MetricCard label="District" value={metrics.district} />
        <MetricCard label="Gateway Syncing" value={metrics.syncing} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search MMDA name..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        {regional && (
          <Select
            value={type}
            onChange={setType}
            options={districtTypeOptions}
          />
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900 flex items-center gap-2">
            <Building2 size={16} className="text-brand-green" />
            Showing {filtered.length} of {scopedStats.length} MMDAs
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="code"
          emptyLabel="No MMDAs match this filter."
        />
      </div>
    </div>
  );
}
