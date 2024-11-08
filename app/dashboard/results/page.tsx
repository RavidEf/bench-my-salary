import { cookies } from 'next/headers';
import { getJobFunctionInsecure } from '../../../database/jobinformation';
import { jobFunctionObject } from '../../components/formObjects';

export default async function ResultsPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  const user =
    sessionTokenCookie && (await getJobFunctionInsecure(jobFunctionObject));

  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <h1>Results page</h1>
          <p></p>
        </div>
      </div>
    </section>
  );
}
