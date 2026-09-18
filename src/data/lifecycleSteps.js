export const mockTicket = {
    ticketId: '#ACCP-GH-2026-4891',
    status: 'In Progress',
    assembly: 'Kumasi Metropolitan Assembly (KMA)',
    title: 'Severe Pothole Cluster & Road Degradation on Bantama High St',
    address: 'Bantama High Street, Near Cultural Centre Junction, Kumasi',
    stats: [
        { label: 'Logged', value: '24 Feb, 08:30 AM', subtext: '26h elapsed' },
        { label: 'SLA Target', value: '48 Hours', subtext: 'Within SLA', valueColor: 'text-brand-orange' },
        { label: 'Assigned Unit', value: 'KMA Road Unit 3', subtext: 'Lead: Eng. Boateng' },
        { label: 'Community Endorsements', value: '47 Residents', subtext: 'Bantama Sub-Metro' },
    ],
    lifecycle: [
        { title: '1. Submitted', detail: '24 Feb, 08:30 AM', state: 'done' },
        { title: '2. Triaged', detail: '24 Feb, 08:42 AM', state: 'done' },
        { title: '3. Assigned', detail: '24 Feb, 11:15 AM', state: 'done' },
        { title: '4. In Progress', detail: 'Resurfacing pass', state: 'current' },
        { title: '5. Verification', detail: 'Est. Today, 5:00 PM', state: 'pending' },
    ],
    evidence: {
        overlayTag: 'Field Execution',
        captionTitle: 'KMA Road Unit 3 • Bitumen Resurfacing',
        captionDescription: 'Compaction pass applied with vibratory roller near Cultural Centre corridor.',
    },
    location: {
        pinLabel: 'Bantam High St @ Cultural Centre',
        coordinates: `GPS: 6°42'12.4"N 1°37'58.8"W`,
        subLabel: 'Sub-Metro Council: Bantama',
    },
};