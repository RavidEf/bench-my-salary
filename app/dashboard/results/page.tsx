'use server';
import './results.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import { getUser } from '../../../database/users';
import { MathSeniority } from '../../components/math';
import BarGraphI from './graphs-results';

export default async function ResultsPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. get the session token the use provides us in the FE

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // get the user name so we can show it without having the need for a first salary entry
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));

  // 3. if there is no valid session redirect user to login page

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }

  const jobDetails = await getJobFunctions(sessionTokenCookie.value);
  const seniorityAll = await MathSeniority();
  console.log('seniorityAll::::', seniorityAll);

  return (
    <section className="results-container">
      <div className="results-page">
        <div>
          <h1 className="results-h1">Results page</h1>
        </div>
      </div>
      <BarGraphI
        userName={user}
        jobDetailsSalary={jobDetails[0]?.salary}
        jobDetailstitle={jobDetails[0]?.jobFunction}
      />
      <div />
    </section>
  );
}
