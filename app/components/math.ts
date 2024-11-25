import { cookies } from 'next/headers';
import {
  getAllJobsenioritiesInsecure,
  getJobFunctions,
} from '../../database/jobinformation';

const sessionTokenCookie = (await cookies()).get('sessionToken');
// 2. get the session token the use provides us in the FE
if (!sessionTokenCookie?.value) {
  throw new Error('Session token is missing. Please provide a valid token.');
}
const userDeatail = await getJobFunctions(sessionTokenCookie.value);
// console.log('userDetails from math:::', userDeatail);

export async function MathAll() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  // First map to get all salaries, then reduce to get the sum
  const totalSalary = jobSeniority.reduce((sum, item) => sum + item.salary, 0);

  // Calculate average by dividing by the number of items
  const salAverage = totalSalary / jobSeniority.length;

  return salAverage;
}

// Get the average salary of full-stack developers JUNIOR for FoodDelivery
export async function JuniorAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers JUNIOR for Tech
export async function JuniorAverageTechnology() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers JUNIOR for Consulting
export async function JuniorAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers JUNIOR for Pharma
export async function JuniorAveragePharma() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers JUNIOR for Fianance
export async function JuniorAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers JUNIOR for Healthcare
export async function JuniorAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === 1 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

/* ------------------------------------------------------------------------------ */

// Get the average salary of full-stack developers Midlevel for FoodDelivery
export async function MidAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Tech
export async function MidAverageTechnology() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers MID for Consulting
export async function MidAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Pharma
export async function MidAveragePharma() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Fianance
export async function MidAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Healthcare
export async function MidAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === 2 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

/* -------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------ */

// Get the average salary of full-stack developers Senior for FoodDelivery
export async function SeniorAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Tech
export async function SeniorAverageTechnology() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers MID for Consulting
export async function SeniorAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Pharma
export async function SeniorAveragePharma() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Fianance
export async function SeniorAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Healthcare
export async function SeniorAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === 3 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

/* -------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------ */

// Get the average salary of full-stack developers Principal for FoodDelivery
export async function PrincipalAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Tech
export async function PrincipalAverageTechnology() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers MID for Consulting
export async function PrincipalAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Pharma
export async function PrincipalAveragePharma() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Fianance
export async function PrincipalAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Healthcare
export async function PrincipalAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === 4 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

/* -------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------ */

// Get the average salary of full-stack developers Principal for FoodDelivery
export async function LeadAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Tech
export async function LeadAverageTechnology() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers MID for Consulting
export async function LeadAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}
// Get the average salary of full-stack developers Mid for Pharma
export async function LeadAveragePharma() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Fianance
export async function LeadAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

// Get the average salary of full-stack developers Mid for Healthcare
export async function LeadAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === 5 &&
      item.jobFunctionId === 3,
  );
  // First map to get all salaries, then reduce to get the sum divide by the length
  const avgJuniorFoodDelivery =
    jobFilterIndustry.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterIndustry.length;
  return avgJuniorFoodDelivery;
}

/* -------------------------------------------------------------------------------- */

// Average of salaries in food delivery industry
export async function IndustryAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  // console.log('userDetails from math:::', jobSeniority.length);

  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 1 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );

  // First map to get all salaries, then reduce to get the sum

  const totalSalaryFoodDelivery = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageFoodDelivery =
    totalSalaryFoodDelivery / jobFilterIndustry.length;

  return salAverageFoodDelivery;
}

// Average of salaries in the Technology industry
export async function IndustryAverageTech() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 2 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryTechnology = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageTechnology = totalSalaryTechnology / jobFilterIndustry.length;

  return salAverageTechnology;
}

// Average of salaries in the Consulting industry
export async function IndustryAverageConsult() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 3 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryConsulting = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageConsulting = totalSalaryConsulting / jobFilterIndustry.length;

  return salAverageConsulting;
}

// Average of salaries in the Pharmaceuticals industry
export async function IndustryAveragePharmaceuticals() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 4 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryPharmaceuticals = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAveragePharma =
    totalSalaryPharmaceuticals / jobFilterIndustry.length;

  return salAveragePharma;
}

// Average of salaries in the Finance and Banking industry
export async function IndustryAverageFinance() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 5 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryFinan = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageFinanace = totalSalaryFinan / jobFilterIndustry.length;

  return salAverageFinanace;
}

// Average of salaries in the Healthcare industry
export async function IndustryAverageHealthcare() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) =>
      item.industryId === 6 &&
      item.seniorityId === userDeatail[0]?.seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryHealth = jobFilterIndustry.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageHealth: number = totalSalaryHealth / jobFilterIndustry.length;

  return salAverageHealth;
}

// Average of salaries based on Gender Male
export async function GenderAverageMale() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFiltergender = jobSeniority.filter(
    (item) => item.genderId === 1 && item.seniorityId === 3,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryGenderMale = jobFiltergender.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageGenderMale: number =
    totalSalaryGenderMale / jobFiltergender.length;

  return salAverageGenderMale;
}

