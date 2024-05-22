import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTypeEvento } from '../../../Shared/Hooks/useTypeEvento'

export const TypeEvent = () => {
    const navigate = useNavigate()
    const { getTypeEvents, deleteTypeEvents, typeEvents, isFetchingHabitaciones } = useTypeEvento()

    useEffect(() => {
        getTypeEvents()
    }, [])

    if (isFetchingHabitaciones) {
        return (
            <span>Loading...</span>
        )
    }

    const navigateToUpdate = (catHab) => {
        navigate(`/admin/updateTypeEvent/${catHab._id}`, { state: { catHab } })
    }

    const deleteTypeEvent = async(id) => {
        await deleteTypeEvents(id)
        window.location.reload()
    }

    //! No-Data
    const noData = (
        <div style={{ textAlign: 'center' }}>
            <h1>No hay Datos, si ve este mensaje repetidamente, por favor contacte con un técnico</h1>
        </div>        
    )

    return (
        <>
            <div className='add'>
                <Link to={'/admin/newTypeEvent'}>
                    <button>Añadir</button>
                </Link>
                <Link to={'/admin/AdminFeed'}>
                    <button>Regresar</button>
                </Link>
            </div>
            <div className="superior">
                <Link to={'/admin/newTypeEvent'}>
                    <button style={{ width: '100%' }}>Añadir</button>
                </Link>
                <Link to={'/admin/Adminfeed'}>
                    <button>Regresar</button>
                </Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Tipo de Evento:</h1>
            <div className='card-container'>
                {
                    typeEvents == null || typeEvents.length == 0 ? noData : (
                        typeEvents.map((typeEvent) => (
                            <div key={typeEvent._id}>
                                <div className='card-content'>
                                    <p><strong>ID: </strong>{typeEvent._id}</p>
                                    <p><strong>Nombre: </strong>{typeEvent.nombre}</p>
                                    <p><strong>Hotel ID: </strong>{typeEvent.hotel._id}</p>
                                    <p><strong>Hotel: </strong>{typeEvent.hotel.nombre}</p>
                                    <p><strong>Dirección: </strong>{typeEvent.hotel.direccion}</p>
                                    <p><strong>Teléfono: </strong>{typeEvent.hotel.telefono}</p>
                                    <div style={{ display: 'flex', gap: '40%' }}>
                                        <button onClick={() => navigateToUpdate(typeEvent)} className='category-add-button'>Editar</button>
                                        <button onClick={() => deleteTypeEvent(typeEvent._id)} className='category-delete-button'>Eliminar</button>
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
