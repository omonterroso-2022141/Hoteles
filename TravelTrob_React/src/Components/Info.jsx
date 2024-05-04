import { useNavigate } from "react-router-dom"
import { Register } from "./Register.jsx"

export const Info = ({ switchAuthHandler }) => {
    const navigate = useNavigate()

    const handlerNavigateLogin = () => {
        navigate('/auth')
    }
    const handlerNavigateRegister = () => {
        navigate('/register') 
    }
    return (
        <div>

            <h1>Hola es la info de Travel Trob :#</h1>

            <div>
            <button onClick={handlerNavigateLogin}>Login</button>
            </div>
            
            <button onClick={handlerNavigateRegister}>Register</button>
        </div>
    )
}
