'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import OpportunityCard from '@/components/student/OpportunityCard';
import { Opportunity } from '@/types/student';
import { SAMPLE_DATA } from '@/constants/student';

const OpportunitiesPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: '📋' },
    { id: 'job', name: 'Jobs', icon: '💼' },
    { id: 'internship', name: 'Internships', icon: '🎓' },
    { id: 'hackathon', name: 'Hackathons', icon: '⚡' },
    { id: 'competition', name: 'Competitions', icon: '🏆' },
  ];

  const mockOpportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'Google',
      type: 'job',
      location: 'Bangalore, India',
      skills: ['React', 'TypeScript', 'GraphQL', 'Node.js'],
      description: 'Join our team to build next-generation web applications with cutting-edge technologies. Work on products used by billions of users worldwide.',
      salary: '₹18L - ₹30L',
      deadline: '2024-12-15',
    },
    {
      id: '2',
      title: 'Machine Learning Intern',
      company: 'Microsoft',
      type: 'internship',
      location: 'Hyderabad, India',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
      description: 'Work on cutting-edge AI research projects and contribute to products that impact millions of users.',
      deadline: '2024-11-30',
    },
    {
      id: '3',
      title: 'Global Innovation Challenge',
      company: 'Amazon',
      type: 'hackathon',
      location: 'Virtual',
      skills: ['AWS', 'JavaScript', 'API Integration', 'UI/UX'],
      description: 'Build innovative solutions for sustainability challenges using AWS cloud technologies.',
      deadline: '2024-12-01',
    },
    {
      id: '4',
      title: 'Data Science Competition',
      company: 'Netflix',
      type: 'competition',
      location: 'Mumbai, India',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics'],
      description: 'Predict user preferences and improve recommendation algorithms.',
      deadline: '2024-12-10',
    },
    {
      id: '5',
      title: 'Full Stack Developer',
      company: 'Meta',
      type: 'job',
      location: 'Gurgaon, India',
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
      description: 'Build scalable web applications for our social media platforms.',
      salary: '₹15L - ₹25L',
      deadline: '2024-12-20',
    },
    {
      id: '6',
      title: 'iOS Development Intern',
      company: 'Apple',
      type: 'internship',
      location: 'Chennai, India',
      skills: ['Swift', 'iOS', 'Xcode', 'UI/UX'],
      description: 'Contribute to the development of innovative iOS applications.',
      deadline: '2024-11-25',
    },
    {
      id: '7',
      title: 'DevOps Engineer',
      company: 'Flipkart',
      type: 'job',
      location: 'Bangalore, India',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      description: 'Scale infrastructure for millions of users across India.',
      salary: '₹12L - ₹22L',
      deadline: '2024-12-18',
    },
    {
      id: '8',
      title: 'Product Design Intern',
      company: 'Zomato',
      type: 'internship',
      location: 'Delhi, India',
      skills: ['Figma', 'UI/UX', 'User Research', 'Prototyping'],
      description: 'Design delightful food delivery experiences for millions of users.',
      deadline: '2024-12-05',
    },
    {
      id: '9',
      title: 'Blockchain Hackathon',
      company: 'Polygon',
      type: 'hackathon',
      location: 'Virtual',
      skills: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi'],
      description: 'Build the future of decentralized finance with cutting-edge blockchain technology.',
      deadline: '2024-12-08',
    },
    {
      id: '10',
      title: 'AI/ML Research Scientist',
      company: 'NVIDIA',
      type: 'job',
      location: 'Pune, India',
      skills: ['Deep Learning', 'CUDA', 'PyTorch', 'Computer Vision'],
      description: 'Push the boundaries of AI research and develop next-gen GPU computing solutions.',
      salary: '₹25L - ₹45L',
      deadline: '2024-12-22',
    },
    {
      id: '11',
      title: 'Cybersecurity Intern',
      company: 'Paytm',
      type: 'internship',
      location: 'Noida, India',
      skills: ['Ethical Hacking', 'Network Security', 'Python', 'Cryptography'],
      description: 'Protect financial transactions and secure payment infrastructure.',
      deadline: '2024-12-12',
    },
    {
      id: '12',
      title: 'Gaming Competition',
      company: 'Unity',
      type: 'competition',
      location: 'Virtual',
      skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
      description: 'Create immersive gaming experiences and compete for exciting prizes.',
      deadline: '2024-12-25',
    },
  ];

  const filteredOpportunities = mockOpportunities.filter(opportunity => {
    const matchesCategory = selectedCategory === 'all' || opportunity.type === selectedCategory;
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Enhanced Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Advanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Floating Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl">💼</div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-30 animate-float-delayed flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🚀</div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-25 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">🎯</div>
          <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20 animate-float-delayed flex items-center justify-center text-2xl backdrop-blur-sm shadow-xl">💡</div>
          <div className="absolute bottom-20 right-10 w-22 h-22 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl opacity-30 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">🌟</div>
          
          {/* Career-themed Secondary Elements */}
          <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-25 animate-bounce flex items-center justify-center text-xl backdrop-blur-sm">📈</div>
          <div className="absolute top-80 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl opacity-20 animate-pulse flex items-center justify-center text-lg backdrop-blur-sm">💰</div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl opacity-30 animate-spin flex items-center justify-center text-xl backdrop-blur-sm" style={{ animationDuration: '4s' }}>🏢</div>
          
          {/* Particle Effects */}
          <div className="absolute top-10 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Professional Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="opportunityNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <g className="animate-pulse">
              <line x1="200" y1="150" x2="400" y2="100" stroke="url(#opportunityNetworkGradient)" strokeWidth="2"/>
              <line x1="400" y1="100" x2="600" y2="200" stroke="url(#opportunityNetworkGradient)" strokeWidth="2"/>
              <line x1="600" y1="200" x2="800" y2="150" stroke="url(#opportunityNetworkGradient)" strokeWidth="2"/>
              <line x1="300" y1="350" x2="500" y2="400" stroke="url(#opportunityNetworkGradient)" strokeWidth="2"/>
              <line x1="500" y1="400" x2="700" y2="350" stroke="url(#opportunityNetworkGradient)" strokeWidth="2"/>
            </g>
            <circle cx="200" cy="150" r="6" fill="#3b82f6" opacity="0.8" className="animate-pulse"/>
            <circle cx="400" cy="100" r="6" fill="#8b5cf6" opacity="0.8" className="animate-pulse"/>
            <circle cx="600" cy="200" r="6" fill="#ec4899" opacity="0.8" className="animate-pulse"/>
            <circle cx="800" cy="150" r="6" fill="#f59e0b" opacity="0.8" className="animate-pulse"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Discover Opportunities 🚀
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find your next career move from thousands of jobs, internships, hackathons, and competitions
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">2.5K+</div>
              <div className="text-sm text-gray-600">Jobs</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">1.2K+</div>
              <div className="text-sm text-gray-600">Internships</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">500+</div>
              <div className="text-sm text-gray-600">Hackathons</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">300+</div>
              <div className="text-sm text-gray-600">Competitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredOpportunities.length} Opportunities Found
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Sort by: Relevance</option>
              <option>Sort by: Date Posted</option>
              <option>Sort by: Company</option>
              <option>Sort by: Salary</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No opportunities found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </section>

      {/* AI Recommendations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-primary rounded-3xl p-8 text-white text-center">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-3xl font-bold mb-4">Get AI-Powered Recommendations</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let our AI analyze your skills and preferences to find the perfect opportunities for you
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Enable AI Recommendations ✨
          </button>
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;