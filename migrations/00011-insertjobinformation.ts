import type { Sql } from 'postgres';
import { jobInformationDummyData } from '../database/dummyjsonfilejobs';
import type { JobInformationType } from './00010-createtablejobinformation';

export async function up(sql: Sql) {
  for (const entry of jobInformationDummyData) {
    await sql`
      INSERT INTO
        job_information (
          job_function_id,
          seniority_id,
          industry_id,
          gender_id,
          salary,
          user_id,
          years_of_experience
        )
      VALUES
        (
          ${entry.jobFunctionId},
          ${entry.seniorityId},
          ${entry.industryId},
          ${entry.genderId},
          ${entry.salary},
          ${entry.userId ?? null},
          ${entry.yearsOfExperience}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const entry of jobInformationDummyData) {
    await sql`
      DELETE FROM job_information
      WHERE
        id = ${entry.id}
    `;
  }
}
