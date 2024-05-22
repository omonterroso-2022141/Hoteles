import { useState, useEffect } from 'react'
import { getReservasRequest } from '../../Services/api'

export const useReservas = () => {
    const [reservas, setReservas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchReservas = async () => {
            setLoading(true)
            const response = await getReservasRequest()
            if (!response.error) {
                setReservas(response.data)
            }
            setLoading(false)
        }
        fetchReservas()
    }, [])

    return { reservas, loading }
}