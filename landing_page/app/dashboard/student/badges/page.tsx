'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import BadgeCard from '@/components/student/BadgeCard';
import { Badge } from '@/types/student';

const BadgesPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', name: 'All Badges', icon: '🏆' },
    { id: 'earned', name: 'Earned', icon: '✅' },
    { id: 'locked', name: 'Locked', icon: '🔒' },
    { id: 'in-progress', name: 'In Progress', icon: '⏳' },
  ];

  const mockBadges: Badge[] = [
    {
      id: '1',
      name: 'First Steps',
      description: 'Complete your first coding challenge',
      icon: '👶',
      earned: true,
      xpReward: 50,
    },
    {
      id: '2',
      name: 'Code Warrior',
      description: 'Solve 10 coding problems',
      icon: '⚔️',
      earned: true,
      xpReward: 100,
    },
    {
      id: '3',
      name: 'Streak Master',
      description: 'Maintain a 7-day learning streak',
      icon: '🔥',
      earned: true,
      xpReward: 150,
    },
    {
      id: '4',
      name: 'Team Player',
      description: 'Participate in 5 hackathons',
      icon: '🤝',
      earned: false,
      progress: 60,
      xpReward: 200,
    },
    {
      id: '5',
      name: 'Mentor Connect',
      description: 'Complete 3 mentorship sessions',
      icon: '👨‍🏫',
      earned: false,
      progress: 33,
      xpReward: 175,
    },
    {
      id: '6',
      name: 'Knowledge Seeker',
      description: 'Complete 20 online courses',
      icon: '📚',
      earned: false,
      progress: 85,
      xpReward: 300,
    },
    {
      id: '7',
      name: 'Interview Ace',
      description: 'Pass 5 mock interviews',
      icon: '🎯',
      earned: true,
      xpReward: 250,
    },
    {
      id: '8',
      name: 'Network Builder',
      description: 'Connect with 50 professionals',
      icon: '🌐',
      earned: false,
      progress: 24,
      xpReward: 180,
    },
    {
      id: '9',
      name: 'Innovation Leader',
      description: 'Win a hackathon competition',
      icon: '💡',
      earned: false,
      xpReward: 500,
    },
    {
      id: '10',
      name: 'Career Climber',
      description: 'Land your dream job',
      icon: '🚀',
      earned: false,
      xpReward: 1000,
    },
    {
      id: '11',
      name: 'Skill Collector',
      description: 'Master 10 different technologies',
      icon: '🎨',
      earned: false,
      progress: 70,
      xpReward: 400,
    },
    {
      id: '12',
      name: 'Community Hero',
      description: 'Help 25 fellow learners',
      icon: '🦸',
      earned: false,
      progress: 48,
      xpReward: 350,
    },
    {
      id: '13',
      name: 'Speed Demon',
      description: 'Complete 5 challenges in under 1 hour',
      icon: '⚡',
      earned: true,
      xpReward: 200,
    },
    {
      id: '14',
      name: 'Night Owl',
      description: 'Study for 10 nights after midnight',
      icon: '🦉',
      earned: false,
      progress: 30,
      xpReward: 150,
    },
    {
      id: '15',
      name: 'Early Bird',
      description: 'Complete morning sessions for 7 days',
      icon: '🐦',
      earned: true,
      xpReward: 120,
    },
    {
      id: '16',
      name: 'Bug Hunter',
      description: 'Find and fix 50 bugs in code',
      icon: '🐛',
      earned: false,
      progress: 76,
      xpReward: 300,
    },
    {
      id: '17',
      name: 'AI Whisperer',
      description: 'Master AI-powered tools and features',
      icon: '🤖',
      earned: false,
      progress: 45,
      xpReward: 400,
    },
    {
      id: '18',
      name: 'Data Wizard',
      description: 'Complete 15 data science projects',
      icon: '🧙‍♂️',
      earned: false,
      progress: 20,
      xpReward: 450,
    },
    {
      id: '19',
      name: 'Design Guru',
      description: 'Create 10 stunning UI/UX designs',
      icon: '🎭',
      earned: true,
      xpReward: 350,
    },
    {
      id: '20',
      name: 'Cloud Master',
      description: 'Deploy 20 applications to cloud',
      icon: '☁️',
      earned: false,
      progress: 55,
      xpReward: 500,
    },
    {
      id: '21',
      name: 'Mobile Ninja',
      description: 'Build 5 mobile applications',
      icon: '📱',
      earned: false,
      progress: 40,
      xpReward: 400,
    },
    {
      id: '22',
      name: 'Security Guardian',
      description: 'Complete cybersecurity certification',
      icon: '🛡️',
      earned: false,
      progress: 15,
      xpReward: 600,
    },
    {
      id: '23',
      name: 'Open Source Hero',
      description: 'Contribute to 10 open source projects',
      icon: '🌟',
      earned: false,
      progress: 30,
      xpReward: 550,
    },
    {
      id: '24',
      name: 'Blockchain Pioneer',
      description: 'Build 3 blockchain applications',
      icon: '⛓️',
      earned: false,
      progress: 10,
      xpReward: 700,
    },
    {
      id: '25',
      name: 'DevOps Engineer',
      description: 'Set up 10 CI/CD pipelines',
      icon: '🔧',
      earned: false,
      progress: 25,
      xpReward: 450,
    },
    {
      id: '26',
      name: 'Game Developer',
      description: 'Create 3 interactive games',
      icon: '🎮',
      earned: true,
      xpReward: 400,
    },
    {
      id: '27',
      name: 'API Master',
      description: 'Build and integrate 25 APIs',
      icon: '🔌',
      earned: false,
      progress: 68,
      xpReward: 350,
    },
    {
      id: '28',
      name: 'Database Architect',
      description: 'Design 10 complex database schemas',
      icon: '🗄️',
      earned: false,
      progress: 50,
      xpReward: 400,
    },
    {
      id: '29',
      name: 'Performance Optimizer',
      description: 'Optimize 15 applications for speed',
      icon: '🏎️',
      earned: false,
      progress: 35,
      xpReward: 300,
    },
    {
      id: '30',
      name: 'Legendary Coder',
      description: 'Achieve mastery in all coding domains',
      icon: '👑',
      earned: false,
      progress: 5,
      xpReward: 2000,
    },
  ];

  const filteredBadges = mockBadges.filter(badge => {
    switch (selectedFilter) {
      case 'earned':
        return badge.earned;
      case 'locked':
        return !badge.earned && !badge.progress;
      case 'in-progress':
        return !badge.earned && badge.progress;
      default:
        return true;
    }
  });

  const earnedCount = mockBadges.filter(b => b.earned).length;
  const totalXP = mockBadges.filter(b => b.earned).reduce((sum, b) => sum + b.xpReward, 0);
  const inProgressCount = mockBadges.filter(b => !b.earned && b.progress).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Badge Elements with Enhanced Animations */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float flex items-center justify-center text-2xl shadow-2xl">🏆</div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-float-delayed flex items-center justify-center text-xl shadow-xl">⭐</div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-25 animate-float flex items-center justify-center text-3xl shadow-2xl">🎖️</div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 animate-float-delayed flex items-center justify-center text-xl shadow-xl">💎</div>
          <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-float flex items-center justify-center text-2xl shadow-2xl">👑</div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-60 left-1/2 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-25 animate-bounce flex items-center justify-center text-lg">🚀</div>
          <div className="absolute top-80 right-1/4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 animate-pulse flex items-center justify-center text-sm">⚡</div>
          <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-30 animate-spin flex items-center justify-center text-lg" style={{ animationDuration: '3s' }}>🌟</div>
          
          {/* Particle Effects */}
          <div className="absolute top-10 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-60 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Badge Collection 🏆
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Showcase your achievements and track your learning progress
          </p>

          {/* Progress Overview */}
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{earnedCount}</div>
                <div className="text-gray-600">Badges Earned</div>
                <div className="text-sm text-gray-500">out of {mockBadges.length}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{totalXP.toLocaleString()}</div>
                <div className="text-gray-600">XP from Badges</div>
                <div className="text-sm text-gray-500">Total earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{inProgressCount}</div>
                <div className="text-gray-600">In Progress</div>
                <div className="text-sm text-gray-500">Almost there!</div>
              </div>
            </div>
            
            {/* Overall Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Collection Progress</span>
                <span>{Math.round((earnedCount / mockBadges.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(earnedCount / mockBadges.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Badges</h3>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedFilter === 'all' ? 'All Badges' : filters.find(f => f.id === selectedFilter)?.name} 
            ({filteredBadges.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBadges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>

        {filteredBadges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No badges found</h3>
            <p className="text-gray-600">Try a different filter to see more badges</p>
          </div>
        )}
      </section>

      {/* Badge Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">Badge Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2">Coding</h3>
            <p className="text-gray-600 text-sm mb-3">Programming challenges and projects</p>
            <div className="text-sm text-gray-500">8 badges available</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-semibold mb-2">Learning</h3>
            <p className="text-gray-600 text-sm mb-3">Course completion and knowledge</p>
            <div className="text-sm text-gray-500">6 badges available</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm mb-3">Networking and collaboration</p>
            <div className="text-sm text-gray-500">5 badges available</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Career</h3>
            <p className="text-gray-600 text-sm mb-3">Professional milestones</p>
            <div className="text-sm text-gray-500">4 badges available</div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">Recent Achievements 🌟</h2>
          <div className="space-y-4">
            {mockBadges.filter(b => b.earned).slice(0, 4).map((badge) => (
              <div key={badge.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{badge.name}</div>
                    <div className="text-sm text-gray-600">{badge.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-yellow-600">+{badge.xpReward} XP</div>
                  <div className="text-xs text-gray-500">Earned</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-primary rounded-3xl p-8 text-white text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold mb-4">Keep Going!</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            You're doing great! Complete more challenges and activities to unlock new badges and earn XP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              View Challenges
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Share Progress
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgesPage;