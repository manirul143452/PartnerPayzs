import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-part1">Partner</span>
          <span className="logo-part2">Payz</span>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`navbar-toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/profile" 
              className={`navbar-link ${location.pathname === '/profile' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Partners
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/financial-goals" 
              className={`navbar-link ${location.pathname === '/financial-goals' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Financial Planning
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/date-planner" 
              className={`navbar-link ${location.pathname === '/date-planner' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Date Planner
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/pricing" 
              className={`navbar-link ${location.pathname === '/pricing' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/dashboard" 
              className="navbar-link btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 