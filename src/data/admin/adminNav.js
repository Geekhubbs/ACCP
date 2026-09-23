import {
  LayoutDashboard,
  Flag,
  Landmark,
  GitBranch,
  Users,
  Building2,
  Tag,
  Building,
  Lock,
  History,
  Settings,
} from "lucide-react";

export const adminNavPrimary = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Reports", to: "/admin/reports", icon: Flag },
  { label: "Government Officials", to: "/admin/officials", icon: Landmark },
  { label: "Routing Rules", to: "/admin/routing-rules", icon: GitBranch, regionalOnly: true },
  { label: "Users", to: "/admin/users", icon: Users },
  { label: "Districts / MMDAs", to: "/admin/districts", icon: Building2 },
  { label: "Categories", to: "/admin/categories", icon: Tag, regionalOnly: true },
];

export const adminNavGovernance = [
  { label: "Institutions", to: "/admin/institutions", icon: Building, regionalOnly: true },
  { label: "Permissions", to: "/admin/permissions", icon: Lock, regionalOnly: true },
  { label: "Audit Logs", to: "/admin/audit-logs", icon: History },
  { label: "Settings", to: "/admin/settings", icon: Settings, regionalOnly: true },
];