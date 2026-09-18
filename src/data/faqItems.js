import { Upload, Clock, ShieldCheck } from 'lucide-react';

export const faqCategories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'submissions', label: 'Submissions & Reporting' },
    { id: 'sla', label: 'SLA & Timelines' },
    { id: 'tracking', label: 'Tracking & Verification' },
];

export const faqSections = [
    {
        id: 'submissions',
        icon: Upload,
        title: 'Submissions & Reporting',
        items: [
            {
                id: 'sub-1',
                question: 'How does a citizen submit a problem report?',
                answer:
                    'Citizens visit the "Report a Problem" page, fill in the location, category, and description, then attach photos before submitting.',
            },
            {
                id: 'sub-2',
                question: 'Can I submit a report without giving my name (anonymously)?',
                answer:
                    'Yes, anonymous submissions are supported. Your identity will not be shown publicly, though some verification may still be required.',
            },
            {
                id: 'sub-3',
                question: 'What kinds of community issues can be reported?',
                answer:
                    'Sanitation, road conditions, water supply, electricity outages, environmental concerns, and other community infrastructure problems.',
            },
            {
                id: 'sub-4',
                question: 'What should NOT be submitted through ACCP?',
                answer:
                    'Personal disputes, defamatory claims, tenancy or rent issues, and emergencies requiring an immediate police or ambulance response.',
            },
        ],
    },
    {
        id: 'sla',
        icon: Clock,
        title: 'Response Times & Statutory Process',
        items: [
            {
                id: 'sla-1',
                question: 'How long does it take for an MMDA to respond?',
                answer:
                    'Response times vary by issue category and severity, but most reports have a defined SLA target (e.g. 48 hours) shown on the ticket.',
            },
            {
                id: 'sla-2',
                question: 'What happens if an issue is not fixed within the SLA deadline?',
                answer:
                    'The ticket is automatically escalated within the assembly for review, and the citizen is notified of the updated timeline.',
            },
            {
                id: 'sla-3',
                question: 'Which districts in the Ashanti Region are currently supported?',
                answer:
                    'All 43 Assemblies in the Ashanti Region are supported, including Kumasi Metropolitan, Asokwa, Kwadaso, Oforikrom, and Suame.',
            },
        ],
    },
    {
        id: 'tracking',
        icon: ShieldCheck,
        title: 'Tracking & Verification',
        items: [
            {
                id: 'track-1',
                question: 'How do I track the progress of my issue?',
                answer:
                    'Use the "Track Issue" page and enter your ticket ID to see real-time status updates and resolution milestones.',
            },
            {
                id: 'track-2',
                question: 'Who verifies completion before a ticket is closed?',
                answer:
                    'The assigned MMDA field unit uploads photo proof of the completed work, and the citizen has 48 hours to confirm or dispute it.',
            },
            {
                id: 'track-3',
                question: 'Can I add additional photos or evidence after submission?',
                answer:
                    'Yes, use the "Add Evidence" option on the ticket tracking page to attach further photos or details at any time.',
            },
        ],
    },
];