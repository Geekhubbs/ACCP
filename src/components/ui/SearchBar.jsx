import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onSubmit,
  buttonLabel = "Search",
  buttonIcon: ButtonIcon = Search,
  leadingIcon: LeadingIcon = Search,
  buttonVariant = "primary",
  className = "",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const buttonStyles =
    buttonVariant === "accent"
      ? "bg-brand-orange text-white hover:bg-brand-orange/90"
      : "bg-brand-green text-white hover:bg-brand-green/90";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-stretch gap-3 bg-white rounded-xl p-2 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 flex-1 px-3">
        {LeadingIcon && (
          <LeadingIcon size={18} className="text-gray-400 shrink-0" />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
        />
      </div>
      <button
        type="submit"
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${buttonStyles}`}
      >
        <ButtonIcon size={16} />
        {buttonLabel}
      </button>
    </form>
  );
}
