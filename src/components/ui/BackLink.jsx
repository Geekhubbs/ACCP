import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackLink({
  label = "Back to Home",
  to = "/",
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:underline ${className}`}
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
