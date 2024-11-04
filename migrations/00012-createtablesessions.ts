import type { Sql } from 'postgres';

export type Session = {
  token: string;
  userId: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE sessions (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      token varchar(175) NOT NULL UNIQUE,
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      expirey_timestamp timestamp NOT NULL DEFAULT now() + interval '24 hours'
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE sessions`;
}