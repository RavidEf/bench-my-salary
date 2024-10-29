import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id serial PRIMARY KEY,
      password_hash varchar(100) NOT NULL,
      email varchar(100) NOT NULL UNIQUE
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE users`;
}
