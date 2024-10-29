import type { Sql } from 'postgres';

const genders = [
  {
    id: 1,
    genderTitle: 'Male',
  },
  {
    id: 2,
    genderTitle: 'Female',
  },
];

export async function up(sql: Sql) {
  for (const gender of genders) {
    await sql`
      INSERT INTO
        genders (id, gender_title)
      VALUES
        (
          ${gender.id},
          ${gender.genderTitle}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const gender of genders) {
    await sql`
      DELETE FROM genders
      WHERE
        id = ${gender.id}
    `;
  }
}
