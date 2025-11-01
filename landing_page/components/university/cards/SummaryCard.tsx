'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  style?: React.CSSProperties;
}

export function SummaryCard({ 
  title, 
  value, 
  icon, 
  trend, 
  className = "",
  style 
}: SummaryCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 ${className}`}
      style={style}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-primary-50 rounded-lg">
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center text-sm font-medium ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.isPositive ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      <div className="metric-counter text-3xl font-bold text-gray-900 mb-2">
        {value}
      </div>
      
      <p className="text-gray-600 text-sm font-medium">{title}</p>
    </div>
  );
}