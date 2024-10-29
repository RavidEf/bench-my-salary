import type { Sql } from 'postgres';
import type { jobInformationType } from '../database/jobinformation';

const jobInformation: jobInformationType[] = [
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
  {
    id: 2,
    jobFunctionId: 4,
    seniorityId: 3,
    indusrtyId: 1,
    genderId: 1,
    salary: 80000,
    userId: 2,
    yearsOfExperience: 6,
  },
];

export async function up(sql: Sql) {
  for (const entry of jobInformation) {
    await sql`
      INSERT INTO
        job_information (
          id,
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
          ${entry.id},
          ${entry.jobFunctionId},
          ${entry.seniorityId},
          ${entry.indusrtyId},
          ${entry.genderId},
          ${entry.salary},
          ${entry.userId},
          ${entry.yearsOfExperience}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const entry of jobInformation) {
    await sql`
      DELETE FROM job_information
      WHERE
        id = ${entry.id}
    `;
  }
}
