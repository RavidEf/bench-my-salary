import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import { getValidSessionToken } from '../../database/sessions';

export default async function DashboardPage() {
  // 1.
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2.

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3.

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }
  return (
    <>
      <div>This is the dashboard page</div>
      <div>Here the user will be able to see all their salary entries</div>
    </>
  );
}
