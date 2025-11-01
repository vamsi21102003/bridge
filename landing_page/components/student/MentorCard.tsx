'use client';

import React from 'react';
import { Mentor } from '@/types/student';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  const getCompanyGradient = (company: string) => {
    const gradients = {
      'Meta': 'from-blue-500 to-purple-500',
      'OpenAI': 'from-green-500 to-teal-500',
      'Google': 'from-blue-600 to-green-500',
      'Amazon': 'from-orange-500 to-yellow-500',
      'Airbnb': 'from-pink-500 to-rose-500',
      'Netflix': 'from-red-500 to-pink-500',
      'Microsoft': 'from-blue-600 to-cyan-500',
      'Uber': 'from-gray-700 to-black',
      'Tesla': 'from-red-600 to-gray-800',
      'Coinbase': 'from-blue-500 to-indigo-600',
      'Spotify': 'from-green-500 to-emerald-500',
      'Unity': 'from-gray-800 to-purple-600',
      'Shopify': 'from-green-600 to-teal-500',
      'Zomato': 'from-red-500 to-pink-500',
      'NVIDIA': 'from-green-600 to-lime-500',
      'TechStart': 'from-purple-500 to-indigo-500',
      'Atlassian': 'from-blue-500 to-cyan-500',
      'Oracle': 'from-red-600 to-orange-500',
      'Slack': 'from-purple-500 to-pink-500',
      'Dropbox': 'from-blue-500 to-indigo-500',
    };
    return gradients[company as keyof typeof gradients] || 'from-indigo-500 to-purple-500';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Header */}
      <div className="text-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${getCompanyGradient(mentor.company)} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
          {mentor.name.charAt(0)}
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-1">{mentor.name}</h3>
        <p className="text-gray-600 text-sm">{mentor.title}</p>
        <p className="text-xs text-gray-500">{mentor.company}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-3">
        <div className="flex items-center space-x-1">
          {renderStars(mentor.rating)}
        </div>
        <span className="ml-2 text-sm text-gray-700 font-medium">
          {mentor.rating} ({mentor.reviews} reviews)
        </span>
      </div>

      {/* Description */}
      {mentor.description && (
        <div className="mb-4">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {mentor.description}
          </p>
        </div>
      )}

      {/* Expertise */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
          {mentor.expertise.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
              +{mentor.expertise.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Availability & Price */}
      <div className="flex items-center justify-between mb-6 bg-gray-50 rounded-xl p-3">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${mentor.availability ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-sm font-medium text-gray-700">
            {mentor.availability ? 'Available Now' : 'Busy'}
          </span>
        </div>
        {mentor.price && (
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">
              ₹{mentor.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">per session</div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
          Book Session ✨
        </button>
        <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          💬
        </button>
      </div>
    </div>
  );
};

export default MentorCard;