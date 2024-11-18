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
  JuniorAverageConsult,
  JuniorAverageFinance,
  JuniorAverageFood,
  JuniorAverageHealthcare,
  JuniorAveragePharma,
  JuniorAverageTechnology,
  MidAverageConsult,
  MidAverageFinance,
  MidAverageFood,
  MidAverageHealthcare,
  MidAveragePharma,
  MidAverageTechnology,
  percentageDifBySeniorityTitle,
  YearsofexperienceJunior,
  YearsofexperienceJuniorFemale,
  YearsofexperienceJuniorMale,
  YearsofexperienceLead,
  YearsofexperienceLeadFemale,
  YearsofexperienceLeadMale,
  YearsofexperienceMid,
  YearsofexperienceMidFemale,
  YearsofexperienceMidMale,
  YearsofexperiencePrinciple,
  YearsofexperiencePrincipleFemale,
  YearsofexperiencePrincipleMale,
  YearsofexperienceSenior,
  YearsofexperienceSeniorFemale,
  YearsofexperienceSeniorMale,
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

  // industry avg only for SD positions
  const juniorSDFood = await JuniorAverageFood();
  const juniorSDTech = await JuniorAverageTechnology();
  const juniorSDConsult = await JuniorAverageConsult();
  const juniorSDPharma = await JuniorAveragePharma();
  const juniorSDFinanace = await JuniorAverageFinance();
  const juniorSDHealthcare = await JuniorAverageHealthcare();

  // industry avg only for SD positions
  const midSDFood = await MidAverageFood();
  const midSDTech = await MidAverageTechnology();
  const midSDConsult = await MidAverageConsult();
  const midSDPharma = await MidAveragePharma();
  const midSDFinanace = await MidAverageFinance();
  const midSDHealthcare = await MidAverageHealthcare();

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

  // calling salary average by Yrs
  const salaryAvgJunior = Math.ceil(await YearsofexperienceJunior());
  const salaryAvgMid = Math.ceil(await YearsofexperienceMid());
  const salaryAvgSenior = Math.ceil(await YearsofexperienceSenior());
  const salaryAvgPrincple = Math.ceil(await YearsofexperiencePrinciple());
  const salaryAvgLead = Math.ceil(await YearsofexperienceLead());

  // calling salary average by Yrs && Male
  const salaryAvgJuniorMale = Math.ceil(await YearsofexperienceJuniorMale());
  const salaryAvgMidMale = Math.ceil(await YearsofexperienceMidMale());
  const salaryAvgSeniorMale = Math.ceil(await YearsofexperienceSeniorMale());
  const salaryAvgPrincpleMale = Math.ceil(
    await YearsofexperiencePrincipleMale(),
  );
  const salaryAvgLeadMale = Math.ceil(await YearsofexperienceLeadMale());

  // calling salary average by Yrs && Female
  const salaryAvgJuniorFemale = Math.ceil(
    await YearsofexperienceJuniorFemale(),
  );
  const salaryAvgMidFemale = Math.ceil(await YearsofexperienceMidFemale());
  const salaryAvgSeniorFemale = Math.ceil(
    await YearsofexperienceSeniorFemale(),
  );
  const salaryAvgPrincpleFemale = Math.ceil(
    await YearsofexperiencePrincipleFemale(),
  );
  const salaryAvgLeadFemale = Math.ceil(await YearsofexperienceLeadFemale());

  // Calculate differrence of user salary compared to consulting average
  const percentageDifMarketAvg = await percentageDifBySeniorityTitle();
  let percentageDif = 0;
  if (userDeatail[0] !== undefined) {
    percentageDif = ((userDeatail[0].salary - consultAvg) / consultAvg) * 100;
  }
  const percentageDifRound = percentageDif.toFixed(2);

  return (
    <section className="results-container">
      <div className="results-page">
        <div className="box-chart-container">
          <div className="box-chart-Large-box">
            <div className="Bar-left" />
            <div className="Bar-middle" />
            <div className="Bar-right" />
            <div className="line-female" />
            <div className="line-user" />
            <div className="line-avg" />
            <div className="line-male" />
          </div>
        </div>
      </div>

      <div className="results-page">
        <div>
          <h1 className="results-h1">Results page</h1>
        </div>
        <br />
        <br />
        <div>
          <p>
            Your salary is {userDeatail[0]?.salary.toLocaleString()}€, the
            market average for this position is:{' '}
            {similarProfilesResult.toLocaleString()}€ <br />
            Your salary is {percentageDifMarketAvg.toLocaleString()}%{' '}
            {percentageDifMarketAvg > 0
              ? `higher compared to the
            market average. Hurray! you rock!`
              : `lower compared to the
            market average. You should do something.`}
          </p>
          <br />
          <br />
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
        salaryAvgJunior={salaryAvgJunior}
        salaryAvgMid={salaryAvgMid}
        salaryAvgSenior={salaryAvgSenior}
        salaryAvgPrincple={salaryAvgPrincple}
        salaryAvgLead={salaryAvgLead}
        salaryAvgJuniorMale={salaryAvgJuniorMale}
        salaryAvgMidMale={salaryAvgMidMale}
        salaryAvgSeniorMale={salaryAvgSeniorMale}
        salaryAvgPrincpleMale={salaryAvgPrincpleMale}
        salaryAvgLeadMale={salaryAvgLeadMale}
        salaryAvgJuniorFemale={salaryAvgJuniorFemale}
        salaryAvgMidFemale={salaryAvgMidFemale}
        salaryAvgSeniorFemale={salaryAvgSeniorFemale}
        salaryAvgPrincpleFemale={salaryAvgPrincpleFemale}
        salaryAvgLeadFemale={salaryAvgLeadFemale}
        juniorSDFood={juniorSDFood}
        juniorSDTech={juniorSDTech}
        juniorSDConsult={juniorSDConsult}
        juniorSDPharma={juniorSDPharma}
        juniorSDFinanace={juniorSDFinanace}
        juniorSDHealthcare={juniorSDHealthcare}
        midSDFood={midSDFood}
        midSDTech={midSDTech}
        midSDConsult={midSDConsult}
        midSDPharma={midSDPharma}
        midSDFinanace={midSDFinanace}
        midSDHealthcare={midSDHealthcare}
      />
      <div />
      {/* <h1>
        {' '}
        Your salary is {percentageDifRound}% lower compared to the consulting
        industry average
      </h1> */}
      <br />
      <br />
      <br />

      <br />
      <br />
      <div />
    </section>
  );
}
