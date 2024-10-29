import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE industry (
      id serial PRIMARY KEY,
      industry_category varchar(70) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE industry `;
}
