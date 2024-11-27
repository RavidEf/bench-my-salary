import './results.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getAllJobsenioritiesInsecure,
  getJobFunctions,
} from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
// import { getUser } from '../../../database/users';
import {
  FemaleSDDistribution,
  GenderAverageFemale,
  GenderAverageMale,
  MaleSDDistribution,
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

export const metadata = {
  title: 'Graphs | Bench My Salary - your salary results',
  description:
    'Here you can find the results of your salary entry. You can see how your developer salary is compared to others in the market and more specifically the average market salary for your developer role.',
  icons: {
    icon: '/favicon.ico',
  },
};

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
  /* -------------------------------------------------------------------------------- */

  // query all market data from the DB
  async function getMarketData() {
    const marketData = await getAllJobsenioritiesInsecure();
    return marketData;
  }

  async function percentageDifBySeniorityTitle() {
    const getAllData = await getAllJobsenioritiesInsecure();
    const matchUserData = getAllData.filter(
      (item) =>
        item.genderId === userDeatail[0]?.genderId &&
        item.seniorityId === userDeatail[0].seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );

    const marketAvg =
      matchUserData.reduce((sum, item) => sum + item.salary, 0) /
      matchUserData.length;

    let percentageDif = 0;
    if (userDeatail[0] !== undefined) {
      percentageDif = ((userDeatail[0].salary - marketAvg) / marketAvg) * 100;
    }

    return percentageDif;
  }

  /* -------------------------------------------------------------------------------- */
  // find the percentage dif of the user to the industry they are in

  async function percentageDifbyindustrySeniority() {
    const getAllData = await getAllJobsenioritiesInsecure();
    const matchUserData = getAllData.filter(
      (item) =>
        item.industryId === userDeatail[0]?.industryId &&
        item.seniorityId === userDeatail[0].seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );

    const marketAvg =
      matchUserData.reduce((sum, item) => sum + item.salary, 0) /
      matchUserData.length;

    let percentageDif = 0;
    if (userDeatail[0] !== undefined) {
      percentageDif = ((userDeatail[0].salary - marketAvg) / marketAvg) * 100;
    }

    return percentageDif;
  }
  /* -------------------------------------------------------------------------------- */

  // Average of salaries in food delivery industry
  async function IndustryAverageFood() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    // console.log('userDetails from math:::', jobSeniority.length);

    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 1 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );

    // First map to get all salaries, then reduce to get the sum

    const totalSalaryFoodDelivery = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAverageFoodDelivery =
      totalSalaryFoodDelivery / jobFilterIndustry.length;

    return salAverageFoodDelivery;
  }

  // Average of salaries in the Technology industry
  async function IndustryAverageTech() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 2 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );
    // First map to get all salaries, then reduce to get the sum

    const totalSalaryTechnology = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAverageTechnology =
      totalSalaryTechnology / jobFilterIndustry.length;

    return salAverageTechnology;
  }

  // Average of salaries in the Consulting industry
  async function IndustryAverageConsult() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 3 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );
    // First map to get all salaries, then reduce to get the sum

    const totalSalaryConsulting = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAverageConsulting =
      totalSalaryConsulting / jobFilterIndustry.length;

    return salAverageConsulting;
  }

  // Average of salaries in the Pharmaceuticals industry
  async function IndustryAveragePharmaceuticals() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 4 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );
    // First map to get all salaries, then reduce to get the sum

    const totalSalaryPharmaceuticals = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAveragePharma =
      totalSalaryPharmaceuticals / jobFilterIndustry.length;

    return salAveragePharma;
  }

  // Average of salaries in the Finance and Banking industry
  async function IndustryAverageFinance() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 5 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );
    // First map to get all salaries, then reduce to get the sum

    const totalSalaryFinan = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAverageFinanace = totalSalaryFinan / jobFilterIndustry.length;

    return salAverageFinanace;
  }

  // Average of salaries in the Healthcare industry
  async function IndustryAverageHealthcare() {
    const jobSeniority = await getAllJobsenioritiesInsecure();
    //
    const jobFilterIndustry = jobSeniority.filter(
      (item) =>
        item.industryId === 6 &&
        item.seniorityId === userDeatail[0]?.seniorityId &&
        item.jobFunctionId === userDeatail[0].jobFunctionId,
    );
    // First map to get all salaries, then reduce to get the sum

    const totalSalaryHealth = jobFilterIndustry.reduce(
      (sum, item) => sum + item.salary,
      0,
    );

    // Calculate average by dividing by the number of items
    const salAverageHealth: number =
      totalSalaryHealth / jobFilterIndustry.length;

    return salAverageHealth;
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

  // Male and Female distribution as SD
  const maleSD = await MaleSDDistribution();
  const femaleSD = await FemaleSDDistribution();
  const maleDis = maleSD + 26;
  const ratioFemGender = femaleSD / (maleDis + femaleSD);
  const ratioMaleGender = maleDis / (maleDis + femaleSD);

  // Calculate differrence of user salary compared to consulting average
  const percentageDifMarketAvg = await percentageDifBySeniorityTitle();
  const percentageDifIndustryAvg = await percentageDifbyindustrySeniority();
  /*   let percentageDif = 0;
  if (userDeatail[0] !== undefined) {
    percentageDif = ((userDeatail[0].salary - consultAvg) / consultAvg) * 100;
  } */
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
            in Austria is €<b>{salaryAvgMarket.toFixed(0).toLocaleString()}</b>{' '}
            gross per year.
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
      <div className="mobile-disclaimer">
        *In order to view the graphs please use a larger screen, such as a
        desktop computer.
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
        ratioMaleGender={ratioMaleGender}
        ratioFemGender={ratioFemGender}
        percentageDifIndustryAvg={percentageDifIndustryAvg}
      />
      <div />

      <br />
      <br />
      <div />
    </section>
  );
}
