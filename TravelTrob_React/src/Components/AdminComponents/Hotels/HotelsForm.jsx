import { useHotel } from '../../../Shared/Hooks/useHotel'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../Category.css'

export const HotelsForm = () => {
  const navigate = useNavigate()
  const { saveHoteHook } = useHotel()

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
      [e.target.name]: e.target.value
    }))
  }

  const handleFileChange = (e)=>{
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveHoteHook(formData)
  }

  const navigateToHotels = () => {
    navigate('/admin/hotels')
  }

  return (
    <>
      <h1>Agregar Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Nombre:</h3>
          <input value={formData.nombre} onChange={handleChange} type='text' name='nombre' id='nombre'/>
          <h3>Dirección:</h3>
          <input value={formData.direccion} onChange={handleChange} type='text' name='direccion' id='direccion'/>
          <h3>Teléfono:</h3>
          <input value={formData.telefono} onChange={handleChange} type='text' name='telefono' id='telefono'/>
          <h3>Descripción:</h3>
          <textarea value={formData.descripcion} onChange={handleChange} name="descripcion" id="descripcion"></textarea>
          <h3>Imagen:</h3>
          <input onChange={handleFileChange} type='file' name='imagen' id='imagen'/>
          <h3>Categoría:</h3>
          <input value={formData.categoria} onChange={handleChange} type='text' name='categoria' id='categoria'/>
          <h3>Favorito:</h3>
          <input value={formData.favorito} onChange={handleChange} type='text' name='favorito' id='favorito'/>
        </div>
        <button type='submit'>Agregar</button>
        <button onClick={navigateToHotels}>Cancelar</button>
      </form>
    </>
  )
}
