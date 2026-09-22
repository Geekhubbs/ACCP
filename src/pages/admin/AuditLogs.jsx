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

import {
  mockAuditLogs,
  auditActionOptions,
  auditRoleOptions,
  totalAuditLogs,
} from "../../data/admin/auditLogs";

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
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("all");
  const [role, setRole] = useState("all");
  const [logs] = useState(mockAuditLogs);

  const filtered = useMemo(() => {
    return logs.filter((l) => {
      const matchesSearch =
        !search.trim() ||
        l.actor.toLowerCase().includes(search.toLowerCase()) ||
        l.description.toLowerCase().includes(search.toLowerCase()) ||
        l.module.toLowerCase().includes(search.toLowerCase());
      const matchesAction = action === "all" || l.action === action;
      const matchesRole = role === "all" || l.role === role;
      return matchesSearch && matchesAction && matchesRole;
    });
  }, [logs, search, action, role]);

  const metrics = useMemo(
    () => ({
      total: logs.length,
      creates: logs.filter((l) => l.action === "Create").length,
      updates: logs.filter((l) => l.action === "Update").length,
      deletes: logs.filter((l) => l.action === "Delete").length,
    }),
    [logs],
  );

  const columns = [
    {
      key: "timestamp",
      header: "Timestamp",
      render: (l) => <span className="text-slate-500 text-xs">{l.timestamp}</span>,
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
    {
      key: "ipAddress",
      header: "IP Address",
      render: (l) => <span className="text-xs text-slate-400">{l.ipAddress}</span>,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Audit Logs</h1>
          <p className="text-sm text-slate-500">
            Chronological record of administrative and system actions across
            ACCP.
          </p>
        </div>
        <Button variant="outline" icon={Download}>
          Export Logs
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard label="Total Events" value={totalAuditLogs} />
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
        <Select value={action} onChange={setAction} options={auditActionOptions} />
        <Select value={role} onChange={setRole} options={auditRoleOptions} />
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setAction("all");
            setRole("all");
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
            Showing {filtered.length} of {totalAuditLogs} events
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No audit events match this filter."
        />
      </div>
    </div>
  );
}