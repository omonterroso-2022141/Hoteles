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

    const navigateToTypeEvent = () => {
        navigate('/admin/typeEvent')
    }

    return (
        <>
            <h1>AdminFeed:</h1>
            <h3 onClick={navigateToUsers}>Usuarios</h3>
            <h3 onClick={navigateToHotels}>Hoteles</h3>
            <h3 onClick={navigateToCategories}>Categoria Hotel</h3>
            <h3 onClick={navigateToHabitaciones}>Habitación</h3>
            <h3 onClick={navigateToCatHabs}>Categoria Habitación</h3>
            <h3 onClick={navigateToTypeEvent}>Tipo de Evento</h3>
            <h3 onClick={navigateToReserva}>Estadisticas de Reserva</h3>
        </>
    )
}
