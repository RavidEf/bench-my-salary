import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
// import { z } from 'zod';
import {
  createUserInsecure,
  getUserInsecure,
} from '../../../../database/users';
import {
  type User,
  userSchema,
} from '../../../../migrations/00000-createtableusers';

export type RegisterResponseBody =
  | {
      user: User;
    }
  | { errors: { message: string }[] };

export async function POST(
  request: Request,
): Promise<NextResponse<RegisterResponseBody>> {
  // Task: Implement the user registration workflow

  // 1. Get the user data from the request
  const requestBody = await request.json();

  // 2. Validate the user data with zod

  const result = userSchema.safeParse(requestBody);
  // console.log('zod result', result);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  // 3. Check if user already exist in the database
  const user = await getUserInsecure(result.data.username);

  if (user) {
    return NextResponse.json({
      errors: [
        {
          message: 'This user name is already taken',
        },
      ],
    });
  }

  // This is where you do confirm password

  // 4. Hash the plain password from the user
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 5. Save the user information with the hashed password in the database
  const newUser = await createUserInsecure(
    result.data.username,
    result.data.email,
    passwordHash,
  );

  if (!newUser) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Registration failed',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }
  return NextResponse.json({ user: newUser });
}
