import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  question,
  children,
  defaultOpen = false,
  isOpen: controlledOpen,
  onToggle,
  className = "",
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!open);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-gray-600 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
