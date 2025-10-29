'use client';

import React, { useState } from 'react';

interface AIFeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  demoContent?: React.ReactNode;
}

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({
  title,
  description,
  icon,
  gradient,
  features,
  demoContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Feature List */}
      <ul className="space-y-2 mb-6">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity text-sm"
        >
          {isExpanded ? 'Hide Demo' : 'Try Demo'}
        </button>
        <button className="px-4 py-2 border border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm">
          Learn More
        </button>
      </div>

      {/* Expandable Demo Content */}
      {isExpanded && demoContent && (
        <div className="mt-6 p-4 bg-white/50 rounded-2xl border border-white/30 animate-fadeIn">
          {demoContent}
        </div>
      )}

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default AIFeatureCard;