import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteHabitacionRequest, getHabitacionRequest, getHabitacionesRequest, saveCategoryRequest, updateCatHabRequest } from '../../Services/api'

export const useHabitacion = () => {
    const navigate = useNavigate()
    const [habitaciones, setHabitaciones] = useState(null)
    const [hotelName, setHotelName] = useState("")

    const getHabitaciones = async(id)=>{
      const response = await getHabitacionesRequest(id)
      if(response.error){
        return toast.error(
          'Error al obtener los hoteles'
        )
      }
      setHabitaciones(response.data.habitaciones)
      setHotelName(response.data.hotelName)
    }

    //# ------------- Get Habitacion ------------
    const getHabitacionesHook = async () => {
        const res = await getHabitacionRequest()
        if (res.error) {
            alert(
                res.err.res.data.message ||
                'Error al obtener Categorias'
            )
        }
        setHabitaciones(res.data.message)
    }

    //# ------------- Delete Habitacion ------------
    const deleteHabitacionHook = async (id) => {
        const res = await deleteHabitacionRequest(id)
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

    //# ------------- Save Habitacion ------------
    const saveHabitacionHook = async (habitacion) => {
        const res = await saveCategoryRequest(habitacion)
        if (res.error) {
            return alert('error al agregar la categoría')
        }
        navigate('/admin/habitaciones')
    }

    //# ------------- Update Habitacion ------------
    const updateHabitacionHook = async (id, hotel, disponibilidad, numeroCuarto, descripcion, cHabitacion, precio) => {
        const habitacion = {
            hotel,
            disponibilidad,
            numeroCuarto,
            descripcion,
            cHabitacion,
            precio
        }
        const res = await updateCatHabRequest(id, habitacion)
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
        getHabitacionesHook()
    }

    return {
        habitaciones,
        hotelName,
        isFetchingHabitaciones: !habitaciones,
        getHabitacionesHook,
        deleteHabitacionHook,
        saveHabitacionHook,
        updateHabitacionHook,
        getHabitaciones
    }
}
