export default function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  align = "left",
  trailing,
  className = "",
}) {
  const alignStyles =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignStyles} ${className}`}>
      <div className="flex items-center justify-between w-full gap-3">
        <div
          className={`flex items-center gap-2 ${align === "center" ? "mx-auto" : ""}`}
        >
          {Icon && <Icon size={20} className="text-brand-green shrink-0" />}
          {eyebrow && (
            <span className="text-xs font-semibold tracking-wide uppercase text-brand-orange">
              {eyebrow}
            </span>
          )}
          {!eyebrow && title && (
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          )}
        </div>
        {trailing && <div className="shrink-0">{trailing}</div>}
      </div>

      {eyebrow && title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-gray-600 ${align === "center" ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
