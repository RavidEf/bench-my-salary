'use server';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import { getUser } from '../../../database/users';
import BarGraphI from './graphs-results';

export default async function ResultsPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. get the session token the use provides us in the FE

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // get the user name so we can show it without having the need for a first salary entry
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie?.value));

  // 3. if there is no valid session redirect user to login page

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }

  const jobDetails = await getJobFunctions(sessionTokenCookie.value);

  return (
    <section>
      <div className="hero">
        <div>
          <h1>Results page</h1>
        </div>
      </div>
      <BarGraphI jobDetails={jobDetails[0]?.salary} />
    </section>
  );
}
