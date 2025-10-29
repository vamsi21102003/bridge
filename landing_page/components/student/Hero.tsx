'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/student/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 px-4">
            {t('hero.title')}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/opportunities"
            className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            {t('cta.get_started')} 🚀
          </Link>
          <Link
            href="/mentors"
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            {t('cta.explore')} 🌟
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              10K+
            </div>
            <div className="text-gray-600 font-medium flex items-center justify-center space-x-2">
              <span>{t('stats.opportunities')}</span>
              <span className="text-lg">💼</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              5K+
            </div>
            <div className="text-gray-600 font-medium flex items-center justify-center space-x-2">
              <span>{t('stats.mentors')}</span>
              <span className="text-lg">👨‍💻</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-medium flex items-center justify-center space-x-2">
              <span>{t('stats.students')}</span>
              <span className="text-lg">🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;