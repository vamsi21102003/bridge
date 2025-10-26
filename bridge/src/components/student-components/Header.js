import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import { useLanguage } from '../../contexts/LanguageContext';
import StudentAppWrapper from '../StudentAppWrapper';
import './Header.css';

function Header({ userData, onBackToHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (language) => {
    console.log('Changing language to:', language);
    changeLanguage(language);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <StudentAppWrapper>
      <header className="header">
        <div className="container">
          {/* Enhanced Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">🌉</span>
            <span className="logo-text">{t('header.logo')}</span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          
          {/* Enhanced Search Container */}
          <div className={`search-container ${isSearchFocused ? 'focused' : ''}`}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={t('header.search') || "Search opportunities, courses, mentors..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="search-bar"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Enhanced Navigation Menu */}
          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/opportunities" className="nav-item opportunities" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">💼</span>
              <span className="nav-text">{t('header.opportunities') || 'Jobs'}</span>
              <span className="nav-badge">New</span>
            </Link>
            
            <Link to="/mentors" className="nav-item mentors" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">👨‍🏫</span>
              <span className="nav-text">{t('header.mentors') || 'Mentors'}</span>
            </Link>
            
            <Link to="/games" className="nav-item games" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🎮</span>
              <span className="nav-text">{t('header.games') || 'Games'}</span>
              <span className="nav-indicator">🔥</span>
            </Link>
            
            <Link to="/badges" className="nav-item badges" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🏆</span>
              <span className="nav-text">{t('header.badges') || 'Badges'}</span>
              <span className="nav-count">3</span>
            </Link>
            
            <Link to="/aipro" className="nav-item ai-pro" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🤖</span>
              <span className="nav-text">{t('header.aipro') || 'AI Pro'}</span>
              <span className="pro-sparkle">✨</span>
            </Link>
            
            {/* Enhanced Language Selector */}
            <div className="language-selector">
              <span className="language-icon">🌐</span>
              <select 
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="language-dropdown"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="hi">🇮🇳 हिं</option>
                <option value="or">🇮🇳 ଓଡ଼</option>
              </select>
            </div>
            
            {/* Back to Bridge Button */}
            {onBackToHome && (
              <button 
                onClick={onBackToHome} 
                className="back-to-bridge-btn"
                title="Back to Bridge Home"
              >
                <span className="back-icon">🏠</span>
                <span className="back-text">Bridge</span>
              </button>
            )}
            
            {/* Enhanced Profile Button */}
            <button 
              onClick={() => {
                toggleProfile();
                setIsMobileMenuOpen(false);
              }} 
              className="profile-btn"
            >
              <span className="profile-avatar">
                {userData?.profilePicture ? (
                  <img src={userData.profilePicture} alt="Profile" />
                ) : (
                  <span className="profile-emoji">👤</span>
                )}
              </span>
              <span className="profile-text">{userData?.firstName || t('header.profile') || 'Profile'}</span>
              <span className="profile-dropdown-icon">▼</span>
            </button>
          </nav>
        </div>
      </header>
      
      <ProfileSidebar 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        userData={userData}
      />
    </StudentAppWrapper>
  );
}

export default Header;