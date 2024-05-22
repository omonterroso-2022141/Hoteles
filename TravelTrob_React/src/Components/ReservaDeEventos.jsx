import { useState } from 'react';
import { Footer } from './Footer';
import DatePicker from 'react-datepicker';
import { Navbar } from './Navbar';
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/Reserva.css';
import { useNavigate } from 'react-router-dom';

export const ReservaDeEventos = () => {
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFinalizacion, setFechaFinalizacion] = useState(null);
    const navigate = useNavigate()

    const handleFechaInicioChange = (date) => {
        setFechaInicio(date);
    };

    const handleFechaFinalizacionChange = (date) => {
        setFechaFinalizacion(date);
    };

    const Hoteles = () =>{
        navigate('/feed')
    }


    return (
        <div className='reserva-container'>
            <Navbar />
            <div className="booking-form">
                <div className="form-container">
                    <h2 className='TitleReserva'>Oh.. un evento ¿que sera?</h2>
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
                    <button  className='Boton-Evento'  type="submit">Siguiente</button>
                    <button className='Boton-Evento' onClick={Hoteles} type="submit">Cancelar</button>
                </div>
                <div className="image-container">
                    <img
                        src="https://www.revfine.com/wp-content/uploads/2020/08/5-star-hotel-shangri-la-sydney.jpg"
                        alt="Descripción de la imagen"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
