import { cache } from 'react';
import type {
  JobInformationAndTitles,
  JobInformationType,
} from '../migrations/00010-createtablejobinformation';
// import type { User } from '../migrations/00000-createtableusers';
import type { Session } from '../migrations/00012-createtablesessions';
import { sql } from './connect';

export const createNewSurveyEntryInsecure = cache(
  async (
    sessionsTokenCookie: Session['token'],
    jobFunction: JobInformationType['jobFunctionId'],
    seniority: JobInformationType['seniorityId'],
    industry: JobInformationType['industryId'],
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

export const getJobFunctions = cache(async (sessionToken: string) => {
  const jobTitle = await sql<JobInformationAndTitles[]>`
    SELECT
      users.user_name AS user_name,
      titles.job_function AS job_function,
      seniority.seniority_level AS seniority_level,
      job_information.*
    FROM
      job_information
      JOIN users ON job_information.user_id = users.id
      JOIN titles ON job_information.job_function_id = titles.id
      JOIN seniority ON job_information.seniority_id = seniority.id
      INNER JOIN sessions ON (
        sessions.token = ${sessionToken}
        AND sessions.user_id = job_information.user_id
        AND expiry_timestamp > now()
      )
  `;
  return jobTitle;
});

export const getAllJobsenioritiesInsecure = cache(async () => {
  const jobSeniority = await sql<JobInformationAndTitles[]>`
    SELECT
      se.seniority_level AS seniority_level,
      ji.*,
      ge.gender_title,
      titles.job_function,
      ind.industry_category
    FROM
      job_information ji
      JOIN seniority se ON ji.seniority_id = se.id
      JOIN genders ge ON ji.gender_id = ge.id
      JOIN titles ON ji.job_function_id = titles.id
      JOIN industry ind ON ji.industry_id = ind.id
  `;
  return jobSeniority;
});
