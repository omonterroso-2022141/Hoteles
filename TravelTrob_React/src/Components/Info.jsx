import React from 'react';
import IMG2 from './IMG/IMG2.png';
import { Navbar } from './Navbar';
import './CSS/Info.css';

 export const Info = ({ switchAuthHandler }) => {
    return (
        <div>
            <Navbar />
            <div className="info-background">
                <div className="info-container">
                    <img className="IMG2" src={IMG2} alt="" />
                    <div className="card-info">
                        <h1>¡Bienvenido a Travel Trob!</h1>
                        <p>¡Hola! Somos Travel Trob, una empresa dedicada a servicios de hoteles. Te ayudamos a encontrar el hotel perfecto para tus vacaciones...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
