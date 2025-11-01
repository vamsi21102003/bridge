'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/dashboard/useTranslation';
import { useGlobal } from '@/context/dashboard/GlobalContext';
import { useAuth } from '@/context/dashboard/AuthContext';
import { ROUTES } from '@/constants';
import { Language } from '@/types/dashboard';
import { 
  Home, 
  Users, 
  BarChart3, 
  Bell, 
  LogOut, 
  ChevronDown,
  Building2,
  Crown,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';


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
    { href: ROUTES.DASHBOARD, label: t('dashboard'), icon: Home },
    { href: ROUTES.APPLICANTS, label: t('applicants'), icon: Users },
    { href: ROUTES.ANALYTICS, label: t('analytics'), icon: BarChart3 },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'od', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-slate-700 backdrop-blur-xl border-b border-slate-600/30 shadow-2xl relative overflow-hidden">
      {/* Enhanced Professional Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/8 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/4 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          {/* Enhanced Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href={ROUTES.DASHBOARD} className="flex items-center space-x-3 group">
              <div className="relative">
                <Building2 className="w-8 h-8 text-white" />
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  BriDGe
                </div>
                <div className="flex items-center space-x-1 -mt-1">
                  <Shield className="w-3 h-3 text-white/70" />
                  <span className="text-xs text-white/70 font-medium">Employer Platform</span>
                </div>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                      isActive(item.href)
                        ? 'bg-white/25 text-white shadow-lg backdrop-blur-sm transform scale-105'
                        : 'text-white/80 hover:text-white hover:bg-white/15 hover:scale-105'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-transform duration-300 ${
                      isActive(item.href) ? 'animate-pulse' : 'group-hover:scale-110'
                    }`} />
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Enhanced Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <span className="text-lg group-hover:animate-bounce">{languages.find(lang => lang.code === language)?.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : 'group-hover:rotate-12'}`} />
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-slide-in-right">
                  {languages.map((lang, index) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-purple-50 flex items-center space-x-3 transition-all duration-300 group ${
                        language === lang.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:translate-x-1'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Notification Bell */}
            <button className="relative p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group hover:scale-110">
              <Bell className="w-6 h-6 group-hover:animate-wiggle" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse shadow-lg">
                3
              </span>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping opacity-75"></div>
            </button>

            {/* Enhanced Profile Button */}
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {user?.companyName?.charAt(0) || 'E'}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="hidden md:block text-sm font-medium text-white relative">
                Profile
              </span>
            </button>

            {/* Enhanced Logout Button */}
            <button
              onClick={() => {
                // Clear auth token
                document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
                // Redirect to home page
                window.location.href = ROUTES.HOME
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm text-white/80 hover:text-white group hover:scale-105 border border-white/10 hover:border-red-400/30"
            >
              <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden md:block text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className="md:hidden border-t border-white/20 backdrop-blur-sm">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'bg-white/20 text-white transform scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-2'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className={`w-5 h-5 transition-transform duration-300 ${
                  isActive(item.href) ? 'animate-pulse' : 'group-hover:scale-110'
                }`} />
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <div className="ml-auto flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;