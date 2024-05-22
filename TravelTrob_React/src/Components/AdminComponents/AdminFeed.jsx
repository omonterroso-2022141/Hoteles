import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AdminFeed = () => {
    const navigate = useNavigate()

    const navigateToCategories=()=>{
        navigate('/admin/categories')
    }
    const navigateToUsers=()=>{
        navigate('/admin/users')
    }

    const navigateToHotels=()=>{
        navigate('/admin/hotels')
    }

    const navigateToCatHabs=()=>{
        navigate('/admin/catHabs')
    }

    const navigateToHabitaciones=()=>{
        navigate('/admin/habitaciones')
    }

    const navigateToReserva = () => {
        navigate('/admin/graficosReserva')
    }

    return (
        <>
            <h1>AdminFeed:</h1>
            <h3 onClick={navigateToCategories}>Categorías</h3>
            <h3 onClick={navigateToUsers}>Usuarios</h3>
            <h3 onClick={navigateToHotels}>Hoteles</h3>
            <h3 onClick={navigateToHabitaciones}>Habitación</h3>
            <h3 onClick={navigateToCatHabs}>Cat.Habitación</h3>
            <h3 onClick={navigateToReserva}>Estadisticas de Reserva ()</h3>
        </>
    )
}
