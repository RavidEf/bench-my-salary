/* 'use client';
import {
  BoxAndWiskers,
  BoxPlotChart,
  BoxPlotController,
} from '@sgratzl/chartjs-chart-boxplot';
import { CategoryScale, Chart as ChartJS, LinearScale } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BoxPlotGraph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BoxPlotController,
    BoxAndWiskers,
  );

  const data = {
    labels: ['Sample'],
    datasets: [
      {
        label: 'Box Plot',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
        outlierColor: '#999999',
        data: [
          [45000, 50000, 55000, 62000, 78000], // Replace with your own data points
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bar-chart-section">
      <div className="bar-chart">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
 */
