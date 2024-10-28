import { cache } from 'react';
import { sql } from './connect';

export const getJobInformationInsecure = cache(async () => {
  const jobInformations = await sql`
    SELECT
      *
    FROM
      salaries
  `;
  return jobInformations;
});
