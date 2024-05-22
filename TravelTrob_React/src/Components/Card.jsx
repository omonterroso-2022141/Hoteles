import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Card.css';

export const Card = ({ id, title, image, description, infoButton }) => {
    const urlBase = 'http://localhost:3200/Hotel/getImage/';
    const navigate = useNavigate();

    const habitaciones = () => {
        navigate(`/habitaciones/${id}`);
    };
    const evento = () =>{
        navigate(`/ReservaEvento/${id}`)
    }

    return (
        <div className="card">
            <img src={`${urlBase}${image}`} crossOrigin="anonymous" alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title" style={{ textAlign: 'center' }}>{title}</h2>
                <p className="card-description" style={{ textAlign: 'center' }}>{description}</p>
                <button onClick={evento}>{infoButton}Reservar Evento</button>
                <button onClick={habitaciones}>{infoButton} Ver Habitaciones</button>
            </div>
        </div>
    );
};

export const CardCarousel = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {cards.map(card => (
                <div key={card.id}>
                    <Card
                        id={card.id}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        infoButton={card.infoButton}
                    />
                </div>
            ))}
        </Slider>
    );
};
