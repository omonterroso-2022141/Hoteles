import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../Shared/Hooks/useUser'
import { useState } from 'react'

export const UserForm = () => {
    const { saveUserHook } = useUser()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        role: '',
    })

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveUserHook(formData)
    }

    const handleNavigateToUsers = () => {
        navigate('/admin/users')
    }

    return (
        <>
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Name:</h3>
                    <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" />
                    <h3>Surname:</h3>
                    <input value={formData.surname} onChange={handleChange} type="text" name="surname" id="surname" />
                    <h3>Username:</h3>
                    <input value={formData.username} onChange={handleChange} type="text" name="username" id="username" />
                    <h3>Email:</h3>
                    <input value={formData.email} onChange={handleChange} type="text" name="email" id="email" />
                    <h3>Password:</h3>
                    <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" />
                    <h3>Phone:</h3>
                    <input value={formData.phone} onChange={handleChange} type="text" name="phone" id="phone" />
                    <h3>Role:</h3>
                    <label>
                        <input value={'CLIENT'} checked={formData.role === 'CLIENT'} onChange={handleChange} type="radio" name="role" id="admin" />
                        CLIENT
                    </label>
                    <label>
                        <input value={'ADMIN'} checked={formData.role === 'ADMIN'} onChange={handleChange} type="radio" name="role" id="client" />
                        ADMIN
                    </label>
                </div>
                <button type='submit'>Agregar</button>
                <button onClick={handleNavigateToUsers}>Cancelar</button>
            </form>
        </>
    )
}
