import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getHotelsRequest, getHotelsRequestId } from "../../Services/api";

export const useHotel = () => {
  const [hotels, setHotels] = useState(false)
  const [hotel, setHotel] = useState(false)

  const getHotels = async()=>{
    const response = await getHotelsRequest()
    if(response.error){
      return toast.error(
        'Error al obtener los hoteles'
      )
    }
    setHotels(response.data.hoteles)
  }

  const getHotelId = async(id)=>{
    const response = await getHotelsRequestId(id)
    if(response.error){
      return toast.error(
        'Error al obtener los hoteles'
      )
    }
    setHotel(response.data.hotel)
  }

  return {
    getHotels,
    getHotelId,
    hotels,
    hotel,
    isFetching: !hotels
  }
}


