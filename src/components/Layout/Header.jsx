import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>PartnerPayz</h1>
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({isActive}) => isActive ? 'active' : ''}>
                Partner Finding
              </NavLink>
            </li>
            <li>
              <NavLink to="/financial-goals" className={({isActive}) => isActive ? 'active' : ''}>
                Financial Planning
              </NavLink>
            </li>
            <li>
              <NavLink to="/date-planner" className={({isActive}) => isActive ? 'active' : ''}>
                Relationship
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={({isActive}) => isActive ? 'active' : ''}>
                Pricing
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 