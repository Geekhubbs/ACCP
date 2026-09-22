import { useMemo, useState } from "react";
import {
  Building,
  Search,
  RefreshCw,
  Pencil,
  Play,
  Pause,
  Plus,
  Phone,
  Mail,
} from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import {
  mockInstitutions,
  institutionTypeOptions,
  institutionStatusOptions,
  totalInstitutions,
} from "../../data/admin/institutions";

const TYPE_VARIANT = {
  Works: "brand",
  Utility: "info",
  Sanitation: "accent",
  Security: "warning",
};

export default function Institutions() {
  const [institutions, setInstitutions] = useState(mockInstitutions);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return institutions.filter((i) => {
      const matchesSearch =
        !search.trim() || i.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = type === "all" || i.type === type;
      const matchesStatus = status === "all" || i.status === status;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [institutions, search, type, status]);

  const metrics = useMemo(
    () => ({
      total: institutions.length,
      active: institutions.filter((i) => i.status === "Active").length,
      inactive: institutions.filter((i) => i.status === "Inactive").length,
      totalAssigned: institutions.reduce((sum, i) => sum + i.assignedReports, 0),
    }),
    [institutions],
  );

  const toggleStatus = (id) => {
    setInstitutions((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, status: i.status === "Active" ? "Inactive" : "Active" }
          : i,
      ),
    );
  };

  const columns = [
    {
      key: "name",
      header: "Institution",
      render: (i) => (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
            <Building size={16} />
          </div>
          <div>
            <p className="font-medium text-slate-900">{i.name}</p>
            <p className="text-xs text-slate-500">{i.jurisdiction}</p>
          </div>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (i) => <Badge variant={TYPE_VARIANT[i.type]}>{i.type}</Badge>,
    },
    {
      key: "contactPerson",
      header: "Contact",
      render: (i) => (
        <div>
          <p className="text-slate-900">{i.contactPerson}</p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <Phone size={12} /> {i.phone}
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <Mail size={12} /> {i.email}
          </p>
        </div>
      ),
    },
    {
      key: "assignedReports",
      header: "Assigned Reports",
      render: (i) => i.assignedReports.toLocaleString(),
    },
    {
      key: "status",
      header: "Status",
      render: (i) => (
        <Badge variant={i.status === "Active" ? "success" : "neutral"} dot>
          {i.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (i) => (
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title="Edit institution"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => toggleStatus(i.id)}
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title={i.status === "Active" ? "Deactivate" : "Activate"}
          >
            {i.status === "Active" ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Institutions</h1>
          <p className="text-sm text-slate-500">
            Directory of government institutions and utility partners that
            reports get routed to.
          </p>
        </div>
        <Button variant="primary" icon={Plus}>
          Add Institution
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard label="Total Institutions" value={totalInstitutions} />
        <MetricCard label="Active" value={metrics.active} />
        <MetricCard label="Inactive" value={metrics.inactive} />
        <MetricCard
          label="Reports Assigned"
          value={metrics.totalAssigned.toLocaleString()}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search institutions..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        <Select value={type} onChange={setType} options={institutionTypeOptions} />
        <Select value={status} onChange={setStatus} options={institutionStatusOptions} />
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setType("all");
            setStatus("all");
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
            <Building size={16} className="text-brand-green" />
            Showing {filtered.length} of {totalInstitutions} institutions
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No institutions match this filter."
        />
      </div>
    </div>
  );
}