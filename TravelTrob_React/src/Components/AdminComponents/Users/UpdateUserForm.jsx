import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../../Shared/Hooks/useUser'
import { useEffect, useState } from 'react'

export const UpdateUserForm = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const user = location.state.user
    const { updateUserHook } = useUser()
    const { id } = params
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        newPassword:'',
        phone: '',
        role: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const password = formData.newPassword ? formData.newPassword : formData.password
            await updateUserHook(
                id,
                formData.name,
                formData.surname,
                formData.username,
                formData.email,
                password,
                formData.phone,
                formData.role
            )
            navigate('../users')
        } catch (err) {
            console.error('Error al Actualizar Usuario', err);
        }
    }

    const navigateToUsers = () => {
        navigate('../users')
    }

    useEffect(() => {
        setFormData({
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email,
            password: user.password,
            phone: user.phone,
            role: user.role
        })
    }, [user])

    return (
        <>
            <h1>Editar Usuario</h1>
            <form onSubmit={handleUpdate}>
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
                    <h3>New Password:</h3>
                    <input value={formData.newPassword} onChange={handleChange} type="password" name="newPassword" id="newPassword" />
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
                <button type='submit'>Actualizar</button>
                <button type='button' onClick={navigateToUsers}>Cancelar</button>
            </form>
        </>
    )
}
