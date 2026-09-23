// Normalizes "Kumasi Metropolitan Assembly" / "Kumasi Metro (KMA)" / "KMA" down to a
// comparable core so existing mock data (which spells MMDA names inconsistently across
// files) can still be scoped without adding a districtCode to every row.
export function normalizeName(name = "") {
    return name
        .toLowerCase()
        .replace(/\(.*?\)/g, "")
        .replace(/metropolitan|municipal|district|assembly|metro/gi, "")
        .replace(/[^a-z]/g, "")
        .trim();
}

export function isRegional(user) {
    return !user || user.jurisdictionType === "Regional";
}

export function matchesJurisdiction(locationText, user) {
    if (isRegional(user)) return true;
    if (!locationText) return false;
    const rowKey = normalizeName(locationText);
    const userKey = normalizeName(user.jurisdictionName);
    return !!rowKey && !!userKey && (rowKey.includes(userKey) || userKey.includes(rowKey));
}

// rows: array of objects. getLocation: (row) => string (the row's district/area/MMDA text)
export function scopeRows(rows, user, getLocation) {
    if (isRegional(user)) return rows;
    return rows.filter((row) => matchesJurisdiction(getLocation(row), user));
}

// Pages only a Regional administrator may open — policy-level, region-wide config
export const REGIONAL_ONLY_PAGES = ["routing-rules", "settings"];

export function canAccessPage(pageKey, user) {
    if (!REGIONAL_ONLY_PAGES.includes(pageKey)) return true;
    return isRegional(user);
}