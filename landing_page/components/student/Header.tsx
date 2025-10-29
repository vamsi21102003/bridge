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
  const { user, isAuthenticated } = useStudentAuth();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              BriDGe
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('nav.search')}
                className="w-full px-4 py-2.5 pl-10 pr-4 text-gray-700 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/70 focus:bg-white/80"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-400 text-lg">🔍</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/opportunities"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <span className="text-lg">💼</span>
              <span>{t('nav.opportunities')}</span>
            </Link>
            <Link
              href="/mentors"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <span className="text-lg">👨‍🏫</span>
              <span>{t('nav.mentors')}</span>
            </Link>
            <Link
              href="/games"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <span className="text-lg">🎮</span>
              <span>{t('nav.games')}</span>
            </Link>
            <Link
              href="/badges"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <span className="text-lg">🏆</span>
              <span>{t('nav.badges')}</span>
            </Link>
            <Link
              href="/ai-pro"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity relative"
            >
              <span className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-pulse">👑</span>
              <span>🤖</span>
              <span>{t('nav.ai_pro')}</span>
              <span>✨</span>
            </Link>
          </nav>

          {/* Language Selector & Profile */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full hover:bg-white/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-lg">{LANGUAGES[language].flag}</span>
                <span className="hidden sm:block font-medium text-gray-700">{LANGUAGES[language].name}</span>
                <span className="text-gray-400 text-sm">▼</span>
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
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50/80 transition-colors duration-200 ${
                        language === code ? 'bg-blue-100/80 text-blue-700' : 'text-gray-700'
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
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              <span>👤</span>
              <span className="hidden sm:block font-medium">{t('nav.profile')}</span>
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