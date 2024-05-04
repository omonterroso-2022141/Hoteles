import { useState } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "../../Services/api.js";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

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
        localStorage.setItem('token', response.data.token)
    }

    return {
        login,
        isLoading
    }
}