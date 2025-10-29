'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import ProfileCompletionCard from '@/components/student/ProfileCompletionCard';
import Link from 'next/link';

const ProfilePage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'education' | 'skills' | 'experience' | 'additional'>('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '💡' },
    { id: 'experience', label: 'Experience & Projects', icon: '💼' },
    { id: 'additional', label: 'Additional Info', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-20 right-6 z-30 flex space-x-3">
        <Link
          href="/profile/view"
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg font-medium"
        >
          <span className="text-lg">👁️</span>
          <span className="text-sm">Preview</span>
        </Link>
        <Link
          href="/"
          className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/30 text-slate-700 rounded-2xl hover:bg-white/90 hover:shadow-xl transition-all duration-300 shadow-lg font-medium"
        >
          <span className="text-lg">←</span>
          <span className="text-sm">Back</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Profile Header */}
          <div className="flex items-center space-x-8 mb-12 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl text-white font-bold">A</span>
              </div>
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                Arjun Sharma
              </h1>
              <p className="text-slate-600 text-lg font-medium mb-2">arjun.sharma@student.edu</p>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                  🎓 Computer Science Student
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                  ✅ Profile 80% Complete
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 bg-white/60 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`group relative flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl'
                    : 'bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-white/90 hover:shadow-lg'
                }`}
              >
                {/* Background Glow for Active */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-30 -z-10"></div>
                )}
                
                <span className={`text-xl transition-transform duration-300 ${activeTab === tab.id ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-sm font-medium">{tab.label}</span>
                
                {/* Active Indicator */}
                {activeTab === tab.id && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Profile Completion Card */}
          <ProfileCompletionCard className="mb-8" />

          {/* Enhanced Tab Content */}
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
            <div className="relative z-10">
              {activeTab === 'personal' && <PersonalInfoTab />}
              {activeTab === 'education' && <EducationTab />}
              {activeTab === 'skills' && <SkillsTab />}
              {activeTab === 'experience' && <ExperienceTab />}
              {activeTab === 'additional' && <AdditionalInfoTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Personal Info Tab Component
const PersonalInfoTab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">👤</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Personal Information</h2>
      </div>

      {/* Profile & Cover Images */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>Profile & Cover Images</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Profile Picture</label>
            <div className="relative">
              <div className="w-36 h-36 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full border-3 border-dashed border-slate-300 flex items-center justify-center mx-auto shadow-inner hover:shadow-lg transition-all duration-300">
                <span className="text-slate-500 text-sm font-medium">Click to upload</span>
              </div>
              <button className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg font-medium">
                📷 Change
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Cover Image</label>
            <div className="relative">
              <div className="w-full h-36 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-3 border-dashed border-slate-300 flex items-center justify-center shadow-inner hover:shadow-lg transition-all duration-300">
                <span className="text-slate-500 text-sm font-medium">Click to upload cover</span>
              </div>
              <button className="absolute bottom-3 right-3 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg font-medium">
                📷 Upload Cover
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
          <input
            type="text"
            defaultValue="Arjun"
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
          <input
            type="text"
            defaultValue="Sharma"
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            defaultValue="arjun.sharma@student.edu"
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
          />
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="flex justify-center space-x-6 pt-8">
        <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden">
          <span className="relative z-10 flex items-center space-x-2">
            <span>💾</span>
            <span>Save Changes</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <Link href="/profile/view" className="group relative px-10 py-4 bg-white/80 backdrop-blur-xl border-2 border-slate-300 text-slate-700 rounded-2xl font-bold hover:bg-white/90 hover:border-slate-400 transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
          <span className="relative z-10 flex items-center space-x-2">
            <span>👁️</span>
            <span>Preview Profile</span>
          </span>
          <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
};

// Enhanced Education Tab Component
const EducationTab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🎓</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Education</h2>
      </div>

      {/* Current Education */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span>Current Education</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Institution Name *</label>
            <input
              type="text"
              placeholder="e.g., Indian Institute of Technology Delhi"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Degree *</label>
            <select className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium">
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
              <option>Diploma</option>
              <option>Certificate</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Field of Study *</label>
            <input
              type="text"
              placeholder="e.g., Computer Science & Engineering"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Current Year</label>
            <select className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium">
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>Final Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">CGPA/Percentage</label>
            <input
              type="text"
              placeholder="e.g., 8.5 CGPA or 85%"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Graduation</label>
            <input
              type="month"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
        </div>
      </div>

      {/* Previous Education */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>Previous Education</span>
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">12th Grade School</label>
              <input
                type="text"
                placeholder="School name"
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Board</label>
              <select className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium">
                <option>CBSE</option>
                <option>ICSE</option>
                <option>State Board</option>
                <option>IB</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Percentage/Grade</label>
              <input
                type="text"
                placeholder="e.g., 95%"
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span>Certifications & Courses</span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📜</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Certification name (e.g., AWS Cloud Practitioner)"
                className="w-full px-3 py-2 bg-transparent border-none text-slate-800 placeholder-slate-500 focus:outline-none font-medium"
              />
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg text-sm hover:from-red-600 hover:to-pink-700 transition-all duration-300">
              Remove
            </button>
          </div>
          <button className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 font-medium">
            + Add Certification
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Skills Tab Component
const SkillsTab: React.FC = () => {
  const skillCategories = [
    { name: 'Programming Languages', icon: '💻', color: 'from-blue-500 to-cyan-600' },
    { name: 'Frameworks & Libraries', icon: '⚡', color: 'from-emerald-500 to-teal-600' },
    { name: 'Tools & Technologies', icon: '🛠️', color: 'from-purple-500 to-pink-600' },
    { name: 'Soft Skills', icon: '🤝', color: 'from-orange-500 to-red-600' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">💡</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Skills & Expertise</h2>
      </div>

      {skillCategories.map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
            <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
              <span className="text-sm">{category.icon}</span>
            </div>
            <span>{category.name}</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Sample skills - in real app, these would be dynamic */}
            {['React', 'Node.js', 'Python', 'JavaScript'].map((skill, skillIndex) => (
              <div key={skillIndex} className="group relative">
                <div className="flex items-center justify-between p-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl hover:border-purple-400 transition-all duration-300">
                  <span className="font-medium text-slate-800">{skill}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <span key={star} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <button className="text-red-500 hover:text-red-700 text-sm opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 font-medium">
            + Add {category.name}
          </button>
        </div>
      ))}

      {/* Skill Assessment */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
          <span className="text-xl">🎯</span>
          <span>Skill Assessment</span>
        </h3>
        <p className="text-slate-600 mb-4">Take skill assessments to validate your expertise and stand out to employers.</p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
          Start Assessment
        </button>
      </div>
    </div>
  );
};

// Enhanced Experience Tab Component
const ExperienceTab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">💼</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Experience & Projects</h2>
      </div>

      {/* Work Experience */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <span>Work Experience</span>
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                <input
                  type="text"
                  placeholder="e.g., Software Development Intern"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="e.g., Google"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Duration</label>
                <div className="flex space-x-2">
                  <input
                    type="month"
                    className="flex-1 px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                  />
                  <span className="flex items-center text-slate-500">to</span>
                  <input
                    type="month"
                    className="flex-1 px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="e.g., Bangalore, India"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Describe your role, responsibilities, and achievements..."
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium resize-none"
              />
            </div>
          </div>
          <button className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-orange-400 hover:text-orange-600 transition-all duration-300 font-medium">
            + Add Work Experience
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>Projects</span>
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Name</label>
                <input
                  type="text"
                  placeholder="e.g., E-commerce Web Application"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Technologies Used</label>
                <input
                  type="text"
                  placeholder="e.g., React, Node.js, MongoDB"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/username/project"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Live Demo URL</label>
                <input
                  type="url"
                  placeholder="https://myproject.vercel.app"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Project Description</label>
              <textarea
                rows={4}
                placeholder="Describe your project, its features, and your role in development..."
                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium resize-none"
              />
            </div>
          </div>
          <button className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 font-medium">
            + Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Additional Info Tab Component
const AdditionalInfoTab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">📋</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Additional Information</h2>
      </div>

      {/* Contact Information */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          <span>Contact Information</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">LinkedIn Profile</label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/username"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">GitHub Profile</label>
            <input
              type="url"
              placeholder="https://github.com/username"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Portfolio Website</label>
            <input
              type="url"
              placeholder="https://myportfolio.com"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
        </div>
      </div>

      {/* Career Preferences */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span>Career Preferences</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Job Roles</label>
            <input
              type="text"
              placeholder="e.g., Software Developer, Data Scientist"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Locations</label>
            <input
              type="text"
              placeholder="e.g., Bangalore, Mumbai, Remote"
              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Salary Range</label>
            <select className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium">
              <option>₹3-5 LPA</option>
              <option>₹5-8 LPA</option>
              <option>₹8-12 LPA</option>
              <option>₹12-20 LPA</option>
              <option>₹20+ LPA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Type Preference</label>
            <select className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Freelance</option>
              <option>Remote</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bio/Summary */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span>Professional Summary</span>
        </h3>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Bio/Summary</label>
          <textarea
            rows={6}
            placeholder="Write a brief professional summary about yourself, your goals, and what makes you unique..."
            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md font-medium resize-none"
          />
          <div className="text-right text-sm text-slate-500 mt-2">0/500 characters</div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
          <span className="text-xl">🔒</span>
          <span>Privacy Settings</span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-medium">Make profile visible to recruiters</span>
            <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-medium">Allow profile in search results</span>
            <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-medium">Show contact information</span>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;