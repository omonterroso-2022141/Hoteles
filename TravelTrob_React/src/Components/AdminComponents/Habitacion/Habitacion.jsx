import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useHabitacion } from '../../../Shared/Hooks/useHabitacion'

export const Habitacion = () => {
    const navigate = useNavigate()
    const { deleteHabitacionHook, getHabitacionesHook, habitaciones, isFetchingHabitaciones} = useHabitacion()

    useEffect(() => {
        getHabitacionesHook()
    }, [])

    if (isFetchingHabitaciones) {
        return (
            <span>Loading...</span>
        )
    }

    const navigateToUpdate = (habitacion)=>{
        navigate(`/admin/updateHabitacion/${habitacion._id}`,{state:{habitacion}})
    }

    const deleteHabitacion = (id)=>{
        deleteHabitacionHook(id)
        window.location.reload()
    }

    //! No-Data
    const noData = (
        <div>
            <h1>No hay datos</h1>
        </div>
    )

  return (
    <>
    <div className='add'>
        <Link to={'/admin/newHabitacion'}>
            <button style={{width:'100%'}}>Añadir</button>
        </Link>
        <Link to={'/admin/Adminfeed'}>
            <button>Regresar</button>
        </Link>
    </div>
    <h1 style={{textAlign:'center'}}>Habitaciones:</h1>
    <div className='card-container'>
        {
            habitaciones == null || habitaciones.length == 0 ? noData:(
                habitaciones.map((habitacion)=>(
                    <div key={habitacion._id}>
                        <div className='card-content'>
                            <p><strong>ID: </strong>{habitacion._id}</p>
                            <p><strong>Hotel: </strong>{habitacion.hotel}</p>
                            <p><strong>Disponibilidad: {habitacion.disponibilidad.toString()}</strong></p>
                            <p><strong>Num.Cuarto: {habitacion.numeroCuarto}</strong></p>
                            <p><strong>Descripción: {habitacion.descripci}</strong></p>
                            <div className='parraf'>
                                {habitacion.descripcion}
                            </div>
                            <p><strong>Precio: Q {habitacion.precio}.00</strong></p>
                            <div style={{display:'flex', gap:'40%'}}>
                                <button onClick={()=> navigateToUpdate(habitacion)} className="category-add-button">Editar</button>
                                <button onClick={()=> deleteHabitacion(habitacion._id)} className="category-delete-button">Eliminar</button>
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
