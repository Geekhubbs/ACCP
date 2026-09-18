export default function TrustBadgeRow({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-1.5 text-sm text-gray-600"
        >
          {item.icon && <item.icon size={14} className="text-brand-green" />}
          {item.label}
        </div>
      ))}
    </div>
  );
}
