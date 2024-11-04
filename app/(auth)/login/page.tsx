import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionToken } from '../../../database/sessions';
import LoginForm from './loginFrom';

export default async function LoginPage() {
  // Task: Add redirect to home if user is logged in
  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = (await cookies()).get('sessionToken');
  // 2. Check if the sessionToken is still valid
  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));
  // 3. If the sessionToken cookie is valid, redirect to home

  if (session) {
    redirect('/dashboard');
  }
  // 4. If the sessionToken cookie is invalid or doesn't exist, show the login form
  return (
    <div>
      <LoginForm />
    </div>
  );
}
