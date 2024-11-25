'use server';
import './survey.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import Programmer1 from '../../../public/images/undraw_programmer.svg';
import Programmer2 from '../../../public/images/undraw_proud_coder.svg';
import SurveyForm from './surveyForm';
import UserContainer from './userContainer';

export const metadata = {
  title: 'Survey | Bench My Salary',
  description:
    'Fill out the information of your salary, software developer or backend developer, even iOS developer. Then add your seniority, gender, years of experience and at the end enter your salary in euro.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function SurveyPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // console.log('sessionTokenCookie from page:::', sessionTokenCookie);
  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3.
  const jobDetails = await getJobFunctions(sessionTokenCookie?.value);

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }
  return (
    <div>
      {jobDetails.length > 0 ? (
        <section className="survey-page-container-edit">
          <div>
            <h1 className="h1-surveypage">Edit your salary</h1>
            <div className="survey-flex-edit">
              <div className="survey-user-container">
                <SurveyForm jobUserDetails={jobDetails} />
                <UserContainer jobUserDetails={jobDetails} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="survey-page-container-add">
          <div>
            <h1 className="h1-surveypage">Add your salary details</h1>
            <div className="survey-flex-edit">
              <div>
                <Image src={Programmer1} alt="programmer-image-icon" />
              </div>
              <div className="survey-user-container">
                <SurveyForm jobUserDetails={jobDetails} />
              </div>
              <div>
                <Image
                  className="pogrammer2-image-survey"
                  src={Programmer2}
                  alt="programmer-image-icon"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
