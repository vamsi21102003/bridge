'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/dashboard/AuthContext';
import { ROUTES } from '@/constants';
import SubscriptionPage from './SubscriptionPage';
import ProfilePage from './ProfilePage';
import { 
  X, 
  User, 
  Edit3, 
  Eye, 
  Settings, 
  Building2, 
  Crown, 
  Star, 
  Briefcase, 
  Users, 
  BarChart3, 
  FileText, 
  Bell, 
  Shield, 
  CreditCard, 
  LogOut, 
  Home, 
  Zap, 
  Target, 
  Globe, 
  Award, 
  Heart, 
  Sparkles,
  Check,
  ArrowRight,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  TrendingUp,
  Database,
  Bookmark,
  Share2,
  Download,
  Upload,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Layers,
  PieChart,
  Activity,
  Headphones,
  HelpCircle,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Wifi,
  Lock,
  UserCheck,
  UserPlus,
  Trash2,
  Copy,
  RefreshCw,
  Archive,
  Tag,
  Flag,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  MoreVertical
} from 'lucide-react';

interface SidebarProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [profileMode, setProfileMode] = useState<'view' | 'edit'>('view');
  const [activeSection, setActiveSection] = useState<string | null>('Dashboard');

  // Enhanced navigation items for comprehensive job posting platform
  const navigationSections = [
    {
      title: 'Dashboard',
      items: [
        { icon: Home, label: 'Overview', href: '/dashboard/employer', color: 'text-blue-600', description: 'Main dashboard overview' },
        { icon: BarChart3, label: 'Analytics', href: '/dashboard/employer/analytics', color: 'text-green-600', description: 'Performance metrics' },
        { icon: Bell, label: 'Notifications', href: '/dashboard/employer/notifications', color: 'text-red-600', description: 'Recent updates' }
      ]
    },
    {
      title: 'Job Management',
      items: [
        { icon: Briefcase, label: 'Job Posts', href: '/dashboard/employer/jobs', color: 'text-purple-600', description: 'Manage job listings' },
        { icon: Plus, label: 'Create Job', href: '/dashboard/employer/jobs/create', color: 'text-emerald-600', description: 'Post new job' },
        { icon: FileText, label: 'Templates', href: '/dashboard/employer/templates', color: 'text-indigo-600', description: 'Job templates' },
        { icon: Archive, label: 'Archived Jobs', href: '/dashboard/employer/jobs/archived', color: 'text-gray-600', description: 'Closed positions' }
      ]
    },
    {
      title: 'Candidate Management',
      items: [
        { icon: Users, label: 'All Applicants', href: '/dashboard/employer/applicants', color: 'text-orange-600', description: 'View all candidates' },
        { icon: UserCheck, label: 'Shortlisted', href: '/dashboard/employer/applicants/shortlisted', color: 'text-green-600', description: 'Selected candidates' },
        { icon: Calendar, label: 'Interviews', href: '/dashboard/employer/interviews', color: 'text-blue-600', description: 'Schedule interviews' },
        { icon: MessageSquare, label: 'Messages', href: '/dashboard/employer/messages', color: 'text-pink-600', description: 'Candidate communication' },
        { icon: Database, label: 'Talent Pool', href: '/dashboard/employer/talent-pool', color: 'text-cyan-600', description: 'Saved candidates' }
      ]
    },
    {
      title: 'Tools & Features',
      items: [
        { icon: Search, label: 'Candidate Search', href: '/dashboard/employer/search', color: 'text-violet-600', description: 'Find candidates' },
        { icon: Filter, label: 'Smart Filters', href: '/dashboard/employer/filters', color: 'text-teal-600', description: 'Advanced filtering' },
        { icon: Target, label: 'AI Matching', href: '/dashboard/employer/ai-matching', color: 'text-rose-600', description: 'AI-powered matching' },
        { icon: TrendingUp, label: 'Market Insights', href: '/dashboard/employer/insights', color: 'text-amber-600', description: 'Industry trends' },
        { icon: Share2, label: 'Job Sharing', href: '/dashboard/employer/sharing', color: 'text-lime-600', description: 'Social sharing tools' }
      ]
    },
    {
      title: 'Reports & Analytics',
      items: [
        { icon: PieChart, label: 'Hiring Reports', href: '/dashboard/employer/reports', color: 'text-blue-500', description: 'Detailed reports' },
        { icon: Activity, label: 'Performance', href: '/dashboard/employer/performance', color: 'text-green-500', description: 'Hiring performance' },
        { icon: Download, label: 'Export Data', href: '/dashboard/employer/export', color: 'text-purple-500', description: 'Download reports' },
        { icon: Clock, label: 'Time Tracking', href: '/dashboard/employer/time-tracking', color: 'text-orange-500', description: 'Hiring timeline' }
      ]
    },
    {
      title: 'Company & Settings',
      items: [
        { icon: Building2, label: 'Company Profile', href: '/dashboard/employer/company', color: 'text-slate-600', description: 'Company information' },
        { icon: Settings, label: 'Account Settings', href: '/dashboard/employer/settings', color: 'text-gray-600', description: 'Account preferences' },
        { icon: Palette, label: 'Branding', href: '/dashboard/employer/branding', color: 'text-pink-500', description: 'Custom branding' },
        { icon: Code, label: 'API Access', href: '/dashboard/employer/api', color: 'text-indigo-500', description: 'Developer tools' },
        { icon: Shield, label: 'Privacy & Security', href: '/dashboard/employer/security', color: 'text-red-500', description: 'Security settings' }
      ]
    }
  ];



  const handleViewProfile = () => {
    setProfileMode('view');
    setShowProfilePage(true);
    onClose(); // Close the sidebar when opening profile page
  };

  const handleEditProfile = () => {
    setProfileMode('edit');
    setShowProfilePage(true);
    onClose(); // Close the sidebar when opening profile page
  };

  const handleSubscriptionClick = () => {
    setShowSubscriptionPage(true);
    onClose(); // Close the sidebar when opening subscription page
  };

  const toggleSection = (sectionTitle: string) => {
    setActiveSection(activeSection === sectionTitle ? null : sectionTitle);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Enhanced Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto">
        <div className="p-6">
          {/* Header with HireKarma Branding */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">HireKarma</h2>
                <p className="text-xs text-gray-500">Employer Dashboard</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Enhanced Profile Info */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-xl font-bold text-white">
                  {user?.companyName?.charAt(0) || 'H'}
                </span>
              </div>
              <h3 className="font-bold text-gray-900">HireKarma</h3>
              <p className="text-gray-600 text-xs mb-3">{user?.email || 'employer@hirekarma.com'}</p>
              
              {/* Profile Action Buttons */}
              <div className="flex space-x-2 justify-center">
                <button
                  onClick={handleViewProfile}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-xs"
                >
                  <Eye className="w-3 h-3" />
                  <span>View</span>
                </button>
                <button
                  onClick={handleEditProfile}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Professional Plan</p>
                  <p className="text-xs text-gray-600">25 job posts remaining</p>
                </div>
              </div>
              <button
                onClick={handleSubscriptionClick}
                className="px-2 py-1 bg-orange-600 text-white rounded-lg text-xs hover:bg-orange-700 transition-colors"
              >
                Upgrade
              </button>
            </div>
          </div>

          {/* Enhanced Navigation Sections */}
          <div className="space-y-3">
            {navigationSections.map((section) => (
              <div key={section.title} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm">{section.title}</h4>
                  {activeSection === section.title ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  )}
                </button>
                
                {activeSection === section.title && (
                  <div className="bg-white">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors border-t border-gray-100 group"
                        onClick={onClose}
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/dashboard/employer/jobs/create"
                className="flex items-center space-x-1 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors text-xs"
                onClick={onClose}
              >
                <Plus className="w-3 h-3 text-green-600" />
                <span>Post Job</span>
              </Link>
              <Link
                href="/dashboard/employer/search"
                className="flex items-center space-x-1 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors text-xs"
                onClick={onClose}
              >
                <Search className="w-3 h-3 text-blue-600" />
                <span>Find Talent</span>
              </Link>
            </div>
          </div>

          {/* Support & Help */}
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Headphones className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-gray-900 text-sm">Need Help?</h4>
            </div>
            <div className="space-y-1">
              <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-white rounded-lg transition-colors text-xs">
                <HelpCircle className="w-3 h-3 text-blue-600" />
                <span>Help Center</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-white rounded-lg transition-colors text-xs">
                <MessageSquare className="w-3 h-3 text-green-600" />
                <span>Live Chat</span>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
                window.location.href = ROUTES.HOME
              }}
              className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 transition-colors text-red-600 text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Page */}
      <ProfilePage 
        isOpen={showProfilePage}
        onClose={() => setShowProfilePage(false)}
        mode={profileMode}
      />

      {/* Subscription Page */}
      <SubscriptionPage 
        isOpen={showSubscriptionPage}
        onClose={() => setShowSubscriptionPage(false)}
        selectedPlan="Professional"
      />
    </>
  );
};

export default SidebarProfile;