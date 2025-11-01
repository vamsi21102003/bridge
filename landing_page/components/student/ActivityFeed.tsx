'use client';

import React from 'react';

interface Activity {
  id: string;
  type: 'course' | 'application' | 'badge' | 'mentor' | 'project' | 'connection';
  action: string;
  item: string;
  time: string;
  icon: string;
  color: string;
}

const ActivityFeed: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'course',
      action: 'Completed',
      item: 'React Advanced Course',
      time: '2 hours ago',
      icon: '✅',
      color: 'text-green-600'
    },
    {
      id: '2',
      type: 'application',
      action: 'Applied to',
      item: 'Google SWE Internship',
      time: '1 day ago',
      icon: '📝',
      color: 'text-blue-600'
    },
    {
      id: '3',
      type: 'badge',
      action: 'Earned',
      item: 'Code Warrior Badge',
      time: '3 days ago',
      icon: '🏆',
      color: 'text-yellow-600'
    },
    {
      id: '4',
      type: 'mentor',
      action: 'Booked session with',
      item: 'Priya Sharma (Meta)',
      time: '5 days ago',
      icon: '👨‍🏫',
      color: 'text-purple-600'
    },
    {
      id: '5',
      type: 'project',
      action: 'Added project',
      item: 'E-commerce Dashboard',
      time: '1 week ago',
      icon: '💼',
      color: 'text-indigo-600'
    },
    {
      id: '6',
      type: 'connection',
      action: 'Connected with',
      item: '5 new professionals',
      time: '1 week ago',
      icon: '🤝',
      color: 'text-teal-600'
    }
  ];

  return (
    <div className="space-y-3">
      {activities.map((activity) => (
        <div key={activity.id} className="group">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-lg">{activity.icon}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {activity.action}{' '}
                <span className={`${activity.color} font-semibold`}>
                  {activity.item}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      ))}
      
      <button className="w-full py-2 text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
        View All Activity →
      </button>
    </div>
  );
};

export default ActivityFeed;