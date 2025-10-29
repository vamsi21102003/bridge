'use client';

import React, { useState, useEffect } from 'react';

const AIResumeDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const steps = [
    {
      title: 'Upload Resume',
      description: 'AI scans your resume for structure and content',
      icon: '📄',
      status: 'completed'
    },
    {
      title: 'ATS Analysis',
      description: 'Checking compatibility with Applicant Tracking Systems',
      icon: '🔍',
      status: 'analyzing'
    },
    {
      title: 'Keyword Optimization',
      description: 'Enhancing keywords for better job matching',
      icon: '🎯',
      status: 'pending'
    },
    {
      title: 'Format Enhancement',
      description: 'Improving layout and visual appeal',
      icon: '✨',
      status: 'pending'
    }
  ];

  const improvements = [
    { category: 'ATS Score', before: '65%', after: '94%', color: 'text-green-600' },
    { category: 'Keywords', before: '12', after: '28', color: 'text-blue-600' },
    { category: 'Readability', before: 'Good', after: 'Excellent', color: 'text-purple-600' },
    { category: 'Impact Score', before: '7.2', after: '9.1', color: 'text-orange-600' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">AI Resume Optimizer Demo</h3>
        <p className="text-white/70 text-sm">Watch AI enhance a resume in real-time</p>
      </div>

      {/* Progress Steps */}
      <div className="space-y-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
              index <= currentStep 
                ? 'bg-white/20 text-white' 
                : 'bg-white/10 text-white/50'
            }`}>
              {index < currentStep ? '✅' : step.icon}
            </div>
            <div className="flex-1">
              <h4 className={`font-medium ${
                index <= currentStep ? 'text-white' : 'text-white/50'
              }`}>
                {step.title}
              </h4>
              <p className={`text-sm ${
                index <= currentStep ? 'text-white/70' : 'text-white/40'
              }`}>
                {step.description}
              </p>
            </div>
            {index === currentStep && index < steps.length - 1 && (
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Results */}
      {currentStep >= steps.length - 1 && (
        <div className="animate-fadeIn">
          <h4 className="text-white font-semibold mb-4 text-center">✨ Optimization Complete!</h4>
          <div className="grid grid-cols-2 gap-4">
            {improvements.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-xs text-white/70 mb-1">{item.category}</div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-white/60 text-sm">{item.before}</span>
                  <span className="text-white/60">→</span>
                  <span className={`font-semibold ${item.color}`}>{item.after}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
            Download Optimized Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default AIResumeDemo;