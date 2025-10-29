'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/dashboard/AuthContext';
import { ROUTES } from '@/constants';

interface SidebarProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Profile</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">
                {user?.companyName?.charAt(0) || 'U'}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">{user?.companyName || 'Company Name'}</h3>
            <p className="text-gray-600 text-sm">{user?.email || 'user@company.com'}</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            <Link
              href="/dashboard/employer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              <span className="text-lg">🏠</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <span className="text-lg">⚙️</span>
              <span className="font-medium">Settings</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <span className="text-lg">💼</span>
              <span className="font-medium">Company Profile</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <span className="text-lg">📊</span>
              <span className="font-medium">Subscription</span>
            </button>
          </div>

          {/* Logout */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                // Clear auth token
                document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
                // Redirect to home page
                window.location.href = ROUTES.HOME
              }}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors text-red-600"
            >
              <span className="text-lg">🚪</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;