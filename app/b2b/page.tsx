'use server';
import './b2b.css';
import { JuniorAverageFood } from '../components/math';
import SuccessEmailSubmit from './emailSubmit';
import NewsletterForm from './newsletterForm';
import PDForm from './pdfGeneratorForm';

export default async function B2bPage() {
  const juniorSDFood = await JuniorAverageFood();

  return (
    <section className="b2b-page-container">
      <div>
        <h3>Here you will be able to download the report as PDF</h3>

        <NewsletterForm />
        <br />
      </div>
    </section>
  );
}
