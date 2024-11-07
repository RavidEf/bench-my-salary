'use client';
import './survey.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { LoginResponseBody } from '../../(auth)/api/login/route';

export default function SurveyForm() {
  const [jobFunction, setJobFunction] = useState('');
  const [seniority, setSeniority] = useState('');
  const [industry, setIndustry] = useState('');
  const [gender, setGender] = useState('');
  const [salary, setSalary] = useState('');
  const [yrs, setYrs] = useState(1);

  const router = useRouter();

  const formatWithCommas = (value: string) => {
    // Remove any non-digit characters
    const numbers = value.replace(/[^\d]/g, '');

    // Add commas every 3 digits
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  async function handleMainSurvey(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({
        jobFunction,
        seniority,
        industry,
        gender,
        salary,
        yrs,
      }),
    });
    const data: LoginResponseBody = await response.json();

    /* if ('errors' in data) {
      setErrors(data.errors);
      return;
    } */

    router.push('/dashboard');
    router.refresh();

    setJobFunction('');
    setSeniority('');
    setIndustry('');
    setGender('');
    setSalary('');
    setYrs(1);
  }

  return (
    <section className="survey-page-container">
      Here you will enter your salary
      <h1>Add your salary details</h1>
      <div>
        You are a <b>{gender}</b> <b>{seniority}</b> <b>{jobFunction}</b> with{' '}
        <b>{yrs}</b> years of expeience, working in <b>{industry}</b> (good for
        you!!) and making <b>{salary}</b>€ a year, nice.
      </div>
      <div className="w-full max-w-xs">
        <form
          className="survey-form"
          onSubmit={async (event) => await handleMainSurvey(event)}
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Function</span>
            </div>
            <select
              className="select select-bordered w-full max-w-xs"
              required
              value={jobFunction}
              onChange={(e) => setJobFunction(e.currentTarget.value)}
            >
              <option value="Frontend web Developer">
                Frontend web Developer
              </option>
              <option value="Backend web Developer">
                Backend web Developer
              </option>
              <option value="Full-stack web Developer">
                Full-stack web Developer
              </option>
              <option value="Software Developer">Software Developer</option>
              <option value="Android mobile Developer">
                Android mobile Developer
              </option>
              <option value="iOS mobile Developer">iOS mobile Developer</option>
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
              onChange={(e) => setSeniority(e.currentTarget.value)}
            >
              <option value="1">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
              <option value="Principal">Principal</option>
              <option value="Lead">Lead</option>
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
              onChange={(e) => setIndustry(e.currentTarget.value)}
            >
              <option value="Food Delivery">Food Delivery</option>
              <option value="Technology">Technology</option>
              <option value="Consulting">Consulting</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Finance and Banking">Finance and Banking</option>
              <option value="Healthcare">Healthcare</option>
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
              onChange={(e) => setGender(e.currentTarget.value)}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                What is your annual salary in Euro?
              </span>
            </div>
            <input
              type="text"
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
          </label>
          <label className="label mt-4">Years of Experience: {yrs}</label>
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
          <br />
          <br />
        </form>
      </div>
    </section>
  );
}
