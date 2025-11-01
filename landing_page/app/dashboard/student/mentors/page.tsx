'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import MentorCard from '@/components/student/MentorCard';
import AIMentorCard from '@/components/student/AIMentorCard';
import { AIBuddySection } from '@/components/mentors/AIBuddySection';
import { Mentor } from '@/types/student';

const MentorsPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const expertiseAreas = [
    { id: 'all', name: 'All Areas', icon: '🌟' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'data', name: 'Data Science', icon: '📊' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'design', name: 'UI/UX', icon: '🎯' },
  ];

  const mockMentors: Mentor[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      title: 'Senior Software Engineer',
      company: 'Meta',
      expertise: ['React', 'System Design', 'Career Growth', 'Leadership'],
      rating: 5,
      reviews: 127,
      price: 1200,
      availability: true,
    },
    {
      id: '2',
      name: 'Arjun Kumar',
      title: 'ML Research Scientist',
      company: 'OpenAI',
      expertise: ['Machine Learning', 'Python', 'Research', 'Deep Learning'],
      rating: 5,
      reviews: 89,
      price: 1800,
      availability: true,
    },
    {
      id: '3',
      name: 'Ananya Gupta',
      title: 'Principal Designer',
      company: 'Airbnb',
      expertise: ['UI/UX Design', 'Product Strategy', 'User Research'],
      rating: 5,
      reviews: 156,
      price: 1500,
      availability: false,
    },
    {
      id: '4',
      name: 'Rohit Singh',
      title: 'Staff Backend Engineer',
      company: 'Stripe',
      expertise: ['Node.js', 'Microservices', 'System Architecture', 'DevOps'],
      rating: 5,
      reviews: 203,
      price: 1600,
      availability: true,
    },
    {
      id: '5',
      name: 'Kavya Patel',
      title: 'Data Science Manager',
      company: 'Netflix',
      expertise: ['Data Science', 'Analytics', 'Team Management', 'Python'],
      rating: 5,
      reviews: 98,
      price: 2000,
      availability: true,
    },
    {
      id: '6',
      name: 'Vikram Reddy',
      title: 'Mobile Engineering Lead',
      company: 'Uber',
      expertise: ['iOS', 'Android', 'React Native', 'Mobile Architecture'],
      rating: 4,
      reviews: 142,
      price: 1400,
      availability: true,
    },
    {
      id: '7',
      name: 'Sneha Jain',
      title: 'Product Manager',
      company: 'Flipkart',
      expertise: ['Product Strategy', 'Market Research', 'Agile', 'Analytics'],
      rating: 5,
      reviews: 78,
      price: 1300,
      availability: true,
    },
    {
      id: '8',
      name: 'Karan Mehta',
      title: 'DevOps Engineer',
      company: 'Zomato',
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      rating: 4,
      reviews: 92,
      price: 900,
      availability: true,
    },

  ];

  const filteredMentors = mockMentors.filter(mentor => {
    const matchesExpertise = selectedExpertise === 'all' || 
      mentor.expertise.some(skill => skill.toLowerCase().includes(selectedExpertise));
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesExpertise && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Hero Section with Enhanced Network Animation */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 via-white to-blue-50 overflow-hidden">
        {/* Enhanced Network Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Enhanced Network Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated Network Lines */}
            <g className="animate-pulse" style={{ animationDuration: '3s' }}>
              <line x1="120" y1="120" x2="350" y2="220" stroke="url(#lineGradient1)" strokeWidth="3" filter="url(#glow)"/>
              <line x1="350" y1="220" x2="580" y2="170" stroke="url(#lineGradient1)" strokeWidth="3" filter="url(#glow)"/>
              <line x1="580" y1="170" x2="820" y2="280" stroke="url(#lineGradient2)" strokeWidth="3" filter="url(#glow)"/>
              <line x1="250" y1="350" x2="480" y2="400" stroke="url(#lineGradient2)" strokeWidth="3" filter="url(#glow)"/>
              <line x1="480" y1="400" x2="720" y2="350" stroke="url(#lineGradient1)" strokeWidth="3" filter="url(#glow)"/>
              <line x1="720" y1="350" x2="950" y2="450" stroke="url(#lineGradient2)" strokeWidth="3" filter="url(#glow)"/>
            </g>
            
            {/* Enhanced Network Nodes */}
            <circle cx="120" cy="120" r="12" fill="url(#lineGradient1)" opacity="0.8" className="animate-pulse" filter="url(#glow)"/>
            <circle cx="350" cy="220" r="10" fill="url(#lineGradient2)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#glow)"/>
            <circle cx="580" cy="170" r="14" fill="url(#lineGradient1)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '1s' }} filter="url(#glow)"/>
            <circle cx="820" cy="280" r="11" fill="url(#lineGradient2)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '1.5s' }} filter="url(#glow)"/>
            <circle cx="250" cy="350" r="13" fill="url(#lineGradient1)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '2s' }} filter="url(#glow)"/>
            <circle cx="480" cy="400" r="9" fill="url(#lineGradient2)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '2.5s' }} filter="url(#glow)"/>
            <circle cx="720" cy="350" r="12" fill="url(#lineGradient1)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '3s' }} filter="url(#glow)"/>
            <circle cx="950" cy="450" r="10" fill="url(#lineGradient2)" opacity="0.8" className="animate-pulse" style={{ animationDelay: '3.5s' }} filter="url(#glow)"/>
          </svg>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '5s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Enhanced Title with Multiple Gradients */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                Connect with
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Mentors
              </span>
              <span className="text-6xl md:text-8xl ml-4 animate-bounce">🤝</span>
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-20 blur-2xl -z-10 animate-pulse"></div>
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Get <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">personalized guidance</span> from 
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold"> industry experts</span> and 
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold"> accelerate your career growth</span>
          </p>

          {/* Enhanced Quick Stats with Glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Expert Mentors */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Expert Mentors</div>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60"></div>
            </div>

            {/* Avg Rating */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  4.9
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Avg Rating</div>
                <div className="flex justify-center mt-2">
                  <span className="text-yellow-400 text-lg animate-pulse">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
            </div>

            {/* Sessions */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Sessions</div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60"></div>
            </div>

            {/* Success Rate */}
            <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl group-hover:from-pink-500/20 group-hover:to-rose-500/20 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Success Rate</div>
                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">🚀 Find Your Mentor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-10 py-4 bg-white/80 backdrop-blur-xl border-2 border-purple-300 text-purple-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">🤖 Try AI Mentor</span>
              <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Find Your Perfect Mentor 🎯
              </h2>
              <p className="text-gray-600">Search through our expert mentors and filter by expertise</p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search mentors by name, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-6 text-gray-700 bg-white/70 backdrop-blur-sm border-2 border-purple-200/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 shadow-xl text-lg placeholder-gray-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                  <div className="text-2xl animate-pulse">🔍</div>
                </div>
                {/* Search Button */}
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
                  Search
                </button>
              </div>
            </div>

            {/* Enhanced Expertise Filters */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">Filter by Expertise</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {expertiseAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedExpertise(area.id)}
                    className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedExpertise === area.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-2xl'
                        : 'bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 text-gray-700 hover:border-purple-300 hover:bg-white/90 shadow-lg'
                    }`}
                  >
                    {/* Background Glow for Active */}
                    {selectedExpertise === area.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-30 -z-10"></div>
                    )}
                    
                    <span className={`text-2xl transition-transform duration-300 ${selectedExpertise === area.id ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                      {area.icon}
                    </span>
                    <span className="text-sm md:text-base">{area.name}</span>
                    
                    {/* Active Indicator */}
                    {selectedExpertise === area.id && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-gray-200/50">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-xl font-medium hover:from-green-200 hover:to-emerald-200 transition-all duration-300">
                <span>✅</span>
                <span>Available Now</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl font-medium hover:from-blue-200 hover:to-cyan-200 transition-all duration-300">
                <span>⭐</span>
                <span>Top Rated</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-xl font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300">
                <span>💰</span>
                <span>Budget Friendly</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Mentor Section */}
      <AIBuddySection />

      {/* Upcoming Events */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Mentorship Events 📅</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Career Planning Workshop</h3>
            <p className="text-gray-600 text-sm mb-3">Dec 15, 2024 • 2:00 PM PST</p>
            <p className="text-gray-700 mb-4">Learn how to create a strategic career roadmap</p>
            <button className="w-full py-2 bg-gradient-primary text-white rounded-lg font-medium hover:opacity-90">
              Register Free
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold text-lg mb-2">Tech Interview Prep</h3>
            <p className="text-gray-600 text-sm mb-3">Dec 18, 2024 • 6:00 PM PST</p>
            <p className="text-gray-700 mb-4">Master coding interviews with industry experts</p>
            <button className="w-full py-2 bg-gradient-primary text-white rounded-lg font-medium hover:opacity-90">
              Register Free
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Startup Founder Panel</h3>
            <p className="text-gray-600 text-sm mb-3">Dec 20, 2024 • 4:00 PM PST</p>
            <p className="text-gray-700 mb-4">Insights from successful startup founders</p>
            <button className="w-full py-2 bg-gradient-primary text-white rounded-lg font-medium hover:opacity-90">
              Register Free
            </button>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredMentors.length} Mentors Available
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Sort by: Rating</option>
              <option>Sort by: Price</option>
              <option>Sort by: Experience</option>
              <option>Sort by: Availability</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Mentor Card - Always First */}
          <AIMentorCard />
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or expertise filters</p>
          </div>
        )}
      </section>

      {/* Become a Mentor CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-primary rounded-3xl p-8 text-white text-center">
          <div className="text-4xl mb-4">🌟</div>
          <h2 className="text-3xl font-bold mb-4">Become a Mentor</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Share your expertise and help the next generation of professionals grow their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Apply to Mentor
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorsPage;