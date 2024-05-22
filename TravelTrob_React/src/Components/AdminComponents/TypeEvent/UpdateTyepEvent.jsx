import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useCatHabitacion } from '../../../Shared/Hooks/useCatHabitacion'

export const updateTypeEvent = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const { updateCatHabHook } = useCatHabitacion()
    const { id } = params
    const catHab = location.state.catHab
    const [formData, setFormData] = useState({
        Nombre: '',
        Contenido: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await updateCatHabHook(
                id,
                formData.Nombre,
                formData.Contenido
            )
            navigate('../catHabs')
        } catch (error) {
            console.error('Error al Actualizar Categoría Habitación', error)
        }
    }

    const navigateToCatHabs = () => {
        navigate('../catHabs')
    }

    useEffect(() => {
        setFormData({
            Nombre: catHab.Nombre,
            Contenido: catHab.Contenido
        })
    }, [catHab])

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Editar Categoría Habitación:</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <h3>Nombre:</h3>
                    <input value={formData.Nombre} onChange={handleChange} type="text" name="Nombre" id="Nombre" />
                    <h3>Contenido:</h3>
                    <textarea value={formData.Contenido} onChange={handleChange} style={{ maxHeight: '20em' }} name="Contenido" id="Contenido"></textarea>
                </div>
                <button type='submit'>Guardar</button>
                <button onClick={navigateToCatHabs}>Cancelar</button>
            </form>
        </>
    )
}
