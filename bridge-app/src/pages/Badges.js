import React, { useState } from 'react';
import '../styles/badge.css';
import BadgesSection from '../components/BadgesSection';
import { useLanguage } from '../contexts/LanguageContext';

function Badges() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const userStats = {
    totalBadges: 15,
    rareBadges: 8,
    epicBadges: 3,
    legendaryBadges: 2,
    bridgeProBadges: 5
  };

  const freemiumBadges = [
    {
      id: 1,
      name: 'Daily Warrior',
      description: 'Login for 7 consecutive days',
      icon: '🗡️',
      rarity: 'common',
      earned: true,
      earnedDate: '2024-10-15',
      progress: 7,
      maxProgress: 7,
      xp: 100,
      background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
    },
    {
      id: 2,
      name: 'Streak Master',
      description: 'Maintain a 30-day login streak',
      icon: '🔥',
      rarity: 'rare',
      earned: true,
      earnedDate: '2024-10-10',
      progress: 30,
      maxProgress: 30,
      xp: 500,
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 3,
      name: 'Task Crusher',
      description: 'Complete 50 daily tasks',
      icon: '⚡',
      rarity: 'common',
      earned: true,
      earnedDate: '2024-10-12',
      progress: 50,
      maxProgress: 50,
      xp: 250,
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      id: 4,
      name: 'Game Champion',
      description: 'Win 25 games across all platforms',
      icon: '🏆',
      rarity: 'epic',
      earned: true,
      earnedDate: '2024-10-08',
      progress: 25,
      maxProgress: 25,
      xp: 750,
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      id: 5,
      name: 'Hackathon Hero',
      description: 'Participate in 5 hackathons',
      icon: '💻',
      rarity: 'rare',
      earned: true,
      earnedDate: '2024-10-05',
      progress: 5,
      maxProgress: 5,
      xp: 600,
      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      id: 6,
      name: 'Code Ninja',
      description: 'Solve 100 coding problems',
      icon: '🥷',
      rarity: 'epic',
      earned: false,
      progress: 73,
      maxProgress: 100,
      xp: 1000,
      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    {
      id: 7,
      name: 'Learning Enthusiast',
      description: 'Complete 10 courses',
      icon: '📚',
      rarity: 'common',
      earned: true,
      earnedDate: '2024-10-14',
      progress: 10,
      maxProgress: 10,
      xp: 300,
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 8,
      name: 'Social Butterfly',
      description: 'Connect with 20 mentors',
      icon: '🦋',
      rarity: 'rare',
      earned: false,
      progress: 12,
      maxProgress: 20,
      xp: 400,
      background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    }
  ];

  const proBadges = [
    {
      id: 101,
      name: 'BriDGe Elite',
      description: 'Exclusive Pro member badge',
      icon: '👑',
      rarity: 'legendary',
      earned: true,
      earnedDate: '2024-10-01',
      progress: 1,
      maxProgress: 1,
      xp: 2000,
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      isPro: true,
      perks: ['Priority Support', 'Exclusive Events', 'Advanced Analytics']
    },
    {
      id: 102,
      name: 'AI Whisperer',
      description: 'Master AI-powered features',
      icon: '🤖',
      rarity: 'epic',
      earned: true,
      earnedDate: '2024-10-03',
      progress: 1,
      maxProgress: 1,
      xp: 1500,
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)',
      isPro: true,
      perks: ['AI Career Guidance', 'Smart Recommendations', 'Personalized Learning']
    },
    {
      id: 103,
      name: 'Mentor Magnet',
      description: 'Connect with 50+ premium mentors',
      icon: '🧲',
      rarity: 'epic',
      earned: true,
      earnedDate: '2024-10-06',
      progress: 52,
      maxProgress: 50,
      xp: 1200,
      background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)',
      isPro: true,
      perks: ['1-on-1 Sessions', 'Group Mentoring', 'Industry Experts']
    },
    {
      id: 104,
      name: 'Innovation Pioneer',
      description: 'Lead 3 successful projects',
      icon: '🚀',
      rarity: 'legendary',
      earned: false,
      progress: 2,
      maxProgress: 3,
      xp: 2500,
      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
      isPro: true,
      perks: ['Project Showcase', 'Investor Connect', 'Startup Credits']
    },
    {
      id: 105,
      name: 'Global Networker',
      description: 'Build international connections',
      icon: '🌍',
      rarity: 'rare',
      earned: true,
      earnedDate: '2024-10-09',
      progress: 1,
      maxProgress: 1,
      xp: 800,
      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
      isPro: true,
      perks: ['Global Events', 'Cross-border Opportunities', 'Cultural Exchange']
    }
  ];

  const specialBadges = [
    {
      id: 201,
      name: 'Founding Member',
      description: 'One of the first 1000 BriDGe users',
      icon: '⭐',
      rarity: 'legendary',
      earned: true,
      earnedDate: '2024-09-15',
      progress: 1,
      maxProgress: 1,
      xp: 5000,
      background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #7c3aed 50%, #6d28d9 75%, #5b21b6 100%)',
      isSpecial: true,
      perks: ['Lifetime Recognition', 'Exclusive Community', 'Beta Access']
    },
    {
      id: 202,
      name: 'Community Leader',
      description: 'Help 100+ students succeed',
      icon: '🎖️',
      rarity: 'legendary',
      earned: false,
      progress: 67,
      maxProgress: 100,
      xp: 3000,
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 25%, #991b1b 50%, #7f1d1d 75%, #450a0a 100%)',
      isSpecial: true,
      perks: ['Leadership Recognition', 'Mentoring Opportunities', 'Community Events']
    }
  ];

  const allBadges = [...freemiumBadges, ...proBadges, ...specialBadges];

  const filteredBadges = () => {
    switch(activeTab) {
      case 'earned':
        return allBadges.filter(badge => badge.earned);
      case 'pro':
        return proBadges;
      case 'special':
        return specialBadges;
      default:
        return allBadges;
    }
  };

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'common': return '#10b981';
      case 'rare': return '#3b82f6';
      case 'epic': return '#8b5cf6';
      case 'legendary': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getRarityGlow = (rarity) => {
    switch(rarity) {
      case 'common': return '0 0 20px rgba(16, 185, 129, 0.5)';
      case 'rare': return '0 0 25px rgba(59, 130, 246, 0.6)';
      case 'epic': return '0 0 30px rgba(139, 92, 246, 0.7)';
      case 'legendary': return '0 0 35px rgba(245, 158, 11, 0.8)';
      default: return 'none';
    }
  };

  return (
    <div>
      {/* Use the new BadgesSection component */}
      <BadgesSection />
    </div>
  );
}

export default Badges;