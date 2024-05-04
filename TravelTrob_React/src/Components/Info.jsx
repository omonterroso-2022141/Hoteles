import { useState } from 'react';
import { Navbar } from "./Navbar.jsx";
import './CSS/Info.css';
import Animation1 from './IMG/Rolitae.gif';
import Animation2 from './IMG/Animation2.gif';

export const Info = ({ switchAuthHandler }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const animations = [Animation1, Animation2];

    const handlePreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? animations.length - 1 : currentSlide - 1);
    }

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === animations.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="Info-container">
                <div className="slider">
                    {animations.map((animation, index) => (
                        <div key={index} className={index === currentSlide ? "slide active" : "slide"}>
                            <img src={animation} alt={`Animation ${index + 1}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={handlePreviousSlide}>&#10094;</button>
                    <button className="next" onClick={handleNextSlide}>&#10095;</button>
                </div>
                <h1>Travel Trob</h1>
                <p>El mejorr lugar para elegir tu Hotel</p>
            </div>
        </div>
    );
};
