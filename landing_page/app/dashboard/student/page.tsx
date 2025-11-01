'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import Hero from '@/components/student/Hero';

import AISkillGapAnalyser from '@/components/student/AISkillGapAnalyser';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import OpportunityCard from '@/components/student/OpportunityCard';
import MentorCard from '@/components/student/MentorCard';
import GameCard from '@/components/student/GameCard';
import FeedbackShowcase from '@/components/student/FeedbackShowcase';
import { useLanguage } from '@/context/student/LanguageContext';
import { Opportunity, Mentor, Game } from '@/types/student';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeJobTab, setActiveJobTab] = useState<'available' | 'recommended'>('available');


  // Mock data
  const mockOpportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Google',
      type: 'job',
      location: 'Bangalore, India',
      skills: ['React', 'TypeScript', 'Node.js'],
      description: 'Join our team to build next-generation web applications with cutting-edge technologies.',
      salary: '₹12L - ₹20L',
      deadline: '2024-12-15',
    },
    {
      id: '2',
      title: 'ML Engineering Intern',
      company: 'Microsoft',
      type: 'internship',
      location: 'Hyderabad, India',
      skills: ['Python', 'TensorFlow', 'Machine Learning'],
      description: 'Work on exciting AI projects and learn from industry experts.',
      deadline: '2024-11-30',
    },
    {
      id: '3',
      title: 'Global Hackathon 2024',
      company: 'TechCorp',
      type: 'hackathon',
      location: 'Virtual',
      skills: ['JavaScript', 'API Integration', 'UI/UX'],
      description: 'Build innovative solutions for real-world problems in 48 hours.',
      deadline: '2024-12-01',
    },
  ];

  const mockMentors: Mentor[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      title: 'Senior Software Engineer',
      company: 'Meta',
      expertise: ['React', 'System Design', 'Career Growth'],
      rating: 5,
      reviews: 127,
      price: 1200,
      availability: true,
      description: 'Experienced React developer with 8+ years at Meta. Specializes in scalable frontend architecture and helping junior developers transition to senior roles.',
    },
    {
      id: '2',
      name: 'Arjun Kumar',
      title: 'ML Research Scientist',
      company: 'OpenAI',
      expertise: ['Machine Learning', 'Python', 'Research'],
      rating: 5,
      reviews: 89,
      price: 2000,
      availability: true,
      description: 'AI researcher working on cutting-edge machine learning models. PhD in Computer Science with expertise in deep learning and NLP.',
    },
    {
      id: '3',
      name: 'Sarah Chen',
      title: 'Product Manager',
      company: 'Google',
      expertise: ['Product Strategy', 'Data Analysis', 'Leadership'],
      rating: 4,
      reviews: 156,
      price: 1500,
      availability: false,
      description: 'Senior PM at Google with 6+ years experience launching consumer products used by millions. Expert in product strategy and user research.',
    },
    {
      id: '4',
      name: 'Rahul Patel',
      title: 'DevOps Engineer',
      company: 'Amazon',
      expertise: ['AWS', 'Docker', 'Kubernetes'],
      rating: 5,
      reviews: 203,
      price: 800,
      availability: true,
      description: 'Cloud infrastructure expert with 7+ years at Amazon. Specializes in AWS, containerization, and CI/CD pipelines.',
    },
    {
      id: '5',
      name: 'Emily Johnson',
      title: 'UX Designer',
      company: 'Airbnb',
      expertise: ['UI/UX Design', 'Figma', 'User Research'],
      rating: 4,
      reviews: 94,
      price: 600,
      availability: true,
      description: 'Creative UX designer with 5+ years at Airbnb. Expert in user-centered design, prototyping, and design systems.',
    },
    {
      id: '6',
      name: 'Vikram Singh',
      title: 'Full Stack Developer',
      company: 'Netflix',
      expertise: ['Node.js', 'React', 'MongoDB'],
      rating: 5,
      reviews: 178,
      price: 1000,
      availability: false,
      description: 'Full-stack engineer at Netflix with expertise in modern web technologies. 6+ years building scalable applications.',
    },
  ];  
