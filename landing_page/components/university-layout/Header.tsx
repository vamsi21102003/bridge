'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut } from 'lucide-react';
import { publicNavigation } from '@/constants/shared/navigation';
import { cn } from '@/lib/shared/helpers';
import { logout } from '@/lib/auth/logout';

interface HeaderProps {
  userRole?: 'guest' | 'student' | 'university_admin' | 'employer';
  currentPage: string;
}

export function Header({ userRole = 'guest', currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Show confirmation dialog
      const confirmLogout = window.confirm('Are you sure you want to logout?');
      
      if (confirmLogout) {
        console.log('Logout initiated...');
        
        // Method 1: Use utility function
        try {
          const result = logout();
          console.log('Logout utility result:', result);
        } catch (utilError) {
          console.warn('Logout utility failed:', utilError);
        }
        
        // Method 2: Direct cleanup (backup method)
        try {
          // Clear cookies directly
          document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = 'userType=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          
          // Clear localStorage
          localStorage.clear();
          sessionStorage.clear();
          
          console.log('Direct cleanup completed');
        } catch (directError) {
          console.warn('Direct cleanup failed:', directError);
        }
        
        // Always redirect regardless of cleanup success
        console.log('Redirecting to home page...');
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Complete logout failure:', error);
      // Emergency redirect
      window.location.href = '/';
    }
  };

  // Update navigation links to use university prefix, but handle Dashboard specially
  const universityNavigation = publicNavigation.map(item => ({
    ...item,
    href: item.name === 'Dashboard' ? '/university/dashboard' : `/university${item.href}`
  }));

  return (
    <header className="bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30 shadow-xl sticky top-0 z-50 border-b border-gradient-to-r from-blue-200 to-purple-200 backdrop-blur-sm university-website">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Only show on non-dashboard pages */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/university" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg glow-effect hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold gradient-text leading-tight hover:scale-105 transition-transform duration-300">Uni-BriDGe</h1>
                <p className="text-sm text-gray-600 leading-tight font-medium">✨ University Portal</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {universityNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 whitespace-nowrap hover:scale-105 interactive-hover',
                  currentPage === item.href.slice(11) && 'text-blue-600 bg-gradient-to-r from-blue-100 to-purple-100 shadow-md glow-effect'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-gray-50">
            <div className="space-y-1">
              {universityNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200 mx-2',
                    currentPage === item.href.slice(11) && 'text-primary-600 bg-white shadow-sm'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Logout Button */}
              <div className="pt-4 mt-4 border-t border-gray-200 mx-2">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-red-600 text-white rounded-lg font-medium transition-all duration-200 hover:bg-red-700"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}