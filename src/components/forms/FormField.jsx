import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FormField({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  showToggle = false,
  className = "",
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  const inputType =
    isPassword && showToggle ? (visible ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 text-gray-400 pointer-events-none"
          />
        )}
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full border border-gray-200 rounded-lg text-sm text-gray-700
            placeholder:text-gray-400 outline-none focus:border-brand-green
            py-2.5 ${Icon ? "pl-10" : "pl-3"} ${isPassword && showToggle ? "pr-10" : "pr-3"}
          `}
          {...props}
        />
        {isPassword && showToggle && (
          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            className="absolute right-3 text-gray-400"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
