import React from 'react';
import './styles/styles.css';
const Reports = () => {
  return (
    <div className="reports">
      <h2>Financial Reports</h2>
      <div className="report-section">
        <h3>Net Worth Over Time</h3>
        <p>Graph placeholder (e.g., line chart or bar chart).</p>
        {/* You can use a library like Chart.js or Recharts to render the graph */}
      </div>

      <div className="report-section">
        <h3>Income vs Expenses</h3>
        <p>Pie chart placeholder.</p>
        {/* Similarly, add a pie chart here */}
      </div>

      <div className="report-actions">
        <button>Download Report (PDF)</button>
      </div>
    </div>
  );
};

export default Reports;
