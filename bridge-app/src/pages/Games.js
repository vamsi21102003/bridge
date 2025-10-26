import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Games() {
  const { t } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerStats, setPlayerStats] = useState({
    totalGamesPlayed: 47,
    skillPoints: 2840,
    badges: 12,
    level: 8
  });

  const games = [
    {
      id: 1,
      name: t('games.logicLoop'),
      logo: '🧠',
      logoColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: t('games.logicCoding'),
      difficulty: t('games.intermediate'),
      players: '15K+',
      rating: 4.8,
      description: [
        t('games.masterCoding'),
        t('games.progressAlgorithmic'),
        t('games.competeRealTime'),
        t('games.unlockAdvanced')
      ],
      features: ['Real-time Multiplayer', 'Adaptive Difficulty', 'Code Visualization', 'Progress Tracking'],
      rewards: ['Logic Master Badge', '500 Skill Points', 'Coding Certificates'],
      estimatedTime: `15-30 ${t('games.minPerSession')}`
    },
    {
      id: 2,
      name: t('games.careerXP'),
      logo: '🚀',
      logoColor: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
      category: t('games.careerSimulation'),
      difficulty: t('games.beginner'),
      players: '25K+',
      rating: 4.9,
      description: [
        t('games.createAvatar'),
        t('games.buildResumes'),
        t('games.progressJobRoles'),
        t('games.earnBadgesPoints')
      ],
      features: ['Avatar Customization', 'Career Storylines', 'Industry Simulations', 'Skill Assessment'],
      rewards: ['Career Explorer Badge', 'Industry Certificates', 'Mentorship Credits'],
      estimatedTime: `20-45 ${t('games.minPerChallenge')}`
    },
    {
      id: 3,
      name: 'HackQuest',
      logo: '⚡',
      logoColor: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
      category: 'Hackathon Simulation',
      difficulty: 'Advanced',
      players: '8K+',
      rating: 4.7,
      description: [
        'Experience virtual hackathon events where you form teams and tackle real-world challenges.',
        'Choose from diverse project ideas spanning AI, blockchain, IoT, and social impact solutions.',
        'AI judges evaluate your innovation, team coordination, and technical implementation.',
        'Win virtual funding, mentorship credits, and opportunities to showcase your projects.'
      ],
      features: ['Team Formation', 'AI Judging System', 'Project Showcase', 'Virtual Funding'],
      rewards: ['Hackathon Champion', 'Innovation Points', 'Startup Credits'],
      estimatedTime: '2-6 hours per hackathon'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Logic Master', description: 'Completed 50 LogicLoop challenges' },
    { icon: '💼', title: 'Career Explorer', description: 'Unlocked 5 different career paths' },
    { icon: '⚡', title: 'Hack Champion', description: 'Won 3 HackQuest competitions' },
    { icon: '🎯', title: 'Skill Collector', description: 'Earned 2500+ skill points' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 4250, avatar: '👨‍💻' },
    { rank: 2, name: 'Priya Sharma', points: 4100, avatar: '👩‍💼' },
    { rank: 3, name: 'You', points: 2840, avatar: '🎮', isCurrentUser: true },
    { rank: 4, name: 'Rahul Kumar', points: 2650, avatar: '👨‍🎓' },
    { rank: 5, name: 'Sarah Wilson', points: 2400, avatar: '👩‍🔬' }
  ];

  return (
    <div className="games-page">
      {/* Animated Background */}
      <div className="games-background">
        <div className="floating-elements">
          <div className="element element-1">💻</div>
          <div className="element element-2">🎯</div>
          <div className="element element-3">⚡</div>
          <div className="element element-4">🚀</div>
          <div className="element element-5">🧠</div>
          <div className="element element-6">🏆</div>
        </div>
        <div className="grid-pattern"></div>
      </div>

      {/* Hero Section */}
      <div className="games-hero">
        <div className="container">
          <h1 className="games-title">
            {t('games.title')}
          </h1>
          <p className="games-subtitle">
            {t('games.subtitle')}
          </p>

          {/* Player Stats */}
          <div className="player-stats">
            <div className="stat-card">
              <div className="stat-icon">🎮</div>
              <div className="stat-value">{playerStats.totalGamesPlayed}</div>
              <div className="stat-label">{t('games.gamesPlayed')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-value">{playerStats.skillPoints}</div>
              <div className="stat-label">{t('games.skillPoints')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏅</div>
              <div className="stat-value">{playerStats.badges}</div>
              <div className="stat-label">{t('games.badges')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-value">{t('games.level')} {playerStats.level}</div>
              <div className="stat-label">Current Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="games-content">
        <div className="container">
          {/* Games Grid */}
          <div className="games-grid">
            {games.map((game, index) => (
              <div 
                key={game.id} 
                className={`game-card ${selectedGame === game.id ? 'selected' : ''}`}
                onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="game-header">
                  <div 
                    className="game-logo"
                    style={{ background: game.logoColor }}
                  >
                    <span className="logo-icon">{game.logo}</span>
                    <div className="logo-glow"></div>
                  </div>
                  <div className="game-meta">
                    <span className="game-category">{game.category}</span>
                    <div className="game-rating">
                      <span>⭐ {game.rating}</span>
                      <span>👥 {game.players}</span>
                    </div>
                  </div>
                </div>

                <div className="game-content">
                  <h3 className="game-name">{game.name}</h3>
                  
                  <div className="game-info">
                    <span className="difficulty-badge difficulty-{game.difficulty.toLowerCase()}">
                      {game.difficulty}
                    </span>
                    <span className="time-estimate">⏱️ {game.estimatedTime}</span>
                  </div>

                  <div className="game-description">
                    {game.description.slice(0, 2).map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>

                  {/* Always show features and rewards */}
                  <div className="game-details">
                    <div className="features-section">
                      <h4>🎯 Key Features:</h4>
                      <div className="features-list">
                        {game.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>

                    <div className="rewards-section">
                      <h4>🏆 Rewards:</h4>
                      <div className="rewards-list">
                        {game.rewards.slice(0, 3).map((reward, i) => (
                          <span key={i} className="reward-tag">{reward}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedGame === game.id && (
                    <div className="game-extra-details">
                      <div className="extra-description">
                        {game.description.slice(2).map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="game-actions">
                    <button 
                      className="play-btn"
                      style={{ background: game.logoColor }}
                    >
                      Play Now
                    </button>
                    <button className="info-btn">
                      {selectedGame === game.id ? 'Less Info' : t('games.moreInfo')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="games-extras">
            {/* Achievements */}
            <div className="achievements-section">
              <h2>🏆 Your Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="leaderboard-section">
              <h2>🏅 Global Leaderboard</h2>
              <div className="leaderboard">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank} 
                    className={`leaderboard-item ${player.isCurrentUser ? 'current-user' : ''}`}
                  >
                    <div className="rank">#{player.rank}</div>
                    <div className="player-avatar">{player.avatar}</div>
                    <div className="player-info">
                      <span className="player-name">{player.name}</span>
                      <span className="player-points">{player.points} pts</span>
                    </div>
                    {player.rank <= 3 && (
                      <div className="trophy">
                        {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Challenges */}
            <div className="daily-challenges">
              <h2>⚡ Daily Challenges</h2>
              <div className="challenge-card">
                <div className="challenge-icon">🎯</div>
                <div className="challenge-content">
                  <h4>Logic Master Challenge</h4>
                  <p>Complete 5 LogicLoop puzzles in under 10 minutes</p>
                  <div className="challenge-reward">Reward: 200 Skill Points + Exclusive Badge</div>
                </div>
                <button className="challenge-btn">Accept</button>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="coming-soon">
              <h2>🚀 Coming Soon</h2>
              <div className="upcoming-games">
                <div className="upcoming-game">
                  <div className="upcoming-icon">🤖</div>
                  <h4>AI Mentor Bot</h4>
                  <p>Interactive AI companion for personalized learning</p>
                </div>
                <div className="upcoming-game">
                  <div className="upcoming-icon">🌐</div>
                  <h4>Global Tournaments</h4>
                  <p>Compete with players worldwide in skill-based tournaments</p>
                </div>
                <div className="upcoming-game">
                  <div className="upcoming-icon">🎨</div>
                  <h4>Creative Studio</h4>
                  <p>Design and share your own challenges with the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;