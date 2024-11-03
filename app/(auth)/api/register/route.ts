import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
// import { z } from 'zod';
import {
  createUserInsecure,
  getUserEmailInsecure,
  getUserInsecure,
} from '../../../../database/users';
import {
  registerUserSchema,
  type User,
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
  // 2. Validate the user data with zod
  // 3. Check if user already exist in the database
  // 4. Hash the plain password from the user
  // 5. Save the user information with the hashed password in the database

  // 1. Get the user data from the request
  const requestBody = await request.json();

  // 2. Validate the user data with zod (userSchema we define in users.ts)
  const result = registerUserSchema.safeParse(requestBody);
  // console.log('zod result', result);

  // return the errors we get from a falsy registration
  // zod's outpus is result.error.issues - gives us an array of errors
  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  // 3. Check if the use Email already exist in the database
  const user = await getUserEmailInsecure(result.data.email);

  if (user) {
    return NextResponse.json({
      errors: [
        {
          message: 'This email address is already taken',
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
