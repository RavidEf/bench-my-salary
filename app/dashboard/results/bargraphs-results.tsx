'use client';
import './results.css';
import {
  BarElement,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import Chart, { CategoryScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Line } from 'react-chartjs-2';
import type { BarGraphProps } from '../../../util/propstypes';

export default function BarGraphI(props: BarGraphProps) {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
  );

  return (
    <section className="bar-chart-section">
      <div style={{ width: '80%', margin: '0 auto' }}>
        {' '}
        {/* Center the chart on the page */}
        <Bar
          data={{
            labels: [` ${props.jobDetailsLevel}${props.jobDetailstitle}`],
            datasets: [
              {
                label: 'Your Salary',
                data: [Math.ceil(props.jobDetailsSalary)],
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Light blue color for "Your Salary"
              },
              {
                label: 'Market average',
                data: [Math.ceil(props.similarProfilesResult)],
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Light pink color for "Market average"
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: `${props.jobDetailsLevel} ${props.jobDetailstitle} compared to the market average`,
                font: {
                  size: 22, // Customize the font size if desired
                },
              },
              datalabels: {
                color: 'black', // Label color
                anchor: 'end', // Position the label at the end of each bar
                align: 'top', // Align label at the top of each bar
                formatter: (value) => `${value.toLocaleString()}€`, // Format labels with "€"
                font: {
                  weight: 'bold', // Make labels bold
                  size: 16,
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Industry salary average', // X-axis title
                  font: {
                    size: 14, // Customize font size if desired
                  },
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Annual Salary (€)', // Y-axis title
                  font: {
                    size: 14, // Customize font size if desired
                  },
                },
                beginAtZero: true, // Start y-axis at 0
              },
            },
          }}
          plugins={[ChartDataLabels]} // Enables ChartDataLabels plugin
        />
      </div>

      <div style={{ width: '80%', margin: '0 auto' }}>
        <Line
          data={{
            labels: [
              '0',
              '1-3 Yrs',
              '4-6 Yrs',
              '7-10 Yrs',
              '11-15 Yrs',
              '+16 Yrs',
              '',
            ], // Add labels for the x-axis
            datasets: [
              {
                label: ' Male Market Average',
                data: [
                  30000,
                  props.salaryAvgJuniorMale,
                  props.salaryAvgMidMale,
                  props.salaryAvgSeniorMale,
                  props.salaryAvgPrincpleMale,
                  props.salaryAvgLeadMale,
                ],
                fill: false,
                borderColor: 'rgb(44, 70, 215)',
                tension: 0.1,
              },
              {
                label: 'Market Average',
                data: [
                  30000,
                  props.salaryAvgJunior,
                  props.salaryAvgMid,
                  props.salaryAvgSenior,
                  props.salaryAvgPrincple,
                  props.salaryAvgLead,
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
              {
                label: 'Female Market Average',
                data: [
                  30000,
                  props.salaryAvgJuniorFemale,
                  props.salaryAvgMidFemale,
                  props.salaryAvgSeniorFemale,
                  props.salaryAvgPrincpleFemale,
                  props.salaryAvgLeadFemale,
                ],
                fill: false,
                borderColor: 'rgb(174, 18, 163)',
                tension: 0.1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Average salary Male vs Female',
                font: {
                  size: 20, // Customize the font size if desired
                },
              },
            },
            scales: {
              x: {
                // Configure the x-axis
                display: true,
                title: {
                  display: true,
                  text: 'Years of experience', // Add a title for the x-axis
                },
              },
              y: {
                // Configure the y-axis
                display: true,
                title: {
                  display: true,
                  text: 'Annual Salary (€)', // Add a title for the y-axis
                },
              },
            },
          }}
        />
      </div>

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
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Average salary comparision by industry',
                font: {
                  size: 20, // Customize the font size if desired
                },
              },
            },
          }}
        />
      </div>

      <div className="bar-chart">
        <Bar
          data={{
            labels: ['Industry salary average'],
            datasets: [
              {
                label: 'Your Salary Becca',
                data: [props.jobDetailsSalary],
              },
              {
                label: 'Male Average Salary',
                data: [Math.ceil(props.maleSalAvg)],
              },
              {
                label: 'Female Average Salary',
                data: [Math.ceil(props.femaleSalAvg)],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Senior developers Male vs Female comparision',
                font: {
                  size: 20, // Customize the font size if desired
                },
              },
            },
          }}
        />
      </div>
    </section>
  );
}
