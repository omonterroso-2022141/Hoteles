import { useState } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "../../Services/api.js";
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
                '¡Oh! No pudimos ingresar, intenta de nuevo :)'
            )
        }
        localStorage.setItem('token', response.data.token)
        navigate('/feed')
        
        
    }

    return {
        login,
        isLoading
    }
}