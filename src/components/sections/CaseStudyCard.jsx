import { ChevronRight } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import VerificationChecklistItem from "./VerificationChecklistItem";

export default function CaseStudyCard({
  eyebrow,
  title,
  ticketId,
  location,
  certifiedLabel,
  image,
  imageTag,
  resolvedTag,
  categoryTag,
  subMetroTag,
  heading,
  description,
  verificationItems,
  auditLinkLabel = "View Full Audit Chain & Logs",
  archivedLabel,
  className = "",
}) {
  return (
    <Card className={`p-6 flex flex-col gap-5 ${className}`}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
            {eyebrow}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">
            Ticket #{ticketId} • {location}
          </p>
        </div>
        {certifiedLabel && (
          <Badge variant="success" size="md">
            {certifiedLabel}
          </Badge>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100">
          {image && (
            <img
              src={image}
              alt={heading}
              className="w-full h-full object-cover"
            />
          )}
          {imageTag && (
            <div className="absolute top-3 left-3">
              <Badge
                variant="brand"
                size="md"
                className="bg-brand-green text-white"
              >
                {imageTag}
              </Badge>
            </div>
          )}
          {resolvedTag && (
            <div className="absolute bottom-3 right-3">
              <Badge variant="neutral" size="md" className="bg-white/90">
                {resolvedTag}
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap text-sm">
            {categoryTag && <Badge variant="brand">{categoryTag}</Badge>}
            {subMetroTag && (
              <span className="text-gray-400">{subMetroTag}</span>
            )}
          </div>

          <h4 className="text-lg font-bold text-gray-900">{heading}</h4>
          <p className="text-sm text-gray-600">{description}</p>

          <div className="flex flex-col gap-2 mt-2">
            {verificationItems.map((item) => (
              <VerificationChecklistItem key={item}>
                {item}
              </VerificationChecklistItem>
            ))}
          </div>

          <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
            <button className="text-sm font-semibold text-brand-green flex items-center gap-1 hover:underline">
              {auditLinkLabel}
              <ChevronRight size={14} />
            </button>
            {archivedLabel && (
              <span className="text-xs text-gray-400">{archivedLabel}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
