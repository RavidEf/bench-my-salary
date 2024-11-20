import './header.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoutButton from '../(auth)/logout/logoutButton';
// import { getValidSessionToken } from '../../database/sessions';
import { getUser } from '../../database/users';
import logo from '../../public/images/bench-my-salary-logo.png';

export default async function Header() {
  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = (await cookies()).get('sessionToken');
  // 2. Check if the sessionToken is still valid
  /*   const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value)); */

  // Display the user name that has a valid token from the DB
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie?.value));

  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/b2b"> For Companies </Link>
              </li>

              <li>
                <Link href="/dashboard"> For Individuals </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" width={120} height={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/b2b"> For Companies </Link>
            </li>

            <li>
              <Link href="/dashboard"> For Individuals </Link>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end-btns">
            <div className="btn-nav-dashboard">
              <Link href="/dashboard" className="btn">
                {' '}
                Dashboard{' '}
              </Link>
            </div>
            <LogoutButton />{' '}
          </div>
        ) : (
          <div className="navbar-end-btns">
            <div className="btn-nav-dashboard">
              <Link href="/register" className="btn">
                Register
              </Link>
            </div>
            <Link href="/login" className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
