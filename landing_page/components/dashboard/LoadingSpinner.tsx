'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'blue' | 'green' | 'orange';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'purple' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    purple: 'border-purple-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    orange: 'border-orange-500'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-transparent ${colorClasses[color]} rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;