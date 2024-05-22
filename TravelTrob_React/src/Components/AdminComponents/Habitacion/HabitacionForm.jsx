import { useState } from 'react'
import { useHabitacion } from '../../../Shared/Hooks/useHabitacion'
import { useNavigate } from 'react-router-dom'

export const HabitacionForm = () => {
    const navigate = useNavigate()
    const { saveHabitacionHook } = useHabitacion()
    const [formData, setFormData] = useState({
        hotel: '',
        disponibilidad: '',
        numeroCuarto: '',
        descripcion: '',
        cHabitacion: '',
        precio: ''
    })

    const handleChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveHabitacionHook(formData)
    }

    const navigateToHabitaciones = () => {
        navigate('/admin/habitaciones')
    }

    return (
        <>
        <h1>Agregar Habitación:</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Hotel:</h3> {/* Cambié HotelID a hotel */}
                <input value={formData.hotel} onChange={handleChange} type="text" name="hotel" id="hotel" />
                <h3>Disponibilidad:</h3>
                <input value={formData.disponibilidad} onChange={handleChange} type="text" name="disponibilidad" id="disponibilidad" />
                <h3>No. Cuarto:</h3>
                <input value={formData.numeroCuarto} onChange={handleChange} type="number" name="numeroCuarto" id="numeroCuarto" />
                <h3>Descripción:</h3>
                <textarea value={formData.descripcion} onChange={handleChange} style={{maxHeight:'20em'}} name="descripcion" id="descripcion"></textarea>
                <h3>Cat. Habitación:</h3>
                <input value={formData.cHabitacion} onChange={handleChange} type="text" name="cHabitacion" id="cHabitacion" />
                <h3>Precio:</h3>
                <input value={formData.precio} onChange={handleChange} type="number" name="precio" id="precio" />
                <button type='submit'>Agregar</button>
                <button type='button' onClick={navigateToHabitaciones}>Cancelar</button> {/* Cambié el tipo a 'button' */}
            </div>
        </form>
        </>
    )
}
