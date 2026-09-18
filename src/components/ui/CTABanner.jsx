import Badge from "./Badge";

export default function CTABanner({
  badgeIcon: BadgeIcon,
  badgeLabel,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className = "",
}) {
  return (
    <div
      className={`bg-brand-green rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 ${className}`}
    >
      <div className="flex flex-col gap-3 max-w-xl">
        {badgeLabel && (
          <Badge
            variant="accent"
            size="md"
            className="w-fit bg-white/10 text-brand-orange"
          >
            {BadgeIcon && <BadgeIcon size={12} className="mr-1" />}
            {badgeLabel}
          </Badge>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        {subtitle && (
          <p className="text-white/70 text-sm md:text-base">{subtitle}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
        {primaryAction}
        {secondaryAction}
      </div>
    </div>
  );
}
