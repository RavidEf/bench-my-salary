import type { Sql } from 'postgres';
import { z } from 'zod';

export const mainSurveySchema = z.object({
  jobFunction: z.number(),
  seniority: z.number(),
  industry: z.number(),
  gender: z.number(),
  salary: z
    .number()
    .gt(18000, {
      message:
        'Your salary should be above the minimum wage to submit it. sorry. ',
    })
    .int(),
  yrs: z.number(),
});

export type JobInformationType = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  indusrtyId: number;
  genderId: number;
  salary: number;
  userId: number;
  yearsOfExperience: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE job_information (
      id serial PRIMARY KEY,
      job_function_id integer NOT NULL REFERENCES titles (id),
      seniority_id integer NOT NULL REFERENCES seniority (id),
      gender_id integer NOT NULL REFERENCES genders (id),
      industry_id integer NOT NULL REFERENCES industry (id),
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      salary integer NOT NULL,
      years_of_experience integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE job_information `;
}
