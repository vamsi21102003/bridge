'use client';

import React, { useEffect, useState } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  gradient?: string;
  animate?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  gradient = 'bg-gradient-primary',
  animate = true 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;

  useEffect(() => {
    if (animate && typeof numericValue === 'number') {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [numericValue, animate]);

  const formatValue = (val: number) => {
    if (val >= 1000) {
      return `${(val / 1000).toFixed(1)}K+`;
    }
    return val.toString();
  };

  return (
    <div className="glass-card p-6 text-center card-hover">
      <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3`}>
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {animate && typeof numericValue === 'number' ? formatValue(displayValue) : value}
      </div>
      <div className="text-gray-600 font-medium text-sm">
        {title}
      </div>
    </div>
  );
};

export default StatsCard;