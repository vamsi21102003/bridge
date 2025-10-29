'use client';

import React, { useState } from 'react';

const ApplicantsTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'interview' | 'hired' | 'rejected'>('all');

  const mockApplicants = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      jobTitle: 'Senior Software Engineer',
      appliedDate: '2024-01-15',
      status: 'new',
      experience: '5 years',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      jobTitle: 'Product Manager',
      appliedDate: '2024-01-14',
      status: 'reviewed',
      experience: '7 years',
      location: 'New York, NY',
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      jobTitle: 'UX Designer',
      appliedDate: '2024-01-13',
      status: 'interview',
      experience: '4 years',
      location: 'Remote',
    },
  ];

  const filteredApplicants = filter === 'all' ? mockApplicants : mockApplicants.filter(applicant => applicant.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-green-100 text-green-800';
      case 'hired':
        return 'bg-purple-100 text-purple-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      {/* Filter Tabs */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {['all', 'new', 'reviewed', 'interview', 'hired', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === status
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Applied
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applied Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredApplicants.map((applicant) => (
              <tr key={applicant.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-purple-600">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                      <div className="text-sm text-gray-500">{applicant.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{applicant.jobTitle}</div>
                  <div className="text-sm text-gray-500">{applicant.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {applicant.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(applicant.appliedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(applicant.status)}`}>
                    {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button className="text-purple-600 hover:text-purple-900 transition-colors">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-900 transition-colors">
                      Accept
                    </button>
                    <button className="text-red-600 hover:text-red-900 transition-colors">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredApplicants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">👥</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No applicants found</h3>
          <p className="text-gray-600">No applicants match the current filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ApplicantsTable;