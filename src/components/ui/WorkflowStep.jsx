import Card from "./Card";

export default function WorkflowStep({
  icon: Icon,
  step,
  title,
  description,
  className = "",
}) {
  return (
    <Card className={className}>
      <div className="flex flex-col gap-3 p-5">
        <div className="h-10 w-10 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center">
          {Icon && <Icon size={18} />}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {step}
        </span>
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Card>
  );
}
