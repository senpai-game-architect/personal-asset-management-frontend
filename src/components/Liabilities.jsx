import React from 'react';
import './styles/styles.css';
const Liabilities = () => {
  return (
    <div className="liabilities">
      <h2>Your Liabilities</h2>
      <button>Add New Liability</button>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Interest Rate</th>
            <th>Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic Rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Liabilities;
