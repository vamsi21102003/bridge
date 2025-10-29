'use client';

import React from 'react';
import { useLanguage } from '@/context/student/LanguageContext';

const AISkillGapAnalyser: React.FC = () => {

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-sky-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-xl animate-float"></div>
      </div>

      {/* Main Container - Rectangular Box */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-xl animate-pulse"></div>
        
        {/* Main Rectangular Container */}
        <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* FREE Tag with Icon */}
          <div className="absolute -top-6 -right-6 z-30">
            <div className="relative">
              {/* Enhanced Pulsing Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full animate-pulse opacity-40"></div>
              {/* Main Badge with Better Visibility */}
              <div className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-3 rounded-full font-bold text-base shadow-2xl flex items-center space-x-2 animate-bounce-gentle border-2 border-white/30">
                <span className="text-xl animate-pulse">🎁</span>
                <span className="tracking-wide">FREE</span>
              </div>
              {/* Extra glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-30 blur-md animate-pulse"></div>
            </div>
          </div>

          {/* Floating AI Icons */}
          <div className="absolute top-4 left-8 text-2xl animate-bounce opacity-30">🤖</div>
          <div className="absolute bottom-4 right-8 text-2xl animate-bounce opacity-30" style={{ animationDelay: '1s' }}>🎯</div>
          <div className="absolute top-1/2 left-4 text-xl animate-bounce opacity-25" style={{ animationDelay: '2s' }}>⚡</div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Main Title with Gradient */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-slideUp">
                AI SKILL GAP ANALYSER
              </h2>
              
              {/* Description */}
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Discover your skill gaps with AI-powered analysis. Get personalized recommendations based on your interests, current skills, and career goals. Bridge the gap between where you are and where you want to be.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm font-medium text-slate-700">Personalized Analysis</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm font-medium text-slate-700">Career Roadmap</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
                  <span className="text-lg">💡</span>
                  <span className="text-sm font-medium text-slate-700">Smart Suggestions</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-sky-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Analyze My Skills</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">🔍</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>

            {/* Right Side - Visual Element */}
            <div className="flex-shrink-0 relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {/* Circular Progress Visualization */}
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-8 border-sky-200/30 rounded-full"></div>
                
                {/* Animated Progress Rings */}
                <div className="absolute inset-2 border-6 border-sky-400/50 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-4 border-4 border-blue-400/60 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-6 border-2 border-cyan-400/70 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-2 animate-bounce-gentle">🧠</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">AI</div>
                  <div className="text-sm text-slate-600 font-medium">Powered</div>
                </div>

                {/* Floating Skill Icons */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg animate-float">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg animate-float-delayed">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg animate-float">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg animate-float-delayed">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="grid grid-cols-3 gap-4 text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-sm text-slate-600 font-medium">Skills Analyzed</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-sm text-slate-600 font-medium">Accuracy Rate</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-slate-600 font-medium">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISkillGapAnalyser;