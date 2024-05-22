import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useHabitacion } from '../../../Shared/Hooks/useHabitacion'

export const UpdateHabitacion = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const habitacion = location.state.habitacion
    const { updateHabitacionHook } = useHabitacion()
    const { id } = params
    const [formData, setFormData] = useState({
        hotel: '',
        disponibilidad: '',
        numeroCuarto: '',
        descripcion: '',
        cHabitacion: '',
        precio: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await updateHabitacionHook(
                id,
                formData.hotel,
                formData.disponibilidad,
                formData.numeroCuarto,
                formData.descripcion,
                formData.cHabitacion,
                formData.precio
            )
            navigate('../habitaciones')  // Navigate after successful update
        } catch (err) {
            console.error('Error al Actualizar Usuario', err)
        }
    }

    const navigateToHabitaciones = () => {
        navigate('../habitaciones')
    }

    useEffect(() => {
        setFormData({
            hotel: habitacion.hotel,
            disponibilidad: habitacion.disponibilidad,
            numeroCuarto: habitacion.numeroCuarto,
            descripcion: habitacion.descripcion,
            cHabitacion: habitacion.cHabitacion,
            precio: habitacion.precio
        })
    }, [habitacion])

    return (
        <>
            <h1>Editar Habitación</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <h3>Hotel ID:</h3>
                    <input value={formData.hotel} onChange={handleChange} type="text" name="hotel" id="HotelID" />
                    <h3>Disponibilidad:</h3>
                    <input value={formData.disponibilidad} onChange={handleChange} type="text" name="disponibilidad" id="Disponibilidad" />
                    <h3>No. Cuarto:</h3>
                    <input value={formData.numeroCuarto} onChange={handleChange} type="number" name="numeroCuarto" id="Cuarto" />
                    <h3>Descripción:</h3>
                    <textarea value={formData.descripcion} onChange={handleChange} style={{ maxHeight: '20em' }} name="descripcion" id="Descripcion"></textarea>
                    <h3>Cat. Habitación:</h3>
                    <input value={formData.cHabitacion} onChange={handleChange} type="text" name="cHabitacion" id="CatHabitacion" />
                    <h3>Precio:</h3>
                    <input value={formData.precio} onChange={handleChange} type="number" name="precio" id="Precio" />
                    <button type='submit'>Actualizar</button>
                    <button type='button' onClick={navigateToHabitaciones}>Cancelar</button>
                </div>
            </form>
        </>
    )
}
