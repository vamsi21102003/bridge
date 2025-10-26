import React, { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollAnimation';
import './Header.css';

const Header = ({ onShowLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <nav className="navbar">
        <a href="#home" className="logo">
          <i className="fas fa-rocket"></i>
          <div className="logo-content">
            <span className="logo-name">BriDGe</span>
            <span className="logo-tagline">Bridge the gap; Build the future!</span>
          </div>
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#opportunities" className="nav-link">Opportunities</a>
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#companies" className="nav-link">Companies</a>
          <a href="#resources" className="nav-link">Resources</a>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-primary" onClick={onShowLogin}>Login</button>
          <button className="btn btn-primary" onClick={onShowLogin}>Sign Up</button>
        </div>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;