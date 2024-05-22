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
                <h3>Hotel ID:</h3>
                <input value={formData.hotel} onChange={handleChange} type="text" name="HotelID" id="HotelID" />
                <h3>Disponibilidad:</h3>
                <input value={formData.disponibilidad} onChange={handleChange} type="text" name="Disponibilidad" id="Disponibilidad" />
                <h3>No. Cuarto:</h3>
                <input value={formData.numeroCuarto} onChange={handleChange} type="number" name="Cuarto" id="Cuarto" />
                <h3>Descripción:</h3>
                <textarea value={formData.descripcion} onChange={handleChange} style={{maxHeight:'20em'}} name="Descripcion" id="Descripcion"></textarea>
                <h3>Cat. Habitación:</h3>
                <input value={formData.cHabitacion} onChange={handleChange} type="text" name="CatHabitacion" id="CatHabitacion" />
                <h3>Precio:</h3>
                <input value={formData.precio} onChange={handleChange} type="number" name="Precio" id="Precio" />
                <button type='submit'>Agregar</button>
                <button onClick={navigateToHabitaciones}>Cancelar</button>
            </div>
        </form>
        </>
    )
}
