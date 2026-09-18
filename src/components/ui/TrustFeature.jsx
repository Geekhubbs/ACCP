export default function TrustFeature({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="h-9 w-9 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
        {Icon && <Icon size={16} />}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
}
