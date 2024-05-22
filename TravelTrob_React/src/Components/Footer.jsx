import './CSS/Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <ul>
                        <li><a href="/*">Home  </a></li>
                        <li><a href="/Feed">Hoteles</a></li>
                        <li><a href="/servicios">Servicios</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>Dirección: 123 Calle Principal, Ciudad</p>
                    <p>Teléfono: (502) 456-7890</p>
                    <p>Email: traveltrob@gmail.com</p>
                </div>
                <div className="footer-social">
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Travel Trob.    Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
