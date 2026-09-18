export const categoryOptions = [
    { id: 'roads', iconName: 'Construction', label: 'Roads' },
    { id: 'water', iconName: 'Droplet', label: 'Water' },
    { id: 'electricity', iconName: 'Zap', label: 'Electricity' },
    { id: 'sanitation', iconName: 'Trash2', label: 'Sanitation' },
    { id: 'drainage', iconName: 'Waves', label: 'Drainage' },
    { id: 'other', iconName: 'MoreHorizontal', label: 'Other' },
];

export const severityOptions = [
    { id: 'low', label: 'Low', subtext: 'Minor defect', tone: 'default' },
    { id: 'medium', label: 'Medium', subtext: 'Disrupts traffic', tone: 'warning' },
    { id: 'urgent', label: 'Urgent', subtext: 'Immediate hazard', tone: 'danger' },
];

export const reportSteps = ['Details', 'Location', 'Submit'];