import { BarraBusqueda } from './BarraBusqueda';
import { useNavigate } from 'react-router-dom';
import '../Components/CSS/Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutSys();
  };

  const handleNavigateToLogin = () => {
    navigate('/auth');
  };
  const handlerNaavigateToFeed = () => {
    navigate('/feed')
  }

  const handlerNavigatetoInfo = () => {
    navigate('/*')
  }

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <a onClick={handlerNavigatetoInfo}>Home</a>
        <a href="/about"></a>
        <a onClick={handlerNaavigateToFeed}>Hoteles</a>
        <a href="/contact">Contact</a>
      </ul>
  
    </nav>

  )
}
