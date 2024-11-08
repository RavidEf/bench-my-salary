import './dashboard.css';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { getValidSessionToken } from '../../database/sessions';
import { handelClickToSurvey } from '../components/navigationlogin';

export default async function DashboardPage() {
  // 1.
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  // 2.

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3.

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }
  // Dashboard.jsx
  return (
    <section>
      <div className="hero">
        <div className="hero-content">
          <h1>The Dashboard page</h1>
          <div className="card-container">
            {/* Card 1 - Existing Entry */}
            <div className="card">
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
              <div className="card-body">
                <h2>Junior frontend web developer</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn-primary">View entry</button>
                  <button className="btn-primary-edit">Edit salary</button>
                </div>
              </div>
            </div>

            {/* Card 2 - Add New Entry */}
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
              <p className="cta-add-salary">Add Salary Entry</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
