import { useState } from "react";
import toast from "react-hot-toast";
import { registerRequest } from "../../Services/api";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async (name, surname, username, email, password, phone) => {
        setIsLoading(true)
        const user = {
            name,
            surname,
            username,
            email,
            password,
            phone
        }
        const response = await registerRequest(user)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                '¡On! No pudimos registrarte, intenta de nuevo porfvor'
            )
        }
    }


    return {
        register,
        isLoading

    }
}
