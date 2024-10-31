import type { Sql } from 'postgres';

const users = [
  {
    username: 'Marco',
    passwordHash: 'xqxqxqxqxqxq',
    email: 'dev1@exmaple.com',
  },
  {
    username: 'Jack',
    passwordHash: 'xqxqxdewsqxqxqxq',
    email: 'dev2@exmaple.com',
  },
  {
    username: 'Baloo',
    passwordHash: 'xqxqdewxqxqxqxq',
    email: 'dev3@exmaple.com',
  },
];

export async function up(sql: Sql) {
  for (const user of users) {
    await sql`
      INSERT INTO
        users (
          user_name,
          password_hash,
          email
        )
      VALUES
        (
          ${user.username},
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
