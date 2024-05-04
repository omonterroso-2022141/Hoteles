import { useDetails } from '../Shared/Hooks/useDetails.jsx';
import { useNavigate } from 'react-router-dom';
import '../Components/CSS/Info.css';
const logo = 'src/Components/IMG/Loogo1_Nombre.png'

const NavLogo = () => (
  <div className='logo'>
    <img src={logo} alt="" />
  </div>
);

const NavButton = ({ text, onClickHandler }) => (
  <span className='NavButton' onClick={onClickHandler}>
    {text}
  </span>
);

export const Navbar = () => {
  const { isLogged, logoutSys } = useDetails();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutSys();
  };

  const handleNavigateToLogin = () => {
    navigate('/auth');
  };

  return (
    <div className='navbar'>
      <NavLogo />
      <div Text-Container>
        <NavButton text='Browse' />
        {!isLogged ? (
          <NavButton text='Login' onClickHandler={handleNavigateToLogin} />
        ) : (
          <>
            <NavButton text='Account' />
            <NavButton text='LogOut' onClickHandler={handleLogout} />
          </>
        )}
      </div>
    </div>
  );
};
