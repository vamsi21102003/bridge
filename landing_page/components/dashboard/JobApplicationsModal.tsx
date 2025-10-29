'use client';

import React, { useState } from 'react';
import { Job, Applicant } from '@/types/dashboard';
import ResumePreviewModal from './ResumePreviewModal';

interface JobApplicationsModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

// Mock applicants data for each job
const mockJobApplications: Record<string, Applicant[]> = {
  '1': [ // Senior Frontend Developer
    {
      id: 'app1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
      appliedPosition: 'Senior Frontend Developer',
      resumeLink: 'https://drive.google.com/file/d/1example-rahul-sharma/view',
      status: 'pending',
      appliedAt: '2024-01-16'
    },
    {
      id: 'app2',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'SASS', 'Redux'],
      appliedPosition: 'Senior Frontend Developer',
      resumeLink: 'https://drive.google.com/file/d/1example-priya-patel/view',
      status: 'shortlisted',
      appliedAt: '2024-01-15'
    },
  ],
  '2': [ // Backend Engineer
    {
      id: 'app7',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@email.com',
      skills: ['Node.js', 'MongoDB', 'Express', 'Python', 'AWS', 'Docker'],
      appliedPosition: 'Backend Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-sneha-reddy/view',
      status: 'shortlisted',
      appliedAt: '2024-01-13'
    },
  ],
};

const JobApplicationsModal: React.FC<JobApplicationsModalProps> = ({ job, isOpen, onClose }) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'shortlisted' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState<Applicant[]>(mockJobApplications[job.id] || []);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeApplicant, setResumeApplicant] = useState<Applicant | null>(null);

  // Update applicants when job changes
  React.useEffect(() => {
    setApplicants(mockJobApplications[job.id] || []);
  }, [job.id]);
  
  const filteredApplicants = applicants.filter(applicant => {
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: Applicant['status']) => {
    switch (status) {
      case 'shortlisted':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const handleStatusChange = (applicantId: string, newStatus: Applicant['status']) => {
    setApplicants(prev => 
      prev.map(applicant => 
        applicant.id === applicantId 
          ? { ...applicant, status: newStatus }
          : applicant
      )
    );
    
    // Show success notification
    const applicantName = applicants.find(a => a.id === applicantId)?.name;
    const statusText = newStatus === 'shortlisted' ? 'shortlisted' : 'rejected';
    alert(`${applicantName} has been ${statusText} successfully!`);
  };

  const handleViewResume = (applicant: Applicant) => {
    setResumeApplicant(applicant);
    setShowResumeModal(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Applications for {job.title}</h2>
              <p className="text-purple-100">
                {applicants.length} total applications • {job.location} • {job.salary}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Applications List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredApplicants.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600">No one has applied for this position yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        {applicant.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{applicant.name}</h3>
                        <p className="text-gray-600 text-sm">{applicant.email}</p>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-2 ${getStatusColor(applicant.status)}`}>
                          {applicant.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewResume(applicant)}
                        className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors"
                      >
                        View Resume
                      </button>
                      {applicant.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusChange(applicant.id, 'shortlisted')}
                            className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-xl hover:bg-green-600 transition-colors"
                          >
                            Shortlist
                          </button>
                          <button
                            onClick={() => handleStatusChange(applicant.id, 'rejected')}
                            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-xl hover:bg-red-600 transition-colors"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && resumeApplicant && (
        <ResumePreviewModal
          applicant={resumeApplicant}
          isOpen={showResumeModal}
          onClose={() => {
            setShowResumeModal(false);
            setResumeApplicant(null);
          }}
        />
      )}
    </div>
  );
};

export default JobApplicationsModal;