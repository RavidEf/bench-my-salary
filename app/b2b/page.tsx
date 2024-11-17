'use server';
import './b2b.css';
import ReportForm from './downloadReportForm';

export default async function B2bPage() {
  return (
    <section className="b2b-page-container">
      <div>
        <h3>Here you will be able to download the report as PDF</h3>
        This page is for employers and our Business partners
        <ReportForm />
      </div>
    </section>
  );
}
