import { Navbar } from './Navbar.jsx'
import { Card } from './Card.jsx'
import '../Pages/Feed/Feed.css'
import { useEffect } from 'react'
import { useHotel } from '../Shared/Hooks/useHotel.jsx'
import { useNavigate } from 'react-router-dom'


export const FeedContent = () => {
    const { getHotels, hotels, isFetchingHotels } = useHotel()
    let navigate = useNavigate()

    useEffect(() => {
      getHotels()
    }, [])

    if (isFetchingHotels) {
        return (
            <span>Loading...</span>
        )
    }
    const Perfil = ()=>{
      navigate('/UsuarioPerfil')
    }

    return (
        <div>
            <div className='NavBarBuscar'>
                <Navbar />
                <button onClick={Perfil}>Perfil</button>
            </div>
            <div className='feed-content'>
              <div className='TituloBienvenidaFeed'>
                  <h1>Explora Nuestros Hoteles</h1>
              </div>
              {
                hotels.map((categoriaHoteles, i) => (
                  <div key={i} className='hotel-category'>
                    <div key={i} className='TituloFeed'>
                      <h1>{categoriaHoteles.titulo}</h1>
                    </div>
                    <div className='hotel-cards'>
                      {
                        categoriaHoteles.hoteles.map((hotel, j) => (
                          <Card
                            key={j}
                            id={hotel._id}
                            title={hotel.nombre}
                            image={hotel.imagen}
                            description={hotel.descripcion}
                            infoButon='Ir a Habitaciones'
                          />
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    )
}
