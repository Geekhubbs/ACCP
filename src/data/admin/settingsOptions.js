export const settingsTabs = [
    { id: "general", label: "General & Regional" },
    { id: "notifications", label: "Notification Gateways (SMS/USSD)" },
    { id: "thresholds", label: "Automated Routing Thresholds" },
    { id: "security", label: "Security & Compliance" },
];

export const telecomTrunkOptions = [
    { value: "telecel-mtn", label: "Telecel Ghana / MTN GovMesh" },
    { value: "mtn-only", label: "MTN Ghana Only" },
    { value: "airteltigo", label: "AirtelTigo Business" },
];

export const timezoneOptions = [
    { value: "gmt", label: "UTC (Greenwich Mean Time)" },
];

export const retentionOptions = [
    { value: "5y", label: "Retain resolved incident records for 5 Years" },
    { value: "7y", label: "Retain resolved incident records for 7 Years (Statutory Audit Standard)" },
    { value: "10y", label: "Retain resolved incident records for 10 Years" },
];