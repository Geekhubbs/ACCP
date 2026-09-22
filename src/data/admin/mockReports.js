export const reportCategories = [
    { id: "all", label: "All Categories" },
    { id: "roads", label: "Roads & Transport" },
    { id: "sanitation", label: "Sanitation & Waste" },
    { id: "water", label: "Water & Utilities" },
    { id: "drainage", label: "Drainage & Culverts" },
    { id: "electricity", label: "Electricity & Lighting" },
    { id: "health", label: "Health & Education" },
];

export const reportStatusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "Pending", label: "Pending" },
    { value: "Assigned", label: "Assigned" },
    { value: "In Progress", label: "In Progress" },
    { value: "Resolved", label: "Resolved" },
    { value: "Under Review", label: "Under Review" },
];

export const reportPriorityOptions = [
    { value: "all", label: "All Priorities" },
    { value: "emergency", label: "Emergency" },
    { value: "high", label: "High" },
    { value: "moderate", label: "Moderate" },
    { value: "low", label: "Low" },
];

// tone values line up with SeverityBadge's TONES map: emergency | high | moderate | low
export const mockReports = [
    { id: "ACCP-2026-9142", title: "Pothole Cluster – Bantama High St", category: "roads", district: "Kumasi Metropolitan Assembly", priority: "high", status: "In Progress", submitted: "18 Sep 2026", sla: "48 Hours", unit: "KMA Roads Dept" },
    { id: "ACCP-2026-9141", title: "Overflowing Drain – Asafo Market", category: "drainage", district: "Kumasi Metropolitan Assembly", priority: "emergency", status: "Assigned", submitted: "18 Sep 2026", sla: "6 Hours", unit: "KMA Works Dept" },
    { id: "ACCP-2026-9138", title: "Broken Streetlight – Suame Roundabout", category: "electricity", district: "Suame Municipal Assembly", priority: "moderate", status: "Pending", submitted: "17 Sep 2026", sla: "72 Hours", unit: "Unassigned" },
    { id: "ACCP-2026-9130", title: "Uncollected Refuse – Kejetia Perimeter", category: "sanitation", district: "Kumasi Metropolitan Assembly", priority: "emergency", status: "Resolved", submitted: "16 Sep 2026", sla: "6 Hours", unit: "Waste Management Dept" },
    { id: "ACCP-2026-9127", title: "Burst Pipe – Tanoso Junction", category: "water", district: "Kwadaso Municipal Assembly", priority: "high", status: "In Progress", submitted: "16 Sep 2026", sla: "12 Hours", unit: "GWCL Rapid Response" },
    { id: "ACCP-2026-9121", title: "Clinic Roof Leak – Oforikrom Health Post", category: "health", district: "Oforikrom Municipal Assembly", priority: "moderate", status: "Under Review", submitted: "15 Sep 2026", sla: "72 Hours", unit: "Assembly Works" },
    { id: "ACCP-2026-9119", title: "Collapsed Culvert – Bekwai Feeder Rd", category: "drainage", district: "Bekwai Municipal Assembly", priority: "high", status: "Assigned", submitted: "15 Sep 2026", sla: "24 Hours", unit: "Bekwai Works Dept" },
    { id: "ACCP-2026-9114", title: "Illegal Dumping – Asokwa Estates", category: "sanitation", district: "Asokwa Municipal Assembly", priority: "low", status: "Pending", submitted: "14 Sep 2026", sla: "72 Hours", unit: "Unassigned" },
    { id: "ACCP-2026-9108", title: "Dark Corridor – Ejisu Market Rd", category: "electricity", district: "Ejisu Municipal Assembly", priority: "moderate", status: "In Progress", submitted: "13 Sep 2026", sla: "72 Hours", unit: "ECG / Assembly Joint Works" },
    { id: "ACCP-2026-9103", title: "Water Supply Outage – Mampong Zongo", category: "water", district: "Mampong Municipal Assembly", priority: "high", status: "Resolved", submitted: "12 Sep 2026", sla: "12 Hours", unit: "GWCL Rapid Response" },
    { id: "ACCP-2026-9098", title: "Road Erosion – Obuasi Mining Rd", category: "roads", district: "Obuasi Municipal Assembly", priority: "emergency", status: "In Progress", submitted: "12 Sep 2026", sla: "6 Hours", unit: "Obuasi Works Dept" },
    { id: "ACCP-2026-9091", title: "Sanitation Backlog – Old Tafo Market", category: "sanitation", district: "Old Tafo Municipal Assembly", priority: "moderate", status: "Assigned", submitted: "11 Sep 2026", sla: "48 Hours", unit: "Waste Management Dept" },
    { id: "ACCP-2026-9085", title: "Flooded Culvert – Kwabre East", category: "drainage", district: "Kwabre East Municipal Assembly", priority: "low", status: "Resolved", submitted: "10 Sep 2026", sla: "72 Hours", unit: "Assembly Works" },
    { id: "ACCP-2026-9080", title: "Damaged Transformer – Offinso Central", category: "electricity", district: "Offinso Municipal Assembly", priority: "high", status: "Pending", submitted: "10 Sep 2026", sla: "24 Hours", unit: "Unassigned" },
    { id: "ACCP-2026-9074", title: "Deep Pothole – Juaben-Ejisu Rd", category: "roads", district: "Juaben Municipal Assembly", priority: "moderate", status: "In Progress", submitted: "09 Sep 2026", sla: "48 Hours", unit: "Urban Roads Dept" },
    { id: "ACCP-2026-9070", title: "Clinic Water Shortage – Bosomtwe", category: "health", district: "Bosomtwe District Assembly", priority: "high", status: "Under Review", submitted: "08 Sep 2026", sla: "24 Hours", unit: "District Health Directorate" },
    { id: "ACCP-2026-9065", title: "Broken Guardrail – Ejura Bypass", category: "roads", district: "Ejura Sekyedumasi Municipal Assembly", priority: "low", status: "Pending", submitted: "07 Sep 2026", sla: "72 Hours", unit: "Unassigned" },
    { id: "ACCP-2026-9059", title: "Choked Gutter – Atwima Nwabiagya Mkt", category: "drainage", district: "Atwima Nwabiagya Municipal Assembly", priority: "moderate", status: "Resolved", submitted: "06 Sep 2026", sla: "48 Hours", unit: "Assembly Works" },
    { id: "ACCP-2026-9052", title: "Streetlight Outage – Asokore Mampong", category: "electricity", district: "Asokore Mampong Municipal Assembly", priority: "low", status: "Assigned", submitted: "05 Sep 2026", sla: "72 Hours", unit: "ECG Joint Works" },
    { id: "ACCP-2026-9047", title: "Contaminated Well – Amansie West", category: "water", district: "Amansie West District Assembly", priority: "emergency", status: "In Progress", submitted: "04 Sep 2026", sla: "6 Hours", unit: "GWCL Rapid Response" },
];