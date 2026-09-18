const TONE_STYLES = {
  default: {
    selected: "bg-brand-green text-white border-brand-green",
    unselected: "bg-white text-gray-700 border-gray-200 hover:border-gray-300",
  },
  warning: {
    selected: "bg-amber-100 text-amber-700 border-amber-300",
    unselected: "bg-white text-gray-700 border-gray-200 hover:border-gray-300",
  },
  danger: {
    selected: "bg-red-50 text-red-600 border-red-300",
    unselected: "bg-white text-gray-700 border-gray-200 hover:border-gray-300",
  },
};

export default function SelectableCard({
  icon: Icon,
  label,
  subtext,
  selected = false,
  tone = "default",
  onClick,
  className = "",
}) {
  const styles = TONE_STYLES[tone][selected ? "selected" : "unselected"];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-1 rounded-lg border px-4 py-3
        text-sm font-medium transition-colors text-center
        ${styles} ${className}
      `}
    >
      {Icon && (
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span>{label}</span>
        </div>
      )}
      {!Icon && <span>{label}</span>}
      {subtext && (
        <span
          className={`text-xs font-normal ${selected ? "opacity-90" : "text-gray-400"}`}
        >
          {subtext}
        </span>
      )}
    </button>
  );
}
