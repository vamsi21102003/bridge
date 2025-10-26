import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

function Profile() {
  const { t } = useLanguage();
  
  const profileBadges = [
    { name: 'Code Master', icon: '💻', color: '#FFD700', earned: true },
    { name: 'AI Explorer', icon: '🤖', color: '#8A2BE2', earned: true },
    { name: 'Team Player', icon: '👥', color: '#00FF00', earned: false },
    { name: 'Quick Learner', icon: '⚡', color: '#00BFFF', earned: true }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Profile Header */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            border: '3px solid rgba(255,255,255,0.2)'
          }}>
            <img 
              src="/profile-avatar.svg" 
              alt="Arjun Sharma Profile" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Arjun Sharma</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem', marginBottom: '1rem' }}>
            arjun.sharma@student.edu
          </p>
          <Link 
            to="/profile/edit"
            onClick={() => console.log('View Profile button clicked! Navigating to /profile/edit')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              textDecoration: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              marginBottom: '1.5rem',
              boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
            }}
          >
            {t('profile.viewProfile')}
          </Link>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#feca57' }}>2,847</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('profile.profileViews')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#feca57' }}>12</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('profile.achievements')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#feca57' }}>Level 8</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('profile.currentLevel')}</div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Personal Information */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>👤</span> {t('profile.personalInfo')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ color: '#00BFFF', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  {t('profile.email')}
                </label>
                <div style={{ color: 'white' }}>arjun.sharma@student.edu</div>
              </div>
              <div>
                <label style={{ color: '#00BFFF', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  {t('profile.location')}
                </label>
                <div style={{ color: 'white' }}>Bangalore, India</div>
              </div>
              <div>
                <label style={{ color: '#00BFFF', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  {t('profile.university')}
                </label>
                <div style={{ color: 'white' }}>Indian Institute of Technology</div>
              </div>
              <div>
                <label style={{ color: '#00BFFF', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  {t('profile.graduationYear')}
                </label>
                <div style={{ color: 'white' }}>2025</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>💡</span> {t('profile.skillsExpertise')}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'AWS', 'Docker', 'Git'].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements & Badges */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            gridColumn: 'span 2'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🏆</span> {t('profile.achievementsBadges')}
            </h3>

            {/* Badges Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {profileBadges.map((badge, index) => (
                <div
                  key={badge.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.75rem',
                    background: badge.earned ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${badge.earned ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '12px',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: badge.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    opacity: badge.earned ? 1 : 0.5
                  }}>
                    {badge.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: badge.earned ? 'white' : 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      {badge.name}
                    </div>
                    <div style={{
                      color: badge.earned ? '#00FF00' : '#FFFF00',
                      fontSize: '0.8rem'
                    }}>
                      {badge.earned ? t('profile.earned') : t('profile.inProgress')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Badges Button */}
            <Link
              to="/badges"
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '25px',
                textAlign: 'center',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 107, 107, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t('profile.viewAllBadges')}
            </Link>
          </div>

          {/* Recent Activity */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>📈</span> {t('profile.recentActivity')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { action: t('profile.completedCourse'), time: `2 ${t('profile.hoursAgo')}`, icon: '📚' },
                { action: t('profile.earnedBadge'), time: `1 ${t('profile.dayAgo')}`, icon: '🏆' },
                { action: t('profile.joinedTeam'), time: `3 ${t('profile.daysAgo')}`, icon: '👥' },
                { action: t('profile.updatedProfile'), time: `1 ${t('profile.weekAgo')}`, icon: '✏️' }
              ].map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{activity.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: 'white', fontSize: '0.9rem' }}>{activity.action}</div>
                    <div style={{ color: '#00BFFF', fontSize: '0.8rem' }}>{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;