'use client';

import React from 'react';

const DashboardCards: React.FC = () => {
  const stats = [
    { title: 'Active Jobs', value: '12', change: '+2', icon: '💼' },
    { title: 'Total Applications', value: '248', change: '+15', icon: '📄' },
    { title: 'Interviews Scheduled', value: '8', change: '+3', icon: '🗓️' },
    { title: 'Hired This Month', value: '5', change: '+2', icon: '✅' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-gray-600 text-sm">{stat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;