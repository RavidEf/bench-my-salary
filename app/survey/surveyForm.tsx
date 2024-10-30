'use client';
import './survey.css';
import { useState } from 'react';

export default function SurveyForm() {
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
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="label mt-4">Years of Experience</label>
          <input
            type="range"
            min={0}
            max="100"
            step="1"
            value={yrs}
            className="range"
            onChange={(e) => {
              setYrs(e.target.value);
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
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    </section>
  );
}
