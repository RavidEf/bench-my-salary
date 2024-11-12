'use server';
import './results.css';
import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import { getUser } from '../../../database/users';
import {
  GenderAverageFemale,
  GenderAverageMale,
  IndustryAverageConsult,
  IndustryAverageFinance,
  IndustryAverageFood,
  IndustryAverageHealthcare,
  IndustryAveragePharmaceuticals,
  IndustryAverageTech,
  MathAll,
} from '../../components/math';
import BarGraphI from './bargraphs-results';
import BoxPlotGraph from './boxplotgraph';

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
  // calling industry average math functions
  const foodDelivery = await IndustryAverageFood();
  const techAvg = await IndustryAverageTech();
  const consultAvg = await IndustryAverageConsult();
  const pharmaAvg = await IndustryAveragePharmaceuticals();
  const financeAvg = await IndustryAverageFinance();
  const healthAvg = await IndustryAverageHealthcare();

  // calling gender average math functions
  const maleSalAvg = await GenderAverageMale();
  const femaleSalAvg = await GenderAverageFemale();
  console.log('MALEAVG:::', maleSalAvg);

  // Calculate differrence of user salary compared to consulting average
  let percentageDif = 0;
  if (jobDetails[0] !== undefined) {
    percentageDif = ((jobDetails[0].salary - consultAvg) / consultAvg) * 100;
  }
  const percentageDifRound = percentageDif.toFixed(2);

  return (
    <section className="results-container">
      <div className="results-page">
        <div>
          <h1 className="results-h1">Results page</h1>
        </div>
      </div>
      <BarGraphI
        jobDetailsSalary={jobDetails[0]?.salary}
        jobDetailstitle={jobDetails[0]?.jobFunction}
        seniorityAvg={seniorityAvg}
        foodDelivery={foodDelivery}
        techAvg={techAvg}
        consultAvg={consultAvg}
        pharmaAvg={pharmaAvg}
        financeAvg={financeAvg}
        healthAvg={healthAvg}
        maleSalAvg={maleSalAvg}
        femaleSalAvg={femaleSalAvg}
      />
      <div />
      <h1>
        {' '}
        Your salary is {percentageDifRound}% lower compared to the consulting
        industry average
      </h1>
      <br />
      <br />
      <br />

      <br />
      <br />
      <div />
    </section>
  );
}
