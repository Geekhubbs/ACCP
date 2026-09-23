import { NavLink } from "react-router-dom";
import { Landmark, LogOut, HelpCircle } from "lucide-react";
import { adminNavPrimary, adminNavGovernance } from "../../data/admin/adminNav";
import { useSession } from "../../context/SessionContext";
import { isRegional } from "../../lib/scope";

function NavGroup({ items }) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-brand-green text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <Icon size={18} strokeWidth={1.75} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function AdminSidebar() {
  const { user } = useSession();
  const regional = isRegional(user);

  const visiblePrimary = adminNavPrimary.filter(
    (item) => !item.regionalOnly || regional,
  );
  const visibleGovernance = adminNavGovernance.filter(
    (item) => !item.regionalOnly || regional,
  );

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-5">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green text-white">
          <Landmark size={18} />
        </div>
        <div>
          <p className="text-sm font-bold leading-tight text-slate-900">
            Ashanti Civic
          </p>
          <p className="text-[11px] uppercase tracking-wide text-slate-400">
            Admin Portal
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-xs font-semibold text-white">
          {user.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">
            {user.name}
          </p>
          <p className="text-xs text-slate-500 truncate">{user.role}</p>
        </div>
      </div>

      {!regional && (
        <div className="mb-4 rounded-lg bg-brand-green/5 border border-brand-green/20 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-green">
            Jurisdiction
          </p>
          <p className="text-xs font-medium text-slate-700 truncate">
            {user.jurisdictionName}
          </p>
        </div>
      )}

      <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        Navigation
      </p>
      <NavGroup items={visiblePrimary} />

      <p className="mb-2 mt-6 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        Governance & Controls
      </p>
      <NavGroup items={visibleGovernance} />

      <div className="mt-auto flex flex-col gap-1 pt-4">
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
          <HelpCircle size={18} strokeWidth={1.75} />
          Help & Docs
        </button>
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-rose-600 hover:bg-rose-50">
          <LogOut size={18} strokeWidth={1.75} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
