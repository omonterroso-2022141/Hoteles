import { useState } from "react"
import { saveReservaRequest } from "../../Services/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useReserva = () => {
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const saveReserva = async(fechaInicio, fechaFinalizacion, cantidadPersonas, detallesExtra, habitacion)=>{
        let data = {
            fechaInicio, 
            fechaFinalizacion, 
            cantidadPersonas, 
            detallesExtra, 
            habitacion
        }
        if(fechaInicio == '' || fechaFinalizacion == '')return toast.error('La fecha esta vacia llenela porfavor')
        setIsLoading(true)
        const response = await saveReservaRequest(data)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                '¡On! No pudimos hacer la reserva, intenta de nuevo porfvor'
            )
        }else{
            alert('Reserva realizada con exito :D')
            navigate('/feed')
        }
    }

    return {
        saveReserva,
        isLoading
    }
}

