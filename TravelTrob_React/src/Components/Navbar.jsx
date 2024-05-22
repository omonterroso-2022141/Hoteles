import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserDetails } from '../Shared/Hooks/useUserDetails.jsx';
import './CSS/Navbar.css'

const NavLink = ({ text, onClickHandler }) => {
  return (
    <span className='navbar-link' onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const { isLogged, logoutSys } = useUserDetails();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutSys();
  };

  const handleNavigateToLogin = () => {
    navigate('/auth');
  };

  const handleNavigateToFeed = () => {
    navigate('/feed');
  };

  const handleNavigateToPerfil = () => {
    navigate('/UsuarioPerfil');
  };

  const handleNavigateToInfo = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink text='Home' onClickHandler={handleNavigateToInfo} />
        
        <NavLink text='Hoteles' onClickHandler={handleNavigateToFeed} />
      </div>
      {
        !isLogged ? (
          <NavLink text='Login' onClickHandler={handleNavigateToLogin} />
        ) : (
          <>
            <NavLink text='Perfil' onClickHandler={handleNavigateToPerfil} />
            <NavLink text='LogOut' onClickHandler={handleLogout} />
          </>
        )
      }
    </div>
  );
};


