'use client';

import React, { useState } from 'react';
import { 
  Download, 
  MessageCircle, 
  UserCheck, 
  UserX, 
  Eye, 
  MapPin, 
  Calendar, 
  Briefcase,
  Mail,
  Phone,
  Star,
  Award,
  Clock,
  Filter,
  Search
} from 'lucide-react';

const ApplicantsTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'interview' | 'hired' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null);

  const mockApplicants = [
    {
      id: 1,
      name: 'Aarav Sharma',
      email: 'aarav.sharma@gmail.com',
      phone: '+91 98765 43210',
      jobTitle: 'Senior Software Engineer',
      appliedDate: '2024-01-15',
      status: 'new',
      experience: '5 years',
      location: 'Bangalore, Karnataka',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      rating: 4.8,
      resumeUrl: '/resumes/aarav-sharma.pdf',
      profileImage: null,
      expectedSalary: '₹18-25 LPA',
      currentCompany: 'TechCorp India',
      education: 'B.Tech CSE, IIT Delhi'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@gmail.com',
      phone: '+91 87654 32109',
      jobTitle: 'Product Manager',
      appliedDate: '2024-01-14',
      status: 'reviewed',
      experience: '7 years',
      location: 'Mumbai, Maharashtra',
      skills: ['Product Strategy', 'Analytics', 'Agile', 'Figma', 'SQL'],
      rating: 4.9,
      resumeUrl: '/resumes/priya-patel.pdf',
      profileImage: null,
      expectedSalary: '₹25-35 LPA',
      currentCompany: 'FinTech Solutions',
      education: 'MBA, IIM Ahmedabad'
    },
    {
      id: 3,
      name: 'Arjun Verma',
      email: 'arjun.verma@gmail.com',
      phone: '+91 76543 21098',
      jobTitle: 'UX Designer',
      appliedDate: '2024-01-13',
      status: 'interview',
      experience: '4 years',
      location: 'Pune, Maharashtra',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
      rating: 4.7,
      resumeUrl: '/resumes/arjun-verma.pdf',
      profileImage: null,
      expectedSalary: '₹12-18 LPA',
      currentCompany: 'Design Studio',
      education: 'B.Des, NID Ahmedabad'
    },
    {
      id: 4,
      name: 'Kavya Nair',
      email: 'kavya.nair@gmail.com',
      phone: '+91 65432 10987',
      jobTitle: 'Data Scientist',
      appliedDate: '2024-01-12',
      status: 'new',
      experience: '3 years',
      location: 'Hyderabad, Telangana',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Tableau'],
      rating: 4.6,
      resumeUrl: '/resumes/kavya-nair.pdf',
      profileImage: null,
      expectedSalary: '₹15-22 LPA',
      currentCompany: 'DataTech Labs',
      education: 'M.Tech AI, IIIT Hyderabad'
    },
    {
      id: 5,
      name: 'Rohit Gupta',
      email: 'rohit.gupta@gmail.com',
      phone: '+91 54321 09876',
      jobTitle: 'DevOps Engineer',
      appliedDate: '2024-01-11',
      status: 'hired',
      experience: '6 years',
      location: 'Chennai, Tamil Nadu',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      rating: 4.9,
      resumeUrl: '/resumes/rohit-gupta.pdf',
      profileImage: null,
      expectedSalary: '₹20-28 LPA',
      currentCompany: 'CloudOps India',
      education: 'B.Tech IT, Anna University'
    },
    {
      id: 6,
      name: 'Sneha Joshi',
      email: 'sneha.joshi@gmail.com',
      phone: '+91 43210 98765',
      jobTitle: 'Frontend Developer',
      appliedDate: '2024-01-10',
      status: 'rejected',
      experience: '2 years',
      location: 'Gurgaon, Haryana',
      skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'Bootstrap'],
      rating: 4.2,
      resumeUrl: '/resumes/sneha-joshi.pdf',
      profileImage: null,
      expectedSalary: '₹8-12 LPA',
      currentCompany: 'WebDev Pro',
      education: 'BCA, Delhi University'
    }
  ];

  const filteredApplicants = mockApplicants.filter(applicant => {
    const matchesFilter = filter === 'all' || applicant.status === filter;
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'interview':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'hired':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Clock className="w-4 h-4" />;
      case 'reviewed':
        return <Eye className="w-4 h-4" />;
      case 'interview':
        return <UserCheck className="w-4 h-4" />;
      case 'hired':
        return <Award className="w-4 h-4" />;
      case 'rejected':
        return <UserX className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleStatusChange = (applicantId: number, newStatus: string) => {
    // Mock status change
    console.log(`Changing status of applicant ${applicantId} to ${newStatus}`);
    alert(`Applicant status changed to ${newStatus}!`);
  };

  const handleDownloadResume = (applicant: any) => {
    // Mock resume download
    console.log(`Downloading resume for ${applicant.name}`);
    alert(`Downloading ${applicant.name}'s resume...`);
  };

  const handleSendMessage = (applicant: any) => {
    setSelectedApplicant(applicant);
    setShowMessageModal(true);
  };

  const handleViewProfile = (applicant: any) => {
    // Mock profile view
    console.log(`Viewing profile for ${applicant.name}`);
    alert(`Opening ${applicant.name}'s detailed profile...`);
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Filter and Search Section */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {['all', 'new', 'reviewed', 'interview', 'hired', 'rejected'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  filter === status
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status !== 'all' && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {mockApplicants.filter(a => a.status === status).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search applicants, jobs, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full lg:w-80"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredApplicants.length} of {mockApplicants.length} applicants
        </div>
      </div>

      {/* Applicants Cards Grid */}
      {filteredApplicants.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No applicants found</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {searchTerm 
              ? `No applicants match your search for "${searchTerm}"`
              : `No applicants match the "${filter}" filter criteria.`
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-white rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-6 text-white">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl font-bold text-white">
                          {applicant.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{applicant.name}</h3>
                        <p className="text-purple-100 text-sm">{applicant.currentCompany}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{applicant.rating}</span>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(applicant.status)}`}>
                    {getStatusIcon(applicant.status)}
                    <span>{applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Job Info */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium text-gray-900">{applicant.jobTitle}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{applicant.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Applied {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{applicant.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{applicant.phone}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {applicant.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{applicant.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Experience & Salary */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">{applicant.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-sm font-bold text-green-600">{applicant.expectedSalary}</div>
                    <div className="text-xs text-gray-500">Expected</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Primary Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewProfile(applicant)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="font-medium">View Profile</span>
                    </button>
                    <button
                      onClick={() => handleDownloadResume(applicant)}
                      className="flex items-center justify-center px-4 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition-all duration-200"
                      title="Download Resume"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Status Actions */}
                  {applicant.status === 'new' || applicant.status === 'reviewed' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(applicant.id, 'interview')}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200"
                      >
                        <UserCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">Shortlist</span>
                      </button>
                      <button
                        onClick={() => handleStatusChange(applicant.id, 'rejected')}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200"
                      >
                        <UserX className="w-4 h-4" />
                        <span className="text-sm font-medium">Reject</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-2">
                      <span className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium ${getStatusColor(applicant.status)}`}>
                        {getStatusIcon(applicant.status)}
                        <span>
                          {applicant.status === 'hired' ? 'Successfully Hired' :
                           applicant.status === 'rejected' ? 'Application Rejected' :
                           applicant.status === 'interview' ? 'Scheduled for Interview' :
                           'Status Updated'}
                        </span>
                      </span>
                    </div>
                  )}

                  {/* Message Button */}
                  <button
                    onClick={() => handleSendMessage(applicant)}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-purple-300 text-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedApplicant && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {selectedApplicant.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Send Message</h3>
                  <p className="text-gray-600">to {selectedApplicant.name}</p>
                </div>
              </div>
              <button
                onClick={() => setShowMessageModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <UserX className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Interview Invitation - Senior Software Engineer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Hi [Name], Thank you for your application. We would like to schedule an interview..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => {
                  setShowMessageModal(false);
                  alert(`Message sent to ${selectedApplicant.name}!`);
                }}
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                Send Message
              </button>
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsTable;