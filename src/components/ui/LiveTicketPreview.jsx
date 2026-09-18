import Card from "./Card";
import Badge from "./Badge";

export default function LiveTicketPreview({
  ticketId,
  location,
  status,
  title,
  subtitle,
  image,
  imageLeftTag,
  imageRightTag,
  className = "",
}) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">{ticketId}</span>
          <span className="text-gray-400">{location}</span>
        </div>
        <Badge variant="warning" dot>
          {status}
        </Badge>
      </div>

      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}

      <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4 bg-gray-100">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        {imageLeftTag && (
          <div className="absolute bottom-3 left-3">
            <Badge
              variant="brand"
              size="md"
              className="bg-brand-green text-white"
            >
              {imageLeftTag}
            </Badge>
          </div>
        )}
        {imageRightTag && (
          <div className="absolute bottom-3 right-3">
            <Badge variant="neutral" size="md" className="bg-white/90">
              {imageRightTag}
            </Badge>
          </div>
        )}
      </div>
    </Card>
  );
}
