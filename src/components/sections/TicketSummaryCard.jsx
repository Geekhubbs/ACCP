import { MapPin, Camera, Share2 } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import StatBlock from "../ui/StatBlock";

export default function TicketSummaryCard({
  ticketId,
  status,
  assembly,
  title,
  address,
  stats,
  onAddEvidence,
  onShare,
  className = "",
}) {
  return (
    <Card className={className}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="brand">{ticketId}</Badge>
            <Badge variant="info" dot>
              {status}
            </Badge>
            <span className="text-sm text-gray-500">{assembly}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin size={14} />
            {address}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            icon={Camera}
            size="sm"
            onClick={onAddEvidence}
          >
            Add Evidence
          </Button>
          <Button variant="outline" icon={Share2} size="sm" onClick={onShare} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
        {stats.map((stat) => (
          <StatBlock key={stat.label} {...stat} />
        ))}
      </div>
    </Card>
  );
}
