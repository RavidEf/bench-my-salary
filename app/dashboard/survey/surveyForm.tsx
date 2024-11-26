'use client';
import './survey.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { SurveyProps } from '../../../util/propstypes';
import type { MainSurveyResponseBodyPut } from '../../api/jobsinformation/[jobInformationId]/route';
import type { MainSurveyResponseBody } from '../../api/jobsinformation/route';
import {
  genderObject,
  industryObject,
  jobDetailsArray,
  jobFunctionObject,
  seniorityObject,
} from '../../components/formObjects';

export default function SurveyForm(props: SurveyProps) {
  const [jobFunction, setJobFunction] = useState(0);
  const [seniority, setSeniority] = useState(0);
  const [industry, setIndustry] = useState(0);
  const [gender, setGender] = useState(0);
  const [salary, setSalary] = useState('');
  const [yrs, setYrs] = useState(1);
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  const formatWithCommas = (value: string) => {
    // Remove any non-digit characters
    const numbers = value.replace(/[^\d]/g, '');

    // Add commas every 3 digits
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  function formatSalary(salaryString: string) {
    return Number(salaryString.replace(/,/g, ''));
  }
  async function handleMainSurveySubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    formatSalary(salary);

    const response = await fetch('/api/jobsinformation', {
      method: 'POST',
      body: JSON.stringify({
        jobFunction,
        seniority,
        industry,
        gender,
        salary: formatSalary(salary),
        yrs,
      }),
    });
    const data: MainSurveyResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push('/dashboard');
    router.refresh();

    setJobFunction(0);
    setSeniority(0);
    setIndustry(0);
    setGender(0);
    setSalary('');
    setYrs(1);
  }

  async function handleMainSurveyUpdate(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    formatSalary(salary);
    console.log('jobUserDetailsID:::', props.jobUserDetails[0]?.id);

    const response = await fetch(
      `/api/jobsinformation/${props.jobUserDetails[0]?.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          jobFunction,
          seniority,
          industry,
          gender,
          salary: formatSalary(salary),
          yrs,
        }),
      },
    );
    const data: MainSurveyResponseBodyPut = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push('/dashboard');
    router.refresh();

    setJobFunction(0);
    setSeniority(0);
    setIndustry(0);
    setGender(0);
    setSalary('');
    setYrs(1);
  }
  // console.log('jobUserDetailsID:::', props.jobUserDetails[0].id);
  return (
    <section className="main-form-container">
      {props.jobUserDetails.length > 0 ? (
        <div className="form-div-container">
          <form
            className="survey-form"
            onSubmit={async (event) => await handleMainSurveyUpdate(event)}
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Job Function</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={jobFunction}
                onChange={(e) => setJobFunction(Number(e.currentTarget.value))}
              >
                <option value="">Select a Job Function</option>
                {jobDetailsArray[0] &&
                  Object.entries(jobDetailsArray[0]).map(([key, value]) => (
                    <option key={`user-${key}`} value={key}>
                      {value}
                    </option>
                  ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Seniority Level</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={seniority}
                onChange={(e) => setSeniority(Number(e.currentTarget.value))}
              >
                <option value="">Select a Seniority level</option>
                {jobDetailsArray[1] &&
                  Object.entries(jobDetailsArray[1]).map(([key, value]) => (
                    <option key={`user-${key}`} value={key}>
                      {value}
                    </option>
                  ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Industry</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={industry}
                onChange={(e) => setIndustry(Number(e.currentTarget.value))}
              >
                <option value="">Select the industry you are in</option>
                {jobDetailsArray[2] &&
                  Object.entries(jobDetailsArray[2]).map(([key, value]) => (
                    <option key={`user-${key}`} value={key}>
                      {value}
                    </option>
                  ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <select
                className="select select-bordered"
                required
                value={gender}
                onChange={(e) => setGender(Number(e.currentTarget.value))}
              >
                <option value="">Select your gender</option>
                {jobDetailsArray[3] &&
                  Object.entries(jobDetailsArray[3]).map(([key, value]) => (
                    <option key={`user-${key}`} value={key}>
                      {value}
                    </option>
                  ))}
              </select>
            </label>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="salary" className="label">
                <span className="label-text">
                  What is your annual salary in Euro?
                </span>
              </label>
              <input
                id="salary"
                name="salary"
                inputMode="numeric"
                placeholder="55,000"
                className="input input-bordered w-full max-w-xs"
                required
                value={salary}
                onChange={(e) => {
                  const value = e.target.value;
                  setSalary(formatWithCommas(value));
                }}
              />
            </div>
            <label className="ex-yrs">Years of Experience: {yrs}</label>
            <input
              type="range"
              min={1}
              max="20"
              step="1"
              value={yrs}
              className="range"
              onChange={(e) => {
                setYrs(Number(e.target.value));
              }}
            />
            <div className="flex w-2/3 max-w-xs justify-between px-2 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
            </div>
            <br />
            <br />
            <button className="btn btn-primary">Update Salary</button>

            <br />
            <br />
            {errors.map((error) => (
              <div className="text-red-500" key={`error-${error.message}`}>
                <p>{error.message}</p>{' '}
              </div>
            ))}
            <br />
            <br />
          </form>
        </div>
      ) : (
        <div className="form-div-container">
          <form
            className="survey-form"
            onSubmit={async (event) => await handleMainSurveySubmit(event)}
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Job Function</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={jobFunction}
                onChange={(e) => setJobFunction(Number(e.currentTarget.value))}
              >
                <option value="">Select a Job Function</option>
                {Object.entries(jobFunctionObject).map(([value, label]) => (
                  <option key={`user-${value}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Seniority Level</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={seniority}
                onChange={(e) => setSeniority(Number(e.currentTarget.value))}
              >
                <option value="">Select a Seniority level</option>
                {Object.entries(seniorityObject).map(([value, label]) => (
                  <option key={`user-${value}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Industry</span>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                value={industry}
                onChange={(e) => setIndustry(Number(e.currentTarget.value))}
              >
                <option value="">Select the industry you are in</option>
                {Object.entries(industryObject).map(([value, label]) => (
                  <option key={`user-${value}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <select
                className="select select-bordered"
                required
                value={gender}
                onChange={(e) => setGender(Number(e.currentTarget.value))}
              >
                <option value="">Select your gender</option>
                {Object.entries(genderObject).map(([value, label]) => (
                  <option key={`user-${value}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="salary" className="label">
                <span className="label-text">
                  What is your annual salary in Euro?
                </span>
              </label>
              <input
                id="salary"
                inputMode="numeric"
                placeholder="55,000"
                className="input input-bordered w-full max-w-xs"
                required
                value={salary}
                onChange={(e) => {
                  const value = e.target.value;
                  setSalary(formatWithCommas(value));
                }}
              />
            </div>
            <label className="ex-yrs">Years of Experience: {yrs}</label>
            <input
              type="range"
              min={1}
              max="20"
              step="1"
              value={yrs}
              className="range"
              onChange={(e) => {
                setYrs(Number(e.target.value));
              }}
            />
            <div className="flex w-full max-w-xs justify-between px-2 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
            </div>
            <br />
            <br />
            <button className="btn btn-primary">Submit Salary</button>

            <br />
            <br />
            {errors.map((error) => (
              <div className="text-red-500" key={`error-${error.message}`}>
                <p>{error.message}</p>{' '}
              </div>
            ))}
            <br />
            <br />
          </form>
        </div>
      )}
    </section>
  );
}
