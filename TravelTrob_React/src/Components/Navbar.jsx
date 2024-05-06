import { useDetails } from '../Shared/Hooks/useDetails.jsx'
import { useNavigate } from 'react-router-dom'
import '../Pages/Feed/Feed.css'


const NavLogo = () => {
    return (
        <div>
            <h1 className='Titulos'>Travel Trob</h1>
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const { isLogged, logoutSys } = useDetails()
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutSys()
    }
    const handleNaviteToLogin = () => {
        navigate('/auth')
    }

    return (
        <div className='navbar'> 
            <NavLogo />
            <div>
                <NavButton text='Browse'  />
                {
                    !isLogged ? (
                        <NavButton text='Login' onClickHandler={handleNaviteToLogin} />
                    ) : (
                        <div>
                            <NavButton text='Account'  />
                            <NavButton text='LogOut' onClickHandler={handleLogout} />
                        </div>
                    )
                }
                <h1>Holaasdasdasds</h1>
            </div>
        </div>
    )
}
