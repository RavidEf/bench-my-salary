import type { Sql } from 'postgres';

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
