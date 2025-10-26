import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './ProfileSidebar.css';

function ProfileSidebar({ isOpen, onClose, userData }) {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <div className={`profile-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <h2>{t('sidebar.profile')}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Profile Info Section */}
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="/profile-avatar.svg" alt="Arjun Sharma Profile" />
            <div className="online-indicator"></div>
          </div>
          <div className="profile-details">
            <h3>{userData?.name || 'Student'}</h3>
            <p className="email">{userData?.email || 'student@example.com'}</p>
            <p className="status">{t('sidebar.computerScienceStudent')}</p>
            <Link
              to="/profile/edit"
              className="view-profile-btn"
              onClick={() => {
                console.log('View Profile button clicked!');
                onClose();
              }}
            >
              {t('sidebar.viewProfile')}
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="profile-stats">
          <div className="stat-box">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-number">2,847</div>
              <div className="stat-label">{t('profile.profileViews')}</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">12</div>
              <div className="stat-label">{t('profile.achievements')}</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-number">Level 8</div>
              <div className="stat-label">{t('profile.currentLevel')}</div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="profile-completion">
          <div className="completion-header">
            <span className="completion-text">{t('sidebar.profileCompletion')}</span>
            <span className="completion-percentage">78%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '78%' }}></div>
          </div>
          <p className="completion-message">{t('sidebar.completeProfile')}</p>
          <Link
            to="/profile/edit"
            className="complete-profile-btn"
            onClick={onClose}
          >
            {t('sidebar.completeMyProfile')}
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h4>{t('sidebar.quickActions')}</h4>
          <div className="action-grid">
            <Link to="/opportunities" className="action-item" onClick={onClose}>
              <span className="action-icon">💼</span>
              <span>{t('sidebar.findJobs')}</span>
            </Link>
            <Link to="/mentors" className="action-item" onClick={onClose}>
              <span className="action-icon">👨‍🏫</span>
              <span>{t('sidebar.findMentors')}</span>
            </Link>
            <Link to="/games" className="action-item" onClick={onClose}>
              <span className="action-icon">🎮</span>
              <span>{t('sidebar.practice')}</span>
            </Link>
            <Link to="/badges" className="action-item" onClick={onClose}>
              <span className="action-icon">🏅</span>
              <span>{t('sidebar.badges')}</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h4>{t('sidebar.recentActivity')}</h4>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">🎯</div>
              <div className="activity-content">
                <span className="activity-text">{t('sidebar.appliedToGoogle')}</span>
                <span className="activity-time">2 {t('sidebar.hoursAgo')}</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🏆</div>
              <div className="activity-content">
                <span className="activity-text">{t('sidebar.earnedCodeMaster')}</span>
                <span className="activity-time">1 {t('sidebar.dayAgo')}</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📚</div>
              <div className="activity-content">
                <span className="activity-text">{t('sidebar.completedReact')}</span>
                <span className="activity-time">3 {t('sidebar.daysAgo')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Pro Features */}
        <div className="pro-features">
          <div className="pro-header">
            <h4>🚀 {t('sidebar.bridgeProFeatures')}</h4>
            <span className="pro-badge">PREMIUM</span>
          </div>
          <div className="pro-list">
            <Link to="/aipro" className="pro-item" onClick={onClose}>
              <span className="pro-icon">🤖</span>
              <div className="pro-content">
                <span className="pro-title">{t('sidebar.aiCareerGuidance')}</span>
                <span className="pro-desc">{t('sidebar.getPersonalizedAdvice')}</span>
              </div>
              <span className="pro-tag">PRO</span>
            </Link>
            <div className="pro-item">
              <span className="pro-icon">🎯</span>
              <div className="pro-content">
                <span className="pro-title">{t('sidebar.priorityApplications')}</span>
                <span className="pro-desc">{t('sidebar.skipQueue')}</span>
              </div>
              <span className="pro-tag">PRO</span>
            </div>
            <div className="pro-item">
              <span className="pro-icon">📊</span>
              <div className="pro-content">
                <span className="pro-title">{t('sidebar.advancedAnalytics')}</span>
                <span className="pro-desc">{t('sidebar.detailedInsights')}</span>
              </div>
              <span className="pro-tag">PRO</span>
            </div>
          </div>
          <Link to="/aipro" className="upgrade-btn" onClick={onClose}>
            ✨ {t('sidebar.upgradeToPro')}
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="sidebar-menu">
          <h4>{t('sidebar.navigation')}</h4>
          <div className="menu-list">
            <Link to="/opportunities" className="menu-item" onClick={onClose}>
              <span className="menu-icon">💼</span>
              <span>{t('header.opportunities')}</span>
              <span className="menu-arrow">→</span>
            </Link>
            <Link to="/mentors" className="menu-item" onClick={onClose}>
              <span className="menu-icon">👨‍🏫</span>
              <span>{t('header.mentors')}</span>
              <span className="menu-arrow">→</span>
            </Link>
            <Link to="/games" className="menu-item" onClick={onClose}>
              <span className="menu-icon">🎮</span>
              <span>{t('sidebar.gamesAndPractice')}</span>
              <span className="menu-arrow">→</span>
            </Link>
            <Link to="/badges" className="menu-item" onClick={onClose}>
              <span className="menu-icon">🏅</span>
              <span>{t('sidebar.badgesAndAchievements')}</span>
              <span className="menu-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Settings & Logout */}
        <div className="sidebar-footer">
          <div className="footer-actions">
            <button className="settings-btn">
              <span className="settings-icon">⚙️</span>
              <span>{t('sidebar.settings')}</span>
            </button>
            <button className="logout-btn">
              <span className="logout-icon">🚪</span>
              <span>{t('sidebar.logout')}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSidebar;