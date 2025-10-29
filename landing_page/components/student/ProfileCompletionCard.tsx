'use client';

import React from 'react';

interface ProfileCompletionCardProps {
  className?: string;
}

const ProfileCompletionCard: React.FC<ProfileCompletionCardProps> = ({ className = '' }) => {
  const completionItems = [
    { label: 'Personal Information', completed: true, icon: '👤' },
    { label: 'Education Details', completed: true, icon: '🎓' },
    { label: 'Skills & Expertise', completed: true, icon: '💡' },
    { label: 'Work Experience', completed: true, icon: '💼' },
    { label: 'Projects Portfolio', completed: true, icon: '🚀' },
    { label: 'Professional Summary', completed: true, icon: '📝' },
    { label: 'Contact Information', completed: false, icon: '📞' },
    { label: 'Career Preferences', completed: false, icon: '🎯' },
  ];

  const completedCount = completionItems.filter(item => item.completed).length;
  const completionPercentage = Math.round((completedCount / completionItems.length) * 100);

  return (
    <div className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <span className="text-xl">✅</span>
          </div>
          <span>Profile Completion</span>
        </h2>
        <div className="text-right">
          <div className="text-3xl font-black text-emerald-600">{completionPercentage}%</div>
          <div className="text-sm text-slate-600">{completedCount}/{completionItems.length} completed</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-4 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${completionPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
        <div className="flex justify-between text-sm text-slate-600 mt-2">
          <span>Keep going! You're doing great.</span>
          <span>{100 - completionPercentage}% remaining</span>
        </div>
      </div>

      {/* Completion Checklist */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Completion Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {completionItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                item.completed 
                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200' 
                  : 'bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                item.completed 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {item.completed ? (
                  <span className="text-sm">✓</span>
                ) : (
                  <span className="text-xs">{item.icon}</span>
                )}
              </div>
              <div className="flex-1">
                <span className={`font-medium ${
                  item.completed ? 'text-emerald-700' : 'text-slate-600'
                }`}>
                  {item.label}
                </span>
                {item.completed && (
                  <div className="text-xs text-emerald-600 font-medium">Completed</div>
                )}
              </div>
              {!item.completed && (
                <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-xs font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors">
                  Complete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Completion Rewards */}
      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center space-x-2">
          <span className="text-xl">🏆</span>
          <span>Completion Rewards</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🎯</span>
            <span className="text-slate-700">Better job matches</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">👀</span>
            <span className="text-slate-700">Higher profile visibility</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">⭐</span>
            <span className="text-slate-700">Premium features access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletionCard;