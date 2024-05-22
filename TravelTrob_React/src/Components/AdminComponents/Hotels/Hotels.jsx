import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useHotel } from '../../../Shared/Hooks/useHotel'

export const Hotels = () => {
  const navigate = useNavigate()
  const { getHotelsHook, deleteHotelHook, hotels, isFetchingHotels } = useHotel()
  const urlBase = 'http://localhost:3200/hotel/getImage/'

  useEffect(() => {
    getHotelsHook()
  }, [])

  if (isFetchingHotels) {
    return (
        <span>Loading...</span>
    )
  }

  const navigateToUpdate = (hotel) => {
    navigate(`/admin/updateHotel/${hotel._id}`,{state:{hotel}})
  }

  const deleteHotel = (id) => {
    deleteHotelHook(id)
    window.location.reload()
  }

  //! NoData
  const noData = (
    <div>
      <h1>No hay Hoteles Registrados</h1>
    </div>
  )

  return (
    <>
      <div className='add'>
        <Link to={'/admin/newHotel'}>
          <button>Añadir</button>
        </Link>
        <Link to={'/admin/adminFeed'}>
          <button>Regresar</button>
        </Link>
      </div>
      <div className="superior">
          <Link to={'/admin/newHotel'}>
              <button style={{ width: '100%' }}>Añadir</button>
          </Link>
          <Link to={'/admin/Adminfeed'}>
              <button>Regresar</button>
          </Link>
      </div>
      <h1 style={{textAlign:'center'}}>Hoteles:</h1>
      <div className='card-container'>
      {
        hotels == null || hotels.length == 0 ? noData : (
          hotels.map((hotel) => (
            <div key={hotel._id}>
              <div className='card-content' style={{ width: '25em' }}>
                <p style={{ textAlign: 'center', fontSize: '30px' }}><strong>{hotel.nombre}</strong></p>
                <img style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px' }} 
                  src={hotel.imagen ? `${urlBase}${hotel.imagen}` : 'defaultImagePath'} 
                  crossOrigin='anonymous' />
                <p><strong>ID: </strong>{hotel._id}</p>
                <p><strong>Dirección: </strong>{hotel.direccion}</p>
                <p><strong>Teléfono: </strong>{hotel.telefono}</p>
                <p><strong>Descripción: </strong>{hotel.descripcion}</p>
                <p><strong>Categoría: </strong>{hotel.categoria}</p>
                <div style={{ display: 'flex', gap: '30%' }}>
                  <button onClick={() => navigateToUpdate(hotel)} className='category-add-button'>Editar</button>
                  <button onClick={() => deleteHotel(hotel._id)} className='category-delete-button'>Eliminar</button>
                </div>
              </div>
            </div>
          ))
        )
      }
      </div>
    </>
  )
}
