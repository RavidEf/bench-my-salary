'use client';
import './survey.css';
import { useState } from 'react';

export default function SurveyForm() {
  const [jobFunction, setJobFunction] = useState('Frontend web Developer');
  const [yrs, setYrs] = useState(1);

  return (
    <section className="survey-page-container">
      Here you will enter your salary
      <h1>Add your salary details</h1>
      <div className="w-full max-w-xs">
        <form className="survey-form">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Function</span>
              <p>{jobFunction}</p>
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
            <select className="select select-bordered w-full max-w-xs" required>
              <option>Junior</option>
              <option>Mid-level</option>
              <option>Senior</option>
              <option>Principal</option>
              <option>Lead</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Industry</span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option>Food Delivery</option>
              <option>Technology</option>
              <option>Consulting</option>
              <option>Pharmaceuticals</option>
              <option>Finance and Banking</option>
              <option>Healthcare</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <select className="select select-bordered">
              <option>Female</option>
              <option>Male</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                What is your company Email address?
              </span>
            </div>
            <input
              type="email"
              placeholder="ex. marco@upleveled.io"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                What is your annual salary in Euro?
              </span>
            </div>
            <input
              type="text"
              placeholder="ex. 65,000"
              className="input input-bordered w-full max-w-xs"
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
