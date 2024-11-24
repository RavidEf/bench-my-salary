import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/images/bench-my-salary-logo-white.png';
import GitHub from '../../public/images/github(1).png';
import LinkedIn from '../../public/images/linkedin(2).png';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <Image src={logo} alt="logo" width={125} height={125} />
        <p>
          Bench My Salary GmbH.
          <br />
          Developer firends since 2024.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.linkedin.com/in/ravid-efroni" target="_blank">
            <Image
              src={LinkedIn}
              alt="linkedin-logo-icon"
              width={30}
              height={30}
              style={{ backgroundColor: '#939aa3', borderRadius: '5px' }}
            />
          </Link>
          <Link href="https://github.com/RavidEf" target="_blank">
            <Image
              src={GitHub}
              alt="linkedin-logo-icon"
              width={30}
              height={30}
              style={{ backgroundColor: '#939aa3', borderRadius: '5px' }}
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
