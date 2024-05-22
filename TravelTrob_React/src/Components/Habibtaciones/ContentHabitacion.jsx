import { Navbar } from '../Navbar.jsx'
import { CardHabitacion } from './CardHabitacion.jsx';
import '../../Pages/Feed/Feed.css'
import { useEffect } from 'react';
import { useHabitacion } from '../../Shared/Hooks/useHabitacion.jsx'
import { Outlet, useParams } from 'react-router-dom';


export const ContentHabitacion = () => {
    const { getHabitaciones, habitaciones, hotelName, isFetching } = useHabitacion()
    let { idHotel } = useParams()

    useEffect(() => {
      getHabitaciones(idHotel)
    }, [idHotel])

    if (isFetching) {
        return (
            <span>Loading...</span>
        )
    }

    return (
        <div>
            <div className='NavBarBuscar'>
                <Navbar />
            </div>
            <div className='feed-content'>
              <div className='TituloFeed'>
                  <h1>{hotelName}</h1>
              </div>
              {
                habitaciones.map((categoriaHabitaciones, i) => (
                  <div key={i} className='hotel-category'>
                    <div className='TituloFeed'>
                  </div>
                    <h1>{categoriaHabitaciones.titulo}</h1>
                    <div className='hotel-cards'>
                      {
                        categoriaHabitaciones.habitaciones.map((habitacione, j) => (
                          <CardHabitacion
                            key={j}
                            id={habitacione._id}
                            disponibilidad={habitacione.disponibilidad}
                            numeroCuarto={habitacione.numeroCuarto}
                            descripcion={habitacione.descripcion}
                            precio={habitacione.precio}
                          />
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <Outlet />
        </div>
    )
}
