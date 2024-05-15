import React from 'react';
import './CSS/Card.css'

export const Card = ({ title, image, description }) => {
    return (
        <div>
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <button>Ver mas...</button>
                </div>
            </div>
        </div>
    );
};
