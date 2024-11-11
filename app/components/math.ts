import { getJobsenioritiesInsecure } from '../../database/jobinformation';

export async function MathSeniority() {
  const jobSeniority = await getJobsenioritiesInsecure();
}
