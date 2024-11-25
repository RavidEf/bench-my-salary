import { cache } from 'react';
import type { BizEmailType } from '../migrations/00013-insertbusinessemail';
import { sql } from './connect';

export const createBizEmailInsecure = cache(
  async (businessEmail: BizEmailType['businessEmail']) => {
    const email = await sql<{ businessEmail: string }[]>`
      INSERT INTO
        business_emails (business_email)
      VALUES
        (
          ${businessEmail}
        )
      RETURNING
        business_email
    `;
    return email;
  },
);
