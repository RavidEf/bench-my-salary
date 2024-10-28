import type { Sql } from 'postgres';

const salaryEntries = [
  {
    id: 1,
    jobTitle: 'Front end web developer',
    income: 55000,
  },
  {
    id: 2,
    jobTitle: 'Beckend web developer',
    income: 60000,
  },
  {
    id: 3,
    jobTitle: 'Full stack web developer',
    income: 65000,
  },
  {
    id: 4,
    jobTitle: 'Software Engineer',
    income: 69000,
  },
];

export async function up(sql: Sql) {
  for (const salary of salaryEntries) {
    await sql`
      INSERT INTO
        salaries (job_title, income)
      VALUES
        (
          ${salary.jobTitle},
          ${salary.income}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const salary of salaryEntries) {
    await sql`
      DELETE FROM salaries
      WHERE
        id = ${salary.id}
    `;
  }
}
