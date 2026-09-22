export const permissionRoleOptions = [
  { value: "all", label: "All Roles" },
  { value: "Administrator", label: "Administrator" },
  { value: "Official", label: "Official" },
  { value: "Citizen", label: "Citizen" },
];

export const permissionModules = [
  "Dashboard",
  "Reports",
  "Government Officials",
  "Routing Rules",
  "Users",
  "Districts / MMDAs",
  "Categories",
  "Institutions",
  "Settings",
];

export const mockRolePermissions = [
  {
    role: "Administrator",
    description: "Full system access across all MMDAs and modules.",
    userCount: 4,
    access: {
      Dashboard: "Full",
      Reports: "Full",
      "Government Officials": "Full",
      "Routing Rules": "Full",
      Users: "Full",
      "Districts / MMDAs": "Full",
      Categories: "Full",
      Institutions: "Full",
      Settings: "Full",
    },
    status: "Active",
  },
  {
    role: "Official",
    description: "Jurisdiction-limited access to assigned district reports.",
    userCount: 43,
    access: {
      Dashboard: "View",
      Reports: "Edit",
      "Government Officials": "None",
      "Routing Rules": "View",
      Users: "None",
      "Districts / MMDAs": "View",
      Categories: "View",
      Institutions: "View",
      Settings: "None",
    },
    status: "Active",
  },
  {
    role: "Citizen",
    description: "Public-facing access to submit and track own reports.",
    userCount: 12480,
    access: {
      Dashboard: "None",
      Reports: "Own Only",
      "Government Officials": "None",
      "Routing Rules": "None",
      Users: "None",
      "Districts / MMDAs": "None",
      Categories: "None",
      Institutions: "None",
      Settings: "None",
    },
    status: "Active",
  },
];

export const totalRoles = mockRolePermissions.length;