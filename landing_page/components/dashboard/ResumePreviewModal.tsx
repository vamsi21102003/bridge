'use client';

import React from 'react';
import { Applicant } from '@/types/dashboard';
import { getDemoResumeContent } from '@/utils/dashboard/resumeGenerator';

interface ResumePreviewModalProps {
  applicant: Applicant;
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ applicant, isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeData = getDemoResumeContent(applicant.name, applicant.skills, applicant.appliedPosition);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-60 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Resume Preview</h2>
                <p className="text-blue-100 text-lg">{applicant.name} - {applicant.appliedPosition}</p>
                <p className="text-blue-200 text-sm mt-1">Applied on {applicant.appliedAt}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Resume Content */}
        <div className="p-10 overflow-y-auto max-h-[calc(95vh-140px)] bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
            {/* Professional Header Section */}
            <div className="text-center mb-10 pb-8 border-b-2 border-gradient-to-r from-blue-500 to-purple-500">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {resumeData.name.charAt(0)}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3">{resumeData.name}</h1>
              <p className="text-2xl text-gray-600 mb-4">{resumeData.position}</p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{applicant.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Professional Summary
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl">
                Experienced {resumeData.position.toLowerCase()} with {Math.floor(Math.random() * 5) + 3}+ years of expertise in modern technologies. 
                Passionate about creating scalable solutions and driving innovation in fast-paced environments. 
                Strong problem-solving skills with a track record of delivering high-quality projects on time.
              </p>
            </div>

            {/* Enhanced Skills Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {resumeData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="font-medium text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Experience Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-2">{exp}</p>
                      <p className="text-gray-600 leading-relaxed">
                        Contributed to multiple high-impact projects, collaborated with cross-functional teams, 
                        and implemented best practices to improve code quality and system performance.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Education Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                Education
              </h2>
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{resumeData.education}</p>
                  <p className="text-gray-600">
                    Graduated with distinction, actively participated in technical clubs and hackathons, 
                    and completed relevant coursework in software engineering and system design.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project}</h3>
                    <p className="text-gray-600 text-sm">
                      Developed using modern technologies with focus on user experience, 
                      performance optimization, and scalable architecture.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                Achievements & Certifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">AWS Certified Solutions Architect</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">Winner - National Level Hackathon 2023</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">Open Source Contributor - 500+ commits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;