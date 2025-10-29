'use client';

import React from 'react';

const AnalyticsOverview: React.FC = () => {
  const metrics = [
    { title: 'Total Job Views', value: '2,847', change: '+12%', icon: '👁️' },
    { title: 'Applications Received', value: '248', change: '+8%', icon: '📄' },
    { title: 'Interview Conversion', value: '18%', change: '+3%', icon: '🎯' },
    { title: 'Hire Rate', value: '12%', change: '+5%', icon: '✅' },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                {metric.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <div className="text-gray-600 text-sm">{metric.title}</div>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Application Trends</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-gray-600">Chart visualization coming soon</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-card">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Jobs</h3>
          <div className="space-y-4">
            {[
              { title: 'Senior Software Engineer', applications: 45, views: 234 },
              { title: 'Product Manager', applications: 32, views: 189 },
              { title: 'UX Designer', applications: 28, views: 156 },
            ].map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-medium text-gray-900">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.views} views</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-600">{job.applications}</div>
                  <div className="text-xs text-gray-500">applications</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;