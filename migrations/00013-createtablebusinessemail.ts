import type { Sql } from 'postgres';
import { z } from 'zod';

export type BizEmailType = {
  businessEmail: string;
};

export const bizFormSchema = z.object({
  businessEmail: z.string().email().min(5),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE business_email (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      biz_email varchar(100) NOT NULL UNIQUE
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE business_email`;
}
