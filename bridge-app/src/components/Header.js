import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();





  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLanguageChange = (language) => {
    console.log('Changing language to:', language);
    changeLanguage(language);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">{t('header.logo')}</Link>
          
          <div className="search-container">
            <input
              type="text"
              placeholder={t('header.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
            />
            <button className="search-btn">🔍</button>
          </div>

          <nav className="nav-menu">
            <Link to="/opportunities" className="nav-item">
              <span className="nav-icon">💼</span>
              {t('header.opportunities')}
            </Link>
            <Link to="/mentors" className="nav-item">
              <span className="nav-icon">👨‍🏫</span>
              {t('header.mentors')}
            </Link>
            <Link to="/games" className="nav-item">
              <span className="nav-icon">🎮</span>
              {t('header.games')}
            </Link>
            <Link to="/badges" className="nav-item">
              <span className="nav-icon">🏆</span>
              {t('header.badges')}
            </Link>
            <Link to="/aipro" className="nav-item ai-pro">
              <span className="nav-icon">🤖</span>
              {t('header.aipro')}
            </Link>
            
            {/* Clean Language Selector */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '25px',
              padding: '6px 12px',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              gap: '8px'
            }}>
              <span style={{ color: 'white', fontSize: '16px' }}>🌐</span>
              <select 
                value={currentLanguage}
                onChange={(e) => {
                  console.log('Language changed to:', e.target.value);
                  handleLanguageChange(e.target.value);
                }}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  paddingRight: '20px',
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '16px'
                }}
              >
                <option value="en" style={{ background: '#667eea', color: 'white' }}>🇺🇸 English</option>
                <option value="hi" style={{ background: '#667eea', color: 'white' }}>🇮🇳 हिंदी</option>
                <option value="or" style={{ background: '#667eea', color: 'white' }}>🇮🇳 ଓଡ଼ିଆ</option>
              </select>
            </div>
            


            
            <button onClick={toggleProfile} className="profile-btn">👤 {t('header.profile')}</button>
          </nav>
        </div>
      </header>
      
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
}

export default Header;