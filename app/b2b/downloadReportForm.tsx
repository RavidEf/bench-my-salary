'use client';
import './b2b.css';

export default function ReportForm() {
  function handelPDFDownalod(event: { preventDefault: () => void }) {
    event.preventDefault();
  }
  return (
    <div className="b2b-form-container">
      <form onSubmit={handelPDFDownalod} className="b2b-form">
        <button className="b2b-button">Download report</button>
      </form>
    </div>
  );
}
