import type { NextResponse } from 'next/server';
import {
  type BizEmailType,
  bizFormSchema,
} from '../../../migrations/00013-createtablebusinessemail';

export type NewsletterResponseBody =
| {
  newsletter: BizEmailType;
}
| {
  {errors: {message: string } []};
}

export async function POST (
  request: Request,
): Promise<NextResponse<NewsletterResponseBody>> {

const requestBody = await request.json();
console.log('REQUEST BODY:', requestBody);


const result = bizFormSchema.safeParse(requestBody)
}
