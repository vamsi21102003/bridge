'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardCards from '@/components/dashboard/DashboardCards';
import JobForm from '@/components/dashboard/JobForm';
import JobsManagementGrid from '@/components/dashboard/JobsManagementGrid';
import ApplicationsSummary from '@/components/dashboard/ApplicationsSummary';
import { useTranslation } from '@/hooks/dashboard/useTranslation';
import { useDashboardStats } from '@/hooks/dashboard/useDashboard';
import { useJobs } from '@/hooks/dashboard/useJobs';
import { useAuth } from '@/context/dashboard/AuthContext';
import { ROUTES } from '@/constants';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award, 
  Sparkles, 
  BarChart3, 
  UserCheck, 
  FileText, 
  Settings, 
  Crown,
  Building2,
  Target,
  Zap,
  Globe,
  Star,
  Rocket,
  Shield,
  Heart
} from 'lucide-react';
import EMPBriDGeLogo from '@/components/ui/EMPBriDGeLogo';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function EmployerDashboardPage() {
  const { t } = useTranslation();
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: jobs, isLoading: jobsLoading } = useJobs();
  const { user } = useAuth();
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobFilter, setJobFilter] = useState<'all' | 'active' | 'closed' | 'draft'>('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'info' | 'warning' | 'error'>('info');
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string>('');

  const recentJobs = jobs?.slice(0, 3) || [];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Utility function to show notifications
  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  // Button handlers
  const handleUpgradeClick = () => {
    setShowUpgradeModal(true);
    showToast('Upgrade modal opened! Explore premium features.', 'info');
  };

  const handleTemplatesClick = () => {
    setShowTemplatesModal(true);
    showToast('Job templates loaded! Choose from 50+ professional templates.', 'success');
  };

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
    showToast('Settings panel opened! Customize your dashboard preferences.', 'info');
  };

  const handleFeatureClick = (featureName: string) => {
    setSelectedFeature(featureName);
    setShowFeatureModal(true);
    showToast(`${featureName} feature details opened!`, 'info');
  };

  const handleStatsClick = (statName: string) => {
    showToast(`${statName} statistics clicked! Detailed analytics would be displayed.`, 'info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="dashboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Hero Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Brand and Description */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {/* Enhanced Logo Section */}
              <div className="mb-8">
                <EMPBriDGeLogo 
                  size="xl" 
                  animated={true} 
                  showText={true} 
                  variant="gradient" 
                />
                <div className="flex items-center space-x-2 mt-3 ml-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-purple-600 font-medium">Trusted Employer Platform</span>
                  <div className="flex items-center space-x-1 ml-4">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xl text-gray-700 font-semibold">
                    Advanced Employer Dashboard
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with top talent and manage your recruitment pipeline
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    AI-powered matching and analytics for better hiring decisions
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button 
                onClick={() => handleStatsClick('Trusted Companies')}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group text-left w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-green-500 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12%
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Trusted Companies</div>
              </button>
              
              <button 
                onClick={() => handleStatsClick('Active Candidates')}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group text-left w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-green-500 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +25%
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Active Candidates</div>
              </button>
              
              <button 
                onClick={() => handleStatsClick('Jobs Posted')}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group text-left w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-green-500 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +18%
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">2K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Jobs Posted</div>
              </button>
              
              <button 
                onClick={() => handleStatsClick('Success Rate')}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group text-left w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-green-500 text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Top Rated
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Success Rate</div>
              </button>
            </div>
          </div>

          {/* Right Side - Action Cards */}
          <div className="space-y-6">
            {/* Post New Job Card */}
            <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-purple hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('postNewJob')}</h3>
                  <p className="text-purple-100 text-sm">Create and publish job openings</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Rocket className="w-3 h-3 text-purple-200" />
                    <span className="text-xs text-purple-200">AI-Powered Matching</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-center space-x-2 text-purple-100 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Global talent pool access</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-100 text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Instant candidate matching</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowJobForm(!showJobForm)}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-4 px-6 font-medium transition-all duration-200 flex items-center justify-center space-x-2 relative z-10 group"
              >
                <span>Get Started</span>
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Premium Features Card */}
            <div className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 flex items-center space-x-2">
                      <span>Premium Features</span>
                      <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                    </h3>
                    <p className="text-sm text-gray-500">Unlock advanced capabilities</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>PRO</span>
                  </span>
                  <span className="text-xs text-gray-400">Limited Time</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Heart className="w-4 h-4 text-orange-500" />
                  <span>Priority candidate matching</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <BarChart3 className="w-4 h-4 text-orange-500" />
                  <span>Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span>Dedicated account manager</span>
                </div>
              </div>
              
              {!user?.isSubscribed && (
                <button 
                  onClick={handleUpgradeClick}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl py-3 px-6 font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Upgrade Now</span>
                  <Crown className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                </button>
              )}
            </div>

            {/* Enhanced Quick Access Grid */}
            <div className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Quick Access</h3>
                <div className="flex-1"></div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">4 Tools</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href={ROUTES.ANALYTICS}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">Analytics</span>
                  <span className="text-xs text-gray-400 mt-1">View insights</span>
                </Link>
                
                <Link
                  href={ROUTES.APPLICANTS}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">Applicants</span>
                  <span className="text-xs text-gray-400 mt-1">Manage candidates</span>
                </Link>
                
                <button 
                  onClick={handleTemplatesClick}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 w-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">Templates</span>
                  <span className="text-xs text-gray-400 mt-1">Job templates</span>
                </button>
                
                <button 
                  onClick={handleSettingsClick}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 w-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-700 transition-colors">Settings</span>
                  <span className="text-xs text-gray-400 mt-1">Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Form Modal */}
        {showJobForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <JobForm 
                onSuccess={() => setShowJobForm(false)}
                onCancel={() => setShowJobForm(false)}
              />
            </div>
          </div>
        )}

        {/* Enhanced Platform Features Section */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-green-100/50 rounded-3xl blur-3xl -z-10"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-2xl flex items-center justify-center animate-pulse">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                    Platform Features
                  </h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600 font-medium">Award-winning technology</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful AI-driven tools and features that make EMPBriDGe the preferred choice for modern employers worldwide
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span>Global Scale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Smart Matching Feature */}
            <button 
              onClick={() => handleFeatureClick('Smart Matching')}
              className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group text-left w-full border border-blue-200/50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Smart Matching</h3>
                    <div className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">AI</div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">AI-powered candidate matching based on skills, experience, and cultural fit with 95% accuracy rate</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>Machine Learning Algorithms</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-blue-500" />
                    <span>Cultural Fit Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span>Skill-based Matching</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <span>Explore Feature</span>
                    <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <div className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                    95% Match Rate
                  </div>
                </div>
              </div>
            </button>

            {/* Advanced Analytics Feature */}
            <button 
              onClick={() => handleFeatureClick('Advanced Analytics')}
              className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group text-left w-full border border-green-200/50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-600 font-medium">+127%</span>
                    </div>
                    <span className="text-xs text-gray-500">This month</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Advanced Analytics</h3>
                    <div className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">PRO</div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">Comprehensive insights into your hiring pipeline with real-time candidate engagement metrics</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 text-green-500" />
                    <span>Real-time Dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 text-green-500" />
                    <span>Performance Tracking</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                    <span>View Dashboard</span>
                    <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <div className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                    50+ Metrics
                  </div>
                </div>
              </div>
            </button>

            {/* Global Reach Feature */}
            <button 
              onClick={() => handleFeatureClick('Global Reach')}
              className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group text-left w-full border border-purple-200/50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 rounded-3xl"></div>
              <div className="absolute top-1/2 right-0 w-28 h-28 bg-purple-500/10 rounded-full translate-x-14 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <Globe className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-lg">🌍</span>
                    <span className="text-lg">🌎</span>
                    <span className="text-lg">🌏</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Global Reach</h3>
                    <div className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full font-medium">GLOBAL</div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">Access international talent pool across 150+ countries with multi-language support</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4 text-purple-500" />
                    <span>150+ Countries</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>25+ Languages</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
                    <span>Explore Talent</span>
                    <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-200" />
                  </div>
                  <div className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                    10M+ Candidates
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Interactive Jobs Management Section */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Job Postings</h2>
                <p className="text-gray-600">Manage your active jobs and internships</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter:</span>
                <select 
                  value={jobFilter}
                  onChange={(e) => setJobFilter(e.target.value as any)}
                  className="bg-transparent text-sm font-medium text-gray-900 focus:outline-none"
                >
                  <option value="all">All Jobs</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <button
                onClick={() => setShowJobForm(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                <span>Add New Job</span>
              </button>
            </div>
          </div>

          <JobsManagementGrid filter={jobFilter} />
        </div>

        {/* Applications Summary */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ApplicationsSummary />
        </div>

        {/* Success Stories Section */}
        <div className={`mt-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                  <p className="text-purple-100">See how companies are thriving with EMPBriDGe</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">TechCorp Inc.</h4>
                      <p className="text-purple-200 text-sm">Software Company</p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm mb-3">
                    "Reduced hiring time by 60% and found exceptional talent through EMPBriDGe's AI matching."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-purple-200 text-sm">5.0</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">HealthPlus</h4>
                      <p className="text-purple-200 text-sm">Healthcare</p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm mb-3">
                    "The platform's analytics helped us optimize our recruitment strategy and improve candidate quality."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-purple-200 text-sm">4.9</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">StartupX</h4>
                      <p className="text-purple-200 text-sm">Fintech Startup</p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm mb-3">
                    "As a growing startup, EMPBriDGe gave us access to top-tier talent we couldn't reach before."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-purple-200 text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <button
            onClick={() => setShowJobForm(true)}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 empbridge-button-glow"
          >
            <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Post New Job
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500 opacity-10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Dynamic Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className={`rounded-2xl shadow-lg p-4 border max-w-sm ${
            notificationType === 'success' ? 'bg-green-50 border-green-200' :
            notificationType === 'error' ? 'bg-red-50 border-red-200' :
            notificationType === 'warning' ? 'bg-yellow-50 border-yellow-200' :
            'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                notificationType === 'success' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                notificationType === 'error' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                notificationType === 'warning' ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                'bg-gradient-to-br from-blue-500 to-blue-600'
              }`}>
                {notificationType === 'success' && <Zap className="w-5 h-5 text-white" />}
                {notificationType === 'error' && <Shield className="w-5 h-5 text-white" />}
                {notificationType === 'warning' && <Crown className="w-5 h-5 text-white" />}
                {notificationType === 'info' && <Sparkles className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h4 className={`font-semibold ${
                  notificationType === 'success' ? 'text-green-900' :
                  notificationType === 'error' ? 'text-red-900' :
                  notificationType === 'warning' ? 'text-yellow-900' :
                  'text-blue-900'
                }`}>
                  {notificationType === 'success' ? 'Success!' :
                   notificationType === 'error' ? 'Error!' :
                   notificationType === 'warning' ? 'Warning!' :
                   'Info'}
                </h4>
                <p className={`text-sm ${
                  notificationType === 'success' ? 'text-green-700' :
                  notificationType === 'error' ? 'text-red-700' :
                  notificationType === 'warning' ? 'text-yellow-700' :
                  'text-blue-700'
                }`}>
                  {notificationMessage}
                </p>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Toast */}
      {isLoaded && !showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Welcome back!</h4>
                <p className="text-sm text-gray-600">Your dashboard is ready</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Upgrade to Premium</h2>
                    <p className="text-gray-600">Unlock advanced features and capabilities</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowUpgradeModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Priority candidate matching with AI recommendations</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Advanced analytics and detailed reporting</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Dedicated account manager and priority support</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Unlimited job postings and candidate searches</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    setShowUpgradeModal(false);
                    showToast('Premium upgrade initiated! Redirecting to payment...', 'success');
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl py-3 px-6 font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-200"
                >
                  Upgrade Now - $99/month
                </button>
                <button 
                  onClick={() => setShowUpgradeModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Templates Modal */}
      {showTemplatesModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Job Templates</h2>
                    <p className="text-gray-600">Choose from professional job posting templates</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowTemplatesModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Software Engineer', 'Marketing Manager', 'Sales Representative', 'Data Scientist', 'Product Manager', 'UI/UX Designer'].map((template, index) => (
                  <button
                    key={template}
                    onClick={() => {
                      setShowTemplatesModal(false);
                      showToast(`${template} template selected! Job form will be pre-filled.`, 'success');
                      setShowJobForm(true);
                    }}
                    className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 text-left group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{template}</h3>
                    <p className="text-sm text-gray-600">Professional template with industry-specific requirements</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dashboard Settings</h2>
                    <p className="text-gray-600">Customize your dashboard preferences</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSettingsModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-gray-700">Email notifications for new applications</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-gray-700">SMS alerts for urgent updates</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Dashboard Layout</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="layout" defaultChecked />
                      <span className="text-gray-700">Compact view</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="layout" />
                      <span className="text-gray-700">Detailed view</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={() => {
                    setShowSettingsModal(false);
                    showToast('Settings saved successfully!', 'success');
                  }}
                  className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl py-3 px-6 font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
                >
                  Save Settings
                </button>
                <button 
                  onClick={() => setShowSettingsModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Detail Modal */}
      {showFeatureModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                    selectedFeature === 'Smart Matching' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    selectedFeature === 'Advanced Analytics' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    {selectedFeature === 'Smart Matching' && <Target className="w-8 h-8 text-white" />}
                    {selectedFeature === 'Advanced Analytics' && <BarChart3 className="w-8 h-8 text-white" />}
                    {selectedFeature === 'Global Reach' && <Globe className="w-8 h-8 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedFeature}</h2>
                    <p className="text-gray-600">Detailed feature overview and capabilities</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowFeatureModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Feature Content */}
              {selectedFeature === 'Smart Matching' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">AI Analysis</h4>
                              <p className="text-gray-600 text-sm">Our AI analyzes job requirements and candidate profiles</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Skill Matching</h4>
                              <p className="text-gray-600 text-sm">Matches candidates based on technical and soft skills</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Cultural Fit</h4>
                              <p className="text-gray-600 text-sm">Evaluates cultural alignment and team compatibility</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Zap className="w-5 h-5" />
                            <span>95% matching accuracy</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5" />
                            <span>60% faster hiring process</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Heart className="w-5 h-5" />
                            <span>Higher employee retention</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Match Accuracy</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-gray-200 rounded-full">
                                <div className="w-[95%] h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <span className="text-sm font-medium">95%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Time Saved</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-gray-200 rounded-full">
                                <div className="w-[60%] h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-sm font-medium">60%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">User Satisfaction</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-gray-200 rounded-full">
                                <div className="w-[92%] h-2 bg-purple-500 rounded-full"></div>
                              </div>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-blue-50 rounded-xl">
                            <div className="text-2xl mb-2">🤖</div>
                            <span className="text-sm font-medium text-gray-700">Machine Learning</span>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-xl">
                            <div className="text-2xl mb-2">🧠</div>
                            <span className="text-sm font-medium text-gray-700">Neural Networks</span>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-xl">
                            <div className="text-2xl mb-2">📊</div>
                            <span className="text-sm font-medium text-gray-700">Data Analytics</span>
                          </div>
                          <div className="text-center p-3 bg-orange-50 rounded-xl">
                            <div className="text-2xl mb-2">🎯</div>
                            <span className="text-sm font-medium text-gray-700">Predictive Models</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedFeature === 'Advanced Analytics' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-green-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <BarChart3 className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Real-time hiring metrics</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Predictive analytics</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Performance tracking</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">Candidate engagement</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">Key Insights</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span>Hiring Velocity</span>
                            <span className="font-bold">+127%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Cost per Hire</span>
                            <span className="font-bold">-45%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Quality Score</span>
                            <span className="font-bold">9.2/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Available Reports</h3>
                      <div className="space-y-3">
                        {['Hiring Pipeline Report', 'Candidate Source Analysis', 'Time-to-Fill Metrics', 'Interview Performance', 'Offer Acceptance Rates', 'Diversity & Inclusion'].map((report, index) => (
                          <div key={report} className="flex items-center justify-between p-3 bg-white rounded-xl">
                            <span className="text-gray-700">{report}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-500">Available</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedFeature === 'Global Reach' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Global Coverage</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Countries</span>
                            <span className="font-bold text-purple-600">150+</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Languages</span>
                            <span className="font-bold text-purple-600">25+</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Time Zones</span>
                            <span className="font-bold text-purple-600">24/7</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Candidates</span>
                            <span className="font-bold text-purple-600">10M+</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">Top Regions</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇺🇸</span>
                            <span>North America - 3.2M candidates</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇪🇺</span>
                            <span>Europe - 2.8M candidates</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇦🇸</span>
                            <span>Asia Pacific - 3.5M candidates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Languages</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Portuguese', 'Russian', 'Arabic', 'Hindi', 'Italian'].map((language) => (
                          <div key={language} className="flex items-center space-x-2 p-2 bg-white rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{language}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={() => {
                    setShowFeatureModal(false);
                    showToast(`${selectedFeature} feature exploration completed!`, 'success');
                  }}
                  className={`flex-1 text-white rounded-xl py-3 px-6 font-medium transition-all duration-200 ${
                    selectedFeature === 'Smart Matching' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                    selectedFeature === 'Advanced Analytics' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                    'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                  }`}
                >
                  Get Started with {selectedFeature}
                </button>
                <button 
                  onClick={() => setShowFeatureModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}