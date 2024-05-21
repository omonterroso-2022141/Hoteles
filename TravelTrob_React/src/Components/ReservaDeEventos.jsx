import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/Reserva.css';

export const ReservaDeEventos = () => {
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFinalizacion, setFechaFinalizacion] = useState(null);

    const handleFechaInicioChange = (date) => {
        setFechaInicio(date);
    };

    const handleFechaFinalizacionChange = (date) => {
        setFechaFinalizacion(date);
    };


    return (
        <div className='reserva-container'>
            <div className="booking-form">
                <div className="form-container">
                    <h2>Detalles de la reserva</h2>
                    <div className="form-group">
                        <label htmlFor="habitacion">Tipo de evento: </label>
                        <select id="habitacion">

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaInicio">Fecha del evento: </label>
                        <DatePicker
                            id="fechaInicio"
                            selected={fechaInicio}
                            onChange={handleFechaInicioChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="DD/MM/YYYY"
                        />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="cantidadPersonas">Capacidad de personas: </label>
                        <input
                            type="number"
                            id="cantidadPersonas"
                            placeholder="Número de personas que se hospedarán"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="habitacion">Hora del evento: </label>
                        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="detallesExtra">Información adicional</label>
                        <textarea
                            id="detallesExtra"
                            placeholder="Puede incluir requerimientos dietéticos especiales, necesidades de accesibilidad, solicitud de servicios adicionales como transporte desde el aeropuerto"
                        ></textarea>
                    </div>
                    <button type="submit">Siguiente</button>
                </div>
                <div className="image-container">
                    <img
                        src="https://www.revfine.com/wp-content/uploads/2020/08/5-star-hotel-shangri-la-sydney.jpg"
                        alt="Descripción de la imagen"
                    />
                </div>
            </div>
        </div>
    )
}
