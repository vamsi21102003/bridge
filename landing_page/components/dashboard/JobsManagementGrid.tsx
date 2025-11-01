'use client';

import React, { useState } from 'react';
import JobApplicationsModal from './JobApplicationsModal';
import JobEditModal from './JobEditModal';
import { Job } from '@/types/dashboard';
import { Edit3, Trash2, StopCircle, Download, Eye, MoreVertical } from 'lucide-react';

interface JobsManagementGridProps {
  filter: 'all' | 'active' | 'closed' | 'draft';
}

const JobsManagementGrid: React.FC<JobsManagementGridProps> = ({ filter }) => {
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      role: 'Full-time',
      description: 'Looking for an experienced React developer with 5+ years experience',
      skills: ['React', 'TypeScript', 'Next.js'],
      salary: '₹15-25 LPA',
      location: 'Bangalore, Karnataka',
      status: 'active',
      createdAt: '2024-01-15',
      company: 'TechCorp India',
      applicants: 45
    },
    {
      id: '2',
      title: 'Product Manager',
      role: 'Full-time',
      description: 'Lead product strategy and development for fintech products',
      skills: ['Product Management', 'Analytics', 'Strategy'],
      salary: '₹20-30 LPA',
      location: 'Mumbai, Maharashtra',
      status: 'active',
      createdAt: '2024-01-10',
      company: 'FinTech Solutions',
      applicants: 32
    },
    {
      id: '3',
      title: 'UX Designer',
      role: 'Contract',
      description: 'Design user experiences for web and mobile applications',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      salary: '₹80,000/month',
      location: 'Pune, Maharashtra',
      status: 'closed',
      createdAt: '2024-01-05',
      company: 'Design Studio',
      applicants: 28
    },
    {
      id: '4',
      title: 'Data Scientist',
      role: 'Full-time',
      description: 'Analyze complex data sets and build ML models',
      skills: ['Python', 'Machine Learning', 'SQL'],
      salary: '₹18-28 LPA',
      location: 'Hyderabad, Telangana',
      status: 'active',
      createdAt: '2024-01-12',
      company: 'DataTech Labs',
      applicants: 67
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      role: 'Full-time',
      description: 'Manage cloud infrastructure and deployment pipelines',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      salary: '₹12-20 LPA',
      location: 'Chennai, Tamil Nadu',
      status: 'active',
      createdAt: '2024-01-08',
      company: 'CloudOps India',
      applicants: 23
    },
    {
      id: '6',
      title: 'Frontend Developer',
      role: 'Part-time',
      description: 'Build responsive web applications using modern frameworks',
      skills: ['Vue.js', 'JavaScript', 'CSS'],
      salary: '₹40,000/month',
      location: 'Gurgaon, Haryana',
      status: 'draft',
      createdAt: '2024-01-14',
      company: 'WebDev Pro',
      applicants: 0
    },
    {
      id: '7',
      title: 'Marketing Manager',
      role: 'Full-time',
      description: 'Lead digital marketing campaigns and brand strategy',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
      salary: '₹10-16 LPA',
      location: 'Delhi, NCR',
      status: 'active',
      createdAt: '2024-01-11',
      company: 'Marketing Hub',
      applicants: 41
    },
    {
      id: '8',
      title: 'Mobile App Developer',
      role: 'Contract',
      description: 'Develop cross-platform mobile applications',
      skills: ['React Native', 'Flutter', 'Mobile UI'],
      salary: '₹70,000/month',
      location: 'Kochi, Kerala',
      status: 'active',
      createdAt: '2024-01-09',
      company: 'MobileFirst',
      applicants: 19
    },
    {
      id: '9',
      title: 'Business Analyst',
      role: 'Full-time',
      description: 'Analyze business processes and recommend improvements',
      skills: ['Business Analysis', 'SQL', 'Excel'],
      salary: '₹8-14 LPA',
      location: 'Kolkata, West Bengal',
      status: 'closed',
      createdAt: '2024-01-06',
      company: 'Business Solutions',
      applicants: 35
    },
    {
      id: '10',
      title: 'Cybersecurity Specialist',
      role: 'Full-time',
      description: 'Protect organizational systems from cyber threats',
      skills: ['Cybersecurity', 'Ethical Hacking', 'Network Security'],
      salary: '₹16-24 LPA',
      location: 'Ahmedabad, Gujarat',
      status: 'active',
      createdAt: '2024-01-13',
      company: 'SecureNet India',
      applicants: 29
    }
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

  const handleJobAction = (action: string, jobId: string) => {
    switch (action) {
      case 'edit':
        const job = mockJobs.find(j => j.id === jobId);
        if (job) {
          setSelectedJob(job);
          setShowEditModal(true);
        }
        break;
      case 'delete':
        setShowDeleteConfirm(jobId);
        break;
      case 'end':
        // Mock ending job
        console.log('Ending job:', jobId);
        alert('Job posting ended successfully!');
        break;
      case 'download':
        // Mock PDF download
        const jobToDownload = mockJobs.find(j => j.id === jobId);
        if (jobToDownload) {
          const pdfContent = `
Job Title: ${jobToDownload.title}
Company: ${jobToDownload.company}
Location: ${jobToDownload.location}
Salary: ${jobToDownload.salary}
Type: ${jobToDownload.role}

Description: ${jobToDownload.description}

Skills Required: ${jobToDownload.skills.join(', ')}

Status: ${jobToDownload.status}
Posted: ${jobToDownload.createdAt}
Applicants: ${jobToDownload.applicants}

Generated by EMPBriDGe Platform
          `;
          const blob = new Blob([pdfContent], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${jobToDownload.title}_Job_Description.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
        break;
    }
    setShowActionMenu(null);
  };

  const confirmDelete = (jobId: string) => {
    console.log('Deleting job:', jobId);
    alert('Job deleted successfully!');
    setShowDeleteConfirm(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <div key={job.id} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative">
          {/* Header with Action Menu */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1 text-lg">{job.title}</h3>
              <p className="text-gray-600 text-sm font-medium">{job.company}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
              <div className="relative">
                <button
                  onClick={() => setShowActionMenu(showActionMenu === job.id ? null : job.id)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                
                {/* Action Menu Dropdown */}
                {showActionMenu === job.id && (
                  <div className="absolute right-0 top-8 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10 min-w-[160px]">
                    <button
                      onClick={() => handleJobAction('edit', job.id)}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit Job</span>
                    </button>
                    <button
                      onClick={() => handleJobAction('download', job.id)}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                    {job.status === 'active' && (
                      <button
                        onClick={() => handleJobAction('end', job.id)}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 transition-colors"
                      >
                        <StopCircle className="w-4 h-4" />
                        <span>End Posting</span>
                      </button>
                    )}
                    <hr className="my-1" />
                    <button
                      onClick={() => handleJobAction('delete', job.id)}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Job</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-3 text-base">📍</span>
              <span className="font-medium">{job.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-3 text-base">💼</span>
              <span>{job.role}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-3 text-base">💰</span>
              <span className="font-semibold text-green-600">{job.salary}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-3 text-base">👥</span>
              <span>{job.applicants} applicants</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-3 text-base">📅</span>
              <span>Posted {job.createdAt}</span>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {job.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
              {job.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                  +{job.skills.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {
                setSelectedJob(job);
                setShowApplicationsModal(true);
              }}
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2.5 px-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Applications</span>
            </button>
            <button 
              onClick={() => handleJobAction('download', job.id)}
              className="p-2.5 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-colors"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
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

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Job Posting</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this job posting? This action cannot be undone and all applications will be lost.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => confirmDelete(showDeleteConfirm)}
                  className="flex-1 bg-red-500 text-white py-3 px-6 rounded-xl hover:bg-red-600 transition-colors font-medium"
                >
                  Delete Job
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
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