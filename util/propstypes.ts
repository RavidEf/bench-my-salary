export type BarGraphProps = {
  foodDelivery: number;
  techAvg: number;
  consultAvg: number;
  pharmaAvg: number;
  financeAvg: number;
  healthAvg: number;
  jobdetails: { salary: number; jobFunction: string }[];
  maleSalAvg: number;
  femaleSalAvg: number;
  salaryAvgMarket: number;
  minValueMArket: number;
  maxValueMArket: number;
  salaryAvgJunior: number;
  salaryAvgMid: number;
  salaryAvgSenior: number;
  salaryAvgPrincple: number;
  salaryAvgLead: number;
  salaryAvgJuniorMale: number;
  salaryAvgMidMale: number;
  salaryAvgSeniorMale: number;
  salaryAvgPrincpleMale: number;
  salaryAvgLeadMale: number;
  salaryAvgJuniorFemale: number;
  salaryAvgMidFemale: number;
  salaryAvgSeniorFemale: number;
  salaryAvgPrincpleFemale: number;
  salaryAvgLeadFemale: number;
  jobDetailsLevel: string | undefined;
  jobDetailstitle: string | undefined;
  jobDetailsSalary: number | undefined;
  ratioMaleGender: number;
  ratioFemGender: number;
};

export type SurveyProps = {
  jobUserDetails: { id: number | undefined }[];
};
