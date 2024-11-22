'use client';
import './results.css';
import {
  BarElement,
  Chart as ChartJS,
  layouts,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import Chart, { CategoryScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from 'react';
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
    <section>
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
                  backgroundColor: 'rgba(45, 24, 238, 0.6)', // Light blue color for "Your Salary"
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
                  text: `${props.jobDetailsLevel}${props.jobDetailstitle} compared to the market average`,
                  font: {
                    size: 22, // Customize the font size if desired
                  },
                  padding: {
                    top: 20, // Space above the title
                    bottom: 20, // Space below the title
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
                    text: '', // X-axis title
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
                  beginAtZero: true,
                  max:
                    Math.ceil(
                      Math.max(
                        props.jobDetailsSalary,
                        props.similarProfilesResult,
                      ),
                    ) + 12000,
                },
              },
            }}
            plugins={[ChartDataLabels]} // Enables ChartDataLabels plugin
          />
        </div>
        <br />
        <br />

        {/* ------------ just for the pdf images delete late */}

        {/*   <div className="bar-chart">
          <Bar
            data={{
              labels: ['Industry salary average'],
              datasets: [
                {
                  label: 'Food Delivery Salary average ',
                  data: [Math.ceil(props.leadSDFood)],
                },
                {
                  label: 'Technology Salary average ',
                  data: [Math.ceil(props.leadSDTech)],
                },
                {
                  label: 'Consulting Salary average ',
                  data: [Math.ceil(props.leadSDConsult)],
                },
                {
                  label: 'Pharmaceuticals Salary average ',
                  data: [Math.ceil(props.leadSDPharma)],
                },
                {
                  label: 'Finance and Banking Salary average ',
                  data: [Math.ceil(props.leadSDFinanace)],
                },
                {
                  label: 'Healthcare Salary average ',
                  data: [Math.ceil(props.leadSDHealthcare)],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Lead Full-Stack Developer by Industry',
                  font: {
                    size: 22, // Customize the font size if desired
                  },
                },
              },
            }}
          />
        </div>
 */}
        <div style={{ width: '80%', margin: '0 auto' }}>
          <Line
            data={{
              labels: [
                '1-3 Yrs',
                '4-6 Yrs',
                '7-10 Yrs',
                '11-15 Yrs',
                '+16 Yrs',
              ], // Add labels for the x-axis
              datasets: [
                {
                  label: ' Male Market Average',
                  data: [
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
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Average Salary by Years of Experience: Male vs. Female',
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
                  offset: true,
                  ticks: {
                    padding: 10, // Add padding to create space before the first label
                  },
                },
                y: {
                  // Configure the y-axis
                  display: true,
                  title: {
                    display: true,
                    text: 'Annual Salary (€)', // Add a title for the y-axis
                  },
                  beginAtZero: false,
                  ticks: {
                    callback: function (value) {
                      return '€' + value.toLocaleString();
                    },
                  },
                },
              },
              layout: {
                padding: {
                  left: 30,
                },
              },
            }}
          />
        </div>
        <br />
        <br />
        <br />

        <div className="bar-chart">
          <Bar
            data={{
              labels: ['Industry salary average'],
              datasets: [
                {
                  label: `Your Salary`,
                  data: [props.jobDetailsSalary],
                  backgroundColor: 'rgba(87, 71, 236, 0.6)',
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

        {/* <div className="bar-chart">
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
      </div> */}
      </section>
    </section>
  );
}
