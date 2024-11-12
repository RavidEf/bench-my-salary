import { getAllJobsenioritiesInsecure } from '../../database/jobinformation';

export async function MathAll() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  // First map to get all salaries, then reduce to get the sum
  const totalSalary = jobSeniority.reduce((sum, item) => sum + item.salary, 0);

  // Calculate average by dividing by the number of items
  const salAverage = totalSalary / jobSeniority.length;

  return salAverage;
}
// Average of salaries in food delivery industry
export async function IndustryAverageFood() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFilterIndustry = jobSeniority.filter(
    (item) => item.industryId === 1,
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
    (item) => item.industryId === 2,
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
    (item) => item.industryId === 3,
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
    (item) => item.industryId === 4,
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
    (item) => item.industryId === 5,
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
    (item) => item.industryId === 6,
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

// Average of salaries based on Gender
export async function GenderAverage() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  //
  const jobFiltergender = jobSeniority.filter((item) => item.genderId === 1);
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
