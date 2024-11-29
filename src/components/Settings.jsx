import React from 'react';
import './styles/styles.css';
const Settings = () => {
  return (
    <div className="settings">
      <h2>Account Settings</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter a new password" />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
