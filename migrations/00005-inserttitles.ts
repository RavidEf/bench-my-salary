import type { Sql } from 'postgres';

const titles = [
  {
    id: 1,
    jobFunction: 'Frontend  web Developer',
  },
  {
    id: 2,
    jobFunction: 'Backend  web Developer',
  },
  {
    id: 3,
    jobFunction: 'Full-stack web Developer',
  },
  {
    id: 4,
    jobFunction: 'Software Developer',
  },
  {
    id: 5,
    jobFunction: 'Android mobile Developer',
  },
  {
    id: 6,
    jobFunction: 'iOS mobile Developer',
  },
];

export async function up(sql: Sql) {
  for (const title of titles) {
    await sql`
      INSERT INTO
        titles (id, job_function)
      VALUES
        (
          ${title.id},
          ${title.jobFunction}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const title of titles) {
    await sql`
      DELETE FROM titles
      WHERE
        id = ${title.id}
    `;
  }
}
