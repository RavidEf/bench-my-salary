import type { Sql } from 'postgres';
import { z } from 'zod';

export const registerUserSchema = z.object({
  username: z.string().min(3, {
    message: '*Please choose a longer username ',
  }),
  email: z.string().email().min(5),
  password: z.string().min(6, {
    message: '*Your Password should be at least 6 characters long. ',
  }),
});

export const loginSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(6),
});

export type User = {
  id: number;
  passwordHash: string;
  email: string;
  userName: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id serial PRIMARY KEY,
      password_hash varchar(100) NOT NULL,
      email varchar(100) NOT NULL UNIQUE,
      user_name varchar(50) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE users`;
}
