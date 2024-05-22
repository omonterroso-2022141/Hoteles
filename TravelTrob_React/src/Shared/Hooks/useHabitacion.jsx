import { useState } from "react";
import toast from "react-hot-toast";
import { getHabitacionesRequest } from "../../Services/api";

export const useHabitacion = () => {
  const [ habitaciones, setHabitaciones] = useState(false)
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

  return {
    getHabitaciones,
    habitaciones,
    hotelName,
    isFetching: !habitaciones
  }
}


