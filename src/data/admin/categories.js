export const categoryStatusOptions = [
  { value: "all", label: "All Status" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export const mockCategories = [
  {
    id: "drainage",
    name: "Drainage & Flooding",
    defaultInstitution: "Works Department",
    totalReports: 412,
    activeReports: 34,
    status: "Active",
    lastUpdated: "2026-09-10",
  },
  {
    id: "roads",
    name: "Roads & Potholes",
    defaultInstitution: "Department of Urban Roads",
    totalReports: 780,
    activeReports: 61,
    status: "Active",
    lastUpdated: "2026-09-18",
  },
  {
    id: "sanitation",
    name: "Waste & Sanitation",
    defaultInstitution: "Waste Management Dept",
    totalReports: 588,
    activeReports: 29,
    status: "Active",
    lastUpdated: "2026-09-15",
  },
  {
    id: "lighting",
    name: "Streetlights",
    defaultInstitution: "Electricity Company of Ghana",
    totalReports: 246,
    activeReports: 12,
    status: "Active",
    lastUpdated: "2026-09-12",
  },
  {
    id: "water",
    name: "Water & Utilities",
    defaultInstitution: "Ghana Water Company",
    totalReports: 331,
    activeReports: 18,
    status: "Active",
    lastUpdated: "2026-09-09",
  },
  {
    id: "environment",
    name: "Environment & Green Spaces",
    defaultInstitution: "Parks & Gardens Unit",
    totalReports: 97,
    activeReports: 4,
    status: "Inactive",
    lastUpdated: "2026-08-30",
  },
];

export const totalCategories = mockCategories.length;