import { useState } from 'react'
import { useTypeEvento } from '../../../Shared/Hooks/useTypeEvento' 
import { useNavigate } from 'react-router-dom'

export const TypeEventForm = () => { // Cambio de nombre a TypeEventForm
    const navigate = useNavigate()

    const { addTypeEvent } = useTypeEvento()
    const [formData, setFormData] = useState({
        nombre: '',
        hotel: ''
    })

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.nombre);
        addTypeEvent(formData.nombre, formData.hotel)
    }

    const navigateToEventsType = () => {
        navigate('/typeEvent')
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>Agregar Categoría Habitación:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Nombre:</h3>
                    <input value={formData.nombre} onChange={handleChange} type="text" name="nombre" id="nombre" />
                    <h3>Hotel:</h3>
                    <input value={formData.hotel} onChange={handleChange} type="text" name="hotel" id="hotel" />
                </div>
                <button type='submit'>Agregar</button>
                <button onClick={navigateToEventsType}>Cancelar</button>
            </form>
        </>
    )
}
