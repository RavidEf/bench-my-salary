import type { Sql } from 'postgres';

const users = [
  {
    passwordHash: 'xqxqxqxqxqxq',
    email: 'dev1@exmaple.com',
  },
  {
    passwordHash: 'xqxqxdewsqxqxqxq',
    email: 'dev2@exmaple.com',
  },
  {
    passwordHash: 'xqxqdewxqxqxqxq',
    email: 'dev3@exmaple.com',
  },
];

export async function up(sql: Sql) {
  for (const user of users) {
    await sql`
      INSERT INTO
        users (password_hash, email)
      VALUES
        (
          ${user.passwordHash},
          ${user.email}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const user of users) {
    await sql`
      DELETE FROM users
      WHERE
        email = ${user.email}
    `;
  }
}
