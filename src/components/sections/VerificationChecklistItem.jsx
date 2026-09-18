import { CheckCircle2 } from "lucide-react";

export default function VerificationChecklistItem({
  children,
  className = "",
}) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <CheckCircle2 size={16} className="text-brand-green mt-0.5 shrink-0" />
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
}