// Average of salaries based on Gender Female
export async function GenderAverageFemale() {
  const getGenders = await getAllJobsenioritiesInsecure();
  //
  const jobFiltergender = getGenders.filter(
    (item) => item.genderId === 2 && item.seniorityId === 3,
  );
  // First map to get all salaries, then reduce to get the sum

  const totalSalaryGenderFemale = jobFiltergender.reduce(
    (sum, item) => sum + item.salary,
    0,
  );

  // Calculate average by dividing by the number of items
  const salAverageGenderFemale: number =
    totalSalaryGenderFemale / jobFiltergender.length;

  return salAverageGenderFemale;
}

// yrs of experinece calc yrs 1 to 3
export async function YearsofexperienceJunior() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter((item) => item.yearsOfExperience <= 3);
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 4 to 6
export async function YearsofexperienceMid() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.yearsOfExperience === 4 ||
      item.yearsOfExperience === 5 ||
      item.yearsOfExperience === 6,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 7 to 9
export async function YearsofexperienceSenior() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.yearsOfExperience === 7 ||
      item.yearsOfExperience === 8 ||
      item.yearsOfExperience === 9,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 10 - 15
export async function YearsofexperiencePrinciple() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.yearsOfExperience === 10 ||
      item.yearsOfExperience === 11 ||
      item.yearsOfExperience === 12 ||
      item.yearsOfExperience === 13 ||
      item.yearsOfExperience === 14 ||
      item.yearsOfExperience === 15,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 15 and above
export async function YearsofexperienceLead() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter((item) => item.yearsOfExperience > 15);
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}
//
//
// yrs of experience and Male
// yrs of experinece calc yrs 1 to 3
export async function YearsofexperienceJuniorMale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) => item.yearsOfExperience <= 3 && item.genderId === 1,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 4 to 6
export async function YearsofexperienceMidMale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 1 &&
      (item.yearsOfExperience === 4 ||
        item.yearsOfExperience === 5 ||
        item.yearsOfExperience === 6),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 7 to 9
export async function YearsofexperienceSeniorMale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 1 &&
      (item.yearsOfExperience === 7 ||
        item.yearsOfExperience === 8 ||
        item.yearsOfExperience === 9),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 10 - 15
export async function YearsofexperiencePrincipleMale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 1 &&
      (item.yearsOfExperience === 10 ||
        item.yearsOfExperience === 11 ||
        item.yearsOfExperience === 12 ||
        item.yearsOfExperience === 13 ||
        item.yearsOfExperience === 14 ||
        item.yearsOfExperience === 15),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 15 and above
export async function YearsofexperienceLeadMale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) => item.genderId === 1 && item.yearsOfExperience > 15,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

//
//
// yrs of experience and FeMale
// yrs of experinece calc yrs 1 to 3
export async function YearsofexperienceJuniorFemale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) => item.yearsOfExperience <= 3 && item.genderId === 2,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 4 to 6
export async function YearsofexperienceMidFemale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 2 &&
      (item.yearsOfExperience === 4 ||
        item.yearsOfExperience === 5 ||
        item.yearsOfExperience === 6),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 7 to 9
export async function YearsofexperienceSeniorFemale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 2 &&
      (item.yearsOfExperience === 7 ||
        item.yearsOfExperience === 8 ||
        item.yearsOfExperience === 9),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 10 - 15
export async function YearsofexperiencePrincipleFemale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) =>
      item.genderId === 2 &&
      (item.yearsOfExperience === 10 ||
        item.yearsOfExperience === 11 ||
        item.yearsOfExperience === 12 ||
        item.yearsOfExperience === 13 ||
        item.yearsOfExperience === 14 ||
        item.yearsOfExperience === 15),
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

// yrs of experinece calc yrs 15 and above
export async function YearsofexperienceLeadFemale() {
  const getAllData = await getAllJobsenioritiesInsecure();
  //
  const jobFilterYrs = getAllData.filter(
    (item) => item.genderId === 2 && item.yearsOfExperience > 15,
  );
  const totalSalaryYrs =
    jobFilterYrs.reduce((sum, item) => sum + item.salary, 0) /
    jobFilterYrs.length;

  return totalSalaryYrs;
}

export async function percentageDifBySeniorityTitle() {
  const getAllData = await getAllJobsenioritiesInsecure();
  const matchUserData = getAllData.filter(
    (item) =>
      item.genderId === userDeatail[0]?.genderId &&
      item.seniorityId === userDeatail[0].seniorityId &&
      item.jobFunctionId === userDeatail[0].jobFunctionId,
  );

  const marketAvg =
    matchUserData.reduce((sum, item) => sum + item.salary, 0) /
    matchUserData.length;

  let percentageDif = 0;
  if (userDeatail[0] !== undefined) {
    percentageDif = ((userDeatail[0].salary - marketAvg) / marketAvg) * 100;
  }

  return percentageDif;
}

// ----------  how many SD males are there in our dataset? -----------

export async function MaleSDDistribution() {
  const getAllData = await getAllJobsenioritiesInsecure();
  const findMalesSD = getAllData.filter(
    (item) =>
      item.genderId === 1 && item.jobFunctionId === 4 && item.seniorityId >= 4,
  ).length;
  return findMalesSD;
}

export async function FemaleSDDistribution() {
  const getAllData = await getAllJobsenioritiesInsecure();
  const findMalesSD = getAllData.filter(
    (item) =>
      item.genderId === 2 && item.jobFunctionId === 4 && item.seniorityId >= 4,
  ).length;
  return findMalesSD;
}
