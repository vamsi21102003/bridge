'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/student/LanguageContext';
import { useStudentAuth } from '@/context/student/AuthContext';
import { LANGUAGES } from '@/constants/student';

interface HeaderProps {
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick }) => {
  const { language, setLanguage, t } = useLanguage();
  const { } = useStudentAuth();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-700 backdrop-blur-xl border-b border-slate-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/dashboard/student" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold text-white">
              STUBriDGe
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md xl:max-w-lg mx-6 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('nav.search')}
                className="w-full px-4 py-3 pl-11 pr-4 text-gray-700 bg-white/95 backdrop-blur-md border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-gray-500 text-lg">🔍</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/opportunities"
              className="flex items-center space-x-1.5 text-white/90 hover:text-white font-medium transition-colors text-sm xl:text-base"
            >
              <span className="text-base xl:text-lg">💼</span>
              <span>{t('nav.opportunities')}</span>
            </Link>
            <Link
              href="/mentors"
              className="flex items-center space-x-1.5 text-white/90 hover:text-white font-medium transition-colors text-sm xl:text-base"
            >
              <span className="text-base xl:text-lg">👨‍🏫</span>
              <span>{t('nav.mentors')}</span>
            </Link>
            <Link
              href="/games"
              className="flex items-center space-x-1.5 text-white/90 hover:text-white font-medium transition-colors text-sm xl:text-base"
            >
              <span className="text-base xl:text-lg">🎮</span>
              <span>{t('nav.games')}</span>
            </Link>
            <Link
              href="/badges"
              className="flex items-center space-x-1.5 text-white/90 hover:text-white font-medium transition-colors text-sm xl:text-base"
            >
              <span className="text-base xl:text-lg">🏆</span>
              <span>{t('nav.badges')}</span>
            </Link>

            <Link
              href="/ai-pro"
              className="flex items-center space-x-1.5 px-3 xl:px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/30 transition-all relative border border-white/30 text-sm xl:text-base"
            >
              <span className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-pulse">👑</span>
              <span className="text-base xl:text-lg">🤖</span>
              <span>{t('nav.ai_pro')}</span>
              <span>✨</span>
            </Link>
          </nav>

          {/* Language Selector & Profile */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span className="text-base">{LANGUAGES[language].flag}</span>
                <span className="hidden sm:block font-medium text-white text-sm">{LANGUAGES[language].name}</span>
                <span className="text-white/70 text-xs">▼</span>
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl z-50 overflow-hidden">
                  {Object.entries(LANGUAGES).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as any);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50/80 transition-colors duration-200 ${language === code ? 'bg-blue-100/80 text-blue-700' : 'text-gray-700'
                        }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === code && <span className="ml-auto text-blue-600">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Button */}
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-1.5 px-3 xl:px-4 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all border border-white/30"
            >
              <span className="text-base">👤</span>
              <span className="hidden sm:block font-medium text-sm">{t('nav.profile')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;