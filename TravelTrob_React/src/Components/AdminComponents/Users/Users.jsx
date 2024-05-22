import React from 'react'
import { useUser } from '../../../Shared/Hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'
import './Users.css'

export const Users = ({ users = [] }) => {
    const navigate = useNavigate()
    const { deleteUserHook } = useUser()

    const navigateToUpdate = (user) => {
        navigate(`/admin/updateUser/${user._id}`, { state: { user } })
    }

    const deleteUser = (id, username) => {
        if (username === 'ADMIN') {
            return console.log('No se puede borrar este Usuario')
        }
        deleteUserHook(id)
        window.location.reload()
    }

    const noData = (
        <div className='no-data'>
            No hay Usuarios (Si usted ve este mensaje, contacte con un técnico)
        </div>
    )

    return (
        <>
            <div className='add'>
                <Link to={'/admin/newUser'}>
                    <button>Añadir</button>
                </Link>
                <Link to={'/admin/adminFeed'}>
                    <button>Regresar</button>
                </Link>
            </div>

            <h1 style={{ textAlign: 'center' }}>Usuarios:</h1>
            <div className='card-container'>
                {
                    users.length === 0 ? noData : (
                        users.map((user) => (
                            <div key={user._id}>
                                <div className='card-content'>
                                    <p><strong>ID: </strong>{user._id}</p>
                                    <p><strong>Name: </strong>{user.name}</p>
                                    <p><strong>Surname: </strong>{user.surname}</p>
                                    <p><strong>Username: </strong>{user.username}</p>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p className='card-password'><strong>Password:</strong><br />{user.password}</p>
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p><strong>Role: </strong>{user.role}</p>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                                        <button onClick={() => navigateToUpdate(user)} className='category-add-button'>Editar</button>
                                        <button onClick={() => deleteUser(user._id, user.username)} className='category-delete-button'>Eliminar</button>
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
