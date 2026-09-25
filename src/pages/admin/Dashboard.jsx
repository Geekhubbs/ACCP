import { useState } from "react";
import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import ActivityChart from "../../components/ui/admin/ActivityChart";
import { useSession } from "../../context/SessionContext";
import { isRegional } from "../../lib/scope";
import { getScopedDashboardData } from "../../lib/dashboardScope";

const PRIORITY_TONE = {
  emergency: "border-rose-200 bg-rose-50",
  high: "border-amber-200 bg-amber-50",
  moderate: "border-blue-200 bg-blue-50",
  low: "border-slate-200 bg-slate-50",
};

const districtColumns = [
  {
    key: "name",
    header: "District / MMDA",
    render: (r) => <span className="font-medium text-slate-900">{r.name}</span>,
  },
  { key: "total", header: "Total" },
  { key: "pending", header: "Pending" },
  { key: "inProgress", header: "In Progress" },
  { key: "resolved", header: "Resolved" },
  { key: "sla", header: "SLA Health", render: (r) => `${r.sla}% On Time` },
];

export default function Dashboard() {
  const { user } = useSession();
  const regional = isRegional(user);
  const [range, setRange] = useState("weekly");

  const data = getScopedDashboardData(user);
  const series =
    range === "weekly" ? data.weeklyActivity : data.monthlyActivity;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Administration Overview
        </h1>
        <p className="text-sm text-slate-500">
          {regional
            ? "Monitor and manage the Ashanti Civic Platform across all 43 MMDAs."
            : `Monitor civic activity and performance for ${data.scopeLabel}.`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {data.kpiStats.map((kpi) => (
          <MetricCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {data.priorityQueues.map((q) => (
          <div
            key={q.label}
            className={`rounded-xl border p-4 ${PRIORITY_TONE[q.tone]}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-900">{q.label}</p>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-700">
                {q.count} active
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-600">{q.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-semibold text-slate-900">
              Report Activity & Resolution Velocity
            </h2>
            <p className="text-sm text-slate-500">
              {regional
                ? "Daily civic reports vs verified field resolutions over the selected period."
                : `Estimated activity for ${data.scopeLabel}, scaled from regional trends.`}
            </p>
          </div>
          <div className="flex items-center rounded-lg border border-slate-200 p-0.5 shrink-0">
            {["weekly", "monthly"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                  range === r
                    ? "bg-brand-green text-white"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2">
          <div>
            <p className="text-xs text-slate-400">
              Avg {range === "weekly" ? "Weekly" : "Monthly"} Submissions
            </p>
            <p className="text-lg font-bold text-slate-900">
              {data.activityStats.avgWeeklySubmissions}
            </p>
            <p className="text-xs text-emerald-600">
              {data.activityStats.avgWeeklyDelta}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Avg Resolution Time</p>
            <p className="text-lg font-bold text-slate-900">
              {data.activityStats.avgResolutionTime}
            </p>
            <p className="text-xs text-emerald-600">
              {data.activityStats.avgResolutionDelta}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">
              {regional ? "Regional Hotspots" : "Jurisdiction Standing"}
            </p>
            <p className="text-sm font-semibold text-slate-900">
              {data.activityStats.hotspots}
            </p>
            <p className="text-xs text-slate-400">
              {data.activityStats.hotspotsLoad}
            </p>
          </div>
        </div>

        <ActivityChart series={series} />

        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-orange" /> New
            Submissions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-green" /> MMDA
            Resolutions
          </span>
        </div>
        {data.isModeled && (
          <p className="mt-2 text-[11px] text-slate-400 italic">
            Figures above are modeled from regional trends and this MMDA's share
            of report volume — not independently measured per-MMDA data.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-2">
          <h2 className="font-semibold text-slate-900">
            {regional
              ? "District MMDA Performance Breakdown"
              : `${data.scopeLabel} Performance`}
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            {regional
              ? "Real-time workflow execution, backlogs, and SLA compliance."
              : "Your MMDA's current report workload and SLA status."}
          </p>
          <DataTable
            columns={districtColumns}
            rows={data.districtRows}
            rowKey="code"
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-semibold text-slate-900">Reports by Category</h2>
          <div className="mt-4 flex flex-col gap-3">
            {data.categoryBreakdown.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700">{c.label}</span>
                  <span className="text-slate-500">
                    {c.value.toLocaleString()} ({c.pct}%)
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                  <div
                    className="h-1.5 rounded-full bg-brand-green"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-900">Admin Audit Stream</h2>
        <div className="mt-4 flex flex-col gap-4">
          {data.auditStream.length === 0 ? (
            <p className="text-sm text-slate-400">
              No recent activity recorded for your jurisdiction yet.
            </p>
          ) : (
            data.auditStream.map((a, i) => (
              <div
                key={i}
                className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {a.title}
                    {a.tag && (
                      <span className="ml-2 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
                        {a.tag}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-slate-600">{a.detail}</p>
                  <p className="text-xs text-slate-400">
                    {a.time} • {a.meta}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
