export const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "Citizen", label: "Citizen" },
    { value: "Official", label: "Official" },
    { value: "Admin", label: "Admin" },
];

export const userStatusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "Active", label: "Active" },
    { value: "Suspended", label: "Suspended" },
    { value: "Pending Verification", label: "Pending Verification" },
];

// role tones: Citizen -> neutral, Official -> info(blue), Admin -> brand(green)
export const mockUsers = [
    { id: "USR-10241", name: "Kwabena Mensah", email: "kwabena.mensah@kma.gov.gh", role: "Official", district: "Kumasi Metropolitan Assembly", status: "Active", joined: "12 Jan 2026", reportsCount: 214 },
    { id: "USR-10240", name: "Ama Serwaa", email: "ama.serwaa@gmail.com", role: "Citizen", district: "Asokwa Municipal Assembly", status: "Active", joined: "03 Feb 2026", reportsCount: 6 },
    { id: "USR-10239", name: "Kwame Boateng", email: "kwame.boateng@arcc.gov.gh", role: "Admin", district: "Kumasi Metropolitan Assembly", status: "Active", joined: "09 Nov 2025", reportsCount: 0 },
    { id: "USR-10238", name: "Yaw Darko", email: "yaw.darko@yahoo.com", role: "Citizen", district: "Suame Municipal Assembly", status: "Suspended", joined: "21 Mar 2026", reportsCount: 2 },
    { id: "USR-10237", name: "Kofi Annan", email: "kofi.annan@asokwa.gov.gh", role: "Official", district: "Asokwa Municipal Assembly", status: "Active", joined: "15 Dec 2025", reportsCount: 178 },
    { id: "USR-10236", name: "Akosua Frimpong", email: "akosua.f@gmail.com", role: "Citizen", district: "Oforikrom Municipal Assembly", status: "Pending Verification", joined: "17 Sep 2026", reportsCount: 1 },
    { id: "USR-10235", name: "Eng. Boateng", email: "e.boateng@kma.gov.gh", role: "Official", district: "Kumasi Metropolitan Assembly", status: "Active", joined: "02 Oct 2025", reportsCount: 302 },
    { id: "USR-10234", name: "Abena Owusu", email: "abena.owusu@outlook.com", role: "Citizen", district: "Kwadaso Municipal Assembly", status: "Active", joined: "28 Aug 2026", reportsCount: 4 },
    { id: "USR-10233", name: "Ibrahim Mahama", email: "i.mahama@gmail.com", role: "Citizen", district: "Ejisu Municipal Assembly", status: "Active", joined: "05 Jul 2026", reportsCount: 9 },
    { id: "USR-10232", name: "Grace Owusu-Ansah", email: "g.owusu@arcc.gov.gh", role: "Admin", district: "Kumasi Metropolitan Assembly", status: "Active", joined: "14 Jan 2026", reportsCount: 0 },
    { id: "USR-10231", name: "Samuel Adjei", email: "s.adjei@bekwai.gov.gh", role: "Official", district: "Bekwai Municipal Assembly", status: "Active", joined: "19 Feb 2026", reportsCount: 96 },
    { id: "USR-10230", name: "Efua Mensimah", email: "efua.m@gmail.com", role: "Citizen", district: "Mampong Municipal Assembly", status: "Suspended", joined: "11 Apr 2026", reportsCount: 3 },
    { id: "USR-10229", name: "Nana Yeboah", email: "n.yeboah@obuasi.gov.gh", role: "Official", district: "Obuasi Municipal Assembly", status: "Active", joined: "23 May 2026", reportsCount: 141 },
    { id: "USR-10228", name: "Comfort Asante", email: "comfort.asante@gmail.com", role: "Citizen", district: "Old Tafo Municipal Assembly", status: "Active", joined: "30 Jun 2026", reportsCount: 7 },
    { id: "USR-10227", name: "Kojo Antwi", email: "kojo.antwi@offinso.gov.gh", role: "Official", district: "Offinso Municipal Assembly", status: "Pending Verification", joined: "16 Sep 2026", reportsCount: 12 },
    { id: "USR-10226", name: "Adwoa Boatemaa", email: "adwoa.b@gmail.com", role: "Citizen", district: "Kumasi Metropolitan Assembly", status: "Active", joined: "01 Aug 2026", reportsCount: 15 },
    { id: "USR-10225", name: "Emmanuel Ofori", email: "e.ofori@bosomtwe.gov.gh", role: "Official", district: "Bosomtwe District Assembly", status: "Active", joined: "07 Mar 2026", reportsCount: 58 },
    { id: "USR-10224", name: "Linda Appiah", email: "linda.appiah@gmail.com", role: "Citizen", district: "Ejura Sekyedumasi Municipal Assembly", status: "Active", joined: "22 Sep 2026", reportsCount: 2 },
    { id: "USR-10223", name: "Richard Osei", email: "r.osei@kwabre-east.gov.gh", role: "Official", district: "Kwabre East Municipal Assembly", status: "Active", joined: "10 Jan 2026", reportsCount: 87 },
    { id: "USR-10222", name: "Mavis Danso", email: "mavis.danso@gmail.com", role: "Citizen", district: "Asante Akim Central Municipal Assembly", status: "Suspended", joined: "04 May 2026", reportsCount: 1 },
];