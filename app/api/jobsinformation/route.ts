import { NextResponse } from 'next/server';
import { createNewSurveyEntryInsecure } from '../../../database/jobinformation';
import {
  type JobInformationType,
  mainSurveySchema,
} from '../../../migrations/00010-createtablejobinformation';
import { getCookie } from '../../../util/cookies';

export type MainSurveyResponseBody =
  | {
      survey: JobInformationType;
    }
  | { errors: { message: string }[] };

export async function POST(
  request: Request,
): Promise<NextResponse<MainSurveyResponseBody>> {
  // Task: Implement the survey entry submission workflow
  // 1. Get the survey data from the request
  const requestBody = await request.json();
  console.log('REQUEST BODY:', requestBody);

  // 2. Validate the survey data with zod
  const result = mainSurveySchema.safeParse(requestBody);
  console.log('ZOD result', result);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.issues,
      },
      {
        status: 400,
      },
    );
  }

  // 3. Get the token from the cookie
  const sessionsTokenCookie = await getCookie('sessionToken');
  // 3. Create the new survey entry in the DB
  const newSurveyEntry =
    sessionsTokenCookie &&
    (await createNewSurveyEntryInsecure(
      sessionsTokenCookie,
      result.data.jobFunction,
      result.data.seniority,
      result.data.industry,
      result.data.gender,
      result.data.salary,
      result.data.yrs,
    ));

  console.log('NEW SURVEY:', newSurveyEntry);

  if (!newSurveyEntry) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Survey submission faild',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }

  // 4. Validate the user password by comparing with hased password

  return NextResponse.json({ survey: newSurveyEntry });
}
