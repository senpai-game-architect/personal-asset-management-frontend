import React from "react";
import './styles/card.css';

function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    src="https://di-uploads-pod11.dealerinspire.com/germaintoyotaofcolumbus/uploads/2024/10/2410-corolla-hybrid-about.webp" // Image of Toyota Corolla 2020
                    alt="Toyota Corolla 2020"
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">Toyota Corolla 2020</h3>
                <p className="card-category">Category: Vehicle</p>
                <p className="card-description">
                    A reliable car with great fuel efficiency and modern features.
                </p>
                <div className="card-footer">
                    <p className="price">0.031 ETH</p>
                    <p className="time-left">11 days left</p>
                </div>
                <p className="creator">Creation of Kiberbash</p>
            </div>
        </div>
    );
}

export default Card;