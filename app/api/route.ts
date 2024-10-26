import { NextResponse } from 'next/server';
import { z } from 'zod';

type RootResponseBodyGet =
  | {
      animals: string;
    }
  | { error: string };

const userSchema = z.object({
  name: z.string(),
  // id: z.number(),
});

export function GET(): NextResponse<RootResponseBodyGet> {
  return NextResponse.json({ animals: '/api/animal' });
}

export async function POST(
  request: Request,
): Promise<NextResponse<RootResponseBodyGet>> {
  const requestBody = await request.json();

  const result = userSchema.safeParse(requestBody);
  console.log('zod result', result);

  if (!result.success) {
    return NextResponse.json(
      { error: 'You need to send a proper name bro' },
      { status: 400 },
    );
  }
  return NextResponse.json({ animals: 'api/animals' });
}
