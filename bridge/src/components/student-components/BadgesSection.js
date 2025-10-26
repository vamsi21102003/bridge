import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './BadgesSection.css';
import './CommonSections.css';

const BadgesSection = () => {
  const { t } = useLanguage();
  const badges = [
    {
      id: 1,
      name: 'Code Master',
      description: 'Complete 50 coding challenges',
      icon: '💻',
      color: 'linear-gradient(45deg, #FFD700, #FFA500)',
      earned: true,
      progress: 100,
      rarity: 'legendary'
    },
    {
      id: 2,
      name: 'AI Explorer',
      description: 'Complete AI learning path',
      icon: '🤖',
      color: 'linear-gradient(45deg, #8A2BE2, #4B0082)',
      earned: true,
      progress: 100,
      rarity: 'epic'
    },
    {
      id: 3,
      name: 'Team Player',
      description: 'Collaborate on 5 team projects',
      icon: '👥',
      color: 'linear-gradient(45deg, #00FF00, #008000)',
      earned: false,
      progress: 60,
      rarity: 'rare'
    },
    {
      id: 4,
      name: 'Quick Learner',
      description: 'Complete courses in record time',
      icon: '⚡',
      color: 'linear-gradient(45deg, #00BFFF, #0000FF)',
      earned: true,
      progress: 100,
      rarity: 'rare'
    },
    {
      id: 5,
      name: 'Problem Solver',
      description: 'Solve 100 practice problems',
      icon: '🔍',
      color: 'linear-gradient(45deg, #FF69B4, #FF1493)',
      earned: false,
      progress: 75,
      rarity: 'epic'
    },
    {
      id: 6,
      name: 'Profile Pro',
      description: 'Complete your profile 100%',
      icon: '⭐',
      color: 'linear-gradient(45deg, #FFA500, #FF4500)',
      earned: true,
      progress: 100,
      rarity: 'common'
    },
    {
      id: 7,
      name: 'Daily Warrior',
      description: 'Login for 7 consecutive days',
      icon: '🗡️',
      color: 'linear-gradient(45deg, #4ade80, #22c55e)',
      earned: true,
      progress: 100,
      rarity: 'common'
    },
    {
      id: 8,
      name: 'BriDGe Elite',
      description: 'Exclusive Pro member badge',
      icon: '👑',
      color: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
      earned: true,
      progress: 100,
      rarity: 'legendary',
      isPro: true
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const inProgressBadges = badges.filter(badge => !badge.earned);

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'common': return '#10b981';
      case 'rare': return '#3b82f6';
      case 'epic': return '#8b5cf6';
      case 'legendary': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const BadgeCard = ({ badge }) => (
    <div 
      className="badge-card-section"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.2)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      {/* Pro Badge Indicator */}
      {badge.isPro && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
          color: 'white',
          padding: '0.3rem 0.8rem',
          borderRadius: '15px',
          fontSize: '0.7rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          PRO
        </div>
      )}

      {/* Rarity Indicator */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: getRarityColor(badge.rarity),
        fontSize: '0.8rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {badge.rarity}
      </div>

      {/* Badge Icon */}
      <div style={{
        width: '80px',
        height: '80px',
        background: badge.color,
        borderRadius: '50%',
        margin: '1rem auto 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        boxShadow: badge.earned ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none',
        opacity: badge.earned ? 1 : 0.6,
        position: 'relative'
      }}>
        {badge.icon}
        {!badge.earned && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            🔒
          </div>
        )}
      </div>
      
      {/* Badge Name */}
      <h4 style={{
        color: badge.earned ? 'white' : 'rgba(255, 255, 255, 0.6)',
        marginBottom: '0.5rem',
        fontSize: '1.1rem',
        fontWeight: 600
      }}>
        {badge.name}
      </h4>
      
      {/* Badge Description */}
      <p style={{
        color: badge.earned ? '#00BFFF' : 'rgba(0, 191, 255, 0.6)',
        fontSize: '0.9rem',
        marginBottom: '1rem',
        lineHeight: '1.4'
      }}>
        {badge.description}
      </p>
      
      {/* Progress Bar for Incomplete Badges */}
      {!badge.earned && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          height: '6px',
          overflow: 'hidden',
          marginBottom: '0.5rem'
        }}>
          <div style={{
            background: badge.color,
            height: '100%',
            width: `${badge.progress}%`,
            borderRadius: '10px',
            transition: 'width 0.5s ease'
          }}></div>
        </div>
      )}
      
      {/* Status */}
      <div style={{
        color: badge.earned ? '#00FF00' : '#FFFF00',
        fontSize: '0.8rem',
        fontWeight: '600'
      }}>
        {badge.earned ? '✓ Earned' : `${badge.progress}% Complete`}
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 50%, #4c1d95 100%)',
      padding: '2rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            background: 'linear-gradient(90deg, #00FFFF, #00BFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            🏆 {t('badges.title')}
          </h1>
          <p style={{
            color: '#00BFFF',
            fontSize: '1.2rem'
          }}>
            {t('badges.subtitle')}
          </p>
        </div>

        {/* Stats Summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #00FFFF, #00BFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              {earnedBadges.length}
            </div>
            <div style={{ color: '#00BFFF' }}>Badges Earned</div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #00FFFF, #00BFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              {inProgressBadges.length}
            </div>
            <div style={{ color: '#00BFFF' }}>In Progress</div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #00FFFF, #00BFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              {Math.round((earnedBadges.length / badges.length) * 100)}%
            </div>
            <div style={{ color: '#00BFFF' }}>Completion Rate</div>
          </div>
        </div>

        {/* Earned Badges Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: '#00FFFF',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #00FFFF',
            paddingBottom: '0.5rem'
          }}>
            🎉 Earned Badges ({earnedBadges.length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {earnedBadges.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>

        {/* In Progress Badges Section */}
        <section>
          <h2 style={{
            color: '#FFFF00',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #FFFF00',
            paddingBottom: '0.5rem'
          }}>
            🚧 In Progress ({inProgressBadges.length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {inProgressBadges.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BadgesSection;