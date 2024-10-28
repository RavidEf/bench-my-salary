import { get } from 'http';
import { getJobInformationInsecure } from '../database/jobinformation';
import CarouselCompanies from './components/carousel';
import { handelClickToLogin } from './components/navigationlogin';

export default async function Home() {
  const jobInfo = await getJobInformationInsecure();
  console.log('jobInfo results:', jobInfo);

  const avg =
    (jobInfo[0].income +
      jobInfo[1].income +
      jobInfo[2].income +
      jobInfo[3].income) /
    4;
  return (
    <>
      <section>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Salary Benchmark for developers{' '}
              </h1>
              <p className="py-6">
                Check your worth, add your salary and see if your are getting
                properly compensated compared to the market.
              </p>
              <p>
                last salary entered 4 minutes ago:
                <br />
                {jobInfo[0].jobTitle}, {jobInfo[0].income}€
                <br />
                <br />
                The average salary amount of all entries:
                {avg}€
                <br />
              </p>
              <button className="btn btn-primary" onClick={handelClickToLogin}>
                Add your salary
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <CarouselCompanies />
      </div>
    </>
  );
}
