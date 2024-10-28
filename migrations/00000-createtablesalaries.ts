import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE salaries (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      job_title varchar(40) NOT NULL,
      income integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {}
