import { useState } from 'react'
import { useCatHabitacion } from '../../../Shared/Hooks/useCatHabitacion'
import { useNavigate } from 'react-router-dom'

export const CatHabitacionForm = () => {
    const navigate = useNavigate()

    const { saveCatHabHook } = useCatHabitacion()
    const [formData, setFormData] = useState({
        Nombre: '',
        Contenido: ''
    })

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveCatHabHook(formData)
    }

    const navigateToCatHabs = () => {
        navigate('/admin/catHabs')
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>Agregar Categoría Habitación:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Nombre:</h3>
                    <input value={formData.Nombre} onChange={handleChange} type="text" name="Nombre" id="Nombre" />
                    <h3>Contenido:</h3>
                    <textarea value={formData.Contenido} onChange={handleChange} style={{maxHeight:'20em'}} name="Contenido" id="Contenido"></textarea>
                </div>
                <button type='submit'>Agregar</button>
                <button onClick={navigateToCatHabs}>Cancelar</button>
            </form>
        </>
    )
}
