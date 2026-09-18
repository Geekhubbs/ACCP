import { Landmark } from "lucide-react";
import Badge from "./Badge";

export default function BrandLock({ showBadge = false, size = "md" }) {
  const iconSize = size === "lg" ? 28 : 20;
  const titleSize = size === "lg" ? "text-lg" : "text-base";

  return (
    <div className="flex items-center gap-3">
      <div className="bg-brand-green text-white rounded-lg p-2 flex items-center justify-center">
        <Landmark size={iconSize} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-gray-900 ${titleSize}`}>
          Ashanti Civic
        </span>
        <span className="text-xs text-gray-500">Community Platform</span>
      </div>
      {showBadge && (
        <Badge variant="accent" className="ml-2">
          Ashanti Region, Ghana
        </Badge>
      )}
    </div>
  );
}
