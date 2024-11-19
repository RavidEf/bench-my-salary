'use server';
import './survey.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import MaleAvatar from '../../../public/images/man-avatar.png';
import FemaleAvatar from '../../../public/images/woman-avatar.png';
import SurveyForm from './surveyForm';

export default async function SurveyPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // console.log('sessionTokenCookie from page:::', sessionTokenCookie);
  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3.
  const jobDetails = await getJobFunctions(sessionTokenCookie?.value);
  console.log('jobDetails::::', jobDetails);

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }
  return (
    <div className="survey-page-container">
      {jobDetails.length > 0 ? (
        <h1 className="h1-surveypage">Edit your salary</h1>
      ) : (
        <h1 className="h1-surveypage">Add your salary details</h1>
      )}

      <div className="survey-user-container">
        <SurveyForm jobUserDetails={jobDetails} />
        {jobDetails.length > 0 ? (
          <div className="user-container">
            <div className="avatar">
              <Image
                alt="avatar-icon"
                src={jobDetails[0]?.genderId === 1 ? MaleAvatar : FemaleAvatar}
                height={100}
                width={100}
              />
            </div>

            <div className="user-functionSeniority">
              {jobDetails[0]?.seniorityLevel}
              {jobDetails[0]?.jobFunction}
            </div>
            <div className="user-industry">
              Industry: <b>{jobDetails[0]?.industryCategory}</b>
            </div>
            <div className="user-salary">
              {' '}
              Salary: <b>{jobDetails[0]?.salary.toLocaleString()}€</b>
            </div>
            <div className="user-yrs">
              {' '}
              Years of expeirnce: <b>{jobDetails[0]?.yearsOfExperience}</b>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
