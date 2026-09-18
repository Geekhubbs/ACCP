import { Camera } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function EvidenceCard({
  image,
  overlayTag,
  verifiedLabel = "Verified Dispatch Photo",
  captionTitle,
  captionDescription,
  className = "",
}) {
  return (
    <Card className={className}>
      <SectionHeading
        icon={Camera}
        title="Field Evidence"
        trailing={<Badge variant="brand">{verifiedLabel}</Badge>}
      />

      <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4 bg-gray-100">
        {image && (
          <img
            src={image}
            alt={captionTitle || "Field evidence"}
            className="w-full h-full object-cover"
          />
        )}
        {overlayTag && (
          <div className="absolute top-3 left-3">
            <Badge variant="accent" size="md">
              {overlayTag}
            </Badge>
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="font-semibold text-gray-900 text-sm">{captionTitle}</p>
        <p className="text-sm text-gray-600 mt-0.5">{captionDescription}</p>
      </div>
    </Card>
  );
}
