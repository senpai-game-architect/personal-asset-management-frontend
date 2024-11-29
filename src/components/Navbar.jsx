import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import './styles/nav.css'
const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Finance Tracker Logo" style={{ height: '40px', width: 'auto' }} /> {/* Adjust size as necessary */}
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/assets">Assets</Link></li>
                <li><Link to="/liabilities">Liabilities</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/login">{props.state}</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
