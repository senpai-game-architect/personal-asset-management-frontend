import React, { useState } from 'react';
import './styles/styles.css';
const Goals = () => {
    const [goals, setGoals] = useState([
        { name: 'Save $10,000 for a car', progress: 60 },
        { name: 'Pay off $5,000 in credit card debt', progress: 40 },
    ]);

    return (
        <div className="goals">
            <h2>Financial Goals</h2>
            <div className="goal-list">
                {goals.map((goal, index) => (
                    <div className="goal-item" key={index}>
                        <h3>{goal.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${goal.progress}%` }}
                            ></div>
                        </div>
                        <p>{goal.progress}% complete</p>
                    </div>
                ))}
            </div>
            <button onClick={() => alert('Add New Goal functionality coming soon!')}>
                Add New Goal
            </button>
        </div>
    );
};

export default Goals;
