export default function PageHero({
  badge, // NEW — optional node rendered above the title, e.g. <Badge>...</Badge>
  title,
  subtitle,
  children,
  dark = false,
  align = "left",
  className = "",
}) {
  const alignStyles =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const wrapperStyles = dark
    ? "bg-brand-green text-white"
    : "bg-transparent text-gray-900";

  return (
    <div className={`w-full py-12 px-6 ${wrapperStyles} ${className}`}>
      <div className={`flex flex-col gap-4 max-w-4xl mx-auto ${alignStyles}`}>
        {badge && (
          <div className={align === "center" ? "mx-auto" : ""}>{badge}</div>
        )}
        {title && <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>}
        {subtitle && (
          <p
            className={`text-base md:text-lg ${dark ? "text-white/80" : "text-gray-600"} ${align === "center" ? "max-w-2xl mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="w-full mt-2">{children}</div>}
      </div>
    </div>
  );
}
