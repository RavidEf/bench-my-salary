import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createSessionInsecure } from '../../../../database/sessions';
import { getUserWithPasswordHashInsecure } from '../../../../database/users';
import {
  loginSchema,
  type User,
} from '../../../../migrations/00000-createtableusers';
import { secureCookieOptions } from '../../../../util/cookies';

export type LoginResponseBody =
  | {
      user: { email: User['email'] };
    }
  | { errors: { message: string }[] };

export async function POST(
  request: Request,
): Promise<NextResponse<LoginResponseBody>> {
  // Task: Implement the user Login workflow
  // 1. Get the user data from the request
  // 2. Validate the user data with zod
  // 3. Varify the user credentials
  // 4. Validate the user password by comparing with hased password

  // 1. Get the user data from the request
  const requestBody = await request.json();

  // 2. Validate the user data with zod

  const result = loginSchema.safeParse(requestBody);
  // console.log('zod result', result);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues }, { status: 400 });
  }

  // 3. Varify the user credentials
  const userWithPasswordHash = await getUserWithPasswordHashInsecure(
    result.data.email,
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

  // At this stage we already confirm that the user correct
  // 5. Create a token
  // 6. Create the session record
  // 7. Send the new cookie in the headers
  // 8. Return the new user infromation without the password hash

  // 5. Create a token
  const token = crypto.randomBytes(100).toString('base64');
  console.log('our token:', token);
  // 6. Create the session record
  const session = await createSessionInsecure(userWithPasswordHash.id, token);

  if (!session) {
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Problem creating session',
          },
        ],
      },
      {
        status: 400,
      },
    );
  }
  // 7. Send the new cookie in the headers
  (await cookies()).set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });
  // 8. Return the new user infromation without the password hash

  return NextResponse.json({
    user: { email: userWithPasswordHash.email },
  });
}
