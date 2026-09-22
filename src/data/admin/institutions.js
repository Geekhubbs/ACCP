export const institutionTypeOptions = [
  { value: "all", label: "All Types" },
  { value: "Works", label: "Works Department" },
  { value: "Utility", label: "Utility Company" },
  { value: "Sanitation", label: "Sanitation Agency" },
  { value: "Security", label: "Security / Safety" },
];

export const institutionStatusOptions = [
  { value: "all", label: "All Status" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export const mockInstitutions = [
  {
    id: "INS-01",
    name: "Department of Urban Roads",
    type: "Works",
    jurisdiction: "Ashanti Region",
    contactPerson: "Eng. Kwabena Asare",
    phone: "+233 24 555 0101",
    email: "roads@ashanti.gov.gh",
    assignedReports: 780,
    status: "Active",
  },
  {
    id: "INS-02",
    name: "Waste Management Dept",
    type: "Sanitation",
    jurisdiction: "Kumasi Metropolitan",
    contactPerson: "Ama Owusu",
    phone: "+233 24 555 0102",
    email: "sanitation@kma.gov.gh",
    assignedReports: 588,
    status: "Active",
  },
  {
    id: "INS-03",
    name: "Works Department",
    type: "Works",
    jurisdiction: "Ashanti Region",
    contactPerson: "Eng. Yaw Boateng",
    phone: "+233 24 555 0103",
    email: "works@ashanti.gov.gh",
    assignedReports: 412,
    status: "Active",
  },
  {
    id: "INS-04",
    name: "Ghana Water Company",
    type: "Utility",
    jurisdiction: "Ashanti Region",
    contactPerson: "Efua Mensah",
    phone: "+233 24 555 0104",
    email: "gwcl@ashanti.gov.gh",
    assignedReports: 331,
    status: "Active",
  },
  {
    id: "INS-05",
    name: "Electricity Company of Ghana",
    type: "Utility",
    jurisdiction: "Ashanti Region",
    contactPerson: "Kojo Antwi",
    phone: "+233 24 555 0105",
    email: "ecg@ashanti.gov.gh",
    assignedReports: 246,
    status: "Active",
  },
  {
    id: "INS-06",
    name: "MMDA Security Unit",
    type: "Security",
    jurisdiction: "Kumasi Metropolitan",
    contactPerson: "Insp. Adjoa Frimpong",
    phone: "+233 24 555 0106",
    email: "security@kma.gov.gh",
    assignedReports: 87,
    status: "Inactive",
  },
];

export const totalInstitutions = mockInstitutions.length;