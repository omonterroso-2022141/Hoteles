import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './CSS/Reserva.css'
import { useParams } from 'react-router-dom'
import { useHotel } from '../Shared/Hooks/useHotel.jsx'
import { numberValidationMessage, textValidationMessage, validateNumber, validateText } from '../Shared/Validators/validators.js'
import { useReserva } from '../Shared/Hooks/useReserva.jsx'
import { useNavigate } from 'react-router-dom'

export const Reserva = () => {
  let { getHotelId, hotel } = useHotel()
  let { saveReserva } = useReserva()
  const { idHabitacion } = useParams()
  const urlBase = 'http://localhost:3200/Hotel/getImage/'

  useEffect(() => {
    getHotelId(idHabitacion)
  }, [])

  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFinalizacion, setFechaFinalizacion] = useState(null)
  const [formData, setFormData] = useState(
    {
      fechaInicio: {
        value: "",
        isValid: false,
        showError: false,
      },
      fechaFinalizacion: {
        value: "",
        isValid: false,
        showError: false,
      },
      numeroPersonas: {
        value: "",
        isValid: false,
        showError: false
      },
      dataExtra: {
        value: "",
        isValid: false,
        showError: false
      },
      habitacion: {
        value: idHabitacion,
        isValid: false,
        showError: false
      }
    }
  )

  const handleValidationOnBlur = (value, field) => {
    let isValid = false;
  
    switch (field) {
      case 'numeroPersonas':
        isValid= validateNumber(value)
        break
      case 'dataExtra':
        isValid = validateText(value)
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

  const formattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleFechaInicioChange = (date) => {
    date = formattedDate(date)
    setFechaInicio(date)
    setFormData((prevData)=>({
      ...prevData,
      fechaInicio:{
        value: date,
        isValid: false,
        showError: false,
      }
    }))
  }

  const handleFechaFinalizacionChange = (date) => {
    date = formattedDate(date)
    setFechaFinalizacion(date)
    setFormData((prevData)=>({
      ...prevData,
      fechaFinalizacion:{
        value: date,
        isValid: false,
        showError: false,
      }
    }))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    saveReserva(
      formData.fechaInicio.value, 
      formData.fechaFinalizacion.value, 
      formData.numeroPersonas.value, 
      formData.dataExtra.value, 
      formData.habitacion.value)
  }

  let isValidInput = 
    !formData.numeroPersonas.isValid ||
    !formData.dataExtra.isValid

  return (
    <div className='reserva-container'>
      <div className="booking-form">
        <div className="form-container">
          <h2>Detalles de la reserva</h2>
          <div className="form-group">
            <label htmlFor="fechaInicio">Fecha de llegada</label>
            <DatePicker
              id="fechaInicio"
              selected={fechaInicio}
              onChange={handleFechaInicioChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaFinalizacion">Fecha de salida</label>
            <DatePicker
              id="fechaFinalizacion"
              selected={fechaFinalizacion}
              onChange={handleFechaFinalizacionChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cantidadPersonas">Número de personas</label>
            <input
              type="number"
              id="cantidadPersonas"
              placeholder="Número de personas que se hospedarán"
              onChange={(e) => onValueChange(e.target.value, "numeroPersonas")}
              onBlur={(e) => handleValidationOnBlur(e.target.value, "numeroPersonas")}
            />
            {formData.numeroPersonas.showError && (
              <span className="messageValidate">
                {numberValidationMessage}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="detallesExtra">Información adicional</label>
            <textarea
              id="detallesExtra"
              placeholder="Puede incluir requerimientos dietéticos especiales, necesidades de accesibilidad, solicitud de servicios adicionales como transporte desde el aeropuerto"
              onChange={(e) => onValueChange(e.target.value, "dataExtra")}
              onBlur={(e) => handleValidationOnBlur(e.target.value, "dataExtra")}
            ></textarea>
            {formData.dataExtra.showError && (
              <span className="messageValidate">
                {textValidationMessage}
              </span>
            )}
          </div>
          <button 
            disabled={isValidInput}
            onClick={handleAdd} 
            type="submit"
          >Aceptar</button>
        </div>
        <div className="image-container">
          <div className="image-container">
            <img src={`${urlBase}${hotel.imagen}`} crossOrigin='anonymous' className="card-image" />
          </div>
        </div>
      </div>
    </div>
  )
}