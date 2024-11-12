'use client';
import './results.css';
import Chart, { CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import type { BarGraphProps } from '../../../util/propstypes';

export default function BarGraphI(props: BarGraphProps) {
  Chart.register(CategoryScale);

  return (
    <section className="bar-chart-section">
      <div className="bar-chart">
        <Bar
          data={{
            labels: ['Industry salary average'],
            datasets: [
              {
                label: 'Your Salary 123',
                data: [props.jobDetailsSalary],
              },
              {
                label: 'Food Delivery Salary average ',
                data: [Math.ceil(props.foodDelivery)],
              },
              {
                label: 'Technology Salary average ',
                data: [Math.ceil(props.techAvg)],
              },
              {
                label: 'Consulting Salary average ',
                data: [Math.ceil(props.consultAvg)],
              },
              {
                label: 'Pharmaceuticals Salary average ',
                data: [Math.ceil(props.pharmaAvg)],
              },
              {
                label: 'Finance and Banking Salary average ',
                data: [Math.ceil(props.financeAvg)],
              },
              {
                label: 'Healthcare Salary average ',
                data: [Math.ceil(props.healthAvg)],
              },
            ],
          }}
        />
      </div>
    </section>
  );
}
