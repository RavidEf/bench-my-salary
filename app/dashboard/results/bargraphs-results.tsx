'use client';
import './results.css';
import { BarElement, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import Chart, { CategoryScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Line, Pie } from 'react-chartjs-2';
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
        <div
          className="bar-chart-container-compare"
          style={{ width: '80%', margin: '0 auto' }}
        >
          {' '}
          {/* Center the chart on the page */}
          <Bar
            data={{
              labels: [`${props.jobDetailsLevel} ${props.jobDetailstitle}`],
              datasets: [
                // "Your Salary" Bar (Not Stacked)
                {
                  label: 'Your Salary',
                  data: [props.jobDetailsSalary], // Place it in the first position
                  backgroundColor: 'rgba(45, 24, 238, 0.6)', // Blue color for "Your Salary"
                  stack: 'your-salary', // Separate stack group
                },

                {
                  label: 'Average',
                  data: [props.salaryAvgMarket], // Second position
                  backgroundColor: 'rgba(34, 197, 94, 0.6)', // Green for the range between Min and Avg
                  stack: 'market-data', // Stack group for Market Data
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: `${props.jobDetailsLevel} ${props.jobDetailstitle} compared to the market range`,
                  font: { size: 22 },
                  padding: { top: 20, bottom: 20 },
                },
                subtitle: {
                  display: true,
                  text: 'Your Salary compared to the market average for the same role and seniority',
                  font: { size: 15 },
                  color: '#666', // Optional: Subtitle color
                  padding: { bottom: 10 },
                },

                datalabels: {
                  color: 'black',
                  anchor: 'end',
                  align: 'top',
                  formatter: (value) => `${value}€`,
                  font: { weight: 'bold', size: 16 },
                },
              },
              scales: {
                x: {
                  stacked: true, // Enable stacking for x-axis
                },
                y: {
                  stacked: true, // Enable stacking for y-axis
                  title: {
                    display: true,
                    text: 'Annual Salary (€)',
                    font: { size: 14 },
                  },
                  beginAtZero: true,
                  max: Math.ceil(props.salaryAvgMarket) + 12500, // Add padding to the max value
                },
              },
            }}
            plugins={[ChartDataLabels]} // Optional: Use ChartDataLabels for better visualization
          />
        </div>
        <br />
        <br />

        <div
          className="Line-chart-section"
          style={{ width: '80%', margin: '0 auto' }}
        >
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
                subtitle: {
                  display: true,
                  text: 'Graph illustrating the overall database of developer salary for male vs female average by years',
                  font: { size: 15 },
                  color: '#666', // Optional: Subtitle color
                  padding: { bottom: 10 },
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

        <div className="bar-chart-industry">
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
                  backgroundColor: 'rgba(244, 172, 38, 0.6)',
                },
                {
                  label: 'Technology Salary average ',
                  data: [Math.ceil(props.techAvg)],
                  backgroundColor: 'rgba(216, 241, 29, 0.6)',
                },
                {
                  label: 'Consulting Salary average ',
                  data: [Math.ceil(props.consultAvg)],
                  backgroundColor: 'rgba(128, 237, 54, 0.6)',
                },
                {
                  label: 'Pharmaceuticals Salary average ',
                  data: [Math.ceil(props.pharmaAvg)],
                  backgroundColor: 'rgba(91, 237, 223, 0.6)',
                },
                {
                  label: 'Finance and Banking Salary average ',
                  data: [Math.ceil(props.financeAvg)],
                  backgroundColor: 'rgba(202, 73, 254, 0.6)',
                },
                {
                  label: 'Healthcare Salary average ',
                  data: [Math.ceil(props.healthAvg)],
                  backgroundColor: 'rgba(88, 83, 130, 0.6)',
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

        {/* ------ Pie chart -------- */}

        <div className="pie-container">
          <div className="pie-text-box">
            <div>
              <p>
                This chart illustrates the gender distribution among software
                developers in senior roles, such as Principal and Lead
                positions.
              </p>
              <br />
              The data reveals a significant disparity:
              <ul>
                <li>
                  Male developers account for{' '}
                  {Number(props.ratioMaleGender.toFixed(2)) * 100}% of these
                  roles, represented by the larger blue segment of the chart.
                </li>
                <li>
                  Female developers make up just{' '}
                  {Number(props.ratioFemGender.toFixed(2)) * 100}%, as shown in
                  the smaller pink segment.
                </li>
              </ul>
              <p>
                This strong difference highlights the underrepresentation of
                women in leadership roles within the software development
                industry. The data could encourage further discussions on
                promoting diversity and inclusivity in higher-level technical
                positions.
              </p>
            </div>
          </div>
          <div className="pie-chart">
            <Pie
              data={{
                labels: ['Male', 'Female'],
                datasets: [
                  {
                    label: 'Gender Distribution in %',
                    data: [
                      Number(props.ratioMaleGender.toFixed(2)) * 100,
                      Number(props.ratioFemGender.toFixed(2)) * 100,
                    ],
                    backgroundColor: [
                      'rgba(45, 24, 238, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                    ],
                    borderWidth: 10,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Software Developer Gender Distribution for Principal & Lead roles',
                    font: {
                      size: 24,
                    },
                  },
                  datalabels: {
                    display: true, // Enable data labels
                    color: 'black', // Color of the labels
                    font: {
                      weight: 'bold',
                      size: 16,
                    },
                    formatter: (value) => `${value}%`, // Add percentage sign
                    anchor: 'center', // Position the label in the center
                    align: 'center', // Align text in the center
                  },
                },
              }}
            />
          </div>
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
      </section>
    </section>
  );
}
