import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)
        const user = {
            email,
            password
        }
        const response = await loginRequest(user)
        setIsLoading(false)

        if (response.error) {
            return toast.error(
                response?.e?.response?.data ||
                'Error general al intentar logearse. Intenta de nuevo.'
            )
        }
        console.log(response)
        const { userDetails } = response.data
        localStorage.setItem('user', JSON.stringify(userDetails))
        navigate('/channels')
    }

    return (
        login,
        isLoading
    )
}
