import type { Sql } from 'postgres';

const seniority = [
  {
    id: 1,
    seniorityLevel: 'Junior ',
  },
  {
    id: 2,
    seniorityLevel: 'Mid-level ',
  },
  {
    id: 3,
    seniorityLevel: 'Senior  ',
  },
  {
    id: 4,
    seniorityLevel: 'Principal  ',
  },
  {
    id: 5,
    seniorityLevel: 'Lead ',
  },
];

export async function up(sql: Sql) {
  for (const x of seniority) {
    await sql`
      INSERT INTO
        seniority (id, seniority_level)
      VALUES
        (
          ${x.id},
          ${x.seniorityLevel}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const x of seniority) {
    await sql`
      DELETE FROM seniority
      WHERE
        id = ${x.id}
    `;
  }
}
