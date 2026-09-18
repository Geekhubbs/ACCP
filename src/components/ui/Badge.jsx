const VARIANT_STYLES = {
  neutral: "bg-gray-100 text-gray-700",
  brand: "bg-brand-green/10 text-brand-green",
  accent: "bg-brand-orange/15 text-brand-orange",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
};

const SEVERITY_STYLES = {
  low: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-orange-100 text-orange-700",
  emergency: "bg-red-600 text-white",
};

const SIZE_STYLES = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-2.5 py-1 gap-1.5",
};

const DOT_COLOR_BY_VARIANT = {
  neutral: "bg-gray-500",
  brand: "bg-brand-green",
  accent: "bg-brand-orange",
  success: "bg-green-600",
  warning: "bg-amber-600",
  danger: "bg-red-600",
  info: "bg-blue-600",
};

const DOT_COLOR_BY_SEVERITY = {
  low: DOT_COLOR_BY_VARIANT.success,
  medium: DOT_COLOR_BY_VARIANT.warning,
  high: DOT_COLOR_BY_VARIANT.warning,
  emergency: "bg-white",
};

export default function Badge({
  children,
  variant = "neutral",
  severity,
  size = "sm",
  dot = false,
  className = "",
  ...props
}) {
  const resolvedVariant = severity
    ? SEVERITY_STYLES[severity]
    : VARIANT_STYLES[variant];
  const dotColor = severity
    ? DOT_COLOR_BY_SEVERITY[severity]
    : DOT_COLOR_BY_VARIANT[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium whitespace-nowrap ${resolvedVariant} ${SIZE_STYLES[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColor}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
