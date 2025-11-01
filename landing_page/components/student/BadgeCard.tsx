'use client';

import React from 'react';
import { Badge } from '@/types/student';

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  const getGradientByXP = (xp: number) => {
    if (xp >= 1000) return 'from-purple-500 via-pink-500 to-red-500';
    if (xp >= 500) return 'from-blue-500 via-purple-500 to-pink-500';
    if (xp >= 300) return 'from-green-500 via-blue-500 to-purple-500';
    if (xp >= 200) return 'from-yellow-500 via-orange-500 to-red-500';
    return 'from-blue-400 via-purple-400 to-pink-400';
  };

  const getAnimationClass = (icon: string, isEarned: boolean) => {
    // Only apply animations to earned badges
    if (!isEarned) return '';
    
    const animations = {
      '🔥': 'animate-pulse',
      '⚡': 'animate-bounce',
      '🚀': 'hover:animate-ping',
      '💡': 'animate-pulse',
      '🌟': 'animate-spin',
      '👑': 'animate-bounce',
      '🎯': 'hover:animate-spin',
      '🦉': 'hover:animate-bounce',
      '🐦': 'animate-bounce',
      '🤖': 'hover:animate-pulse',
      '🧙‍♂️': 'animate-pulse',
      '🎭': 'hover:animate-spin',
      '☁️': 'hover:animate-bounce',
      '🛡️': 'hover:animate-pulse',
      '⛓️': 'animate-pulse',
      '🎮': 'hover:animate-bounce',
      '🏎️': 'hover:animate-ping',
    };
    return animations[icon as keyof typeof animations] || '';
  };

  return (
    <div className={`group relative rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 p-6 border backdrop-blur-xl ${
      badge.earned 
        ? 'bg-gradient-to-br from-white/90 to-white/70 border-white/30 hover:shadow-3xl hover:shadow-yellow-500/25' 
        : 'bg-gradient-to-br from-gray-100/80 to-gray-200/60 border-gray-300/30 opacity-75 hover:opacity-90'
    }`}>
      
      {/* Floating Particles Effect */}
      {badge.earned && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-4 right-6 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}

      {/* Glow Effect for High XP Badges */}
      {badge.earned && badge.xpReward >= 500 && (
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientByXP(badge.xpReward)} opacity-20 rounded-3xl animate-pulse`}></div>
      )}

      {/* Badge Icon */}
      <div className="text-center mb-4 relative z-10">
        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-3 transition-all duration-300 group-hover:scale-110 ${getAnimationClass(badge.icon, badge.earned)} ${
          badge.earned 
            ? `bg-gradient-to-br ${getGradientByXP(badge.xpReward)} shadow-2xl shadow-yellow-500/30` 
            : 'bg-gradient-to-br from-gray-400 to-gray-500'
        }`}>
          <span className="filter drop-shadow-lg">
            {badge.earned ? badge.icon : '🔒'}
          </span>
        </div>
        <h3 className={`font-bold text-lg transition-colors duration-300 ${
          badge.earned ? 'text-gray-800 group-hover:text-purple-600' : 'text-gray-500'
        }`}>
          {badge.name}
        </h3>
      </div>

      {/* Description */}
      <p className={`text-center mb-4 text-sm leading-relaxed ${
        badge.earned ? 'text-gray-700' : 'text-gray-500'
      }`}>
        {badge.description}
      </p>

      {/* Progress Bar (if not earned) */}
      {!badge.earned && badge.progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span className="font-medium">Progress</span>
            <span className="font-bold">{badge.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`bg-gradient-to-r ${getGradientByXP(badge.xpReward)} h-3 rounded-full transition-all duration-700 ease-out relative`}
              style={{ width: `${badge.progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="text-xs text-gray-600 font-medium">
              {Math.round((100 - badge.progress!) * badge.xpReward / 100)} XP remaining
            </span>
          </div>
        </div>
      )}

      {/* XP Reward */}
      <div className="text-center mb-3">
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 group-hover:scale-105 ${
          badge.earned 
            ? `bg-gradient-to-r ${getGradientByXP(badge.xpReward)} text-white shadow-lg` 
            : 'bg-gray-200 text-gray-600'
        }`}>
          <span className="text-lg">⭐</span>
          <span>{badge.xpReward.toLocaleString()} XP</span>
          {badge.xpReward >= 1000 && <span className="animate-bounce">💎</span>}
        </div>
      </div>

      {/* Earned Status */}
      {badge.earned && (
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium shadow-lg animate-pulse">
            <span>✅</span>
            <span>Earned</span>
            <span className="animate-bounce">🎉</span>
          </div>
        </div>
      )}

      {/* Legendary Badge Special Effect */}
      {badge.name === 'Legendary Coder' && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-75 animate-pulse blur-sm"></div>
      )}

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        badge.earned 
          ? `bg-gradient-to-br ${getGradientByXP(badge.xpReward)} blur-xl -z-10` 
          : 'bg-gray-400 blur-xl -z-10'
      }`}></div>
    </div>
  );
};

export default BadgeCard;