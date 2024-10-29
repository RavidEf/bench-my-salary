import type { Sql } from 'postgres';

const industries = [
  {
    id: 1,
    industryCategory: 'Food Delivery',
  },
  {
    id: 2,
    industryCategory: 'Technology',
  },
  {
    id: 3,
    industryCategory: 'Consulting',
  },
  {
    id: 4,
    industryCategory: 'Pharmaceuticals',
  },
  {
    id: 5,
    industryCategory: 'Finance and Banking',
  },
  {
    id: 6,
    industryCategory: 'Healthcare',
  },
];

export async function up(sql: Sql) {
  for (const industry of industries) {
    await sql`
      INSERT INTO
        industry (id, industry_category)
      VALUES
        (
          ${industry.id},
          ${industry.industryCategory}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const industry of industries) {
    await sql`
      DELETE FROM industry
      WHERE
        id = ${industry.id}
    `;
  }
}
