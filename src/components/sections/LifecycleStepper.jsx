import { Check, User, Clock } from "lucide-react";

const STATE_STYLES = {
  done: {
    icon: Check,
    iconWrap: "bg-brand-green text-white",
    card: "bg-brand-green/5 border-brand-green/20",
    label: "text-gray-900",
  },
  current: {
    icon: User,
    iconWrap: "bg-brand-orange text-white",
    card: "bg-brand-orange/5 border-brand-orange/30",
    label: "text-gray-900",
  },
  pending: {
    icon: Clock,
    iconWrap: "bg-gray-200 text-gray-400",
    card: "bg-gray-50 border-gray-200",
    label: "text-gray-400",
  },
};

function LifecycleStep({ step }) {
  const { icon: Icon, iconWrap, card, label } = STATE_STYLES[step.state];

  return (
    <div
      className={`flex-1 min-w-[140px] rounded-lg border p-3 flex flex-col gap-2 ${card}`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${iconWrap}`}
        >
          <Icon size={14} />
        </div>
        <span className={`text-sm font-semibold ${label}`}>{step.title}</span>
      </div>
      <span className="text-xs text-gray-500">{step.detail}</span>
    </div>
  );
}

export default function LifecycleStepper({ steps, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h3 className="font-bold text-gray-900 flex items-center gap-2">
        Resolution Lifecycle
      </h3>
      <div className="flex flex-col md:flex-row gap-3">
        {steps.map((step) => (
          <LifecycleStep key={step.title} step={step} />
        ))}
      </div>
    </div>
  );
}