const mockGames: Game[] = [
    {
      id: '1',
      name: 'LogicLoop',
      description: 'Master coding challenges and algorithmic thinking',
      category: 'Coding',
      difficulty: 'medium',
      xpReward: 100,
      players: 15420,
      icon: '🧠',
    },
    {
      id: '2',
      name: 'CareerXP',
      description: 'Simulate real-world career scenarios and decisions',
      category: 'Simulation',
      difficulty: 'easy',
      xpReward: 75,
      players: 8930,
      icon: '🚀',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Beautiful Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Floating Bubbles with Student Theme */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl">📚</div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-30 animate-float-delayed flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🎓</div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-25 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">🚀</div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20 animate-float-delayed flex items-center justify-center text-2xl backdrop-blur-sm shadow-xl">💡</div>
        <div className="absolute bottom-20 right-10 w-22 h-22 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl opacity-30 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">⭐</div>
        
        {/* Student-themed Secondary Bubbles */}
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-25 animate-bounce flex items-center justify-center text-xl backdrop-blur-sm">🎯</div>
        <div className="absolute top-80 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl opacity-20 animate-pulse flex items-center justify-center text-lg backdrop-blur-sm">🏆</div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl opacity-30 animate-spin flex items-center justify-center text-xl backdrop-blur-sm" style={{ animationDuration: '4s' }}>🌟</div>
        <div className="absolute top-1/4 left-3/4 w-15 h-15 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-25 animate-float flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">💻</div>
        <div className="absolute bottom-60 right-1/3 w-13 h-13 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20 animate-bounce flex items-center justify-center text-lg backdrop-blur-sm">🎨</div>
        
        {/* Floating Particle Effects */}
        <div className="absolute top-10 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Large Gradient Orbs for Depth */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/12 to-pink-400/12 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/8 to-red-400/8 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Student Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="studentNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <line x1="150" y1="100" x2="350" y2="80" stroke="url(#studentNetworkGradient)" strokeWidth="1.5"/>
            <line x1="350" y1="80" x2="550" y2="150" stroke="url(#studentNetworkGradient)" strokeWidth="1.5"/>
            <line x1="550" y1="150" x2="750" y2="120" stroke="url(#studentNetworkGradient)" strokeWidth="1.5"/>
            <line x1="250" y1="300" x2="450" y2="350" stroke="url(#studentNetworkGradient)" strokeWidth="1.5"/>
            <line x1="450" y1="350" x2="650" y2="300" stroke="url(#studentNetworkGradient)" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>

      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      
      <Hero />
      
      {/* Enhanced Featured Updates Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glass Section Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
        
        {/* Beautiful Featured Updates Floating Bubbles */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl opacity-20 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl">✨</div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-25 animate-float-delayed flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🚀</div>
        <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-bounce flex items-center justify-center text-lg backdrop-blur-sm">💡</div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30 animate-fadeIn">
              <div className="relative">
                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse block"></span>
                <span className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
              </div>
              <span className="text-blue-700 font-semibold text-sm tracking-wide">{t('status.whats_new')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slideUp">
              {t('section.featured_updates')} 🌟
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t('section.featured_updates_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                  <span className="text-3xl animate-bounce-gentle">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">New AI Features</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Enhanced AI recommendations now available for personalized career guidance and smart job matching.
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <span>Learn More</span>
                  <span className="ml-2 text-lg">→</span>
                </div>
              </div>
            </div>

            <div className="group relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                  <span className="text-3xl animate-bounce-gentle">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-orange-600 transition-colors duration-300">Monthly Challenge</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Join the December coding challenge and win exclusive badges, prizes, and recognition.
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <span>Join Now</span>
                  <span className="ml-2 text-lg">→</span>
                </div>
              </div>
            </div>

            <div className="group relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                  <span className="text-3xl animate-bounce-gentle">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">New Partnerships</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We've partnered with 50+ new companies to bring you more opportunities and career paths.
                </p>
                <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <span>Explore</span>
                  <span className="ml-2 text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      {/* Enhanced Jobs Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glass Section Background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"></div>
        
        {/* Beautiful Floating Career Bubbles */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl opacity-20 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl">💼</div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-25 animate-float-delayed flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🚀</div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 animate-bounce flex items-center justify-center text-lg backdrop-blur-sm">💰</div>
        <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl opacity-25 animate-float flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🎯</div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30">
                <div className="relative">
                  <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse block"></span>
                  <span className="absolute inset-0 w-3 h-3 bg-orange-400 rounded-full animate-ping"></span>
                </div>
                <span className="text-orange-700 font-semibold text-sm tracking-wide">Career Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
{t('section.jobs_internships')} 💼
              </h2>
              <p className="text-slate-600 text-xl max-w-2xl leading-relaxed">
                Discover amazing career opportunities from top companies worldwide and kickstart your dream career
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => setActiveJobTab('available')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeJobTab === 'available'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl transform scale-105'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/30'
                }`}
              >
{t('btn.available')}
              </button>
              <button
                onClick={() => setActiveJobTab('recommended')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeJobTab === 'recommended'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl transform scale-105'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/30'
                }`}
              >
                {t('btn.recommended')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockOpportunities.map((opportunity, index) => (
              <div key={opportunity.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <OpportunityCard opportunity={opportunity} />
              </div>
            ))}
          </div>
        </div>
      </section> 
      {/* Enhanced Mentors Section with Glass Effects */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Glass Section Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
        
        {/* Visible Floating Elements - Mentor Theme */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-60 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl z-10">👨‍💻</div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-70 animate-float-delayed flex items-center justify-center text-xl backdrop-blur-sm shadow-xl z-10">👩‍💼</div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-65 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl z-10">🎯</div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-60 animate-float-delayed flex items-center justify-center text-2xl backdrop-blur-sm shadow-xl z-10">💡</div>
        <div className="absolute bottom-20 right-10 w-22 h-22 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl opacity-70 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl z-10">🌟</div>
        
        {/* Secondary Mentor Elements */}
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-65 animate-bounce flex items-center justify-center text-xl backdrop-blur-sm z-10">📚</div>
        <div className="absolute top-80 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl opacity-60 animate-pulse flex items-center justify-center text-lg backdrop-blur-sm z-10">🚀</div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl opacity-70 animate-spin flex items-center justify-center text-xl backdrop-blur-sm z-10" style={{ animationDuration: '4s' }}>💼</div>
        
        {/* Bright Particle Effects */}
        <div className="absolute top-10 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-80 z-10"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-70 z-10" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-80 z-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/2 w-3 h-3 bg-pink-500 rounded-full animate-ping opacity-70 z-10" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30 animate-fadeIn">
              <div className="relative">
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse block"></span>
                <span className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></span>
              </div>
              <span className="text-purple-700 font-semibold text-sm tracking-wide">Expert Guidance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-slideUp">
              Connect with Mentors 👨‍💻
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Get personalized guidance from industry experts and accelerate your career growth with 1-on-1 mentorship sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockMentors.map((mentor, index) => (
              <div key={mentor.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                <MentorCard mentor={mentor} />
              </div>
            ))}
            
            {/* Ultra Cute Circular AI Mentor with Enhanced Animations */}
            <div className="group relative animate-fadeIn" style={{ animationDelay: '0.9s' }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Multiple Rotating Rings */}
                <div className="absolute inset-4 border-2 border-blue-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-6 border-2 border-purple-400/20 rounded-full animate-spin opacity-25" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '10s' }}></div>
                
                {/* Pulsing Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Content with Enhanced Animations */}
                <div className="flex flex-col items-center justify-center text-center p-6 relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:rotate-12 transition-all duration-300 shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                      <span className="text-3xl relative z-10 animate-bounce filter drop-shadow-lg" style={{ animationDuration: '2s' }}>🤖</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">AI Mentor</h3>
                    <p className="text-gray-600 text-sm">Smart Assistant</p>
                    <p className="text-xs text-gray-500">Bridge AI</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-3 w-full">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 font-medium">
                      5.0 (∞ reviews)
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      Always available AI mentor with expertise in all technologies. Get instant guidance, code reviews, and career advice 24/7.
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6 w-full">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium">
                        All Tech
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium">
                        24/7 Support
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium">
                        Instant Help
                      </span>
                    </div>
                  </div>

                  {/* Availability & Price */}
                  <div className="flex items-center justify-between mb-6 bg-gray-50 rounded-xl p-3 w-full">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">
                        Always Available
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        FREE
                      </div>
                      <div className="text-xs text-gray-500">per session</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 w-full">
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
                      Try Now ✨
                    </button>
                    <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      🤖
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Games Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glass Section Background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"></div>
        
        {/* Beautiful Gaming Floating Bubbles */}
        <div className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl opacity-20 animate-float flex items-center justify-center text-4xl backdrop-blur-sm shadow-2xl">🎮</div>
        <div className="absolute bottom-12 left-12 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-25 animate-float-delayed flex items-center justify-center text-3xl backdrop-blur-sm shadow-xl">🏆</div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-20 animate-bounce flex items-center justify-center text-2xl backdrop-blur-sm">⚡</div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-25 animate-float flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🎯</div>
        <div className="absolute top-1/4 left-1/3 w-18 h-18 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-20 animate-float-delayed flex items-center justify-center text-lg backdrop-blur-sm">🌟</div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30 animate-fadeIn">
              <div className="relative">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse block"></span>
                <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              </div>
              <span className="text-green-700 font-semibold text-sm tracking-wide">Gamified Learning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 animate-slideUp">
              Skill Games 🎮
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Level up your skills through interactive games, challenges, and compete with developers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockGames.map((game, index) => (
              <div key={game.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <GameCard game={game} />
              </div>
            ))}
            
            {/* Enhanced Leaderboard Card */}
            <div className="group relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center hover:-translate-y-2 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-2xl">
                  <span className="text-4xl animate-bounce-gentle">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-orange-600 transition-colors duration-300">Leaderboard</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  See how you rank against other players and climb to the top of the global leaderboard
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-2xl font-bold hover:from-yellow-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  View Rankings 👑
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Skill Gap Analyser Section */}
      <AISkillGapAnalyser />

      {/* Enhanced Learning Resources Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glass Section Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
        
        {/* Learning Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400/15 to-rose-400/15 rounded-full animate-float-delayed blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30">
                <div className="relative">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse block"></span>
                  <span className="absolute inset-0 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></span>
                </div>
                <span className="text-indigo-700 font-semibold text-sm tracking-wide">Knowledge Hub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Learning Resources 📚
              </h2>
              <p className="text-slate-600 text-xl max-w-2xl leading-relaxed">
                Curated courses and tutorials to boost your skills and accelerate your learning journey
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold shadow-lg transform scale-105">
                📺 YouTube
              </button>
              <button className="px-6 py-3 text-slate-600 hover:text-slate-800 hover:bg-white/30 rounded-xl font-bold transition-all duration-300">
                🎓 Coursera
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeIn">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                <span className="text-5xl text-white animate-bounce-gentle relative z-10">📱</span>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">React Masterclass</h3>
                <p className="text-sm text-slate-600 mb-4">by Tech With Tim</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 animate-pulse">⭐</span>
                    <span className="text-sm text-slate-600 font-medium">4.8 (2.1k)</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                <span className="text-5xl text-white animate-bounce-gentle relative z-10">🐍</span>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors duration-300">Python for Beginners</h3>
                <p className="text-sm text-slate-600 mb-4">by Code Academy</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 animate-pulse">⭐</span>
                    <span className="text-sm text-slate-600 font-medium">4.9 (1.8k)</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl text-sm font-bold hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                <span className="text-5xl text-white animate-bounce-gentle relative z-10">🚀</span>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">Full Stack Development</h3>
                <p className="text-sm text-slate-600 mb-4">by FreeCodeCamp</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 animate-pulse">⭐</span>
                    <span className="text-sm text-slate-600 font-medium">4.7 (3.2k)</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl text-sm font-bold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-center overflow-hidden shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-xl animate-float"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-16 right-16 text-4xl animate-bounce opacity-30">🚀</div>
            <div className="absolute bottom-16 left-16 text-4xl animate-bounce opacity-30" style={{ animationDelay: '1s' }}>⭐</div>
            <div className="absolute top-1/3 right-1/3 text-3xl animate-bounce opacity-25" style={{ animationDelay: '2s' }}>💫</div>
          </div>
          
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 animate-fadeIn">
              <div className="relative">
                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse block"></span>
                <span className="absolute inset-0 w-3 h-3 bg-cyan-300 rounded-full animate-ping"></span>
              </div>
              <span className="text-cyan-200 font-semibold text-sm tracking-wide">Join the Revolution</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 animate-slideUp">
              Ready to Bridge Your Future? 🚀
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Join thousands of students who are already building their careers with Bridge. 
              <span className="block mt-2 text-lg text-cyan-200">Start your journey today and unlock endless opportunities in tech.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-3xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Get Started Free</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">🚀</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-12 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-3xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                <span className="flex items-center space-x-3">
                  <span>Watch Demo</span>
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">▶️</span>
                </span>
              </button>
            </div>
            
            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-blue-200 font-medium">Students Empowered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-purple-200 font-medium">Opportunities Created</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-emerald-200 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Feedback Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FeedbackShowcase />
      </section>
    </div>
  );
};

export default HomePage;