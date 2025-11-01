'use client';

import React, { useState } from 'react';
import Header from '@/components/student/Header';
import ProfileSidebar from '@/components/student/ProfileSidebar';
import Link from 'next/link';

const ProfileViewPage: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock student data - in real app, this would come from API
  const studentData = {
    personal: {
      firstName: 'Arjun',
      lastName: 'Sharma',
      email: 'arjun.sharma@student.edu',
      phone: '+91 9876543210',
      profileImage: null,
      coverImage: null,
    },
    education: {
      current: {
        institution: 'Indian Institute of Technology Delhi',
        degree: "Bachelor's Degree",
        field: 'Computer Science & Engineering',
        year: '3rd Year',
        cgpa: '8.5 CGPA',
        graduation: '2025-05',
      },
      previous: {
        school: 'Delhi Public School',
        board: 'CBSE',
        percentage: '95%',
      },
      certifications: [
        'AWS Cloud Practitioner',
        'Google Cloud Associate',
        'MongoDB Developer',
      ],
    },
    skills: {
      programming: ['JavaScript', 'Python', 'Java', 'TypeScript', 'C++'],
      frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Django'],
      tools: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'],
      soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Work'],
    },
    experience: [
      {
        title: 'Software Development Intern',
        company: 'Google',
        duration: 'Jun 2024 - Aug 2024',
        location: 'Bangalore, India',
        description: 'Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      },
    ],
    projects: [
      {
        name: 'E-commerce Web Application',
        technologies: 'React, Node.js, MongoDB, Stripe',
        github: 'https://github.com/arjun/ecommerce-app',
        demo: 'https://ecommerce-demo.vercel.app',
        description: 'Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
      },
      {
        name: 'AI-Powered Chat Application',
        technologies: 'Python, FastAPI, OpenAI API, React',
        github: 'https://github.com/arjun/ai-chat',
        demo: 'https://ai-chat-demo.vercel.app',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
      },
    ],
    additional: {
      linkedin: 'https://linkedin.com/in/arjunsharma',
      github: 'https://github.com/arjunsharma',
      portfolio: 'https://arjunsharma.dev',
      preferences: {
        roles: ['Software Developer', 'Full Stack Developer', 'Backend Developer'],
        locations: ['Bangalore', 'Mumbai', 'Remote'],
        salary: '₹8-12 LPA',
        workType: 'Full-time',
      },
      bio: 'Passionate computer science student with strong foundation in full-stack development. Experienced in building scalable web applications and working with modern technologies. Seeking opportunities to contribute to innovative projects and grow as a software engineer.',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <Header onProfileClick={() => setIsProfileOpen(true)} />
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-20 right-6 z-30 flex space-x-3">
        <Link
          href="/profile"
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg font-medium"
        >
          <span className="text-lg">✏️</span>
          <span className="text-sm">Edit Profile</span>
        </Link>
        <button className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/30 text-slate-700 rounded-2xl hover:bg-white/90 hover:shadow-xl transition-all duration-300 shadow-lg font-medium">
          <span className="text-lg">📄</span>
          <span className="text-sm">Download Resume</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Profile Header */}
          <div className="relative mb-12">
            {/* Cover Image */}
            <div className="h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
              <div className="absolute top-12 right-12 w-12 h-12 bg-white/15 rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-8 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            </div>

            {/* Profile Info Overlay */}
            <div className="absolute -bottom-16 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Profile Picture */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-5xl text-white font-bold">
                        {studentData.personal.firstName[0]}{studentData.personal.lastName[0]}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                      {studentData.personal.firstName} {studentData.personal.lastName}
                    </h1>
                    <p className="text-slate-600 text-lg font-medium mb-4">{studentData.personal.email}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                        🎓 {studentData.education.current.field}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">
                        📍 {studentData.education.current.institution}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                        ⭐ {studentData.education.current.cgpa}
                      </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a href={studentData.additional.linkedin} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                        <span>💼</span>
                        <span>LinkedIn</span>
                      </a>
                      <a href={studentData.additional.github} className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors font-medium">
                        <span>💻</span>
                        <span>GitHub</span>
                      </a>
                      <a href={studentData.additional.portfolio} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors font-medium">
                        <span>🌐</span>
                        <span>Portfolio</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-20 space-y-8">
            
            {/* Professional Summary */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📝</span>
                </div>
                <span>Professional Summary</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                {studentData.additional.bio}
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <span>Skills & Expertise</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-xs">💻</span>
                    <span>Programming Languages</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.programming.map((skill, index) => (
                      <span key={index} className="px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-xs">⚡</span>
                    <span>Frameworks & Libraries</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.frameworks.map((skill, index) => (
                      <span key={index} className="px-3 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-xs">🛠️</span>
                    <span>Tools & Technologies</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.tools.map((skill, index) => (
                      <span key={index} className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-xs">🤝</span>
                    <span>Soft Skills</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.soft.map((skill, index) => (
                      <span key={index} className="px-3 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Experience */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <span>Experience</span>
                </h2>
                
                {studentData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-orange-200 to-transparent"></div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{exp.title}</h3>
                      <p className="text-orange-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-slate-600 text-sm mb-2">{exp.duration} • {exp.location}</p>
                      <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <span>Projects</span>
                </h2>
                
                <div className="space-y-6">
                  {studentData.projects.map((project, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{project.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">{project.technologies}</p>
                      <p className="text-slate-700 leading-relaxed mb-4">{project.description}</p>
                      
                      <div className="flex space-x-3">
                        <a href={project.github} className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium">
                          <span>💻</span>
                          <span>Code</span>
                        </a>
                        <a href={project.demo} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors text-sm font-medium">
                          <span>🌐</span>
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <span>Education & Certifications</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Education */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Current Education</h3>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-slate-800 mb-2">{studentData.education.current.degree}</h4>
                    <p className="text-emerald-600 font-semibold mb-1">{studentData.education.current.institution}</p>
                    <p className="text-slate-600 mb-2">{studentData.education.current.field}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span>{studentData.education.current.year}</span>
                      <span>•</span>
                      <span>{studentData.education.current.cgpa}</span>
                      <span>•</span>
                      <span>Graduating {studentData.education.current.graduation}</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {studentData.education.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📜</span>
                        </div>
                        <span className="font-medium text-slate-800">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Preferences */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <span>Career Preferences</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wide">Preferred Roles</h3>
                  <div className="space-y-2">
                    {studentData.additional.preferences.roles.map((role, index) => (
                      <span key={index} className="block px-3 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-sm font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wide">Locations</h3>
                  <div className="space-y-2">
                    {studentData.additional.preferences.locations.map((location, index) => (
                      <span key={index} className="block px-3 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-lg text-sm font-medium">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wide">Salary Range</h3>
                  <span className="block px-3 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg text-sm font-medium">
                    {studentData.additional.preferences.salary}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wide">Work Type</h3>
                  <span className="block px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-lg text-sm font-medium">
                    {studentData.additional.preferences.workType}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <span>Get In Touch</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-slate-300">{studentData.personal.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-slate-300">{studentData.personal.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="font-bold mb-2">Portfolio</h3>
                  <p className="text-slate-300">arjunsharma.dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPage;