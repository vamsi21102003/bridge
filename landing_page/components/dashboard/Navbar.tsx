'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/dashboard/useTranslation';
import { useGlobal } from '@/context/dashboard/GlobalContext';
import { useAuth } from '@/context/dashboard/AuthContext';
import { ROUTES } from '@/constants';
import { Language } from '@/types/dashboard';

interface NavbarProps {
  onProfileClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProfileClick }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { language, setLanguage, theme, toggleTheme } = useGlobal();
  const { user } = useAuth();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const navItems = [
    { href: ROUTES.DASHBOARD, label: t('dashboard'), icon: '🏠' },
    { href: ROUTES.APPLICANTS, label: t('applicants'), icon: '👥' },
    { href: ROUTES.ANALYTICS, label: t('analytics'), icon: '📊' },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'od', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href={ROUTES.DASHBOARD} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">B</span>
              </div>
              <div className="text-2xl font-bold text-white">
                BriDGe
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-1 px-3 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <span>{languages.find(lang => lang.code === language)?.flag}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-purple-50 flex items-center space-x-3 transition-colors ${
                        language === lang.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.07 2.82l3.93 3.93-3.93 3.93-3.93-3.93 3.93-3.93z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>

            {/* Profile Button */}
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 text-sm font-bold">
                {user?.companyName?.charAt(0) || 'U'}
              </div>
              <span className="hidden md:block text-sm font-medium text-white">
                Profile
              </span>
            </button>

            {/* Logout Button */}
            <button
              onClick={() => {
                // Clear auth token
                document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
                // Redirect to home page
                window.location.href = ROUTES.HOME
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm text-white/80 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden md:block text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-white/20">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                isActive(item.href)
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;