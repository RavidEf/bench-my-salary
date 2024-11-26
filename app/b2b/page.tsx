import './b2b.css';
import Image from 'next/image';
import ReportImage from '../../public/images/undraw_data_reports_706v.svg';
import NewsletterForm from './newsletterForm';

export const metadata = {
  title: 'Salary Report | Bench My Salary - Developer Salary Report',
  description:
    'Here you can find the most up to date salary report for developers in Europe. See how software developers are paid across diferrent industries and seniority levels.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function B2bPage() {
  return (
    <section className="b2b-page-container">
      <div className="hero-b2b">
        <div className="hero-b2b-headline">
          <h1 className="h1-b2b">The Developer Salary Report</h1>
          <h3>
            Get the most up to date Developer Salary Report.
            <br />
            Backed up by +25,000 developers.
          </h3>
        </div>
        <div className="hero-b2b-image">
          <Image src={ReportImage} alt="report-image-b2b-hero" />
        </div>
      </div>
      <div className="NL-b2b-div">
        <h3>Here you will be able to download the report as PDF</h3>
        <NewsletterForm />
      </div>
      <br />
    </section>
  );
}
