'use server';
import { cookies } from 'next/headers';
import { deleteSession } from '../../../database/sessions';

export async function logout() {
  // Task: implement the user lgout workflow
  // 1. Get the session from the database based on the token
  const cookieStore = await cookies();

  const token = cookieStore.get('sessionToken');

  if (token) {
    // 2. Delete the session from the database based on the token

    await deleteSession(token.value);

    // 3. Delete the session cookie from the browser

    cookieStore.delete(token.name);
  }

  return;
}
