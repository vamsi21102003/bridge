'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { FileText, Download, Calendar, TrendingUp, Filter, Search } from 'lucide-react';
import { useState } from 'react';

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const summaryCards = [
    {
      title: 'Total Reports',
      value: '156',
      icon: <FileText className="w-6 h-6" />,
      trend: { value: 12.3, isPositive: true },
    },
    {
      title: 'This Month',
      value: '24',
      icon: <Calendar className="w-6 h-6" />,
      trend: { value: 8.7, isPositive: true },
    },
    {
      title: 'Downloads',
      value: '2,847',
      icon: <Download className="w-6 h-6" />,
      trend: { value: 15.2, isPositive: true },
    },
    {
      title: 'Automated',
      value: '89%',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 5.4, isPositive: true },
    },
  ];

  const reports = [
    {
      id: 1,
      title: 'Monthly Placement Report - October 2024',
      category: 'Placement',
      type: 'Monthly',
      generatedDate: '2024-10-31',
      size: '2.4 MB',
      downloads: 156,
      status: 'Ready',
      description: 'Comprehensive placement statistics and analysis for October 2024',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Skill Gap Analysis Report Q3 2024',
      category: 'Analytics',
      type: 'Quarterly',
      generatedDate: '2024-10-15',
      size: '3.8 MB',
      downloads: 89,
      status: 'Ready',
      description: 'Detailed analysis of skill gaps across departments and industries',
      format: 'PDF',
    },
    {
      id: 3,
      title: 'Industry Partnership Summary 2024',
      category: 'Partnership',
      type: 'Annual',
      generatedDate: '2024-10-20',
      size: '1.9 MB',
      downloads: 234,
      status: 'Ready',
      description: 'Overview of industry partnerships and collaboration outcomes',
      format: 'PDF',
    },
    {
      id: 4,
      title: 'College Performance Dashboard - September',
      category: 'Performance',
      type: 'Monthly',
      generatedDate: '2024-09-30',
      size: '4.2 MB',
      downloads: 178,
      status: 'Ready',
      description: 'Individual college performance metrics and comparisons',
      format: 'Excel',
    },
    {
      id: 5,
      title: 'AI Insights & Predictions Report',
      category: 'AI Insights',
      type: 'Weekly',
      generatedDate: '2024-10-28',
      size: '1.6 MB',
      downloads: 67,
      status: 'Ready',
      description: 'AI-generated insights and market predictions',
      format: 'PDF',
    },
    {
      id: 6,
      title: 'Student Feedback Analysis Q3',
      category: 'Feedback',
      type: 'Quarterly',
      generatedDate: '2024-10-10',
      size: '2.1 MB',
      downloads: 123,
      status: 'Ready',
      description: 'Analysis of student feedback and satisfaction surveys',
      format: 'PDF',
    },
    {
      id: 7,
      title: 'Employer Satisfaction Survey Results',
      category: 'Survey',
      type: 'Bi-annual',
      generatedDate: '2024-10-05',
      size: '3.3 MB',
      downloads: 145,
      status: 'Ready',
      description: 'Employer feedback on graduate quality and skills',
      format: 'PDF',
    },
    {
      id: 8,
      title: 'Weekly Placement Update - Week 43',
      category: 'Placement',
      type: 'Weekly',
      generatedDate: '2024-10-27',
      size: '0.8 MB',
      downloads: 45,
      status: 'Generating',
      description: 'Latest placement updates and statistics',
      format: 'PDF',
    },
  ];

  const categories = ['all', 'Placement', 'Analytics', 'Partnership', 'Performance', 'AI Insights', 'Feedback', 'Survey'];
  const periods = ['all', 'Weekly', 'Monthly', 'Quarterly', 'Bi-annual', 'Annual'];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
    const matchesPeriod = selectedPeriod === 'all' || report.type === selectedPeriod;
    return matchesSearch && matchesCategory && matchesPeriod;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800';
      case 'Generating': return 'bg-blue-100 text-blue-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'Excel': return 'bg-green-100 text-green-800';
      case 'CSV': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const scheduledReports = [
    {
      name: 'Daily Placement Summary',
      frequency: 'Daily at 6:00 AM',
      nextRun: '2024-10-30 06:00',
      status: 'Active',
    },
    {
      name: 'Weekly Analytics Digest',
      frequency: 'Every Monday at 8:00 AM',
      nextRun: '2024-11-04 08:00',
      status: 'Active',
    },
    {
      name: 'Monthly Performance Report',
      frequency: 'First day of month at 9:00 AM',
      nextRun: '2024-11-01 09:00',
      status: 'Active',
    },
    {
      name: 'Quarterly Skill Gap Analysis',
      frequency: 'Every quarter end',
      nextRun: '2024-12-31 10:00',
      status: 'Scheduled',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 university-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="analytics" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Reports & Analytics
              </h1>
              <p className="text-gray-600">
                Generate, download, and manage comprehensive reports and analytics
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {summaryCards.map((card, index) => (
                <SummaryCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  trend={card.trend}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <FileText className="w-4 h-4" />
                  <span>Generate Custom Report</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Bulk Download</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Report</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  <TrendingUp className="w-4 h-4" />
                  <span>Analytics Dashboard</span>
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="md:w-48">
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                  >
                    {periods.map(period => (
                      <option key={period} value={period}>
                        {period === 'all' ? 'All Periods' : period}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reports List */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Reports</h3>
                  <div className="space-y-4">
                    {filteredReports.map((report, index) => (
                      <div
                        key={report.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Generated: {new Date(report.generatedDate).toLocaleDateString()}</span>
                              <span>Size: {report.size}</span>
                              <span>Downloads: {report.downloads}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(report.format)}`}>
                              {report.format}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                              {report.category}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                              {report.type}
                            </span>
                          </div>
                          
                          {report.status === 'Ready' && (
                            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm">
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredReports.length === 0 && (
                    <div className="text-center py-8">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
                      <p className="text-gray-600">Try adjusting your search criteria</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Scheduled Reports */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Scheduled Reports</h3>
                <div className="space-y-4">
                  {scheduledReports.map((scheduled, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{scheduled.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          scheduled.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {scheduled.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{scheduled.frequency}</div>
                      <div className="text-xs text-gray-500">
                        Next run: {new Date(scheduled.nextRun).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                  Manage Schedules
                </button>
              </div>
            </div>
          </div>
        </main>
        
        <Sidebar currentPage="analytics" />
      </div>
    </div>
  );
}