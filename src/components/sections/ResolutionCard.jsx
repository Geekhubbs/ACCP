import { Clock } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ResolutionCard({
  image,
  ticketId,
  location,
  title,
  description,
  fixedTime,
  inspector,
  onViewCertificate,
  className = "",
}) {
  return (
    <Card className={`overflow-hidden flex flex-col ${className}`}>
      <div className="relative w-full h-40 bg-gray-100">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="success" size="md" dot>
            Resolved
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant="neutral" size="md" className="bg-white/90">
            {ticketId}
          </Badge>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {location}
        </span>
        <h4 className="text-base font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            Fixed in {fixedTime}
          </span>
          <span>{inspector}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          fullWidth
          className="mt-2"
          onClick={onViewCertificate}
        >
          View Inspection Certificate & Photos →
        </Button>
      </div>
    </Card>
  );
}
