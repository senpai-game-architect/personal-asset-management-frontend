import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landingpage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <h1>Welcome to Personal Asset Manager</h1>
                <p>Track, manage, and achieve your financial goals effortlessly.</p>
                <div className="cta-buttons">
                    <Link to="/login" className="btn-primary">
                        Login
                    </Link>
                    <Link to="/register" className="btn-secondary">
                        Register
                    </Link>
                </div>
            </div>

            <div className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <h3>Track Your Assets</h3>
                        <p>Get a clear picture of all your assets in one place.</p>
                    </div>
                    <div className="feature">
                        <h3>Manage Liabilities</h3>
                        <p>Keep your debts and obligations under control.</p>
                    </div>
                    <div className="feature">
                        <h3>Achieve Financial Goals</h3>
                        <p>Set and track your progress toward financial milestones.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
