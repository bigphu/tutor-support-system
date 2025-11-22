import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Navbar.css';

import logo from '../../assets/logo.png';
import notificationIcon from '../../assets/notification-icon.svg';
import profileIcon from '../../assets/profile-icon.svg';

const Navbar = () => {
  const location = useLocation();

  // Routes where navbar should only show the logo
  const onlyLogoRoutes = ['/login'];

  const isOnlyLogo = onlyLogoRoutes.includes(location.pathname);

  return (
    <nav className="navbar-container">
      {/* LEFT SIDE */}
      <div className="navbar-left">
        {isOnlyLogo ? (
          <img src={logo} alt="Logo" className="navbar-logo" />
        ) : (
          <NavLink to="/" className="navbar-icon-home">
            <img src={logo} alt="Logo" className="navbar-logo clickable" />
          </NavLink>
        )}

        {/* Only show links if NOT on login page */}
        {!isOnlyLogo && (
          <div className="navbar-links">
            <NavLink to="/" className="text-small text-light text-bold clickable">Home</NavLink>
            <NavLink to="/dashboard" className="text-small text-light text-bold clickable">Dashboard</NavLink>
            <NavLink to="/mylinks" className="text-small text-light text-bold clickable">My Links</NavLink>
            <NavLink to="/discovery" className="text-small text-light text-bold clickable">Discovery</NavLink>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">
        {!isOnlyLogo && (
          <>
            <img
            src={notificationIcon}
            alt="Notifications"
            className="navbar-notification-icon clickable"
            />
            
            <NavLink to="/profile">
              <img
                src={profileIcon}
                alt="User Profile"
                className="navbar-profile-icon clickable"
                />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
