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

export const getJobFunctionSeniorityInsecure = cache(
  async (jobFunction: string, userId: number) => {
    const jobTitle = await sql<
      {
        userName: string;
        jobFunction: string;
        seniorityLevel: string;
      }[]
    >`
      SELECT
        users.user_name AS username,
        titles.job_function AS jobfunction,
        seniority.seniority_level AS senioritylevel,
        job_information.user_id
      FROM
        job_information
        JOIN users ON job_information.user_id = users.id
        JOIN titles ON job_information.job_function_id = titles.id
        JOIN seniority ON job_information.seniority_id = seniority.id
      WHERE
        job_information.job_function_id = 1 -- Replace with a known job function ID
        AND users.id = 4;

      -- Replace with a known user ID
    `;
    return jobTitle;
  },
);
