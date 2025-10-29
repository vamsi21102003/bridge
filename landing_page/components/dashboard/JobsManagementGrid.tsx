'use client';

import React, { useState } from 'react';
import JobApplicationsModal from './JobApplicationsModal';
import JobEditModal from './JobEditModal';
import { Job } from '@/types/dashboard';

interface JobsManagementGridProps {
  filter: 'all' | 'active' | 'closed' | 'draft';
}

const JobsManagementGrid: React.FC<JobsManagementGridProps> = ({ filter }) => {
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      role: 'Full-time',
      description: 'Looking for an experienced React developer',
      skills: ['React', 'TypeScript', 'Next.js'],
      salary: '₹8-12 LPA',
      location: 'San Francisco, CA',
      status: 'active',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'Product Manager',
      role: 'Full-time',
      description: 'Lead product strategy and development',
      skills: ['Product Management', 'Analytics', 'Strategy'],
      salary: '₹15-20 LPA',
      location: 'New York, NY',
      status: 'active',
      createdAt: '2024-01-10',
    },
    {
      id: '3',
      title: 'UX Designer',
      role: 'Contract',
      description: 'Design user experiences for web applications',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      salary: '₹50,000/month',
      location: 'Remote',
      status: 'closed',
      createdAt: '2024-01-05',
    },
  ];

  const filteredJobs = filter === 'all' ? mockJobs : mockJobs.filter(job => job.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <div key={job.id} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
              {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">📍</span>
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">💼</span>
              {job.role}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">💰</span>
              {job.salary}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">📅</span>
              Posted {job.createdAt}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {
                setSelectedJob(job);
                setShowApplicationsModal(true);
              }}
              className="flex-1 bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
            >
              View Applications
            </button>
            <button 
              onClick={() => {
                setSelectedJob(job);
                setShowEditModal(true);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>
      ))}

      {filteredJobs.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📋</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">No jobs match the current filter criteria.</p>
        </div>
      )}

      {/* Modals */}
      {selectedJob && (
        <>
          <JobApplicationsModal
            job={selectedJob}
            isOpen={showApplicationsModal}
            onClose={() => {
              setShowApplicationsModal(false);
              setSelectedJob(null);
            }}
          />
          <JobEditModal
            job={selectedJob}
            isOpen={showEditModal}
            onClose={() => {
              setShowEditModal(false);
              setSelectedJob(null);
            }}
            onSave={(updatedJob) => {
              console.log('Job updated:', updatedJob);
              // Here you would typically update the job in your state/API
            }}
          />
        </>
      )}
    </div>
  );
};

export default JobsManagementGrid;