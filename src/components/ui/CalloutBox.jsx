const TONE_STYLES = {
  neutral: "bg-gray-50 border-gray-200",
  brand: "bg-brand-green/5 border-brand-green/20",
  accent: "bg-brand-orange/5 border-brand-orange/20",
};

const LABEL_TONE_STYLES = {
  neutral: "text-gray-500",
  brand: "text-brand-green",
  accent: "text-brand-orange",
};

export default function CalloutBox({
  icon: Icon,
  label,
  title,
  description,
  tone = "neutral",
  className = "",
}) {
  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-1 ${TONE_STYLES[tone]} ${className}`}
    >
      {label && (
        <span
          className={`text-xs font-semibold uppercase tracking-wide flex items-center gap-1.5 ${LABEL_TONE_STYLES[tone]}`}
        >
          {Icon && <Icon size={14} />}
          {label}
        </span>
      )}
      {title && (
        <span className="text-xl font-bold text-gray-900">{title}</span>
      )}
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
}
