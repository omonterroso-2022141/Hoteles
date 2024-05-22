import { useState } from "react";
import toast from "react-hot-toast";
import { addEvento } from "../../Services/api";

export const useEvento = () => {
  const [events, setEvents] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  

  const addEvent = async(fecha, capacidad, hora, info, tipoEvento) => {
    setIsLoading(true)
    const event = {
        fecha,
        capacidad,
        hora,
        info,
        tipoEvento
    }
    const response = await addEvento(event)
    if(response.error){
      return toast.error(
        'Error al obtener los tipo de eventos'
      )
    }else{
        alert('Se ha agendado el evento con exito')
    }
  }
  

  return {
    addEvent,
    events,
    isFetching: !events
  }
}


