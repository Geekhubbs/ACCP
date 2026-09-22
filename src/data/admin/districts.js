// Static list — matches the "Static mock data" pattern used in mockDashboardStats.js
// Move to an API-backed fetch later without changing the shape consumers rely on:
// { code, name, type }

const municipalities = [
    "Ahafo Ano North", "Asante Akim Central", "Asante Akim South", "Asokore Mampong",
    "Asokwa", "Atwima Nwabiagya", "Bekwai", "Ejisu", "Ejura Sekyedumasi", "Juaben",
    "Kwabre East", "Kwadaso", "Mampong", "Obuasi", "Offinso", "Oforikrom",
    "Old Tafo", "Suame",
];

const districts = [
    "Adansi Asokwa", "Adansi North", "Adansi South", "Afigya Kwabre North",
    "Afigya Kwabre South", "Ahafo Ano South East", "Ahafo Ano South West", "Akrofuom",
    "Amansie Central", "Amansie South", "Amansie West", "Asante Akim North",
    "Atwima Kwanwoma", "Atwima Mponua", "Atwima Nwabiagya North", "Bosome Freho",
    "Bosomtwe", "Obuasi East", "Offinso North", "Sekyere Afram Plains",
    "Sekyere Central", "Sekyere East", "Sekyere Kumawu", "Sekyere South",
];

// Simple deterministic 3–4 letter code from initials, e.g. "Atwima Nwabiagya" -> "AN"
function makeCode(name, usedCodes) {
    const base = name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 4);
    let code = base;
    let n = 1;
    while (usedCodes.has(code)) {
        code = `${base}${n}`;
        n += 1;
    }
    usedCodes.add(code);
    return code;
}

const usedCodes = new Set(["KMA"]);

export const mmdaList = [
    { code: "KMA", name: "Kumasi Metropolitan Assembly", type: "Metropolitan" },
    ...municipalities.map((name) => ({
        code: makeCode(name, usedCodes),
        name: `${name} Municipal Assembly`,
        type: "Municipal",
    })),
    ...districts.map((name) => ({
        code: makeCode(name, usedCodes),
        name: `${name} District Assembly`,
        type: "District",
    })),
];

// Convenience for <Select> options across admin pages
export const mmdaFilterOptions = [
    { value: "all", label: "All MMDAs (43 Districts)" },
    ...mmdaList.map((d) => ({ value: d.code, label: d.name })),
];