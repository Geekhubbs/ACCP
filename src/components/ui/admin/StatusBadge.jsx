const TONES = {
  "in progress": "bg-amber-50 text-amber-700",
  assigned: "bg-blue-50 text-blue-700",
  resolved: "bg-emerald-50 text-emerald-700",
  "under review": "bg-slate-100 text-slate-600",
};

export default function StatusBadge({ status }) {
  const tone = TONES[status?.toLowerCase()] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tone}`}>
      {status}
    </span>
  );
}