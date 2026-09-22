import { useMemo, useState } from "react";
import { ShieldCheck, Search, Pencil, Users as UsersIcon } from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import {
  mockRolePermissions,
  permissionModules,
  totalRoles,
} from "../../data/admin/permissions";

const ACCESS_VARIANT = {
  Full: "success",
  Edit: "info",
  View: "neutral",
  "Own Only": "accent",
  None: "neutral",
};

export default function Permissions() {
  const [search, setSearch] = useState("");
  const [roles] = useState(mockRolePermissions);

  const filtered = useMemo(() => {
    return roles.filter(
      (r) =>
        !search.trim() || r.role.toLowerCase().includes(search.toLowerCase()),
    );
  }, [roles, search]);

  const totalUsers = roles.reduce((sum, r) => sum + r.userCount, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Permissions</h1>
          <p className="text-sm text-slate-500">
            Role-based access control across all ACCP modules.
          </p>
        </div>
        <Button variant="primary" icon={ShieldCheck}>
          Create Role
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <MetricCard label="Total Roles" value={totalRoles} />
        <MetricCard label="Total Users" value={totalUsers.toLocaleString()} />
        <MetricCard label="Modules Governed" value={permissionModules.length} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5 max-w-sm">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
      </div>

      {filtered.map((role) => (
        <div
          key={role.role}
          className="rounded-xl border border-slate-200 bg-white p-4"
        >
          <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-slate-900">{role.role}</h2>
                <Badge variant={role.status === "Active" ? "success" : "neutral"} dot>
                  {role.status}
                </Badge>
              </div>
              <p className="text-sm text-slate-500 mt-1">{role.description}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <UsersIcon size={12} /> {role.userCount.toLocaleString()} users
              </p>
            </div>
            <button
              className="flex items-center gap-1 text-sm text-brand-green hover:underline"
              title="Edit role permissions"
            >
              <Pencil size={14} /> Edit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {permissionModules.map((mod) => (
              <div
                key={mod}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <p className="text-xs text-slate-500 mb-1">{mod}</p>
                <Badge variant={ACCESS_VARIANT[role.access[mod]] ?? "neutral"} size="sm">
                  {role.access[mod]}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-400">
          No roles match this search.
        </div>
      )}
    </div>
  );
}