import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UpdateHotelRequest, addHotelRequest, deleteHotelRequest, getHotelsRequest, getHotelsRequestId, updateUserRequest } from "../../Services/api"
import toast from "react-hot-toast"

export const useHotel = () => {
  const navigate = useNavigate()
  const [hotels, setHotels] = useState(null)
  const [image, setImage] = useState(null)
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

  //# ------------- Get Hotels ------------
  const getHotelsHook = async () => {
    const res = await getHotelsRequest()
    if (res.error) {
      alert(
        res.err.res.data.message ||
        'Error al Obtener Hoteles'
      )
    }
    setHotels(res.data.message)
  }

  //# ------------- Save Hotels ------------
  const saveHoteHook = async (hotel) => {
    const data = new FormData()
    Object.keys(hotel).forEach(key => {
      data.append(key, hotel[key])
    })
    const res = await addHotelRequest(data)
    if (res.error) {
      return alert('Error al guardar Usuario')
    }
    navigate('/admin/hotels')
  }

  //# ------------- Delete Hotel ------------
  const deleteHotelHook = async (id) => {
    const res = await deleteHotelRequest(id)
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
        'Error al Eliminar Hotel'
      )
    }
  }

  //# ------------- Update Hotel ------------
  const updateHotelHook = async (id, nombre, direccion, telefono, descripcion, imagen, categoria, favorito) => {
    const hotel = {
      nombre,
      direccion,
      telefono,
      descripcion,
      imagen,
      categoria,
      favorito
    }
    const res = await UpdateHotelRequest(id, hotel)
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
        'Error al Actualizar Usuario'
      )
    }
    getHotelsHook()
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
    hotels,
    hotel,
    isFetchingHotels: !hotels,
    isFetching: !hotel,
    getHotelsHook,
    getHotelId,
    getHotels,
    saveHoteHook,
    deleteHotelHook,
    updateHotelHook
  }
}





  