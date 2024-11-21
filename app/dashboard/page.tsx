import './dashboard.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { getJobFunctions } from '../../database/jobinformation';
import { getValidSessionToken } from '../../database/sessions';
import { getUser } from '../../database/users';
import MaleAvatar from '../../public/images/man-avatar.png';
import FemaleAvatar from '../../public/images/woman-avatar.png';
import {
  handelLinkToEdit,
  handelLinkToResults,
} from '../components/handelLinks';

export default async function DashboardPage() {
  // 1.
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2. get the session token the use provides us in the FE

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // get the user name so we can show it without having the need for a first salary entry
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie?.value));

  // 3. if there is no valid session redirect user to login page

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }

  const jobDetails = await getJobFunctions(sessionTokenCookie.value);
  console.log('JOBDETAILs:', jobDetails);

  return (
    <section className="dashboard-page-container">
      <div className="">
        <div className="dash-h1-container">
          <h1>
            {jobDetails[0]?.userName
              ? `Here is your Salary entry, ${jobDetails[0].userName} `
              : `Add Your Salary, ${user?.userName} `}{' '}
          </h1>
          <h3 className="h3-dashboard">
            {jobDetails[0]?.userName
              ? `Click to view how you compare in the market`
              : `It takes 2 minutes, really.`}
          </h3>
        </div>
        <div className="card-layout">
          <div className="card-div-container">
            {/* Card 1 - Existing Entry */}
            {jobDetails.map((item) => {
              return (
                <div className="card-entry" key={`jobDetails-${item.userId}`}>
                  <div className="avatar-dash-img">
                    <Image
                      alt="avatar-icon"
                      src={item.genderId === 1 ? MaleAvatar : FemaleAvatar}
                      height={100}
                      width={100}
                    />
                  </div>

                  <div className="user-functionSeniority-dash">
                    <b>
                      {item.seniorityLevel}
                      {item.jobFunction}
                    </b>
                  </div>
                  <div className="user-industry-dash">
                    Industry: <b>{jobDetails[0]?.industryCategory}</b>
                  </div>
                  <div className="user-salary-dash">
                    {' '}
                    Salary: <b>{jobDetails[0]?.salary.toLocaleString()}€</b>
                  </div>
                  <div className="user-yrs-dash">
                    {' '}
                    Years of expeirnce:{' '}
                    <b>{jobDetails[0]?.yearsOfExperience}</b>
                  </div>
                  <div className="btns-dashboardPage">
                    <button
                      onClick={handelLinkToResults}
                      className="btn-primary"
                    >
                      View entry
                    </button>
                    <button
                      onClick={handelLinkToEdit}
                      className="btn-primary-edit"
                    >
                      Update Salary
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Card 2 - Add New Entry */}
            {jobDetails.length > 0 ? (
              ''
            ) : (
              <Link href="/dashboard/survey" className="card card-button">
                <div className="icon-container-empty">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h3 className="cta-add-salary">Enter Salary</h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/*  <div className="card" key={`jobDetails-${item.userId}`}>
                  <div className="icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </div>
                  <div className="card-body" key={`jobDetails-${item.userId}`}>
                    <h2>
                      {item.seniorityLevel} {item.jobFunction}
                    </h2>
                    <br />
                    <p>
                      Salary: {item.salary}, yrs of experience:{' '}
                      {item.yearsOfExperience}
                    </p>
                    <div className="card-actions"> */
