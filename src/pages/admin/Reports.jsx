import { useMemo, useState } from "react";
import { Search, Download } from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import StatusBadge from "../../components/ui/admin/StatusBadge";
import SeverityBadge from "../../components/ui/admin/SeverityBadge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import { mmdaFilterOptions } from "../../data/admin/districts";
import {
  mockReports,
  reportCategories,
  reportStatusOptions,
  reportPriorityOptions,
} from "../../data/admin/mockReports";
import { useSession } from "../../context/SessionContext";
import { scopeRows, isRegional } from "../../lib/scope";

const categoryLabel = (id) =>
  reportCategories.find((c) => c.id === id)?.label ?? id;

export default function Reports() {
  const { user } = useSession();
  const regional = isRegional(user);

  const scopedReports = useMemo(
    () => scopeRows(mockReports, user, (r) => r.district),
    [user],
  );

  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  const filtered = useMemo(() => {
    return scopedReports.filter((r) => {
      const matchesSearch =
        !search.trim() ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || r.category === category;
      const matchesStatus = status === "all" || r.status === status;
      const matchesPriority = priority === "all" || r.priority === priority;
      const matchesDistrict =
        district === "all" ||
        mmdaFilterOptions.find((d) => d.value === district)?.label ===
          r.district;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority &&
        matchesDistrict
      );
    });
  }, [scopedReports, search, district, category, status, priority]);

  const metrics = useMemo(
    () => ({
      total: scopedReports.length,
      pending: scopedReports.filter((r) => r.status === "Pending").length,
      inProgress: scopedReports.filter((r) => r.status === "In Progress")
        .length,
      resolved: scopedReports.filter((r) => r.status === "Resolved").length,
      emergency: scopedReports.filter((r) => r.priority === "emergency").length,
    }),
    [scopedReports],
  );

  const columns = [
    {
      key: "id",
      header: "Ticket ID",
      render: (r) => <span className="font-medium text-slate-900">{r.id}</span>,
    },
    {
      key: "title",
      header: "Report",
      render: (r) => <span className="text-slate-700">{r.title}</span>,
    },
    {
      key: "category",
      header: "Category",
      render: (r) => categoryLabel(r.category),
    },
    { key: "district", header: "District / MMDA" },
    {
      key: "priority",
      header: "Priority",
      render: (r) => (
        <SeverityBadge tone={r.priority}>{r.priority}</SeverityBadge>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (r) => <StatusBadge status={r.status} />,
    },
    { key: "sla", header: "SLA Target" },
    { key: "unit", header: "Assigned Unit" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
          <p className="text-sm text-slate-500">
            {regional
              ? "All citizen reports across the 43 Ashanti MMDAs — filter, triage, and monitor SLA status."
              : `Citizen reports for ${user.jurisdictionName} — filter, triage, and monitor SLA status.`}
          </p>
        </div>
        <Button variant="outline" icon={Download}>
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <MetricCard label="Total Reports" value={metrics.total} />
        <MetricCard label="Pending" value={metrics.pending} />
        <MetricCard label="In Progress" value={metrics.inProgress} />
        <MetricCard
          label="Resolved"
          value={metrics.resolved}
          delta="Verified with photo proof"
        />
        <MetricCard label="Emergency Active" value={metrics.emergency} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ticket ID or title..."
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
            value={status}
            onChange={setStatus}
            options={reportStatusOptions.map((s) => ({
              value: s.value === "all" ? "all" : s.value,
              label: s.label,
            }))}
          />
          <Select
            value={priority}
            onChange={setPriority}
            options={reportPriorityOptions}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {reportCategories.map((c) => (
            <button key={c.id} type="button" onClick={() => setCategory(c.id)}>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                  category === c.id
                    ? "bg-brand-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900">
            Showing {filtered.length} of {scopedReports.length} reports
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No reports match these filters."
        />
      </div>
    </div>
  );
}
