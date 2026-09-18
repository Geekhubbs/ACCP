import { Link } from "react-router-dom";

export default function NavLink({
  label,
  to = "#",
  active = false,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`
        text-sm font-medium px-4 py-2 rounded-lg transition-colors
        ${active ? "bg-brand-green text-white" : "text-gray-700 hover:text-brand-green"}
        ${className}
      `}
    >
      {label}
    </Link>
  );
}
