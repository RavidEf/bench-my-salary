import type { Sql } from 'postgres';
import { usersDummyData } from '../database/usersdummydata';

export async function up(sql: Sql) {
  for (const user of usersDummyData) {
    await sql`
      INSERT INTO
        users (
          user_name,
          password_hash,
          email
        )
      VALUES
        (
          ${user.userName},
          ${user.passwordHash},
          ${user.email}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const user of usersDummyData) {
    await sql`
      DELETE FROM users
      WHERE
        email = ${user.email}
    `;
  }
}
