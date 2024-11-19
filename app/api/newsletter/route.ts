import { NextResponse } from 'next/server';
import { createBizEmailInsecure } from '../../../database/bizemail';
import {
  type BizEmailType,
  bizFormSchema,
} from '../../../migrations/00013-insertbusinessemail';

export type NewsletterResponseBody =
  | {
      newsletter: BizEmailType;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: Request,
): Promise<NextResponse<NewsletterResponseBody>> {
  const requestBody = await request.json();
  console.log('REQUEST BODY:', requestBody);

  const result = bizFormSchema.safeParse(requestBody);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  const newBizEmail = await createBizEmailInsecure(result.data.businessEmail);

  console.log('NEW newBizEmail:', newBizEmail);

  return NextResponse.json({
    newBizEmail: 'A new business email was submitted',
  });
}
