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
  LeadAverageConsult,
  LeadAverageFinance,
  LeadAverageFood,
  LeadAverageHealthcare,
  LeadAveragePharma,
  LeadAverageTechnology,
  MidAverageConsult,
  MidAverageFinance,
  MidAverageFood,
  MidAverageHealthcare,
  MidAveragePharma,
  MidAverageTechnology,
  percentageDifBySeniorityTitle,
  PrincipalAverageConsult,
  PrincipalAverageFinance,
  PrincipalAverageFood,
  PrincipalAverageHealthcare,
  PrincipalAveragePharma,
  PrincipalAverageTechnology,
  SeniorAverageConsult,
  SeniorAverageFinance,
  SeniorAverageFood,
  SeniorAverageHealthcare,
  SeniorAveragePharma,
  SeniorAverageTechnology,
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

    const minValueMArket = Math.min(
      ...similarProfiles.map((item) => item.salary),
    );
    const maxValueMArket = Math.max(
      ...similarProfiles.map((item) => item.salary),
    );

    return { salaryAvgMarket, minValueMArket, maxValueMArket };
  }

  const { salaryAvgMarket, minValueMArket, maxValueMArket } =
    await compareWithMarket();

  /* console.log('avg market:::', salaryAvgMarket);
  console.log('Max market:::', maxValueMArket);
  console.log('Min market:::', minValueMArket);
 */
  // industry avg only for SD positions Junior -----------
  const juniorSDFood = await JuniorAverageFood();
  const juniorSDTech = await JuniorAverageTechnology();
  const juniorSDConsult = await JuniorAverageConsult();
  const juniorSDPharma = await JuniorAveragePharma();
  const juniorSDFinanace = await JuniorAverageFinance();
  const juniorSDHealthcare = await JuniorAverageHealthcare();

  // industry avg only for SD positions midlevel -----------
  const midSDFood = await MidAverageFood();
  const midSDTech = await MidAverageTechnology();
  const midSDConsult = await MidAverageConsult();
  const midSDPharma = await MidAveragePharma();
  const midSDFinanace = await MidAverageFinance();
  const midSDHealthcare = await MidAverageHealthcare();

  // industry avg only for SD positions senior -----------
  const seniorSDFood = await SeniorAverageFood();
  const seniorSDTech = await SeniorAverageTechnology();
  const seniorSDConsult = await SeniorAverageConsult();
  const seniorSDPharma = await SeniorAveragePharma();
  const seniorSDFinanace = await SeniorAverageFinance();
  const seniorSDHealthcare = await SeniorAverageHealthcare();

  // industry avg only for SD positions Principle -----------
  const princSDFood = await PrincipalAverageFood();
  const princSDTech = await PrincipalAverageTechnology();
  const princSDConsult = await PrincipalAverageConsult();
  const princSDPharma = await PrincipalAveragePharma();
  const princSDFinanace = await PrincipalAverageFinance();
  const princSDHealthcare = await PrincipalAverageHealthcare();

  // industry avg only for SD positions Lead -----------
  const leadSDFood = await LeadAverageFood();
  const leadSDTech = await LeadAverageTechnology();
  const leadSDConsult = await LeadAverageConsult();
  const leadSDPharma = await LeadAveragePharma();
  const leadSDFinanace = await LeadAverageFinance();
  const leadSDHealthcare = await LeadAverageHealthcare();

  // calling industry average math functions
  const foodDelivery = await IndustryAverageFood();
  const techAvg = await IndustryAverageTech();
  const consultAvg = await IndustryAverageConsult();
  const pharmaAvg = await IndustryAveragePharmaceuticals();
  const financeAvg = await IndustryAverageFinance();
  const healthAvg = await IndustryAverageHealthcare();

  console.log('foodDelivery:::', foodDelivery);
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
  // percetange change
  // const percentageDifRound = percentageDif.toFixed(2);

  return (
    <section className="results-container">
      <div className="results-header">
        <div>
          <h1 className="results-h1">Salary Comparision</h1>
        </div>
        <br />
        <br />
        <div className="insights-text">
          <p>
            The average salary as a{' '}
            <b>
              {userDeatail[0]?.seniorityLevel}
              {userDeatail[0]?.jobFunction}
            </b>{' '}
            in Austria is €<b>{salaryAvgMarket.toLocaleString()}</b> gross per
            year.
            <br />
            Your salary is{' '}
            <b>
              {percentageDifMarketAvg.toLocaleString()}%{' '}
              {percentageDifMarketAvg > 0
                ? `higher compared to the
            market average. Hurray! you rock!`
                : `lower compared to the
            market average.`}
            </b>
          </p>
          <br />
          <p>Checkout the graphs below for more insights.</p>
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
        salaryAvgMarket={salaryAvgMarket}
        minValueMArket={minValueMArket}
        maxValueMArket={maxValueMArket}
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
        seniorSDFood={seniorSDFood}
        seniorSDTech={seniorSDTech}
        seniorSDConsult={seniorSDConsult}
        seniorSDPharma={seniorSDPharma}
        seniorSDFinanace={seniorSDFinanace}
        seniorSDHealthcare={seniorSDHealthcare}
        princSDFood={princSDFood}
        princSDTech={princSDTech}
        princSDConsult={princSDConsult}
        princSDPharma={princSDPharma}
        princSDFinanace={princSDFinanace}
        princSDHealthcare={princSDHealthcare}
        leadSDFood={leadSDFood}
        leadSDConsult={leadSDConsult}
        leadSDTech={leadSDTech}
        leadSDPharma={leadSDPharma}
        leadSDFinanace={leadSDFinanace}
        leadSDHealthcare={leadSDHealthcare}
      />
      <div />

      {/*   <div className="box-chart-container">
        <div className="box-chart-Large-box">
          <div className="Bar-left">
            <div className="line-female" />
          </div>
          <div className="Bar-middle">
            <div className="line-user">
              <div className="user-salary">
                <b>{userDeatail[0]?.salary.toLocaleString()} €</b>
                Average Salary
              </div>
            </div>
          </div>
          <div className="Bar-right">
            <div className="line-avg" />
            <div className="line-male" />
          </div>
        </div>
      </div> */}

      <br />
      <br />
      <br />

      <br />
      <br />
      <div />
    </section>
  );
}
