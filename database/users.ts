import { cache } from 'react';
import type { User } from '../migrations/00000-createtableusers';
import { sql } from './connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUserInsecure = cache(async (userName: User['userName']) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      user_name,
      email
    FROM
      users
    WHERE
      user_name = ${userName}
  `;

  return user;
});

export const createUserInsecure = cache(
  async (
    userName: User['userName'],
    email: User['email'],
    passwordHash: UserWithPasswordHash['passwordHash'],
  ) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          user_name,
          email,
          password_hash
        )
      VALUES
        (
          ${userName},
          ${email},
          ${passwordHash}
        )
      RETURNING
        users.id,
        users.email,
        users.user_name
    `;

    return user;
  },
);
// get a user with pass hash

export const getUserWithPasswordHashInsecure = cache(
  async (userName: User['userName']) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        user_name = ${userName}
    `;

    return user;
  },
);

// Old object to retrieve user data
/* const users = [
  {
    id: 1,
    userName: 'Marco',
    password_hash: 'xqxqxqxqxqxq',
    email: 'dev1@exmaple.com',
  },
  {
    id: 2,
    userName: 'Polo',
    password_hash: 'xqxqxdewsqxqxqxq',
    email: 'dev2@exmaple.com',
  },
  {
    id: 3,
    userName: 'Roberto',
    password_hash: 'xqxqdewxqxqxqxq',
    email: 'dev3@exmaple.com',
  },
];
 */
