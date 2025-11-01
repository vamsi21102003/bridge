'use client';

import React, { useState } from 'react';
import { Job, Applicant } from '@/types/dashboard';
import ResumePreviewModal from './ResumePreviewModal';

interface JobApplicationsModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

// Mock applicants data for each job with Indian names
const mockJobApplications: Record<string, Applicant[]> = {
  '1': [ // Senior Software Engineer
    {
      id: 'app1',
      name: 'Aarav Agarwal',
      email: 'aarav.agarwal@gmail.com',
      skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
      appliedPosition: 'Senior Software Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-aarav-agarwal/view',
      status: 'pending',
      appliedAt: '2024-01-16'
    },
    {
      id: 'app2',
      name: 'Ishita Sharma',
      email: 'ishita.sharma@gmail.com',
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'SASS', 'Redux'],
      appliedPosition: 'Senior Software Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-ishita-sharma/view',
      status: 'shortlisted',
      appliedAt: '2024-01-15'
    },
    {
      id: 'app3',
      name: 'Arjun Malhotra',
      email: 'arjun.malhotra@gmail.com',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL', 'AWS'],
      appliedPosition: 'Senior Software Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-arjun-malhotra/view',
      status: 'pending',
      appliedAt: '2024-01-14'
    },
    {
      id: 'app4',
      name: 'Meera Iyer',
      email: 'meera.iyer@gmail.com',
      skills: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
      appliedPosition: 'Senior Software Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-meera-iyer/view',
      status: 'rejected',
      appliedAt: '2024-01-13'
    },
  ],
  '2': [ // Product Manager
    {
      id: 'app5',
      name: 'Riya Kapoor',
      email: 'riya.kapoor@gmail.com',
      skills: ['Product Management', 'Analytics', 'Strategy', 'Agile', 'Scrum', 'Figma'],
      appliedPosition: 'Product Manager',
      resumeLink: 'https://drive.google.com/file/d/1example-riya-kapoor/view',
      status: 'shortlisted',
      appliedAt: '2024-01-13'
    },
    {
      id: 'app6',
      name: 'Vikash Gupta',
      email: 'vikash.gupta@gmail.com',
      skills: ['Product Strategy', 'Market Research', 'User Experience', 'Data Analysis', 'SQL'],
      appliedPosition: 'Product Manager',
      resumeLink: 'https://drive.google.com/file/d/1example-vikash-gupta/view',
      status: 'pending',
      appliedAt: '2024-01-12'
    },
  ],
  '3': [ // UX Designer
    {
      id: 'app7',
      name: 'Ananya Jain',
      email: 'ananya.jain@gmail.com',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Sketch', 'InVision'],
      appliedPosition: 'UX Designer',
      resumeLink: 'https://drive.google.com/file/d/1example-ananya-jain/view',
      status: 'shortlisted',
      appliedAt: '2024-01-11'
    },
  ],
  '4': [ // Data Scientist
    {
      id: 'app8',
      name: 'Karan Verma',
      email: 'karan.verma@gmail.com',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'SQL'],
      appliedPosition: 'Data Scientist',
      resumeLink: 'https://drive.google.com/file/d/1example-karan-verma/view',
      status: 'pending',
      appliedAt: '2024-01-15'
    },
    {
      id: 'app9',
      name: 'Pooja Nair',
      email: 'pooja.nair@gmail.com',
      skills: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'Statistics', 'Tableau'],
      appliedPosition: 'Data Scientist',
      resumeLink: 'https://drive.google.com/file/d/1example-pooja-nair/view',
      status: 'shortlisted',
      appliedAt: '2024-01-14'
    },
    {
      id: 'app10',
      name: 'Siddharth Reddy',
      email: 'siddharth.reddy@gmail.com',
      skills: ['Python', 'Scikit-learn', 'PyTorch', 'Data Visualization', 'Big Data', 'Spark'],
      appliedPosition: 'Data Scientist',
      resumeLink: 'https://drive.google.com/file/d/1example-siddharth-reddy/view',
      status: 'pending',
      appliedAt: '2024-01-13'
    },
  ],
  '5': [ // DevOps Engineer
    {
      id: 'app11',
      name: 'Rajesh Patel',
      email: 'rajesh.patel@gmail.com',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux'],
      appliedPosition: 'DevOps Engineer',
      resumeLink: 'https://drive.google.com/file/d/1example-rajesh-patel/view',
      status: 'pending',
      appliedAt: '2024-01-12'
    },
  ],
  '6': [ // Frontend Developer
    {
      id: 'app12',
      name: 'Shreya Singh',
      email: 'shreya.singh@gmail.com',
      skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'Bootstrap', 'jQuery'],
      appliedPosition: 'Frontend Developer',
      resumeLink: 'https://drive.google.com/file/d/1example-shreya-singh/view',
      status: 'pending',
      appliedAt: '2024-01-14'
    },
  ],
  '7': [ // Marketing Manager
    {
      id: 'app13',
      name: 'Nikhil Bansal',
      email: 'nikhil.bansal@gmail.com',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media', 'Analytics', 'PPC'],
      appliedPosition: 'Marketing Manager',
      resumeLink: 'https://drive.google.com/file/d/1example-nikhil-bansal/view',
      status: 'shortlisted',
      appliedAt: '2024-01-11'
    },
    {
      id: 'app14',
      name: 'Priyanka Mishra',
      email: 'priyanka.mishra@gmail.com',
      skills: ['Brand Management', 'Campaign Strategy', 'Market Research', 'Content Creation', 'Email Marketing'],
      appliedPosition: 'Marketing Manager',
      resumeLink: 'https://drive.google.com/file/d/1example-priyanka-mishra/view',
      status: 'pending',
      appliedAt: '2024-01-10'
    },
  ],
  '8': [ // Mobile App Developer
    {
      id: 'app15',
      name: 'Aditya Tiwari',
      email: 'aditya.tiwari@gmail.com',
      skills: ['React Native', 'Flutter', 'Mobile UI', 'iOS', 'Android', 'Firebase'],
      appliedPosition: 'Mobile App Developer',
      resumeLink: 'https://drive.google.com/file/d/1example-aditya-tiwari/view',
      status: 'pending',
      appliedAt: '2024-01-09'
    },
  ],
  '9': [ // Business Analyst
    {
      id: 'app16',
      name: 'Kavita Bhatt',
      email: 'kavita.bhatt@gmail.com',
      skills: ['Business Analysis', 'SQL', 'Excel', 'Power BI', 'Process Improvement', 'Requirements Gathering'],
      appliedPosition: 'Business Analyst',
      resumeLink: 'https://drive.google.com/file/d/1example-kavita-bhatt/view',
      status: 'shortlisted',
      appliedAt: '2024-01-08'
    },
  ],
  '10': [ // Cybersecurity Specialist
    {
      id: 'app17',
      name: 'Rohit Joshi',
      email: 'rohit.joshi@gmail.com',
      skills: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Penetration Testing', 'CISSP', 'Firewall Management'],
      appliedPosition: 'Cybersecurity Specialist',
      resumeLink: 'https://drive.google.com/file/d/1example-rohit-joshi/view',
      status: 'pending',
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
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Applications for {job.title}</h2>
                <div className="flex items-center space-x-4 text-purple-100">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{applicants.length} total applications</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span>{job.salary}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold">{applicants.filter(a => a.status === 'shortlisted').length}</div>
                <div className="text-xs text-purple-200">Shortlisted</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{applicants.filter(a => a.status === 'pending').length}</div>
                <div className="text-xs text-purple-200">Pending</div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Filter by status:</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="all">All Applications</option>
                  <option value="pending">Pending</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Search:</label>
                <input
                  type="text"
                  placeholder="Search by name or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64"
                />
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredApplicants.length} of {applicants.length} applications
            </div>
          </div>
        </div>

        {/* Enhanced Applications List */}
        <div className="flex-1 overflow-y-auto p-8">
          {filteredApplicants.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No applications found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {statusFilter === 'all' 
                  ? "No one has applied for this position yet. Share the job posting to attract more candidates."
                  : `No applications match the "${statusFilter}" status filter.`
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="bg-white rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Applicant Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {applicant.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{applicant.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{applicant.email}</p>
                          <p className="text-xs text-gray-500">Applied on {applicant.appliedAt}</p>
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-xs font-bold border-2 ${getStatusColor(applicant.status)}`}>
                        {applicant.status.toUpperCase()}
                      </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {applicant.skills.slice(0, 4).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {applicant.skills.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                            +{applicant.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={() => handleViewResume(applicant)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Resume</span>
                      </button>
                      
                      {applicant.status === 'pending' && (
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleStatusChange(applicant.id, 'shortlisted')}
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Shortlist</span>
                          </button>
                          <button
                            onClick={() => handleStatusChange(applicant.id, 'rejected')}
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>Reject</span>
                          </button>
                        </div>
                      )}
                      
                      {applicant.status === 'shortlisted' && (
                        <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-xl border border-green-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium">Shortlisted for Interview</span>
                        </div>
                      )}
                      
                      {applicant.status === 'rejected' && (
                        <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-700 rounded-xl border border-red-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="font-medium">Application Rejected</span>
                        </div>
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