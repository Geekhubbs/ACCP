export const kpiStats = [
  { label: "Total Users", value: "142,850", delta: "+12% this month" },
  { label: "Gov Officials", value: "384", delta: "Across 43 MMDAs" },
  { label: "Total Reports", value: "14,820", delta: "Cumulative verified" },
  { label: "Active Districts", value: "43 / 43", delta: "100% connected" },
  { label: "Pending Triage", value: "342", delta: "Awaiting dispatch" },
  { label: "Resolved Reports", value: "12,680", delta: "85.6% resolution rate" },
];

export const priorityQueues = [
  { label: "Emergency", count: 38, tone: "emergency", note: "Immediate dispatch routed to NADMO & Municipal Works engineer units." },
  { label: "High Priority", count: 142, tone: "high", note: "Under strict 24-hour SLA containment window." },
  { label: "Moderate", count: 410, tone: "moderate", note: "Managed within the 72-hour regional response protocols." },
  { label: "Low Priority", count: 620, tone: "low", note: "Scheduled during routine MMDA maintenance cycles." },
];

export const categoryBreakdown = [
  { label: "Roads & Transport", value: 3410, pct: 23.0 },
  { label: "Sanitation & Waste", value: 2980, pct: 20.0 },
  { label: "Water & Utilities", value: 2450, pct: 16.5 },
  { label: "Drainage & Culverts", value: 2120, pct: 14.3 },
  { label: "Electricity & Lighting", value: 1840, pct: 12.4 },
  { label: "Health & Education", value: 1150, pct: 7.8 },
];

export const districtPerformance = [
  { code: "KMA", name: "Kumasi Metropolitan Assembly", total: 4210, pending: 84, inProgress: 312, resolved: 3814, sla: 94.2 },
  { code: "ASK", name: "Asokwa Municipal Assembly", total: 1640, pending: 32, inProgress: 118, resolved: 1490, sla: 92.8 },
  { code: "SUA", name: "Suame Municipal Assembly", total: 1420, pending: 28, inProgress: 94, resolved: 1298, sla: 91.5 },
  { code: "KWD", name: "Kwadaso Municipal Assembly", total: 1180, pending: 19, inProgress: 76, resolved: 1085, sla: 93.4 },
  { code: "OFR", name: "Oforikrom Municipal Assembly", total: 1350, pending: 25, inProgress: 89, resolved: 1236, sla: 90.1 },
  { code: "OBU", name: "Obuasi Municipal Assembly", total: 980, pending: 14, inProgress: 52, resolved: 914, sla: 95.0 },
];

export const auditStream = [
  { title: "Official account created", detail: "Ing. Kwabena Mensah (KMA Roads Dept) provisioned by Kwame Boateng.", time: "14 mins ago", meta: "ARCC Security" },
  { title: "Routing rule modified", detail: "Rule #RR-084 [Drainage / Bantama → KMA Works Unit] priority escalated to HIGH.", time: "1 hour ago", meta: "Auto-Rule Trigger", tag: "ESCALATED" },
  { title: "User role promoted", detail: "Kofi Annan promoted to MMDA Lead Inspector (Asokwa Municipal).", time: "3 hours ago", meta: "Role Governance" },
  { title: "District gateway synchronized", detail: "Sekyere South MMDA successfully verified and connected to regional emergency gateway.", time: "5 hours ago", meta: "Mesh Infra" },
];