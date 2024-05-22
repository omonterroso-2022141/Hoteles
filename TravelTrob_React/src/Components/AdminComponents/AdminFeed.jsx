import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/AdminFeed.css'

export const AdminFeed = () => {
    const navigate = useNavigate()

    const navigateToCategories = () => {
        navigate('/admin/categories')
    }

    const navigateToUsers = () => {
        navigate('/admin/users')
    }

    const navigateToHotels = () => {
        navigate('/admin/hotels')
    }

    const navigateToCatHabs = () => {
        navigate('/admin/catHabs')
    }

    const navigateToHabitaciones = () => {
        navigate('/admin/habitaciones')
    }

    const navigateToReserva = () => {
        navigate('/admin/graficosReserva')
    }

    const navigateToTypeEvent = () => {
        navigate('/admin/typeEvent')
    }

    const Home = () =>{
        navigate('/*')
    }

    return (
        <div className="admin-feed-container">
            <h1>AdminFeed:</h1>
            <h3 onClick={navigateToUsers}>Usuarios</h3>
            <h3 onClick={navigateToHotels}>Hoteles</h3>
            <h3 onClick={navigateToCategories}>Categoria Hotel</h3>
            <h3 onClick={navigateToHabitaciones}>Habitación</h3>
            <h3 onClick={navigateToCatHabs}>Categoria Habitación</h3>
            <h3 onClick={navigateToTypeEvent}>Tipo de Evento</h3>
            <h3 onClick={navigateToReserva}>Estadisticas de Reserva</h3>

            <button onClick={Home}>Ir al Home</button>
        </div>
    )
}
