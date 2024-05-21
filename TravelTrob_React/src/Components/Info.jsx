import { Navbar } from "./Navbar"
import { BarraBusqueda } from "./BarraBusqueda";
import './CSS/Info.css'
import { useNavigate } from "react-router-dom";

import { Footer } from "./Footer";

export const Info = () => {
    const navigate = useNavigate()
    const handleNavigateToLogin = () => {
        navigate('/auth');
    };
    return (
        <div>
            <header className="header">
                <div className='NavBarBuscar'>
                    <Navbar />
                    <BarraBusqueda />
                </div>
            </header>

            <section className="info-section">

                <div className="container-TitleDinamic">
                    <div className="typewriter">Bienvenido a Travel Trob</div>
                </div>
                <div className="info-boxes">

                    <div className="info-box">
                        <span>🌐</span>
                        <p>Somos una web de Gestor de Hoteles</p>
                    </div>
                    <div className="info-box" onClick={handleNavigateToLogin}>
                        <span>👤</span>
                        <p>Crea tu cuenta y accede a Travel Trob</p>
                    </div>
                    <div className="info-box">
                        <span>📍</span>
                        <p>Los mejores Hoteles con los mejores precios</p>
                    </div>
                    <div className="info-box">
                        <span>📱</span>
                        <p>Una web muy intuitiva</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

