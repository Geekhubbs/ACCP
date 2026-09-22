export default function MetricCard({ label, value, delta }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
      {delta && <p className="mt-1 text-xs text-emerald-600">{delta}</p>}
    </div>
  );
}