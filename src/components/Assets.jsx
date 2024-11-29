import React from 'react';
import './styles/styles.css';
const Assets = () => {
  return (
    <div className="assets">
      <h2>Your Assets</h2>
      <button>Add New Asset</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Value</th>
            <th>Purchase Date</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic Rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Assets;
