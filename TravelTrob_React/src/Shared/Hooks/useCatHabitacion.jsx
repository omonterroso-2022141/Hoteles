import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCatHabRequest, deleteCatHabRequest, getCatHabitacionRequest, updateCatHabRequest } from '../../Services/api'

export const useCatHabitacion = () => {
    const navigate = useNavigate()
    const [cHabs, setcHabs] = useState(null)

    //# ------------- Get Cat. Habitation -------------
    const getCatHabitacionHook = async () => {
        const res = await getCatHabitacionRequest()
        if (res.error) {
            alert(
                res.err.res.data.message ||
                'Error al Obtener Categorías de Habitación'
            )
        }
        setcHabs(res.data.message)
    }

    //# ------------- Delete Cat. Habitation -------------
    const deleteCatHabHook = async (id) => {
        const res = await deleteCatHabRequest(id)
        if (res.error) {
            if (res?.err?.res?.data?.errors) {
                let arr = res?.err?.res?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                res?.err?.res?.data?.msg ||
                res?.err?.data?.msg ||
                'Error al eliminar categoría'
            )
        }
    }

    //# ------------- Save Cat. Habitation -------------
    const [isLoading, setIsLoading] = useState(false)
    const saveCatHabHook = async (catHab) => {
        setIsLoading(true)
        const res = await addCatHabRequest(catHab)
        setIsLoading(true)
        if (res.error) {
            return alert('error al agregar Categoría de Habitación')
        }
        navigate('/admin/catHabs')
    }

    //# ------------- Update Cat. Habitation -------------
    const updateCatHabHook = async (id, Nombre, Contenido) => {
        setIsLoading(true)
        const catHab ={
            Nombre,
            Contenido
        }
        const res = await updateCatHabRequest(id, catHab)
        setIsLoading(false)
        if (res.error) {
            if (res?.err?.res?.data?.errors) {
                let arr = res?.err?.res?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                res?.err?.res?.data?.msg ||
                res?.err?.data?.msg ||
                'Error al actualizar el categoría, intenta de nuevo.'
            )
        }
        getCatHabitacionRequest()
    }

    return {
        cHabs,
        isFetchingCatHabs: !cHabs,
        getCatHabitacionHook,
        deleteCatHabHook,
        saveCatHabHook,
        updateCatHabHook
    }
}
