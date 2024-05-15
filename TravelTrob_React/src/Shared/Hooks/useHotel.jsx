import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useHotel = () => {
  const [hotel, setHotel] = useState(false)
  const navigate = useNavigate()

  const hotel = async(
    nombre,
    direccion,
    telefono,
    descripcion,
    categoria
  ) =>{
    setIsLoading
  }

  return (
    <div>

    </div>
  )
}


