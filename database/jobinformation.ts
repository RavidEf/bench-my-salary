import { cache } from 'react';
import { sql } from './connect';

export type jobInformationType = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  indusrtyId: number;
  genderId: number;
  salary: number;
  userId: number;
  yearsOfExperience: number;
};

/* export const getJobInformationInsecure = cache(async () => {
  const jobInformations = await sql`
    SELECT
      *
    FROM
      salaries
  `;
  return jobInformations;
}); */

const jobInformationTable: jobInformationType[] = [
  {
    id: 1,
    jobFunctionId: 1,
    seniorityId: 1,
    indusrtyId: 1,
    genderId: 1,
    salary: 50000,
    userId: 1,
    yearsOfExperience: 3,
  },
];

export const getSalaryInsecure = cache(async () => {
  const salaries = await sql`
    SELECT
      salary,
      years_of_experience,
      gender_id AS gender,
      id
    FROM
      job_information
  `;
  return salaries;
});
