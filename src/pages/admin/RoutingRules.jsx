import { useMemo, useState } from "react";
import {
  Waves,
  Construction,
  Trash2,
  Lightbulb,
  Droplet,
  Leaf,
  Compass,
  CheckCheck,
  Clock,
  Search,
  RefreshCw,
  Pencil,
  Play,
  Pause,
  Plus,
  FlaskConical,
} from "lucide-react";

import DataTable from "../../components/ui/admin/DataTable";
import SeverityBadge from "../../components/ui/admin/SeverityBadge";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import { mmdaFilterOptions } from "../../data/admin/districts";
import {
  routingRules,
  routingCategoryOptions,
  routingPriorityOptions,
  routingStatusOptions,
  totalRoutingRules,
} from "../../data/admin/mockRoutingRules";

const CATEGORY_ICON = {
  drainage: Waves,
  roads: Construction,
  sanitation: Trash2,
  lighting: Lightbulb,
  water: Droplet,
  environment: Leaf,
};

const categoryLabel = (id) =>
  routingCategoryOptions.find((c) => c.value === id)?.label ?? id;

export default function RoutingRules() {
  const [search, setSearch] = useState("");
  const [mmda, setMmda] = useState("all");
  const [category, setCategory] = useState("all");
  const [priority, setPriority] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return routingRules.filter((r) => {
      const matchesSearch =
        !search.trim() ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.area.toLowerCase().includes(search.toLowerCase());
      const matchesMmda =
        mmda === "all" ||
        mmdaFilterOptions.find((d) => d.value === mmda)?.label.includes(r.area);
      const matchesCategory = category === "all" || r.category === category;
      const matchesPriority = priority === "all" || r.priority === priority;
      const matchesStatus = status === "all" || r.status === status;

      return (
        matchesSearch &&
        matchesMmda &&
        matchesCategory &&
        matchesPriority &&
        matchesStatus
      );
    });
  }, [search, mmda, category, priority, status]);

  const activeCount = routingRules.filter((r) => r.status === "Active").length;

  const columns = [
    {
      key: "id",
      header: "Rule ID & Category",
      render: (r) => {
        const Icon = CATEGORY_ICON[r.category] ?? Compass;
        return (
          <div className="flex items-start gap-2">
            <Icon size={16} className="text-brand-green mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-slate-900">#{r.id}</p>
              <p className="text-xs text-slate-500">
                {categoryLabel(r.category)}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      key: "area",
      header: "Geographic Area / MMDA",
      render: (r) => (
        <div>
          <p className="font-medium text-slate-900">{r.area}</p>
          <p className="text-xs text-slate-500">{r.subArea}</p>
        </div>
      ),
    },
    { key: "institution", header: "Responsible Institution" },
    { key: "unit", header: "Responsible Unit / Team" },
    {
      key: "priority",
      header: "Priority",
      render: (r) => (
        <SeverityBadge tone={r.priority}>{r.priority}</SeverityBadge>
      ),
    },
    {
      key: "sla",
      header: "SLA Target",
      render: (r) => (
        <span className="flex items-center gap-1 text-slate-700">
          <Clock size={14} className="text-slate-400" />
          {r.sla}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (r) => (
        <Badge variant={r.status === "Active" ? "success" : "neutral"} dot>
          {r.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title="Edit rule"
          >
            <Pencil size={14} />
          </button>
          <button
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title={r.status === "Active" ? "Pause rule" : "Activate rule"}
          >
            {r.status === "Active" ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange flex items-center gap-1.5">
            <Compass size={12} /> Autonomous Civic Logistics Engine
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Routing Rules Engine
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Configure how citizen reports are automatically triaged and
            dispatched to MMDA works departments, utilities, and field units.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" icon={FlaskConical}>
            Test Rule Simulator
          </Button>
          <Button variant="primary" icon={Plus}>
            Create New Routing Rule
          </Button>
        </div>
      </div>

      {/* Engine status banner */}
      <div className="bg-brand-green rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
            <Compass size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-white font-bold">
                Automated Civic Dispatch Engine
              </h2>
              <Badge
                variant="accent"
                size="sm"
                className="bg-white/10 text-brand-orange"
              >
                Active Polling v4.2
              </Badge>
            </div>
            <p className="text-white/70 text-sm mt-1 max-w-xl">
              When a citizen in Ashanti Region submits an issue, ACCP
              cross-references the verified category, MMDA district, and
              sub-metro zone to auto-assign the ticket directly to the
              authorized engineering department with strict SLA timers.
            </p>
          </div>
        </div>
        <div className="flex gap-6 shrink-0 text-white/90 text-sm">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Jurisdiction
            </p>
            <p className="font-semibold">Ashanti ARCC</p>
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Enforcement
            </p>
            <p className="font-semibold">Strict SLA</p>
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Active Rules
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {totalRoutingRules}
          </p>
          <p className="mt-1 text-xs text-emerald-600">↑ +6 this week</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            MMDAs Covered
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">43 / 43</p>
          <p className="mt-1 text-xs text-emerald-600">100% Region</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Dispatch Accuracy
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">98.4%</p>
          <p className="mt-1 text-xs text-slate-500">1.6% manual triage</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Automated Triage
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">&lt; 15 mins</p>
          <p className="mt-1 text-xs text-slate-500">
            Median submission to alert
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search rules by ID or MMDA..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        <Select value={mmda} onChange={setMmda} options={mmdaFilterOptions} />
        <Select
          value={category}
          onChange={setCategory}
          options={routingCategoryOptions}
        />
        <Select
          value={priority}
          onChange={setPriority}
          options={routingPriorityOptions}
        />
        <Select
          value={status}
          onChange={setStatus}
          options={routingStatusOptions}
        />
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setMmda("all");
            setCategory("all");
            setPriority("all");
            setStatus("all");
          }}
          className="flex items-center justify-center rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"
          title="Reset filters"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No routing rules match these filters."
        />
        <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCheck size={12} className="text-emerald-600" />
            Showing {filtered.length} of {totalRoutingRules} production dispatch
            rules across Ashanti Region ({activeCount} active in this sample)
          </span>
        </div>
      </div>
    </div>
  );
}
