'use server';
import './b2b.css';
import { JuniorAverageFood } from '../components/math';
import PDForm from './pdfGeneratorForm';

export default async function B2bPage() {
  const juniorSDFood = await JuniorAverageFood();
  console.log('juniorfood:::', juniorSDFood);

  return (
    <section className="b2b-page-container">
      <div>
        <h3>Here you will be able to download the report as PDF</h3>
        This page is for employers and our Business partners
        <PDForm juniorSDFood={juniorSDFood} />
      </div>
    </section>
  );
}
