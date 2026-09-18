import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import {
  kpiStats,
  priorityQueues,
  categoryBreakdown,
  districtPerformance,
  auditStream,
} from "../../data/admin/mockDashboardStats";

const PRIORITY_TONE = {
  emergency: "border-rose-200 bg-rose-50",
  high: "border-amber-200 bg-amber-50",
  moderate: "border-blue-200 bg-blue-50",
  low: "border-slate-200 bg-slate-50",
};

const districtColumns = [
  { key: "name", header: "District / MMDA", render: (r) => <span className="font-medium text-slate-900">{r.name}</span> },
  { key: "total", header: "Total" },
  { key: "pending", header: "Pending" },
  { key: "inProgress", header: "In Progress" },
  { key: "resolved", header: "Resolved" },
  { key: "sla", header: "SLA Health", render: (r) => `${r.sla}% On Time` },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Administration Overview</h1>
        <p className="text-sm text-slate-500">Monitor and manage the Ashanti Civic Platform across all 43 MMDAs.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {kpiStats.map((kpi) => (
          <MetricCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {priorityQueues.map((q) => (
          <div key={q.label} className={`rounded-xl border p-4 ${PRIORITY_TONE[q.tone]}`}>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-900">{q.label}</p>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-700">{q.count} active</span>
            </div>
            <p className="mt-2 text-xs text-slate-600">{q.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-2">
          <h2 className="font-semibold text-slate-900">District MMDA Performance Breakdown</h2>
          <p className="mb-4 text-sm text-slate-500">Real-time workflow execution, backlogs, and SLA compliance.</p>
          <DataTable columns={districtColumns} rows={districtPerformance} rowKey="code" />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-semibold text-slate-900">Reports by Category</h2>
          <div className="mt-4 flex flex-col gap-3">
            {categoryBreakdown.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700">{c.label}</span>
                  <span className="text-slate-500">{c.value.toLocaleString()} ({c.pct}%)</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                  <div className="h-1.5 rounded-full bg-brand-green" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-900">Admin Audit Stream</h2>
        <div className="mt-4 flex flex-col gap-4">
          {auditStream.map((a, i) => (
            <div key={i} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {a.title}
                  {a.tag && <span className="ml-2 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">{a.tag}</span>}
                </p>
                <p className="text-sm text-slate-600">{a.detail}</p>
                <p className="text-xs text-slate-400">{a.time} • {a.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}