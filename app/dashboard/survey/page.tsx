'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import { getJobFunctions } from '../../../database/jobinformation';
import { getValidSessionToken } from '../../../database/sessions';
import SurveyForm from './surveyForm';

export default async function SurveyPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

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
      <SurveyForm jobUserDetails={jobDetails} />
    </div>
  );
}
