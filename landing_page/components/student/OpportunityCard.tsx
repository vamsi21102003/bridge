'use client';

import React from 'react';
import { Opportunity } from '@/types/student';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'job':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'internship':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
      case 'hackathon':
        return 'bg-gradient-to-r from-purple-500 to-violet-600 text-white';
      case 'competition':
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'job':
        return '💼';
      case 'internship':
        return '🎓';
      case 'hackathon':
        return '⚡';
      case 'competition':
        return '🏆';
      default:
        return '📋';
    }
  };

  const getCompanyGradient = (company: string) => {
    const gradients = {
      'Google': 'from-blue-500 to-green-500',
      'Microsoft': 'from-blue-600 to-cyan-500',
      'Amazon': 'from-orange-500 to-yellow-500',
      'Netflix': 'from-red-500 to-pink-500',
      'Meta': 'from-blue-500 to-purple-500',
      'Apple': 'from-gray-600 to-gray-800',
      'Flipkart': 'from-blue-500 to-orange-500',
      'Zomato': 'from-red-500 to-pink-500',
      'Polygon': 'from-purple-500 to-indigo-500',
      'NVIDIA': 'from-green-500 to-teal-500',
      'Paytm': 'from-blue-500 to-cyan-500',
      'Unity': 'from-gray-700 to-black',
    };
    return gradients[company as keyof typeof gradients] || 'from-indigo-500 to-purple-500';
  };

  const getIconAnimation = (type: string) => {
    const animations = {
      'job': 'hover:animate-bounce',
      'internship': 'animate-pulse',
      'hackathon': 'animate-bounce',
      'competition': 'hover:animate-spin',
    };
    return animations[type as keyof typeof animations] || 'hover:animate-pulse';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${getCompanyGradient(opportunity.company)} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
            {opportunity.company.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">
              {opportunity.title}
            </h3>
            <p className="text-gray-600 text-sm">{opportunity.company}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(opportunity.type)}`}>
          {opportunity.type.toUpperCase()}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 mb-4">
        <span className="mr-2">📍</span>
        <span className="text-sm">{opportunity.location}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{opportunity.description}</p>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {opportunity.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
          {opportunity.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
              +{opportunity.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="space-y-1">
          {opportunity.deadline && (
            <div className="flex items-center text-xs text-gray-600">
              <span className="mr-1">⏰</span>
              <span>Deadline: {opportunity.deadline}</span>
            </div>
          )}
          {opportunity.salary && (
            <div className="flex items-center text-xs font-bold text-green-600">
              <span className="mr-1">💰</span>
              <span>{opportunity.salary}</span>
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            ❤️
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
            Apply Now ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;