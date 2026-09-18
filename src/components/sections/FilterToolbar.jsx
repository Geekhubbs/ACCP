import { Search, SlidersHorizontal } from "lucide-react";
import Select from "../ui/Select";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function FilterToolbar({
  searchValue,
  onSearchChange,
  districtOptions,
  district,
  onDistrictChange,
  dateOptions,
  dateFilter,
  onDateFilterChange,
  resultCount,
  categories,
  activeCategory,
  onCategorySelect,
  className = "",
}) {
  return (
    <Card className={`p-5 flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search ticket ID, community, street..."
            className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
          />
        </div>

        <Select
          value={district}
          onChange={onDistrictChange}
          options={districtOptions}
        />
        <Select
          value={dateFilter}
          onChange={onDateFilterChange}
          options={dateOptions}
        />

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 whitespace-nowrap hover:bg-gray-50"
        >
          <SlidersHorizontal size={16} />
          Filter ({resultCount.toLocaleString()})
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-500 mr-1">Category:</span>
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategorySelect?.(category.id)}
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
    </Card>
  );
}
