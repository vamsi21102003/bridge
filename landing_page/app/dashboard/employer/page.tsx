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
  Building2,
  Target,
  Zap,
  Globe,
  Star,
  Rocket,
  Shield,
  Heart,
  MessageSquare,
  ArrowRight,
  MapPin,
  Bell,
  Landmark,
  Compass
} from 'lucide-react';

import AnimatedBackground from '@/components/ui/AnimatedBackground';
import TestimonialCarousel from '@/components/feedback/TestimonialCarousel';

export default function EmployerDashboardPage() {
  const { t } = useTranslation();
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: jobs, isLoading: jobsLoading } = useJobs();
  const { user } = useAuth();
  const [showJobForm, setShowJobForm] = useState(false);

  const [showWelcomeNotification, setShowWelcomeNotification] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    // Staggered loading animation
    const timer1 = setTimeout(() => setLoadingStage(1), 200);
    const timer2 = setTimeout(() => setLoadingStage(2), 400);
    const timer3 = setTimeout(() => setLoadingStage(3), 600);
    const timer4 = setTimeout(() => setLoadingStage(4), 800);
    
    // Welcome notification
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeNotification(true);
      setTimeout(() => setShowWelcomeNotification(false), 4000);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const handleStatsClick = (statName: string) => {
    console.log(`Clicked on ${statName} stat`);
  };

  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    if (action === 'Post Job') {
      setShowJobForm(true);
    }
  };

  if (statsLoading || jobsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="bridge-dashboard-page min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl opacity-20 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">💼</div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl opacity-25 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-xl">📊</div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full opacity-20 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">🎯</div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-18 animate-float flex items-center justify-center text-2xl backdrop-blur-sm shadow-xl">🚀</div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-sky-300 to-cyan-400 rounded-3xl opacity-25 animate-float flex items-center justify-center text-3xl backdrop-blur-sm shadow-2xl">⭐</div>
        
        {/* Secondary Bubbles */}
        <div className="absolute top-60 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-20 animate-bounce flex items-center justify-center text-xl backdrop-blur-sm">💡</div>
        <div className="absolute top-80 right-1/4 w-16 h-16 bg-gradient-to-br from-sky-300 to-blue-400 rounded-xl opacity-20 animate-pulse flex items-center justify-center text-lg backdrop-blur-sm">📈</div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-2xl opacity-20 animate-spin flex items-center justify-center text-xl backdrop-blur-sm" style={{ animationDuration: '6s' }}>🌟</div>
        <div className="absolute top-1/4 left-3/4 w-20 h-20 bg-gradient-to-br from-orange-300 to-amber-400 rounded-2xl opacity-20 animate-float flex items-center justify-center text-xl backdrop-blur-sm shadow-xl">🏆</div>
        <div className="absolute bottom-60 right-1/3 w-16 h-16 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-20 animate-bounce flex items-center justify-center text-lg backdrop-blur-sm">🎨</div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-200/12 to-amber-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-sky-200/10 to-blue-200/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-amber-200/8 to-orange-200/6 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-100/6 to-sky-100/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className={`mb-12 transition-all duration-800 ${loadingStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-2xl opacity-15 animate-float flex items-center justify-center text-2xl">✨</div>
          <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-12 animate-float flex items-center justify-center text-xl">🌟</div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl opacity-10 animate-pulse flex items-center justify-center text-lg">💫</div>
          
          <div className="relative z-10">
            {/* Enhanced Logo Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-3">
                <Building2 className="w-12 h-12 text-purple-600" />
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    BriDGe
                  </h1>
                  <p className="text-gray-600">Employer Dashboard</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3 ml-2">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-600 font-medium">Trusted Employer Platform</span>
                <div className="flex items-center space-x-1 ml-4">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome back, {user?.companyName || 'Employer'}! 👋
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to find your next great hire? Let's make it happen.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <button 
                onClick={() => handleStatsClick('Trusted Companies')}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group text-left w-full hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">+12%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Trusted Companies</div>
              </button>

              <button 
                onClick={() => handleStatsClick('Active Candidates')}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group text-left w-full hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">+8%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-1">10K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Active Candidates</div>
              </button>

              <button 
                onClick={() => handleStatsClick('Jobs Posted')}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group text-left w-full hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">+15%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-1">2K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Jobs Posted</div>
              </button>

              <button 
                onClick={() => handleStatsClick('Success Rate')}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group text-left w-full hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">+3%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Success Rate</div>
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-800 delay-200 ${loadingStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Post New Job Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/3 to-cyan-500/5 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-blue-400/8 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Post New Job</h3>
                      <p className="text-gray-600">Find your perfect candidate</p>
                    </div>
                  </div>
                  <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/50 rounded-xl p-4 text-center">
                    <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Smart Matching</div>
                    <div className="text-xs text-gray-500">AI-powered candidate matching</div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Global Reach</div>
                    <div className="text-xs text-gray-500">Access worldwide talent</div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4 text-center">
                    <Zap className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Quick Hire</div>
                    <div className="text-xs text-gray-500">Fast recruitment process</div>
                  </div>
                </div>

                <button 
                  onClick={() => handleQuickAction('Post Job')}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span className="text-lg">Create Job Posting</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Users, label: 'View Applicants', color: 'from-blue-500 to-cyan-500', action: 'View Applicants' },
                { icon: BarChart3, label: 'Analytics', color: 'from-purple-500 to-pink-500', action: 'Analytics' },
                { icon: FileText, label: 'Job Posts', color: 'from-green-500 to-emerald-500', action: 'Job Posts' },
                { icon: Settings, label: 'Settings', color: 'from-orange-500 to-red-500', action: 'Settings' }
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleQuickAction(item.action)}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group text-center hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-700">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Additional Features */}
          <div className="space-y-8">
            
            {/* Premium Features Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-red-400/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Premium Features</h3>
                    <p className="text-sm text-gray-600">Unlock advanced tools</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    'AI-powered candidate screening',
                    'Advanced analytics dashboard',
                    'Priority job placement',
                    'Dedicated account manager'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Bell className="w-5 h-5 text-purple-600" />
                <span>Recent Activity</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { action: 'New application received', time: '2 minutes ago', icon: UserCheck },
                  { action: 'Job post approved', time: '1 hour ago', icon: FileText },
                  { action: 'Interview scheduled', time: '3 hours ago', icon: MessageSquare }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className={`transition-all duration-800 delay-400 ${loadingStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <DashboardCards />
        </div>

        {/* Jobs Management */}
        <div className={`mt-12 transition-all duration-800 delay-600 ${loadingStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <JobsManagementGrid />
        </div>

        {/* Applications Summary */}
        <div className="mt-12">
          <ApplicationsSummary />
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Job Form Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Create New Job</h2>
              <button
                onClick={() => setShowJobForm(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <JobForm onClose={() => setShowJobForm(false)} />
          </div>
        </div>
      )}

      {/* Welcome Notification */}
      {showWelcomeNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Welcome back!</div>
                <div className="text-xs text-gray-600">Ready to find great talent?</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowJobForm(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-40 animate-pulse"
      >
        <Briefcase className="w-8 h-8" />
      </button>
    </div>
  );
}