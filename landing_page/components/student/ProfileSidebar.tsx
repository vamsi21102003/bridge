'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from '@/types/student';
import { useStudentAuth } from '@/context/student/AuthContext';

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ isOpen, onClose, user }) => {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const router = useRouter();
  const { user: authUser, logout } = useStudentAuth();

  const handleLogout = () => {
    // Use the authentication context logout
    logout();
    
    // Close sidebar
    onClose();
  };

  const mockUser: User = {
    id: '1',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@student.edu',
    level: 12,
    xp: 2450,
    badges: [],
    skills: ['React', 'Python', 'UI/UX', 'Node.js', 'TypeScript'],
  };

  const currentUser = user || authUser || mockUser;
  const profileCompletion = 80;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* User Profile Card */}
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {currentUser.name.charAt(0)}
                  </div>
                  {/* Profile completion ring */}
                  <svg className="absolute -inset-1 w-18 h-18" viewBox="0 0 72 72">
                    <circle
                      cx="36"
                      cy="36"
                      r="32"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <circle
                      cx="36"
                      cy="36"
                      r="32"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray={`${profileCompletion * 2.01} 201`}
                      strokeLinecap="round"
                      transform="rotate(-90 36 36)"
                    />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                    {profileCompletion}%
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">{currentUser.name}</h3>
                  <p className="text-gray-500 text-sm">{currentUser.email}</p>
                  <Link href="/profile" className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors mt-1 inline-block">
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Completion Alert */}
            <div className="bg-orange-50 rounded-lg p-3 mb-4">
              <h4 className="font-medium text-gray-800 text-sm mb-1">You're missing out</h4>
              <p className="text-gray-600 text-sm mb-2">
                on opportunities to create an impact!
              </p>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                Complete my profile →
              </button>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="px-4 pb-4">
            {/* For Users Section */}
            <div className="mb-6">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3 px-2">
                For Users
              </h3>
              <div className="space-y-1">
                {[
                  { icon: '👥', label: 'Registrations/Applications', id: 'applications' },
                  { icon: '💼', label: 'My Jobs & Internships', id: 'jobs' },
                  { icon: '📋', label: 'My Opportunities', id: 'opportunities' },
                  { icon: '👥', label: 'Referrals', id: 'referrals' },
                  { icon: '👥', label: 'My Rounds', id: 'rounds' },
                  { icon: '🏆', label: 'BriDGe Awards Nominations', id: 'awards' },
                  { icon: '❤️', label: 'Watchlist', id: 'watchlist' },
                  { icon: '🔖', label: 'Bookmarked Questions', id: 'bookmarks' },
                  { icon: '🕒', label: 'Recently Viewed', id: 'recent' },
                  { icon: '😊', label: 'Mentor Sessions', id: 'mentors' },
                  { icon: '📚', label: 'Courses', id: 'courses' },
                  { icon: '🎓', label: 'Certificates', id: 'certificates' },
                  { icon: '⚙️', label: 'Settings', id: 'settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-base text-gray-600">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* BriDGe Pro Subscription */}
            <div className="mb-6">
              <button
                onClick={() => setActiveSection('bridge-pro')}
                className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                  activeSection === 'bridge-pro'
                    ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-base">👑</span>
                <span className="text-sm font-medium">BriDGe Pro Subscription</span>
                <span className="ml-auto px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full font-medium">
                  PRO
                </span>
              </button>
            </div>

            {/* For Organizers Section */}
            <div className="mb-6 border-t border-gray-200 pt-4">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3 px-2">
                For Organizers
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-colors ${
                    activeSection === 'dashboard'
                      ? 'bg-green-50 text-green-700 border-l-4 border-green-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base text-gray-600">📊</span>
                  <span className="text-sm font-medium">Organizer Dashboard</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{currentUser.level}</div>
                  <div className="text-xs text-gray-600">Level</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{currentUser.xp}</div>
                  <div className="text-xs text-gray-600">XP</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">156</div>
                  <div className="text-xs text-gray-600">Rank</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {currentUser.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-primary text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Recent Activity</h4>
              <div className="space-y-2">
                {[
                  { action: 'Completed', item: 'React Course', time: '2h ago', icon: '✅' },
                  { action: 'Applied to', item: 'Google Internship', time: '1d ago', icon: '📝' },
                  { action: 'Earned', item: 'Code Warrior Badge', time: '3d ago', icon: '🏆' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-800">
                        {activity.action} <span className="font-medium text-blue-600">{activity.item}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <div className="border-t border-gray-200 pt-4">
              <button 
                onClick={handleLogout}
                className="w-full py-3 text-center text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;