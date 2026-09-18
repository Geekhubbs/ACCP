import { CheckCircle2, XCircle } from "lucide-react";
import Card from "../ui/Card";

function ChecklistItem({ tone, lead, description }) {
  const Icon = tone === "do" ? CheckCircle2 : XCircle;
  const iconColor = tone === "do" ? "text-green-600" : "text-red-600";

  return (
    <div className="flex items-start gap-2">
      <Icon size={18} className={`mt-0.5 shrink-0 ${iconColor}`} />
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-900">{lead}: </span>
        {description}
      </p>
    </div>
  );
}

export default function ChecklistCard({
  tone = "do",
  title,
  items,
  className = "",
}) {
  const HeaderIcon = tone === "do" ? CheckCircle2 : XCircle;
  const headerColor = tone === "do" ? "text-green-600" : "text-red-600";

  return (
    <Card className={className}>
      <div className="flex items-center gap-2 mb-4">
        <HeaderIcon size={20} className={headerColor} />
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <ChecklistItem
            key={item.lead}
            tone={tone}
            lead={item.lead}
            description={item.description}
          />
        ))}
      </div>
    </Card>
  );
}
