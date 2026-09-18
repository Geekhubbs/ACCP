export default function StatsBar({ stats, className = "" }) {
  return (
    <div
      className={`
        grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl border border-gray-100
        shadow-sm p-8 ${className}
      `}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center text-center gap-1"
        >
          <span
            className={`text-3xl font-bold ${stat.valueColor || "text-gray-900"}`}
          >
            {stat.value}
            {stat.unit && (
              <span className="text-lg font-semibold ml-1">{stat.unit}</span>
            )}
          </span>
          <span className="text-sm font-semibold text-gray-800">
            {stat.label}
          </span>
          {stat.subtext && (
            <span className="text-xs text-gray-400">{stat.subtext}</span>
          )}
        </div>
      ))}
    </div>
  );
}
