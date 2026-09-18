export const heroStats = [
    { value: '14,820', label: 'Reports Resolved', subtext: 'Verified citizen issues' },
    { value: '92%', label: 'MMDA Routing', subtext: 'Under 4 hours dispatch', valueColor: 'text-brand-orange' },
    { value: '3.4', unit: 'Days', label: 'Avg. Response Time', subtext: 'Initial field action' },
    { value: '43', unit: '/ 43', label: 'Districts Connected', subtext: 'All Ashanti MMDAs' },
];

export const trustBadges = [
    { iconName: 'ShieldCheck', label: 'Anonymous Option' },
    { iconName: 'Zap', label: 'Direct MMDA Dispatch' },
    { iconName: 'MessageCircle', label: 'Free SMS Updates' },
];

export const workflowSteps = [
    {
        iconName: 'Camera',
        step: 'Step 01',
        title: 'Snap & Submit',
        description: 'Capture a photo, pick the issue category, and add a brief description.',
    },
    {
        iconName: 'MapPin',
        step: 'Step 02',
        title: 'Pin Location',
        description: 'Set precise GPS coordinates or select your district municipal assembly.',
    },
    {
        iconName: 'Users',
        step: 'Step 03',
        title: 'Direct Dispatch',
        description: 'The ticket routes immediately to authorized municipal field engineers.',
    },
    {
        iconName: 'LogOut',
        step: 'Step 04',
        title: 'Verified Fix',
        description: 'Receive instant SMS updates and review verified photo proof upon resolution.',
    },
];

export const trustFeatures = [
    {
        iconName: 'ShieldCheck',
        title: 'Citizen Privacy Guaranteed',
        description: 'Report safely and anonymously under the Ghana Data Protection Act.',
    },
    {
        iconName: 'ClipboardCheck',
        title: 'Independent Oversight',
        description: 'Quality checked by regional coordination teams with strict response SLAs.',
    },
    {
        iconName: 'FileCheck',
        title: 'Photographic Proof of Work',
        description: 'All completed repairs require photographic evidence before closure.',
    },
];

export const liveTicketPreview = {
    ticketId: 'ACCP-2025-08412',
    location: 'Bantama, Kumasi',
    status: 'In Progress',
    title: 'Culvert Desilting & Drainage Fix',
    subtitle: 'Bantama High Street • Direct assignment to KMA Works Department',
    imageLeftTag: 'KMA Works Dept',
    imageRightTag: 'Assigned to field unit',
};