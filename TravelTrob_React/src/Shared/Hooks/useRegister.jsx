import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async (email, username, password,phone, name,surname) => {
        setIsLoading(true)
        const user = {
            email,
            username,
            password,
            phone,
            name,
            surname
        }
        const response = await registerRequest(user)
        setIsLoading(false)
        if (response.error) {
            if (response?.err?.response?.data?.errors) {
                let arr = response?.err?.response?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                '¡Oh no! Error al registrarte, verifica tus credenciales y intentalo de nuevo'
            )
        }
        console.log(response)

    }
    return (
        register,
        isLoading
    )
}
