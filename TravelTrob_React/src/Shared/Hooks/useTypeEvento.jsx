import { useState } from "react";
import toast from "react-hot-toast";
import { addTipoEventoRequest, deleteTipoEventosRequest, getTipoEventosHotel, getTipoEventosRequest } from "../../Services/api";
import { useNavigate } from "react-router-dom";

export const useTypeEvento = () => {
  const [typeEvents, setTypeEvents] = useState()
  let navigate = useNavigate()

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

  const deleteTypeEvents = async(id)=>{
    const response = await deleteTipoEventosRequest(id)
    if(response.error){
      return toast.error(
        'Error al eliminar el tipo de evento'
      )
    }
  }

  const addTypeEvent = async(nombre, hotel)=>{
    const data = {
      nombre,
      hotel
    }
    const response = await addTipoEventoRequest(data)
    if(response.error){
      return toast.error(
        'Error al agregar un tipo de evento'
      )
    }
    alert('Evento agregado con exito')
    navigate('/typeEvent')
  }

  return {
    addTypeEvent,
    getTypeEventsByHotel,
    getTypeEvents,
    deleteTypeEvents,
    typeEvents,
    isFetching: !typeEvents
  }
}


