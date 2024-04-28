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
            <div className="container">
                {/* Repite el patrón de hexágonos */}
                {[...Array(16)].map((_, row) => (
                    <div className="hex" key={row}>
                        {[...Array(16)].map((_, col) => (
                            <div className="hexagon" key={`${row}-${col}`}></div>
                        ))}
                    </div>
                ))}
            </div>

        </>


    )
}
