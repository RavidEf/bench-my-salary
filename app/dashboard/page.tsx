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
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">The Dashboard page</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
