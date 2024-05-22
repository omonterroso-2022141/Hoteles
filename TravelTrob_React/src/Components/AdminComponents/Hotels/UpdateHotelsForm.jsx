import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useHotel } from '../../../Shared/Hooks/useHotel'

export const UpdateHotelsForm = () => {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const hotel = location.state.hotel
  const { updateHotelHook } = useHotel()
  const { id } = params
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    favorito: []
  })

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.files[0]
    }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateHotelHook(
        id, 
        formData.nombre,
        formData.descripcion,
        formData.telefono,
        formData.descripcion,
        formData.imagen,
        formData.categoria,
        formData.favorito
      )
      navigate('../hotels')
    } catch (err) {
      console.error('Error al Actualizar Hotel', err)
    }
  }

  const navigateToHotels = () => {
    navigate('../hotels')
  }

  useEffect(() => {
    setFormData({
      nombre: hotel.nombre,
      direccion: hotel.direccion,
      telefono: hotel.direccion,
      descripcion: hotel.descripcion,
      imagen: hotel.imagen,
      categoria: hotel.categoria,
      favorito: hotel.favorito
    })
  }, [hotel])

  return (
    <>
      <h1>Editar Hotel</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <h3>Nombre:</h3>
          <input value={formData.nombre} onChange={handleChange} type="text" name="nombre" id="nombre" />
          <h3>Dirección:</h3>
          <input value={formData.direccion} onChange={handleChange} type="text" name="direccion" id="direccion" />
          <h3>Teléfono:</h3>
          <input value={formData.telefono} onChange={handleChange} type="text" name="telefono" id="telefono" />
          <h3>Descripción:</h3>
          <textarea value={formData.descripcion} onChange={handleChange} name="descripcion" id="descripcion"></textarea>
          <h3>Imagen:</h3>
          <input onChange={handleFileChange} type="file" name="imagen" id="imagen" />
          <h3>Categoría:</h3>
          <input value={formData.categoria} onChange={handleChange} type="text" name="categoria" id="categoria" />
          <h3>Favorito:</h3>
          <input value={formData.favorito} onChange={handleChange} type="text" name="favorito" id="favorito" />
        </div>
        <button type='submit'>Agregar</button>
        <button onClick={navigateToHotels}>Cancelar</button>
      </form>
    </>
  )
}
