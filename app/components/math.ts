import { getAllJobsenioritiesInsecure } from '../../database/jobinformation';

export async function MathAll() {
  const jobSeniority = await getAllJobsenioritiesInsecure();
  // First map to get all salaries, then reduce to get the sum
  const totalSalary = jobSeniority.reduce((sum, item) => sum + item.salary, 0);

  // Calculate average by dividing by the number of items
  const salAverage = totalSalary / jobSeniority.length;

  return salAverage;
}
