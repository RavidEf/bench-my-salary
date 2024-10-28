import { config } from 'dotenv-safe';
import postgres from 'postgres';

//import { sql } from './app/database/connect';

config();

const sql = postgres();

console.log(
  await sql`
    SELECT
      *
    FROM
      salaries;
  `,
);
