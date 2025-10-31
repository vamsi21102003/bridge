'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/student/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '3s' }}></div>
        
        {/* Magical Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="heroMagicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <line x1="100" y1="200" x2="300" y2="150" stroke="url(#heroMagicGradient)" strokeWidth="2"/>
            <line x1="300" y1="150" x2="500" y2="250" stroke="url(#heroMagicGradient)" strokeWidth="2"/>
            <line x1="500" y1="250" x2="700" y2="200" stroke="url(#heroMagicGradient)" strokeWidth="2"/>
            <line x1="200" y1="500" x2="400" y2="550" stroke="url(#heroMagicGradient)" strokeWidth="2"/>
            <line x1="400" y1="550" x2="600" y2="500" stroke="url(#heroMagicGradient)" strokeWidth="2"/>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Welcome Badge at Top */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse block"></span>
              <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            </div>
            <span className="text-green-700 font-semibold text-sm tracking-wide">🌟 Welcome to StuBridge</span>
          </div>
        </div>

        {/* Bigger Tagline */}
        <div className={`mb-8 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-blue-600">
            BRIDGE THE GAP, BUILD THE FUTURE
          </h1>
        </div>

        {/* Subtitle Right Under Tagline */}
        <div className="mb-12">
          <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
            Connect with opportunities, mentors, and skill-building resources to accelerate your career journey
          </p>
        </div>

        {/* Smaller Statistics Cards */}
        <div className={`mb-16 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'}`} style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Opportunities Card - Smaller */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-black text-green-600 mb-3 animate-number-count">
                  10K+
                </div>
                <div className="text-gray-700 font-bold text-base flex items-center justify-center space-x-2">
                  <span>Opportunities</span>
                  <span className="text-lg group-hover:animate-bounce">💼</span>
                </div>
                {/* Floating particles */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Mentors Card - Smaller */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-3 animate-number-count" style={{ animationDelay: '0.2s' }}>
                  5K+
                </div>
                <div className="text-gray-700 font-bold text-base flex items-center justify-center space-x-2">
                  <span>Mentors</span>
                  <span className="text-lg group-hover:animate-bounce">👨‍💻</span>
                </div>
                {/* Floating particles */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-3 right-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Students Card - Smaller */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-black text-purple-600 mb-3 animate-number-count" style={{ animationDelay: '0.4s' }}>
                  50K+
                </div>
                <div className="text-gray-700 font-bold text-base flex items-center justify-center space-x-2">
                  <span>Students</span>
                  <span className="text-lg group-hover:animate-spin" style={{ animationDuration: '2s' }}>🎓</span>
                </div>
                {/* Floating particles */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.8s' }}>
          <Link
            href="/opportunities"
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <span className="text-xl group-hover:animate-bounce">🚀</span>
            </span>
          </Link>
          <Link
            href="/mentors"
            className="group relative px-10 py-5 bg-white/80 backdrop-blur-xl border-2 border-white/50 text-gray-700 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-1 hover:bg-white/90"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore Now</span>
              <span className="text-xl group-hover:animate-spin">🌟</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;