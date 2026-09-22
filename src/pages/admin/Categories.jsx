import { useMemo, useState } from "react";
import {
  Waves,
  Construction,
  Trash2,
  Lightbulb,
  Droplet,
  Leaf,
  Tags,
  Search,
  RefreshCw,
  Pencil,
  Play,
  Pause,
  Plus,
} from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import {
  mockCategories,
  categoryStatusOptions,
  totalCategories,
} from "../../data/admin/categories";

const CATEGORY_ICON = {
  drainage: Waves,
  roads: Construction,
  sanitation: Trash2,
  lighting: Lightbulb,
  water: Droplet,
  environment: Leaf,
};

export default function Categories() {
  const [categories, setCategories] = useState(mockCategories);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return categories.filter((c) => {
      const matchesSearch =
        !search.trim() || c.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === "all" || c.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [categories, search, status]);

  const metrics = useMemo(
    () => ({
      total: categories.length,
      active: categories.filter((c) => c.status === "Active").length,
      inactive: categories.filter((c) => c.status === "Inactive").length,
      totalReports: categories.reduce((sum, c) => sum + c.totalReports, 0),
    }),
    [categories],
  );

  const toggleStatus = (id) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
          : c,
      ),
    );
  };

  const columns = [
    {
      key: "name",
      header: "Category",
      render: (c) => {
        const Icon = CATEGORY_ICON[c.id] ?? Tags;
        return (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
              <Icon size={16} />
            </div>
            <span className="font-medium text-slate-900">{c.name}</span>
          </div>
        );
      },
    },
    { key: "defaultInstitution", header: "Default Institution" },
    {
      key: "totalReports",
      header: "Total Reports",
      render: (c) => c.totalReports.toLocaleString(),
    },
    { key: "activeReports", header: "Active" },
    { key: "lastUpdated", header: "Last Updated" },
    {
      key: "status",
      header: "Status",
      render: (c) => (
        <Badge variant={c.status === "Active" ? "success" : "neutral"} dot>
          {c.status}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (c) => (
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title="Edit category"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => toggleStatus(c.id)}
            className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
            title={c.status === "Active" ? "Deactivate" : "Activate"}
          >
            {c.status === "Active" ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Categories</h1>
          <p className="text-sm text-slate-500">
            Manage report categories and the default institution each one
            routes to.
          </p>
        </div>
        <Button variant="primary" icon={Plus}>
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <MetricCard label="Total Categories" value={totalCategories} />
        <MetricCard label="Active" value={metrics.active} />
        <MetricCard label="Inactive" value={metrics.inactive} />
        <MetricCard
          label="Total Reports"
          value={metrics.totalReports.toLocaleString()}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        <Select value={status} onChange={setStatus} options={categoryStatusOptions} />
        <button
          type="button"
          onClick={() => {
            setSearch("");
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
            <Tags size={16} className="text-brand-green" />
            Showing {filtered.length} of {totalCategories} categories
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No categories match this filter."
        />
      </div>
    </div>
  );
}