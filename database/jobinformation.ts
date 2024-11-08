import { cache } from 'react';
// import type { User } from '../migrations/00000-createtableusers';
import type { JobInformationType } from '../migrations/00010-createtablejobinformation';
import type { Session } from '../migrations/00012-createtablesessions';
import { sql } from './connect';

export const createNewSurveyEntryInsecure = cache(
  async (
    sessionsTokenCookie: Session['token'],
    jobFunction: JobInformationType['jobFunctionId'],
    seniority: JobInformationType['seniorityId'],
    industry: JobInformationType['indusrtyId'],
    gender: JobInformationType['genderId'],
    salary: JobInformationType['salary'],
    yrs: JobInformationType['yearsOfExperience'],
  ) => {
    const [job] = await sql<JobInformationType[]>`
      INSERT INTO
        job_information (
          job_function_id,
          seniority_id,
          industry_id,
          gender_id,
          user_id,
          salary,
          years_of_experience
        ) (
          SELECT
            ${jobFunction},
            ${seniority},
            ${industry},
            ${gender},
            sessions.user_id,
            ${salary},
            ${yrs}
          FROM
            sessions
          WHERE
            token = ${sessionsTokenCookie}
            AND sessions.expiry_timestamp > now()
        )
      RETURNING
        job_information.id,
        job_information.job_function_id,
        job_information.seniority_id,
        job_information.industry_id,
        job_information.gender_id,
        job_information.user_id,
        job_information.salary,
        job_information.years_of_experience
    `;

    return job;
  },
);

export const getJobFunctionInsecure = cache(async (jobFunction: string) => {
  const jobTitle = await sql<
    {
      salary: number;
      yearsOfExperience: number;
      gender: number;
      id: number;
    }[]
  >`
    SELECT
      job_information.job_function_id,
      job_information.user_id,
      titles.job_function
    FROM
      job_information
      INNER JOIN titles ON (
        titles.id = job_information.job_function_id
      )
    WHERE
      job_information.job_function_id = ${jobFunction}
  `;
  return jobTitle;
});
