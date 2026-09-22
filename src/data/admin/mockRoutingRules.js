// icon keys map to lucide-react icons imported directly in RoutingRules.jsx
export const routingCategoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "drainage", label: "Drainage & Culverts" },
    { value: "roads", label: "Roads & Pavements" },
    { value: "sanitation", label: "Sanitation & Waste" },
    { value: "lighting", label: "Street Lighting & Power" },
    { value: "water", label: "Water & Utilities" },
    { value: "environment", label: "Environmental Health" },
];

export const routingPriorityOptions = [
    { value: "all", label: "All Priorities" },
    { value: "emergency", label: "Emergency" },
    { value: "high", label: "High" },
    { value: "moderate", label: "Moderate" },
    { value: "low", label: "Low" },
];

export const routingStatusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "Active", label: "Active" },
    { value: "Paused", label: "Paused" },
];

// Total production rule count shown in the footer — only a sample lives in the array below
export const totalRoutingRules = 128;

export const routingRules = [
    { id: "RR-0104", category: "drainage", label: "Drainage & Culverts", area: "Kumasi Metro (KMA)", subArea: "Bantama, Subin Sub-Metros", institution: "KMA Works Department", unit: "Culvert & Stormwater Team", priority: "high", sla: "24 Hours", status: "Active" },
    { id: "RR-0089", category: "roads", label: "Roads & Pavements", area: "Asokwa Municipal", subArea: "Ahinsan, Kaase Industrial", institution: "Dept. of Urban Roads (DUR)", unit: "Asphalt Patching Unit 2", priority: "high", sla: "48 Hours", status: "Active" },
    { id: "RR-0142", category: "sanitation", label: "Sanitation & Waste", area: "Kumasi Metro (KMA)", subArea: "Kejetia, Central Market Hub", institution: "Waste Management Department", unit: "Rapid Refuse Evacuation Squad", priority: "emergency", sla: "6 Hours", status: "Active" },
    { id: "RR-0077", category: "lighting", label: "Street Lighting & Power", area: "Suame Municipal", subArea: "Suame Magazine Clusters", institution: "ECG / MMDA Joint Works", unit: "Streetlight Maintenance Crew", priority: "moderate", sla: "72 Hours", status: "Active" },
    { id: "RR-0056", category: "water", label: "Water & Utilities", area: "Kwadaso Municipal", subArea: "Tanoso, Denkyemuoso", institution: "Ghana Water Company Ltd (GWCL)", unit: "Pipe Burst Rapid Response", priority: "high", sla: "12 Hours", status: "Active" },
    { id: "RR-0120", category: "environment", label: "Environmental Health", area: "Oforikrom Municipal", subArea: "Anloga, KNUST Buffer Zone", institution: "EPA Ghana / Assembly", unit: "Industrial Effluent Inspection", priority: "moderate", sla: "48 Hours", status: "Active" },
    { id: "RR-0063", category: "roads", label: "Roads & Pavements", area: "Ejisu Municipal", subArea: "Ejisu Market Road", institution: "Dept. of Urban Roads (DUR)", unit: "Asphalt Patching Unit 4", priority: "low", sla: "96 Hours", status: "Paused" },
    { id: "RR-0098", category: "drainage", label: "Drainage & Culverts", area: "Bekwai Municipal", subArea: "Bekwai Feeder Roads", institution: "Bekwai Works Department", unit: "Culvert Desilting Team", priority: "high", sla: "24 Hours", status: "Active" },
    { id: "RR-0031", category: "sanitation", label: "Sanitation & Waste", area: "Old Tafo Municipal", subArea: "Old Tafo Market", institution: "Waste Management Department", unit: "Zonal Collection Crew", priority: "moderate", sla: "48 Hours", status: "Active" },
    { id: "RR-0110", category: "lighting", label: "Street Lighting & Power", area: "Asokore Mampong Municipal", subArea: "Sepetinpom Corridor", institution: "ECG / MMDA Joint Works", unit: "Streetlight Maintenance Crew", priority: "low", sla: "72 Hours", status: "Active" },
    { id: "RR-0045", category: "water", label: "Water & Utilities", area: "Obuasi Municipal", subArea: "Mining District Zone", institution: "Ghana Water Company Ltd (GWCL)", unit: "Pipe Burst Rapid Response", priority: "emergency", sla: "6 Hours", status: "Active" },
    { id: "RR-0018", category: "roads", label: "Roads & Pavements", area: "Mampong Municipal", subArea: "Mampong-Kumasi Highway", institution: "Dept. of Urban Roads (DUR)", unit: "Regional Grading Unit", priority: "moderate", sla: "48 Hours", status: "Paused" },
];