import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE seniority (
      id serial PRIMARY KEY,
      seniority_level varchar(70) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE seniority `;
}
