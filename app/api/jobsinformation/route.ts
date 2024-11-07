import { NextResponse } from 'next/server';
import {
  type jobInformationType,
  mainSurveySchema,
} from '../../../migrations/00010-createtablejobinformation';

export type MainSurveyResponseBody =
  | {
      survey: jobInformationType;
    }
  | { errors: { message: string }[] };

export async function POST(
  request: Request,
): Promise<NextResponse<MainSurveyResponseBody>> {
  // Task: Implement the survey entry submittion workflow
  // 1. Get the survey data from the request
  const requestBody = await request.json();
  console.log('REQUEST BODY:', requestBody);

  // 2. Validate the survey data with zod
  const result = mainSurveySchema.safeParse(requestBody);
  console.log('zod result', result);

  if (!result.success) {
    return NextResponse.json(
      {
        erros: result.error.issues,
      },
      {
        status: 400,
      },
    );
  }
  // 3. Varify the survey entries are acceptable

  // 4. Validate the user password by comparing with hased password

  //  return NextResponse.json({ survey: newSurvey });
}
