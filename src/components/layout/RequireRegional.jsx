import { Lock } from "lucide-react";
import { useSession } from "../../context/SessionContext";
import { isRegional } from "../../lib/scope";

export default function RequireRegional({ children, pageName = "This page" }) {
  const { user } = useSession();

  if (isRegional(user)) return children;

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
      <div className="h-12 w-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
        <Lock size={20} />
      </div>
      <p className="font-semibold text-slate-800">Regional Access Only</p>
      <p className="text-sm text-slate-500 max-w-sm">
        {pageName} is configured at the regional level by the Ashanti Regional
        Coordinating Council. Your account ({user.role} —{" "}
        {user.jurisdictionName}) has view access to your own MMDA's operational
        data only.
      </p>
    </div>
  );
}
