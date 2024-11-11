'use client';
import Chart, { CategoryScale } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function BarGraphI(props) {
  Chart.register(CategoryScale);
  return (
    <section>
      <div className="chart-bar">
        <Bar
          data={{
            labels: ['A', 'B'],
            datasets: [
              {
                label: 'Revenu',
                data: [props.salary, 300],
              },
            ],
          }}
        />
      </div>
    </section>
  );
}
