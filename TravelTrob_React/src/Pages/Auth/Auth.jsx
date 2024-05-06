import { Register } from "../../Components/Register.jsx";
import { Login } from "../../Components/Login.jsx";
import { useState } from "react";
import './Auth.css'

export const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const handleAuthPage = () => {
        setIsLogin(prev => !prev)
    }
    return (
        <>
            <div className="contenedor-auth">
                {
                    isLogin ? (
                        <Login switchAuthHandler={handleAuthPage}></Login>
                    ) : (
                        <Register switchAuthHandler={handleAuthPage}></Register>
                    )
                }
            </div>
        </>


    )
}
