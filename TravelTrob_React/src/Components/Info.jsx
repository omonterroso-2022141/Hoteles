import { useNavigate } from "react-router-dom"
import { Logo } from "./Logo.jsx"
import './CSS/Info.css'

export const Info = ({ switchAuthHandler }) => {
    const navigate = useNavigate()

    const handlerNavigateLogin = () => {
        navigate('/auth')
    }
    const handlerNavigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className="Container">
            <div className="Logo">
                <Logo />
            </div>
            <div className="Button-Container">
                <button onClick={handlerNavigateLogin}>Login</button>
                <button onClick={handlerNavigateRegister}>Register</button>
            </div>
            <div>
                <h1 className="Titulos">Hola es la info de Travel Trob :#</h1>
            </div>
        </div>
    )
}
