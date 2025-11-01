'use client';

import React from 'react';
import { Game } from '@/types/student';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'medium':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'hard':
        return 'bg-gradient-to-r from-red-400 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  const getGameGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'coding':
        return 'from-blue-500 to-purple-600';
      case 'simulation':
        return 'from-green-500 to-teal-600';
      case 'puzzle':
        return 'from-pink-500 to-rose-600';
      case 'strategy':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-indigo-500 to-purple-600';
    }
  };

  const getIconAnimation = (icon: string) => {
    // All game icons will have bouncing animation like CodeCrush
    return 'animate-bounce hover:animate-pulse';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Game Icon */}
      <div className="text-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${getGameGradient(game.category)} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
          <span>{game.icon}</span>
        </div>
        <h3 className="font-bold text-xl text-gray-800 mb-2">{game.name}</h3>
        <p className="text-gray-600 text-sm">{game.category}</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm text-center leading-relaxed mb-6">
        {game.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <div className="text-xl font-bold text-blue-600 mb-1">
            {game.players.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600">Players</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <div className="text-xl font-bold text-orange-600 mb-1">
            {game.xpReward}
          </div>
          <div className="text-xs text-gray-600">XP Reward</div>
        </div>
      </div>

      {/* Difficulty Badge */}
      <div className="flex justify-center mb-6">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(game.difficulty)}`}>
          {game.difficulty.toUpperCase()}
        </span>
      </div>

      {/* Play Button */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200">
        Play Now 🎮
      </button>
    </div>
  );
};

export default GameCard;