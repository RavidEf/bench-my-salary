import { NextRequest, NextResponse } from 'next/server';
import {
  type JobInformationType,
  mainSurveySchema,
} from '../../../../migrations/00010-createtablejobinformation';

export type MainSurveyResponseBodyPut =
  | {
      survey: JobInformationType;
    }
  | { errors: { message: string }[] };

export async function PUT(
  request: NextRequest,
  { params }: AnimalParams,
): Promise<NextResponse<MainSurveyResponseBodyPut>> {
  const requestBody = await request.json();

  const result = mainSurveySchema.safeParse(requestBody);

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

  const updateAnimal = await updateJobInformation({
    id: Number(params.jobInformationId),
  });
}
