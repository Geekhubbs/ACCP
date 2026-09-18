import { MapPin } from "lucide-react";

export default function MapPreview({
  image,
  pinLabel,
  coordinates,
  subLabel,
  height = "h-64",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden border border-gray-200 ${className}`}
    >
      <div className={`relative w-full ${height} bg-gray-100`}>
        {image && (
          <img
            src={image}
            alt={pinLabel || "Map preview"}
            className="w-full h-full object-cover"
          />
        )}

        {pinLabel && (
          <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow-sm px-3 py-2 flex items-center gap-2">
            <MapPin size={16} className="text-red-500 shrink-0" />
            <span className="text-sm font-medium text-gray-800">
              {pinLabel}
            </span>
          </div>
        )}
      </div>

      {(coordinates || subLabel) && (
        <div className="flex items-center justify-between px-4 py-2 bg-white text-xs text-gray-500">
          {coordinates && <span>{coordinates}</span>}
          {subLabel && <span>{subLabel}</span>}
        </div>
      )}
    </div>
  );
}
