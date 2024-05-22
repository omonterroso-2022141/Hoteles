import { useState } from "react";
import toast from "react-hot-toast";
import { getTipoEventosHotel, getTipoEventosRequest } from "../../Services/api";

export const useTypeEvento = () => {
  const [typeEvents, setTypeEvents] = useState()

  const getTypeEventsByHotel = async(id)=>{
    const response = await getTipoEventosHotel(id)
    if(response.error){
      return toast.error(
        'Error al obtener los tipo de eventos'
      )
    }
    setTypeEvents(response.data.tipoEvento)
  }

  const getTypeEvents = async()=>{
    const response = await getTipoEventosRequest()
    if(response.error){
      return toast.error(
        'Error al obtener los tipo de eventos'
      )
    }
    setTypeEvents(response.data.tipoEvento)
  }

  return {
    getTypeEventsByHotel,
    getTypeEvents,
    typeEvents,
    isFetching: !typeEvents
  }
}


