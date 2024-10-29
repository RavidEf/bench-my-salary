import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE genders (
      id serial PRIMARY KEY,
      gender_title varchar(30) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE genders`;
}
