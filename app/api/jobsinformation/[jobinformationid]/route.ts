import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { updateJobInfromation } from '../../../../database/jobinformation';
import {
  type JobInformationType,
  mainSurveySchema,
} from '../../../../migrations/00010-createtablejobinformation';

// import { getCookie } from '../../../../util/cookies';

export type JobsParams = {
  params: Promise<{ jobInformationId: string }>;
};

export type MainSurveyResponseBodyPut =
  | {
      survey: Omit<JobInformationType, 'sessionTokenCookie'>;
    }
  | { errors: { message: string }[] };

export async function PUT(
  request: NextRequest,
  { params }: JobsParams,
): Promise<NextResponse<MainSurveyResponseBodyPut>> {
  const requestBody = await request.json();

  const result = mainSurveySchema.safeParse(requestBody);
  // console.log('result::', result);
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
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 4. Update the new survey entry in the DB
  const updateJobInfo =
    sessionTokenCookie &&
    (await updateJobInfromation(sessionTokenCookie.value, {
      id: Number((await params).jobInformationId),
      sessionTokenCookie: sessionTokenCookie.value,
      jobFunctionId: result.data.jobFunction,
      seniorityId: result.data.seniority,
      industryId: result.data.industry,
      genderId: result.data.gender,
      salary: result.data.salary,
      yearsOfExperience: result.data.yrs,
    }));
  if (updateJobInfo) {
    return NextResponse.json({
      survey: updateJobInfo,
    });
  } else {
    return NextResponse.json(
      {
        errors: [{ message: 'Unable to update salary entry.' }],
      },
      {
        status: 400,
      },
    );
  }
}
