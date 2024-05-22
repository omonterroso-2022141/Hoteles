import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../CSS/Card.css'

export const CardHabitacion = ({id, disponibilidad, numeroCuarto, descripcion, precio }) => {
    let navigate = useNavigate()
    let { idHotel } = useParams()

    const irReserva = ()=>{
        navigate(`/habitaciones/${idHotel}/reservacion/${id}`)
    }

    return (
        <div>
            <div key={id} className="card">
                <div className="card-content">
                    <h2 className="card-title">{disponibilidad}</h2>
                    <p className="card-description"><b>Numbero Carto: </b>{numeroCuarto}</p>
                    <p className="card-description"><b>Descripcion breve: </b>{descripcion}</p>
                    <p className="card-description"><b>Precio: </b>Q {precio}.00</p>
                    <button onClick={irReserva}>Reservar</button>
                </div>
            </div>
        </div>
    )
}
