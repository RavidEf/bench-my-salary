import { cache } from 'react';
import { sql } from './connect';

export type jobInformationType = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  indusrtyId: number;
  genderId: number;
  email: string;
  salary: number;
  useId: number;
  yearsOfExperience: number;
};

export const getJobInformationInsecure = cache(async () => {
  const jobInformations = await sql`
    SELECT
      *
    FROM
      salaries
  `;
  return jobInformations;
});

const jobInformationTable: jobInformationType[] = [
  {
    id: 1,
    jobFunctionId: 1,
    seniorityId: 1,
    indusrtyId: 1,
    genderId: 1,
    email: 'dev@example.com',
    salary: 50000,
    useId: 1,
    yearsOfExperience: 3,
  },
];
