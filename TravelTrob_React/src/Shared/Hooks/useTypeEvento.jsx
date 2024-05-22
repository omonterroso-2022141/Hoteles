import { useState } from "react";
import toast from "react-hot-toast";
import { getTipoEventosHotel } from "../../Services/api";

export const useTypeEvento = () => {
  const [typeEvents, setTypeEvents] = useState(false)

  const getTypeEventsByHotel = async(id)=>{
    const response = await getTipoEventosHotel(id)
    if(response.error){
      return toast.error(
        'Error al obtener los tipo de eventos'
      )
    }
    setTypeEvents(response.data.tipoEvento)
  }

  return {
    getTypeEventsByHotel,
    typeEvents,
    isFetching: !typeEvents
  }
}


