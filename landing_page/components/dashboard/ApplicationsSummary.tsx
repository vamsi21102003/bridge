'use client';

import React from 'react';

const ApplicationsSummary: React.FC = () => {
  const recentApplications = [
    {
      id: 1,
      candidateName: 'John Smith',
      jobTitle: 'Senior Software Engineer',
      appliedDate: '2 hours ago',
      status: 'new',
      avatar: 'JS',
    },
    {
      id: 2,
      candidateName: 'Sarah Johnson',
      jobTitle: 'Product Manager',
      appliedDate: '5 hours ago',
      status: 'reviewed',
      avatar: 'SJ',
    },
    {
      id: 3,
      candidateName: 'Mike Chen',
      jobTitle: 'UX Designer',
      appliedDate: '1 day ago',
      status: 'interview',
      avatar: 'MC',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Applications</h2>
          <p className="text-gray-600">Latest candidates who applied to your jobs</p>
        </div>
        <button className="px-6 py-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentApplications.map((application) => (
          <div key={application.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-purple-600">{application.avatar}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{application.candidateName}</h3>
                <p className="text-gray-600 text-sm">Applied for {application.jobTitle}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
              <span className="text-gray-500 text-sm">{application.appliedDate}</span>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {recentApplications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
          <p className="text-gray-600">Applications will appear here once candidates start applying to your jobs.</p>
        </div>
      )}
    </div>
  );
};

export default ApplicationsSummary;