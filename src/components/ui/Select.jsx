import { ChevronDown } from "lucide-react";

export default function Select({ options, value, onChange, className = "" }) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="appearance-none bg-white border border-gray-200 rounded-lg text-sm text-gray-700 pl-4 pr-9 py-2.5 outline-none focus:border-brand-green cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-3 text-gray-400 pointer-events-none"
      />
    </div>
  );
}
