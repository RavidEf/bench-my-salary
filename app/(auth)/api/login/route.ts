import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
// import { z } from 'zod';
import {
  createUserInsecure,
  getUserInsecure,
  getUserWithPasswordHashInsecure,
} from '../../../../database/users';
import {
  type User,
  userSchema,
} from '../../../../migrations/00000-createtableusers';

export type LoginResponseBody =
  | {
      user: { username: User['userName'] };
    }
  | { errors: { message: string }[] };

export async function POST(
  request: Request,
): Promise<NextResponse<LoginResponseBody>> {
  // Task: Implement the user Login workflow

  // 1. Get the user data from the request
  const requestBody = await request.json();

  // 2. Validate the user data with zod

  const result = userSchema.safeParse(requestBody);
  // console.log('zod result', result);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  // 3. Varify the user credentials
  const userWithPasswordHash = await getUserWithPasswordHashInsecure(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json({
      errors: [
        {
          message: 'Email or Password is invalid',
        },
      ],
    });
  }

  // This is where you do confirm password

  // 4. Validate the user password by comparing with hased password
  const isPassValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  if (!isPassValid) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Email or Password is invalid',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }
  return NextResponse.json({
    user: { username: userWithPasswordHash.userName },
  });
}
