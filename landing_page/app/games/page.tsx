'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import GameCard from '@/components/student/GameCard';
import { Game } from '@/types/student';

const GamesPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Games', icon: '🎮' },
    { id: 'coding', name: 'Coding', icon: '💻' },
    { id: 'simulation', name: 'Simulation', icon: '🚀' },
    { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
    { id: 'strategy', name: 'Strategy', icon: '♟️' },
  ];

  const mockGames: Game[] = [
    {
      id: '1',
      name: 'LogicLoop',
      description: 'Master coding challenges and algorithmic thinking through interactive puzzles',
      category: 'coding',
      difficulty: 'medium',
      xpReward: 100,
      players: 15420,
      icon: '🧠',
    },
    {
      id: '2',
      name: 'CareerXP',
      description: 'Simulate real-world career scenarios and make strategic decisions',
      category: 'simulation',
      difficulty: 'easy',
      xpReward: 75,
      players: 8930,
      icon: '🚀',
    },
    {
      id: '3',
      name: 'HackQuest',
      description: 'Participate in virtual hackathons and build innovative solutions',
      category: 'coding',
      difficulty: 'hard',
      xpReward: 200,
      players: 12650,
      icon: '⚔️',
    },
    {
      id: '4',
      name: 'DataDash',
      description: 'Analyze datasets and uncover insights in this data science adventure',
      category: 'puzzle',
      difficulty: 'medium',
      xpReward: 120,
      players: 7890,
      icon: '📊',
    },
    {
      id: '5',
      name: 'StartupSim',
      description: 'Build and scale your virtual startup from idea to IPO',
      category: 'simulation',
      difficulty: 'hard',
      xpReward: 250,
      players: 5670,
      icon: '🏢',
    },
    {
      id: '6',
      name: 'CodeCrush',
      description: 'Fast-paced coding challenges with time pressure',
      category: 'coding',
      difficulty: 'easy',
      xpReward: 50,
      players: 23450,
      icon: '⚡',
    },
  ];

  const filteredGames = mockGames.filter(game => 
    selectedCategory === 'all' || game.category === selectedCategory
  );

  const mockUser = {
    level: 12,
    xp: 2450,
    gamesPlayed: 47,
    rank: 156,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Animated Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 overflow-hidden">
        {/* Advanced Floating Game Elements with AI Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Game Icons */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl opacity-20 animate-float flex items-center justify-center text-3xl shadow-2xl backdrop-blur-sm">🎮</div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-30 animate-float-delayed flex items-center justify-center text-2xl shadow-xl backdrop-blur-sm">🏆</div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25 animate-float flex items-center justify-center text-4xl shadow-2xl backdrop-blur-sm">⚡</div>
          <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20 animate-float-delayed flex items-center justify-center text-2xl shadow-xl backdrop-blur-sm">🧠</div>
          <div className="absolute bottom-20 right-10 w-22 h-22 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-30 animate-float flex items-center justify-center text-3xl shadow-2xl backdrop-blur-sm">🚀</div>
          
          {/* AI-Themed Secondary Elements */}
          <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-25 animate-bounce flex items-center justify-center text-xl backdrop-blur-sm">🤖</div>
          <div className="absolute top-80 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl opacity-20 animate-pulse flex items-center justify-center text-lg backdrop-blur-sm">💎</div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl opacity-30 animate-spin flex items-center justify-center text-xl backdrop-blur-sm" style={{ animationDuration: '4s' }}>🌟</div>
          
          {/* Particle Effects */}
          <div className="absolute top-10 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
          
          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="gameNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <g className="animate-pulse">
              <line x1="150" y1="120" x2="350" y2="200" stroke="url(#gameNetworkGradient)" strokeWidth="2"/>
              <line x1="350" y1="200" x2="550" y2="150" stroke="url(#gameNetworkGradient)" strokeWidth="2"/>
              <line x1="550" y1="150" x2="750" y2="250" stroke="url(#gameNetworkGradient)" strokeWidth="2"/>
              <line x1="250" y1="350" x2="450" y2="400" stroke="url(#gameNetworkGradient)" strokeWidth="2"/>
              <line x1="450" y1="400" x2="650" y2="350" stroke="url(#gameNetworkGradient)" strokeWidth="2"/>
            </g>
            <circle cx="150" cy="120" r="6" fill="#8b5cf6" opacity="0.8" className="animate-pulse"/>
            <circle cx="350" cy="200" r="6" fill="#06b6d4" opacity="0.8" className="animate-pulse"/>
            <circle cx="550" cy="150" r="6" fill="#10b981" opacity="0.8" className="animate-pulse"/>
            <circle cx="750" cy="250" r="6" fill="#f59e0b" opacity="0.8" className="animate-pulse"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Level Up Your Skills 🎮
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master new skills through interactive games, challenges, and simulations
          </p>

          {/* Player Stats Dashboard */}
          <div className="glass-card p-6 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">Level {mockUser.level}</div>
                <div className="text-sm text-gray-600">Current Level</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">{mockUser.xp.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{mockUser.gamesPlayed}</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">#{mockUser.rank}</div>
                <div className="text-sm text-gray-600">Global Rank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Game Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory === 'all' ? 'All Games' : categories.find(c => c.id === selectedCategory)?.name} 
            ({filteredGames.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">Recent Achievements 🏆</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🥇</div>
            <h3 className="text-lg font-semibold mb-2">First Place</h3>
            <p className="text-gray-600 mb-3">LogicLoop Weekly Challenge</p>
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              +200 XP
            </span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-lg font-semibold mb-2">Streak Master</h3>
            <p className="text-gray-600 mb-3">7-day playing streak</p>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              +150 XP
            </span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Perfect Score</h3>
            <p className="text-gray-600 mb-3">DataDash Level 5</p>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              +100 XP
            </span>
          </div>
        </div>
      </section>

      {/* Global Leaderboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">Global Leaderboard 🌟</h2>
          <div className="space-y-4">
            {[
              { rank: 1, name: 'Alex Chen', xp: 15420, avatar: '👑' },
              { rank: 2, name: 'Sarah Kim', xp: 14890, avatar: '🥈' },
              { rank: 3, name: 'Mike Johnson', xp: 14250, avatar: '🥉' },
              { rank: 4, name: 'Emily Davis', xp: 13800, avatar: '⭐' },
              { rank: 5, name: 'David Wilson', xp: 13450, avatar: '🌟' },
            ].map((player) => (
              <div key={player.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{player.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">#{player.rank} {player.name}</div>
                    <div className="text-sm text-gray-600">{player.xp.toLocaleString()} XP</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Level {Math.floor(player.xp / 1000) + 1}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              View Full Leaderboard
            </button>
          </div>
        </div>
      </section>

      {/* AI-Powered Gaming Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            AI-Powered Gaming Experience 🤖
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience next-generation learning through AI-enhanced games and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AI Adaptive Difficulty */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                🧠
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Difficulty</h3>
              <p className="text-gray-600 leading-relaxed">AI adapts game difficulty based on your performance and learning pace</p>
            </div>
          </div>

          {/* Personalized Recommendations */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl group-hover:from-green-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">Get personalized game suggestions based on your skills and interests</p>
            </div>
          </div>

          {/* Real-time Analytics */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl group-hover:from-pink-500/20 group-hover:to-rose-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Analytics</h3>
              <p className="text-gray-600 leading-relaxed">AI analyzes your gameplay to provide insights and improvement tips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Daily Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white rounded-full animate-ping"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-5xl animate-bounce">⚡</span>
              <h2 className="text-3xl md:text-4xl font-bold">Daily AI Challenges</h2>
              <span className="text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>🤖</span>
            </div>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              AI-generated challenges that adapt to your skill level and learning goals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🧠</div>
                <div className="font-bold text-lg mb-2">AI Logic Puzzle</div>
                <div className="text-sm opacity-90 mb-3">Machine learning pattern recognition</div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  +75 XP
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">💻</div>
                <div className="font-bold text-lg mb-2">Neural Code Challenge</div>
                <div className="text-sm opacity-90 mb-3">AI-assisted programming tasks</div>
                <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  +100 XP
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🎯</div>
                <div className="font-bold text-lg mb-2">Smart Skill Quiz</div>
                <div className="text-sm opacity-90 mb-3">Adaptive difficulty assessment</div>
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  +50 XP
                </div>
              </div>
            </div>
            
            <button className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              🚀 Start AI Challenges
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamesPage;