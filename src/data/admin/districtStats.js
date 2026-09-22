import { mmdaList } from "./districts";

// Deterministic pseudo-random generator so numbers stay stable across renders/reloads
function seededRandom(seed) {
    let x = 0;
    for (let i = 0; i < seed.length; i += 1) x = (x * 31 + seed.charCodeAt(i)) % 100000;
    return () => {
        x = (x * 9301 + 49297) % 233280;
        return x / 233280;
    };
}

export const districtStats = mmdaList.map((d) => {
    const rand = seededRandom(d.code);
    const base = d.type === "Metropolitan" ? 4000 : d.type === "Municipal" ? 900 : 300;
    const total = Math.round(base + rand() * base * 0.6);
    const pending = Math.round(total * (0.02 + rand() * 0.03));
    const inProgress = Math.round(total * (0.05 + rand() * 0.05));
    const resolved = total - pending - inProgress;
    const officials = d.type === "Metropolitan" ? 18 + Math.round(rand() * 6) : d.type === "Municipal" ? 4 + Math.round(rand() * 6) : 2 + Math.round(rand() * 4);
    const sla = Math.round((88 + rand() * 10) * 10) / 10;
    const status = rand() > 0.08 ? "Connected" : "Syncing";

    return { ...d, total, pending, inProgress, resolved, officials, sla, status };
});

export const districtTypeOptions = [
    { value: "all", label: "All Types" },
    { value: "Metropolitan", label: "Metropolitan" },
    { value: "Municipal", label: "Municipal" },
    { value: "District", label: "District" },
];