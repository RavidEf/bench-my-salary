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

  const businessEmail = newBizEmail[0]?.businessEmail;

  if (!businessEmail) {
    return NextResponse.json(
      { errors: [{ message: 'Failed to retrieve business email.' }] },
      { status: 500 },
    );
  }

  return NextResponse.json({
    newsletter: { businessEmail },
  });
}
