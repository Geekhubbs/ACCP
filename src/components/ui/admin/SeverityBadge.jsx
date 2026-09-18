const TONES = {
  emergency: "bg-rose-50 text-rose-700 border-rose-200",
  high: "bg-amber-50 text-amber-700 border-amber-200",
  moderate: "bg-blue-50 text-blue-700 border-blue-200",
  low: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function SeverityBadge({ tone = "moderate", children }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONES[tone] ?? TONES.moderate}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}