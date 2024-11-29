import React from 'react';
import './styles/styles.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Total Assets</h3>
          <p>$100,000</p>
        </div>
        
        <div className="card">
          <h3>Total Liabilities</h3>
          <p>$50,000</p>
        </div>
        <div className="card">
          <h3>Net Worth</h3>
          <p>$50,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
