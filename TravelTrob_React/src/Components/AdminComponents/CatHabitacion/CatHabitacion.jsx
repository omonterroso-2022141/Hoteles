import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCatHabitacion } from '../../../Shared/Hooks/useCatHabitacion'

export const CatHabitacion = ({ cHabs = [] }) => {
    const navigate = useNavigate()

    const { deleteCatHabHook } = useCatHabitacion()

    const navigateToUpdate = (catHab) => {
        navigate(`/admin/updateCatHabitacion/${catHab._id}`, { state: { catHab } })
    }

    const deleteCatHab = (id, Nombre) => {
        if (Nombre === 'Default') {
            return console.log('No se puede borrar categoría Default')
        }
        deleteCatHabHook(id)
        console.log(id)
        window.location.reload()
    }

    //! No-Data
    const noData = (
        <div>
            <h1>No hay Datos, si ve este mensaje, por favor contacte con un técico</h1>
        </div>
    )

    return (
        <>
            <div className='add'>
                <Link to={'/admin/newCatHabitacion'}>
                    <button>Añadir</button>
                </Link>
                <Link to={'/admin/AdminFeed'}>
                    <button>Regresar</button>
                </Link>
            </div>
            <div className="superior">
                <Link to={'/admin/newCatHabitacion'}>
                    <button style={{ width: '100%' }}>Añadir</button>
                </Link>
                <Link to={'/admin/Adminfeed'}>
                    <button>Regresar</button>
                </Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Categoría Habitación:</h1>
            <div className='card-container'>
                {
                    cHabs.length == 0 ? noData : (
                        cHabs.map((catHab) => (
                            <div key={catHab._id}>
                                <div className='card-content'>
                                    <p><strong>ID: </strong>{catHab._id}</p>
                                    <p><strong>Nombre: </strong>{catHab.Nombre}</p>
                                    <p><strong>Contenido: </strong></p>
                                    <div className='parraf'>
                                        {catHab.Contenido}
                                    </div>
                                    <div style={{ display: 'flex', gap: '40%' }}>
                                        <button onClick={() => navigateToUpdate(catHab)} className='category-add-button'>Editar</button>
                                        <button onClick={() => deleteCatHab(catHab._id, catHab.Nombre)} className='category-delete-button'>Eliminar</button>
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
