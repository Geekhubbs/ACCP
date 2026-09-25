import { districtStats } from "../data/admin/districtStats";
import {
    kpiStats as regionalKpiStats,
    priorityQueues as regionalPriorityQueues,
    categoryBreakdown as regionalCategoryBreakdown,
    districtPerformance,
    auditStream,
} from "../data/admin/mockDashboardStats";
import {
    weeklyActivity as regionalWeekly,
    monthlyActivity as regionalMonthly,
    activityStats as regionalActivityStats,
} from "../data/admin/reportActivity";
import { mockUsers } from "../data/admin/mockUsers";
import { mockOfficials } from "../data/admin/mockOfficials";
import { isRegional, scopeRows } from "./scope";

const REGION_TOTAL = districtStats.reduce((sum, d) => sum + d.total, 0);

function scaleSeries(series, share) {
    return series.map((d) => ({
        ...d,
        submissions: Math.max(0, Math.round(d.submissions * share)),
        resolutions: Math.max(0, Math.round(d.resolutions * share)),
    }));
}

function rankAmongPeers(myRow) {
    const peers = districtStats
        .filter((d) => d.type === myRow.type)
        .sort((a, b) => b.total - a.total);
    const rank = peers.findIndex((d) => d.code === myRow.code) + 1;
    return { rank, of: peers.length };
}

export function getScopedDashboardData(user) {
    if (isRegional(user)) {
        return {
            scopeLabel: "Ashanti Region (all 43 MMDAs)",
            kpiStats: regionalKpiStats,
            priorityQueues: regionalPriorityQueues,
            categoryBreakdown: regionalCategoryBreakdown,
            districtRows: districtPerformance,
            auditStream,
            weeklyActivity: regionalWeekly,
            monthlyActivity: regionalMonthly,
            activityStats: regionalActivityStats,
            isModeled: false,
        };
    }

    const myRow = districtStats.find((d) => d.code === user.jurisdictionCode);
    const share = myRow ? myRow.total / REGION_TOTAL : 0;
    const { rank, of } = myRow ? rankAmongPeers(myRow) : { rank: "–", of: "–" };

    const scopedUsers = scopeRows(mockUsers, user, (u) => u.district);
    const scopedOfficials = scopeRows(mockOfficials, user, (o) => o.district);
    const scopedAudit = scopeRows(auditStream, user, (a) => a.district);

    return {
        scopeLabel: user.jurisdictionName,
        isModeled: true, // priority/category/activity below are proportional estimates, not measured per-MMDA data
        kpiStats: [
            { label: "Users in Jurisdiction", value: scopedUsers.length.toLocaleString() },
            { label: "Officials", value: scopedOfficials.length },
            { label: "Total Reports", value: myRow?.total.toLocaleString() ?? "0" },
            { label: "SLA Health", value: myRow ? `${myRow.sla}%` : "–" },
            { label: "Pending Triage", value: myRow?.pending ?? 0 },
            { label: "Resolved Reports", value: myRow?.resolved.toLocaleString() ?? "0" },
        ],
        priorityQueues: regionalPriorityQueues.map((q) => ({
            ...q,
            count: Math.round(q.count * share),
        })),
        categoryBreakdown: regionalCategoryBreakdown.map((c) => ({
            ...c,
            value: Math.round(c.value * share),
            // pct kept as region-wide mix — assumes this MMDA's category split
            // roughly mirrors the region's, since we don't track category per MMDA
        })),
        districtRows: myRow
            ? [
                {
                    code: myRow.code,
                    name: myRow.name,
                    total: myRow.total,
                    pending: myRow.pending,
                    inProgress: myRow.inProgress,
                    resolved: myRow.resolved,
                    sla: myRow.sla,
                },
            ]
            : [],
        auditStream: scopedAudit,
        weeklyActivity: scaleSeries(regionalWeekly, share),
        monthlyActivity: scaleSeries(regionalMonthly, share),
        activityStats: {
            avgWeeklySubmissions: Math.round(
                Number(regionalActivityStats.avgWeeklySubmissions) * share,
            ).toString(),
            avgWeeklyDelta: regionalActivityStats.avgWeeklyDelta,
            avgResolutionTime: regionalActivityStats.avgResolutionTime,
            avgResolutionDelta: regionalActivityStats.avgResolutionDelta,
            // Replaces "Regional Hotspots" with something that's actually about this MMDA
            hotspots: `${user.jurisdictionName} — rank ${rank} of ${of} ${myRow?.type ?? ""} assemblies`,
            hotspotsLoad: `${(share * 100).toFixed(1)}% of regional report volume`,
        },
    };
}