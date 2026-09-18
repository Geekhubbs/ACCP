export default function StatBlock({
  label,
  value,
  subtext,
  valueColor = "text-gray-900",
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </span>
      <span className={`text-lg font-bold ${valueColor}`}>{value}</span>
      {subtext && <span className="text-xs text-gray-500">{subtext}</span>}
    </div>
  );
}
