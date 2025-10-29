'use client';

import React, { useState } from 'react';
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

export default function EmployerDashboardPage() {
  const { t } = useTranslation();
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: jobs, isLoading: jobsLoading } = useJobs();
  const { user } = useAuth();
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobFilter, setJobFilter] = useState<'all' | 'active' | 'closed' | 'draft'>('all');

  const recentJobs = jobs?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Brand and Description */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                BriDGe
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Employer Dashboard
              </p>
              <p className="text-gray-500 leading-relaxed">
                Manage your job postings and connect with talented professionals
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Companies</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-1">10K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Candidates</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-1">2K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Jobs Posted</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Action Cards */}
          <div className="space-y-6">
            {/* Post New Job Card */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-purple hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('postNewJob')}</h3>
                  <p className="text-purple-100 text-sm">Create and publish job openings</p>
                </div>
              </div>
              <button
                onClick={() => setShowJobForm(!showJobForm)}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-3 px-6 font-medium transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Premium Features Card */}
            <div className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Features</h3>
                    <p className="text-sm text-gray-500">More opportunities for you</p>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  PRO
                </span>
              </div>
              {!user?.isSubscribed && (
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl py-3 px-6 font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-200">
                  Upgrade Now
                </button>
              )}
            </div>

            {/* Quick Access Grid */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <h3 className="font-bold text-gray-900 mb-4">Quick Access</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href={ROUTES.ANALYTICS}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">📊</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Analytics</span>
                </Link>
                <Link
                  href={ROUTES.APPLICANTS}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">👥</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Applicants</span>
                </Link>
                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Templates</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-colors">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Settings</span>
                </div>
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

        {/* Interactive Jobs Management Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Job Postings</h2>
              <p className="text-gray-600">Manage your active jobs and internships</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
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
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                <span>➕</span>
                <span>Add New Job</span>
              </button>
            </div>
          </div>

          <JobsManagementGrid filter={jobFilter} />
        </div>

        {/* Applications Summary */}
        <div className="mt-12">
          <ApplicationsSummary />
        </div>
      </div>
    </div>
  );
}