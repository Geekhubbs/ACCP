import { useMemo, useState } from "react";
import {
  History,
  Search,
  RefreshCw,
  Plus,
  Pencil,
  Trash2,
  LogIn,
  RefreshCcw,
  Download,
} from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import { mmdaFilterOptions } from "../../data/admin/districts";
import {
  mockAuditLogs,
  auditActionOptions,
  auditRoleOptions,
} from "../../data/admin/auditLogs";
import { useSession } from "../../context/SessionContext";
import { scopeRows, isRegional } from "../../lib/scope";

const ACTION_ICON = {
  Create: Plus,
  Update: Pencil,
  Delete: Trash2,
  Login: LogIn,
  StatusChange: RefreshCcw,
};

const ACTION_VARIANT = {
  Create: "success",
  Update: "info",
  Delete: "danger",
  Login: "neutral",
  StatusChange: "accent",
};

export default function AuditLogs() {
  const { user } = useSession();
  const regional = isRegional(user);

  const scopedLogs = useMemo(
    () => scopeRows(mockAuditLogs, user, (l) => l.district),
    [user],
  );

  const [search, setSearch] = useState("");
  const [action, setAction] = useState("all");
  const [role, setRole] = useState("all");
  const [district, setDistrict] = useState("all");

  const filtered = useMemo(() => {
    return scopedLogs.filter((l) => {
      const matchesSearch =
        !search.trim() ||
        l.actor.toLowerCase().includes(search.toLowerCase()) ||
        l.description.toLowerCase().includes(search.toLowerCase()) ||
        l.module.toLowerCase().includes(search.toLowerCase());
      const matchesAction = action === "all" || l.action === action;
      const matchesRole = role === "all" || l.role === role;
      const matchesDistrict =
        district === "all" ||
        mmdaFilterOptions.find((d) => d.value === district)?.label ===
          l.district;
      return matchesSearch && matchesAction && matchesRole && matchesDistrict;
    });
  }, [scopedLogs, search, action, role, district]);

  const metrics = useMemo(
    () => ({
      total: scopedLogs.length,
      creates: scopedLogs.filter((l) => l.action === "Create").length,
      updates: scopedLogs.filter((l) => l.action === "Update").length,
      deletes: scopedLogs.filter((l) => l.action === "Delete").length,
    }),
    [scopedLogs],
  );

  const columns = [
    {
      key: "timestamp",
      header: "Timestamp",
      render: (l) => (
        <span className="text-slate-500 text-xs">{l.timestamp}</span>
      ),
    },
    {
      key: "actor",
      header: "Actor",
      render: (l) => (
        <div>
          <p className="font-medium text-slate-900">{l.actor}</p>
          <p className="text-xs text-slate-500">{l.role}</p>
        </div>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: (l) => {
        const Icon = ACTION_ICON[l.action] ?? History;
        return (
          <Badge variant={ACTION_VARIANT[l.action] ?? "neutral"} dot>
            <span className="flex items-center gap-1">
              <Icon size={12} /> {l.action}
            </span>
          </Badge>
        );
      },
    },
    { key: "module", header: "Module" },
    {
      key: "description",
      header: "Description",
      render: (l) => <span className="text-slate-600">{l.description}</span>,
    },
    { key: "district", header: "District / MMDA" },
    {
      key: "ipAddress",
      header: "IP Address",
      render: (l) => (
        <span className="text-xs text-slate-400">{l.ipAddress}</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Audit Logs</h1>
          <p className="text-sm text-slate-500">
            {regional
              ? "Chronological record of administrative and system actions across ACCP."
              : `Actions recorded for ${user.jurisdictionName}.`}
          </p>
        </div>
        <Button variant="outline" icon={Download}>
          Export Logs
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard
          label={regional ? "Total Events" : "Events in Jurisdiction"}
          value={metrics.total}
        />
        <MetricCard label="Creates" value={metrics.creates} />
        <MetricCard label="Updates" value={metrics.updates} />
        <MetricCard label="Deletes" value={metrics.deletes} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by actor, module, or description..."
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
          value={action}
          onChange={setAction}
          options={auditActionOptions}
        />
        <Select value={role} onChange={setRole} options={auditRoleOptions} />
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setAction("all");
            setRole("all");
            setDistrict("all");
          }}
          className="flex items-center justify-center rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"
          title="Reset filters"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900 flex items-center gap-2">
            <History size={16} className="text-brand-green" />
            Showing {filtered.length} of {scopedLogs.length} events
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel={
            regional
              ? "No audit events match this filter."
              : "No audit events recorded for your jurisdiction yet."
          }
        />
      </div>
    </div>
  );
}
