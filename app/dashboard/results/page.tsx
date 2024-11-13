'use server';
import './results.css';
import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { use } from 'react';
import {
  getAllJobsenioritiesInsecure,
  getJobFunctions,
} from '../../../database/jobinformation';
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
} from '../../components/math';
import BarGraphI from './bargraphs-results';

export default async function ResultsPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. get the session token the use provides us in the FE

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // get the user name so we can show it without having the need for a first salary entry
  /* const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value)); */

  // 3. if there is no valid session redirect user to login page

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }

  // query the user data from the DB with the session token
  const userDeatail = await getJobFunctions(sessionTokenCookie.value);
  // console.log('userDeatail::', userDeatail);
  // query all market data from the DB
  async function getMarketData() {
    const marketData = await getAllJobsenioritiesInsecure();
    return marketData;
  }

  // match the user data to the market data
  async function compareWithMarket() {
    const marketData = await getMarketData();

    const similarProfiles = marketData.filter((profile) => {
      return (
        profile.genderId === userDeatail[0]?.genderId &&
        profile.seniorityId === userDeatail[0].seniorityId &&
        profile.jobFunctionId === userDeatail[0].jobFunctionId
      );
    });
    const salaryAvgMarket =
      similarProfiles.reduce((sum, item) => sum + item.salary, 0) /
      similarProfiles.length;

    return salaryAvgMarket;
  }

  const similarProfilesResult = Math.ceil(await compareWithMarket());

  console.log('new log:::', similarProfilesResult);

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

  // Calculate differrence of user salary compared to consulting average
  let percentageDif = 0;
  if (userDeatail[0] !== undefined) {
    percentageDif = ((userDeatail[0].salary - consultAvg) / consultAvg) * 100;
  }
  const percentageDifRound = percentageDif.toFixed(2);

  return (
    <section className="results-container">
      <div className="results-page">
        <div>
          <h1 className="results-h1">Results page</h1>
        </div>
        <br />
        <br />
        <div>
          <p>
            Your salary is {userDeatail[0]?.salary}, the market average for this
            position is: {similarProfilesResult} <br />
            Your salary is {percentageDifRound}% higher compared to the market
            average.
          </p>
        </div>
      </div>
      <BarGraphI
        jobDetailsSalary={userDeatail[0]?.salary}
        jobDetailstitle={userDeatail[0]?.jobFunction}
        jobDetailsLevel={userDeatail[0]?.seniorityLevel}
        foodDelivery={foodDelivery}
        techAvg={techAvg}
        consultAvg={consultAvg}
        pharmaAvg={pharmaAvg}
        financeAvg={financeAvg}
        healthAvg={healthAvg}
        maleSalAvg={maleSalAvg}
        femaleSalAvg={femaleSalAvg}
        similarProfilesResult={similarProfilesResult}
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
