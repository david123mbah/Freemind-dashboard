export const DEPARTMENTS = {
  GENERAL_SURGERY: "General Surgery",
  ONCOLOGY: "Oncology",
  CARDIOLOGY: "Cardiology",
  NEUROLOGY: "Neurology",
  PEDIATRICS: "Pediatrics",
};

export const PATIENT_STATUS = {
  INPATIENT: "INPATIENT",
  OUTPATIENT: "OUTPATIENT",
};

export const patients = [
  {
    id: "001235",
    name: "Maria Hernandez",
    initials: "MH",
    age: 32,
    gender: "Female",
    date: "2024-08-22",
    department: DEPARTMENTS.GENERAL_SURGERY,
    diagnosis: "Appendicitis",
    status: PATIENT_STATUS.OUTPATIENT,
    avatarColor: "red",
  },
  // Add more patient data...
];

export const dashboardStats = {
  enrollment: {
    total: 129,
    percentage: 18.7,
    increase: 52,
    trend: "up",
  },
  visits: {
    total: 1210,
    percentage: -5.2,
    decrease: 165,
    trend: "down",
  },
  activeCases: {
    total: 456,
    percentage: 6.0,
    increase: 184,
    trend: "up",
  },
  inactiveCases: {
    total: 234,
    percentage: -6.4,
    decrease: 83,
    trend: "down",
  },
};

export const insuranceData = {
  total: 2700,
  increase: 823,
  distribution: [
    { type: "Private Insurance", count: 1200, color: "blue" },
    { type: "Medicare", count: 620, color: "yellow" },
    { type: "Medicaid", count: 550, color: "indigo" },
    { type: "Uninsured", count: 210, color: "green" },
  ],
};
