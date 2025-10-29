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
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Resume Preview</h2>
              <p className="text-blue-100">{applicant.name} - {applicant.appliedPosition}</p>
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

        {/* Resume Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="max-w-3xl mx-auto bg-white">
            {/* Header Section */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.name}</h1>
              <p className="text-xl text-gray-600 mb-3">{resumeData.position}</p>
              <p className="text-gray-600">{applicant.email} | +91 98765 43210</p>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Experience</h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">{exp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education</h2>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700 font-medium">{resumeData.education}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;