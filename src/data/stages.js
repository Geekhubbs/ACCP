export const stages = [
    {
        number: '01',
        title: 'Capture & Photo Document',
        description:
            'Take clear photos of the issue and add a descriptive landmark note so municipal field teams can locate it easily.',
        mediaType: 'image',
        mediaSrc: 'capture-photo.jpg',
    },
    {
        number: '02',
        title: 'Pin Location & MMDA Routing',
        description:
            'GPS automatically identifies your location and routes the ticket to your municipal assembly (such as KMA, Asokwa, or Kwadaso).',
        mediaType: 'map',
        mediaSrc: 'pin-location-map.jpg',
        mediaProps: { pinLabel: 'GPS Verified' },
    },
    {
        number: '03',
        title: 'Triage & Work Assignment',
        description:
            'Duplicate reports are merged and assigned directly to the responsible engineering or sanitation department.',
        mediaType: 'callout',
        mediaProps: {
            label: 'Statutory Triage',
            description: 'Categorized and dispatched to designated MMDA teams',
            tone: 'brand',
        },
    },
    {
        number: '04',
        title: 'Field Inspection & Crew Dispatch',
        description:
            'Designated municipal work crews inspect the site and execute necessary physical repairs.',
        mediaType: 'image',
        mediaSrc: 'field-inspection.jpg',
    },
    {
        number: '05',
        title: 'Photo Proof & Citizen Sign-Off',
        description:
            'The MMDA uploads completed photo evidence, giving you 48 hours to verify the repair or submit a follow-up.',
        mediaType: 'image',
        mediaSrc: 'signoff-photo.jpg',
        numberVariant: 'accent',
    },
];