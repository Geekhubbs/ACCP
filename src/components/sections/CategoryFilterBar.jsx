import Badge from "../ui/Badge";

export default function CategoryFilterBar({
  categories,
  activeCategory,
  onSelect,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect?.(category.id)}
          >
            <Badge
              variant={isActive ? "brand" : "neutral"}
              size="md"
              className={
                isActive
                  ? "bg-brand-green text-white"
                  : "cursor-pointer hover:bg-gray-200"
              }
            >
              {category.label}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
