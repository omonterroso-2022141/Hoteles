import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Card.css'

export const Card = ({ id, title, image, description, infoButon }) => {
    const urlBase = 'http://localhost:3200/Hotel/getImage/'
    const navigate = useNavigate()

    const habitaciones = ()=>{
        navigate(`/habitaciones/${id}`)
    }

    return (
        <div>
            <div className="card">
                <img src={`${urlBase}${image}`} crossOrigin='anonymous' alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <button>Ver mas...</button>
                    <button onClick={habitaciones}>{infoButon}</button>
                </div>
            </div>
        </div>
    );
};
