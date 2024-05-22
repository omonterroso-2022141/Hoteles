import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import DatePicker from 'react-datepicker';
import { Navbar } from './Navbar';
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/Reserva.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypeEvento } from '../Shared/Hooks/useTypeEvento';
import { useEvento } from '../Shared/Hooks/useEvento';
import { 
    validateTime, 
    timeValidationMessage, 
    validateText, 
    textValidationMessage, 
    numberValidationMessage, 
    validateNumber
} from '../Shared/Validators/validators';

export const ReservaDeEventos = () => {
    const [fecha, setFecha] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState('')
    const navigate = useNavigate()
    const { getTypeEventsByHotel, isFetching, typeEvents} = useTypeEvento()
    const { addEvent } = useEvento()
    let { idHotel } = useParams()

    const [formData, setFormData] = useState(
        {
          fecha: {
            value: "",
            isValid: false,
            showError: false,
          },
          capacidad: {
            value: "",
            isValid: false,
            showError: false,
          },
          hora: {
            value: "",
            isValid: false,
            showError: false
          },
          dataExtra: {
            value: "",
            isValid: false,
            showError: false
          }
        }
      )

    useEffect(() => {
        getTypeEventsByHotel(idHotel)
    }, [])

    if (isFetching) {
        return (
            <span>Loading...</span>
        )
    }

    const formattedDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleFechaInicioChange = (date) => {
        date = formattedDate(date)
        setFecha(date)
        setFormData((prevData) => ({
          ...prevData,
          fecha: {
            value: date,
            isValid: false,
            showError: false,
          }
        }))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false;
    
        switch (field) {
          case 'capacidad':
            isValid = validateNumber(value)
            break
          case 'dataExtra':
            isValid = validateText(value)
            break
          case 'hora':
            isValid = validateTime(value)
            break
          default:
            break
        }
        setFormData((prevData) => ({
          ...prevData,
          [field]: {
            ...prevData[field],
            isValid,
            showError: !isValid
          }
        }));
      }

    const onValueChange = (value, field) => {
        setFormData((prevData) => (
          {
            ...prevData,
            [field]: {
              ...prevData[field],
              value
            }
          }
        ))
    }

    const handleAddEvent = async(e)=>{
        e.preventDefault()
        console.log();
        if(formData.fecha.value == '')
            alert('Seleccione una fecha valida')
        else if(selectedEvent == '' || selectedEvent == null)
            alert('Seleccione un tipo de evento')
        else{
            addEvent(formData.fecha.value, 
                    formData.capacidad.value,
                    formData.hora.value,
                    formData.dataExtra.value, 
                    selectedEvent)
            Hoteles()
        }
    }

    const Hoteles = () =>{
        navigate('/feed')
    }

    let isSubmitButtonDisable = !formData.dataExtra.isValid ||
                                !formData.capacidad.isValid ||
                                !formData.hora.isValid

    return (
        <div className='reserva-container'>
            <Navbar />
            <div className="booking-form">
                <div className="form-container">
                    <h2 className='TitleReserva'>Oh.. un evento ¿que sera?</h2>
                    <div className="form-group">
                        <label htmlFor="habitacion">Tipo de evento: </label>
                        <select id="habitacion" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                        <option key={0} value={null}>Default</option>
                        {
                            typeEvents.map((tipo)=>(
                                <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha del evento: </label>
                        <DatePicker
                            id="fecha"
                            selected={fecha}
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
                            onChange={(e) => onValueChange(e.target.value, "capacidad")}
                            onBlur={(e) => handleValidationOnBlur(e.target.value, "capacidad")}
                        />
                        {
                            formData.capacidad.showError && (
                                <span className="messageValidate">
                                    {numberValidationMessage}
                                </span>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="habitacion">Hora del evento: </label>
                        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required 
                            onChange={(e) => onValueChange(e.target.value, "hora")}
                            onBlur={(e) => handleValidationOnBlur(e.target.value, "hora")}
                        />
                        {
                            formData.hora.showError && (
                                <span className="messageValidate">
                                    {timeValidationMessage}
                                </span>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="detallesExtra">Información adicional</label>
                        <textarea
                            id="detallesExtra"
                            placeholder="Puede incluir requerimientos dietéticos especiales, necesidades de accesibilidad, solicitud de servicios adicionales como transporte desde el aeropuerto"
                            onChange={(e) => onValueChange(e.target.value, "dataExtra")}
                            onBlur={(e) => handleValidationOnBlur(e.target.value, "dataExtra")}
                        ></textarea>
                        {
                            formData.dataExtra.showError && (
                                <span className="messageValidate">
                                    {textValidationMessage}
                                </span>
                            )
                        }
                    </div>
                    <button  className='Boton-Evento' disabled={isSubmitButtonDisable} onClick={handleAddEvent} type="submit">Siguiente</button>
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
