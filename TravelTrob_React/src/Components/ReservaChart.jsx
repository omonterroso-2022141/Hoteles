import React, { useEffect } from 'react'
import { useReservas } from '../Shared/Hooks/useReservas.jsx'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useNavigate } from 'react-router-dom'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const ReservaChart = () => {
    const { reservas, loading } = useReservas()
    const navigate = useNavigate()

    // Ordenar las reservas de mayor a menor
    const reservasOrdenadas = [...reservas].sort((a, b) => b.count - a.count)

    // Definir colores y etiquetas para cada barra y su leyenda respectiva
    const colores = ['#CF0000', 'orangered', '#FD3A2D', '#FE5F2F', '#FE8330', '#FFA832', '#FFCC33']
    const etiquetas = reservasOrdenadas.map(reserva => reserva.hotel)

    const datasets = reservasOrdenadas.map((reserva, index) => ({
        label: reserva.hotel,
        data: [reserva.count], 
        backgroundColor: colores[index],
        borderColor: 'black',
        borderWidth: 1,
    }))

    const data = {
        labels: ['Número de Reservaciones'], // Etiqueta única para el eje x
        datasets: datasets,
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Reservas por Hotel',
                font: {
                    size: 24,

                }
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'black', // Color del texto de la leyenda
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                    size: 16
                },
                bodyFont: {
                    size: 14
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'black', // Color de los ticks en el eje x
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black', // Color de los ticks en el eje y
                    font: {
                        size: 14
                    }
                }
            }
        }
    }

    const navigateToReturn = ()=>{
        navigate('../adminfeed')
    }

    if (loading) return <p>Cargando...</p>

    return (
        <div style={{ position: 'relative', height: '400px', width: '600px', margin: '0 auto' }}>
            <Bar data={data} options={options} />
            <button onClick={navigateToReturn}>Cancelar</button>
        </div>
    )
}