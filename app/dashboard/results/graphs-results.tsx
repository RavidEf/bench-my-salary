'use client';
import './results.css';
import Chart, { CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function BarGraphI(props) {
  Chart.register(CategoryScale);

  return (
    <section className="bar-chart-section">
      <div className="bar-chart">
        <Bar
          data={{
            labels: [props.jobDetailstitle, 'The market average'],
            datasets: [
              {
                label: 'Revenu',
                data: [props.jobDetailsSalary, props.seniorityAvg],
              },
              {
                label: 'Revenu',
                data: [props.jobDetailsSalary, 65000],
              },
            ],
          }}
        />
      </div>
    </section>
  );
}
