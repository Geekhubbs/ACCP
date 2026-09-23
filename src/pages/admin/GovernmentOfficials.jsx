import { useMemo, useState } from "react";
import { Search, Phone, Mail, UserPlus } from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import { mmdaFilterOptions } from "../../data/admin/districts";
import {
  mockOfficials,
  officialInstitutionOptions,
  officialStatusOptions,
  totalOfficials,
} from "../../data/admin/mockOfficials";
import { useSession } from "../../context/SessionContext";
import { scopeRows, isRegional } from "../../lib/scope";

const STATUS_VARIANT = {
  Active: "success",
  "On Leave": "warning",
  Suspended: "danger",
};

export default function GovernmentOfficials() {
  const { user } = useSession();
  const regional = isRegional(user);

  const scopedOfficials = useMemo(
    () => scopeRows(mockOfficials, user, (o) => o.district),
    [user],
  );

  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("all");
  const [institution, setInstitution] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return scopedOfficials.filter((o) => {
      const matchesSearch =
        !search.trim() ||
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.position.toLowerCase().includes(search.toLowerCase());
      const matchesDistrict =
        district === "all" ||
        mmdaFilterOptions.find((d) => d.value === district)?.label ===
          o.district;
      const matchesInstitution =
        institution === "all" || o.institution === institution;
      const matchesStatus = status === "all" || o.status === status;

      return (
        matchesSearch && matchesDistrict && matchesInstitution && matchesStatus
      );
    });
  }, [scopedOfficials, search, district, institution, status]);

  const metrics = useMemo(
    () => ({
      active: scopedOfficials.filter((o) => o.status === "Active").length,
      onLeave: scopedOfficials.filter((o) => o.status === "On Leave").length,
      suspended: scopedOfficials.filter((o) => o.status === "Suspended").length,
      avgLoad: scopedOfficials.length
        ? Math.round(
            scopedOfficials.reduce((sum, o) => sum + o.reportsHandled, 0) /
              scopedOfficials.length,
          )
        : 0,
    }),
    [scopedOfficials],
  );

  const columns = [
    {
      key: "name",
      header: "Official",
      render: (o) => (
        <div>
          <p className="font-medium text-slate-900">{o.name}</p>
          <p className="text-xs text-slate-500">{o.position}</p>
        </div>
      ),
    },
    { key: "institution", header: "Institution" },
    { key: "district", header: "Jurisdiction" },
    {
      key: "contact",
      header: "Contact",
      render: (o) => (
        <div className="text-xs text-slate-600 flex flex-col gap-0.5">
          <span className="flex items-center gap-1">
            <Phone size={11} className="text-slate-400" />
            {o.phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail size={11} className="text-slate-400" />
            {o.email}
          </span>
        </div>
      ),
    },
    { key: "reportsHandled", header: "Reports Handled" },
    { key: "avgResolution", header: "Avg Resolution" },
    {
      key: "status",
      header: "Status",
      render: (o) => (
        <Badge variant={STATUS_VARIANT[o.status]} dot>
          {o.status}
        </Badge>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Government Officials
          </h1>
          <p className="text-sm text-slate-500">
            {regional
              ? "Roster of MMDA engineers, inspectors, and department leads across the region."
              : `Officials assigned to ${user.jurisdictionName}.`}
          </p>
        </div>
        <Button variant="primary" icon={UserPlus}>
          Onboard Official
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <MetricCard
          label={regional ? "Total Officials" : "Officials in Jurisdiction"}
          value={regional ? totalOfficials : scopedOfficials.length}
          delta={regional ? "Across 43 MMDAs" : user.jurisdictionName}
        />
        <MetricCard label="Active" value={metrics.active} />
        <MetricCard label="On Leave" value={metrics.onLeave} />
        <MetricCard label="Suspended" value={metrics.suspended} />
        <MetricCard label="Avg Reports / Official" value={metrics.avgLoad} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name or position..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        {regional && (
          <Select
            value={district}
            onChange={setDistrict}
            options={mmdaFilterOptions}
          />
        )}
        <Select
          value={institution}
          onChange={setInstitution}
          options={officialInstitutionOptions}
        />
        <Select
          value={status}
          onChange={setStatus}
          options={officialStatusOptions}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900">
            Showing {filtered.length} of {scopedOfficials.length} officials
            {regional && ` (sample of ${totalOfficials} total)`}
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No officials match these filters."
        />
      </div>
    </div>
  );
}
