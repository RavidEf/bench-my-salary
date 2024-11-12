'use server';
import './results.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import { getUser } from '../../../database/users';
import {
  IndustryAverageConsult,
  IndustryAverageFinance,
  IndustryAverageFood,
  IndustryAverageHealthcare,
  IndustryAveragePharmaceuticals,
  IndustryAverageTech,
  MathAll,
} from '../../components/math';
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
  const seniorityAvg = await MathAll();
  console.log('seniorityAll::::', Math.ceil(seniorityAvg));
  const foodDelivery = await IndustryAverageFood();
  console.log('foodDeliveryAverage::::', Math.ceil(foodDelivery));
  const techAvg = await IndustryAverageTech();
  console.log('TechAvg::::', Math.ceil(techAvg));
  const consultAvg = await IndustryAverageConsult();
  const pharmaAvg = await IndustryAveragePharmaceuticals();
  const financeAvg = await IndustryAverageFinance();
  const healthAvg = await IndustryAverageHealthcare();

  return (
    <section className="results-container">
      <div className="results-page">
        <div>
          <h1 className="results-h1">Results page</h1>
        </div>
      </div>
      <BarGraphI
        userName={user}
        jobDetailsSalary={jobDetails[1]?.salary}
        jobDetailstitle={jobDetails[0]?.jobFunction}
        seniorityAvg={seniorityAvg}
        foodDelivery={foodDelivery}
        techAvg={techAvg}
        consultAvg={consultAvg}
        pharmaAvg={pharmaAvg}
        financeAvg={financeAvg}
        healthAvg={healthAvg}
      />
      <div />
    </section>
  );
}
