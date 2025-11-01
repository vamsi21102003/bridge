'use client';

import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Users, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  TrendingDown,
  Download,
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  Star,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Award,
  Globe,
  Building2,
  UserCheck,
  FileText,
  DollarSign
} from 'lucide-react';

const AnalyticsOverview: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { 
      title: 'Total Job Views', 
      value: '12,847', 
      change: '+23%', 
      icon: Eye, 
      color: 'blue',
      trend: 'up',
      description: 'Unique job post views this month'
    },
    { 
      title: 'Applications Received', 
      value: '1,248', 
      change: '+18%', 
      icon: Users, 
      color: 'green',
      trend: 'up',
      description: 'Total applications across all jobs'
    },
    { 
      title: 'Interview Conversion', 
      value: '24%', 
      change: '+5%', 
      icon: Target, 
      color: 'purple',
      trend: 'up',
      description: 'Applications to interview ratio'
    },
    { 
      title: 'Hire Success Rate', 
      value: '16%', 
      change: '+8%', 
      icon: CheckCircle, 
      color: 'orange',
      trend: 'up',
      description: 'Interview to hire conversion'
    },
    { 
      title: 'Average Time to Hire', 
      value: '18 days', 
      change: '-3 days', 
      icon: Clock, 
      color: 'indigo',
      trend: 'down',
      description: 'From application to offer'
    },
    { 
      title: 'Cost per Hire', 
      value: '₹45,000', 
      change: '-12%', 
      icon: DollarSign, 
      color: 'emerald',
      trend: 'down',
      description: 'Average recruitment cost'
    },
    { 
      title: 'Quality Score', 
      value: '4.8/5', 
      change: '+0.3', 
      icon: Star, 
      color: 'yellow',
      trend: 'up',
      description: 'Candidate satisfaction rating'
    },
    { 
      title: 'Active Job Posts', 
      value: '24', 
      change: '+6', 
      icon: Briefcase, 
      color: 'pink',
      trend: 'up',
      description: 'Currently open positions'
    }
  ];

  const jobPerformanceData = [
    { 
      title: 'Senior Software Engineer', 
      applications: 145, 
      views: 2340, 
      interviews: 35, 
      hires: 8,
      location: 'Bangalore, Karnataka',
      salary: '₹15-25 LPA',
      posted: '15 days ago',
      status: 'Active',
      conversionRate: 24.1
    },
    { 
      title: 'Product Manager', 
      applications: 98, 
      views: 1890, 
      interviews: 28, 
      hires: 5,
      location: 'Mumbai, Maharashtra',
      salary: '₹20-30 LPA',
      posted: '12 days ago',
      status: 'Active',
      conversionRate: 28.6
    },
    { 
      title: 'Data Scientist', 
      applications: 87, 
      views: 1560, 
      interviews: 22, 
      hires: 4,
      location: 'Hyderabad, Telangana',
      salary: '₹18-28 LPA',
      posted: '8 days ago',
      status: 'Active',
      conversionRate: 25.3
    },
    { 
      title: 'UX Designer', 
      applications: 76, 
      views: 1234, 
      interviews: 18, 
      hires: 3,
      location: 'Pune, Maharashtra',
      salary: '₹12-18 LPA',
      posted: '20 days ago',
      status: 'Active',
      conversionRate: 23.7
    },
    { 
      title: 'DevOps Engineer', 
      applications: 65, 
      views: 1120, 
      interviews: 15, 
      hires: 3,
      location: 'Chennai, Tamil Nadu',
      salary: '₹16-24 LPA',
      posted: '10 days ago',
      status: 'Active',
      conversionRate: 23.1
    }
  ];

  const applicationTrendsData = [
    { month: 'Jan', applications: 180, interviews: 45, hires: 12 },
    { month: 'Feb', applications: 220, interviews: 58, hires: 15 },
    { month: 'Mar', applications: 280, interviews: 72, hires: 18 },
    { month: 'Apr', applications: 320, interviews: 85, hires: 22 },
    { month: 'May', applications: 380, interviews: 98, hires: 28 },
    { month: 'Jun', applications: 420, interviews: 112, hires: 32 }
  ];

  const skillsDemandData = [
    { skill: 'React', demand: 85, jobs: 12, color: '#3B82F6' },
    { skill: 'Node.js', demand: 78, jobs: 10, color: '#10B981' },
    { skill: 'Python', demand: 72, jobs: 8, color: '#8B5CF6' },
    { skill: 'AWS', demand: 68, jobs: 9, color: '#F59E0B' },
    { skill: 'TypeScript', demand: 65, jobs: 7, color: '#EF4444' },
    { skill: 'Docker', demand: 58, jobs: 6, color: '#06B6D4' },
    { skill: 'Kubernetes', demand: 52, jobs: 5, color: '#84CC16' },
    { skill: 'GraphQL', demand: 45, jobs: 4, color: '#F97316' }
  ];

  const locationAnalytics = [
    { city: 'Bangalore', applications: 420, percentage: 33.7, color: '#3B82F6' },
    { city: 'Mumbai', applications: 285, percentage: 22.8, color: '#10B981' },
    { city: 'Hyderabad', applications: 198, percentage: 15.9, color: '#8B5CF6' },
    { city: 'Pune', applications: 156, percentage: 12.5, color: '#F59E0B' },
    { city: 'Chennai', applications: 123, percentage: 9.9, color: '#EF4444' },
    { city: 'Delhi NCR', applications: 66, percentage: 5.3, color: '#06B6D4' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; icon: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-800', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-800', icon: 'text-orange-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', icon: 'text-indigo-600' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-800', icon: 'text-emerald-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: 'text-yellow-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-800', icon: 'text-pink-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const downloadAnalytics = (type: string) => {
    // Mock PDF download
    const data = {
      metrics,
      jobPerformance: jobPerformanceData,
      trends: applicationTrendsData,
      skills: skillsDemandData,
      locations: locationAnalytics,
      generatedAt: new Date().toISOString(),
      timeRange: selectedTimeRange
    };
    
    const content = `
EMPBriDGe Analytics Report - ${type}
Generated: ${new Date().toLocaleDateString()}
Time Range: ${selectedTimeRange}

=== KEY METRICS ===
${metrics.map(m => `${m.title}: ${m.value} (${m.change})`).join('\n')}

=== TOP PERFORMING JOBS ===
${jobPerformanceData.map(j => `${j.title}: ${j.applications} applications, ${j.interviews} interviews, ${j.hires} hires`).join('\n')}

=== SKILLS IN DEMAND ===
${skillsDemandData.map(s => `${s.skill}: ${s.demand}% demand, ${s.jobs} jobs`).join('\n')}

Generated by EMPBriDGe Analytics Platform
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EMPBriDGe_Analytics_${type}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`${type} analytics report downloaded successfully!`);
  };

  return (
    <div className="space-y-8">
      {/* Header with Time Range Selector and Download Options */}
      <div className="bg-white rounded-3xl shadow-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Analytics Overview</h2>
                <p className="text-gray-600">Comprehensive hiring performance insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                {['7d', '30d', '90d', '1y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTimeRange === range
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '1 Year'}
                  </button>
                ))}
              </div>
              
              {/* Download Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => downloadAnalytics('Summary')}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Summary</span>
                </button>
                <button
                  onClick={() => downloadAnalytics('Detailed')}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Detailed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          const colors = getColorClasses(metric.color);
          return (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-6 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden ${
                animationComplete ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-gray-200/50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-bold ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    } bg-${metric.trend === 'up' ? 'green' : 'red'}-50 px-2 py-1 rounded-full`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-900 font-medium mb-1">{metric.title}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Trends Chart */}
      <div className="bg-white rounded-3xl shadow-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Application Trends</h3>
                <p className="text-gray-600">Monthly hiring pipeline performance</p>
              </div>
            </div>
            <button
              onClick={() => downloadAnalytics('Trends')}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>
          
          {/* Mock Bar Chart */}
          <div className="space-y-6">
            {applicationTrendsData.map((data, index) => (
              <div key={data.month} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{data.month} 2024</span>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{data.applications} Applications</span>
                    <span>{data.interviews} Interviews</span>
                    <span>{data.hires} Hires</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Enhanced Applications Bar */}
                  <div className="flex-1 bg-gray-100 rounded-full h-4 relative overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full transition-all duration-1500 ease-out relative"
                      style={{ 
                        width: animationComplete ? `${(data.applications / 420) * 100}%` : '0%',
                        transitionDelay: `${index * 200}ms`,
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      <div className="absolute right-0 top-0 w-2 h-full bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${index * 200 + 500}ms` }}></div>
                    </div>
                  </div>
                  {/* Enhanced Interviews Bar */}
                  <div className="flex-1 bg-gray-100 rounded-full h-4 relative overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-1500 ease-out relative"
                      style={{ 
                        width: animationComplete ? `${(data.interviews / 112) * 100}%` : '0%',
                        transitionDelay: `${index * 200 + 100}ms`,
                        boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      <div className="absolute right-0 top-0 w-2 h-full bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${index * 200 + 600}ms` }}></div>
                    </div>
                  </div>
                  {/* Enhanced Hires Bar */}
                  <div className="flex-1 bg-gray-100 rounded-full h-4 relative overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full transition-all duration-1500 ease-out relative"
                      style={{ 
                        width: animationComplete ? `${(data.hires / 32) * 100}%` : '0%',
                        transitionDelay: `${index * 200 + 200}ms`,
                        boxShadow: '0 2px 8px rgba(147, 51, 234, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      <div className="absolute right-0 top-0 w-2 h-full bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${index * 200 + 700}ms` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Applications</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Interviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Hires</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Performance and Location Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Top Performing Jobs */}
        <div className="bg-white rounded-3xl shadow-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Top Performing Jobs</h3>
                <p className="text-gray-600">Best converting job postings</p>
              </div>
            </div>
            <button
              onClick={() => downloadAnalytics('Job_Performance')}
              className="flex items-center space-x-2 px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {jobPerformanceData.map((job, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{job.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-3 h-3" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{job.conversionRate}%</div>
                    <div className="text-xs text-gray-500">Conversion</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white rounded-xl">
                    <div className="text-lg font-bold text-blue-600">{job.views}</div>
                    <div className="text-xs text-gray-500">Views</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl">
                    <div className="text-lg font-bold text-purple-600">{job.applications}</div>
                    <div className="text-xs text-gray-500">Applications</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl">
                    <div className="text-lg font-bold text-green-600">{job.interviews}</div>
                    <div className="text-xs text-gray-500">Interviews</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl">
                    <div className="text-lg font-bold text-orange-600">{job.hires}</div>
                    <div className="text-xs text-gray-500">Hires</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Analytics - Pie Chart */}
        <div className="bg-white rounded-3xl shadow-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Location Analytics</h3>
                <p className="text-gray-600">Applications by city</p>
              </div>
            </div>
            <button
              onClick={() => downloadAnalytics('Location')}
              className="flex items-center space-x-2 px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
          
          {/* Enhanced Animated Pie Chart */}
          <div className="relative w-64 h-64 mx-auto mb-8 group">
            {/* Background Circle with Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 animate-pulse"></div>
            
            {/* Animated Pie Segments */}
            {locationAnalytics.map((location, index) => {
              const previousPercentages = locationAnalytics.slice(0, index).reduce((sum, loc) => sum + loc.percentage, 0);
              const startAngle = (previousPercentages / 100) * 360;
              const segmentAngle = (location.percentage / 100) * 360;
              
              return (
                <div
                  key={location.city}
                  className="absolute inset-0 rounded-full transition-all duration-1000 ease-out hover:scale-105"
                  style={{
                    background: `conic-gradient(from ${startAngle}deg, ${location.color} 0deg, ${location.color} ${animationComplete ? segmentAngle : 0}deg, transparent ${animationComplete ? segmentAngle : 0}deg)`,
                    mask: 'radial-gradient(circle at center, transparent 60px, black 60px)',
                    transitionDelay: `${index * 200}ms`,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                  }}
                ></div>
              );
            })}
            
            {/* Animated Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl font-bold text-gray-900 animate-pulse">1,248</div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
              </div>
            </div>
            
            {/* Floating Animation Dots */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-6 left-6 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
          </div>
          
          {/* Location Legend */}
          <div className="space-y-3">
            {locationAnalytics.map((location, index) => (
              <div key={location.city} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: location.color }}
                  ></div>
                  <span className="font-medium text-gray-900">{location.city}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{location.applications}</div>
                  <div className="text-xs text-gray-500">{location.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Demand Analysis */}
      <div className="bg-white rounded-3xl shadow-card p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Skills in Demand</h3>
              <p className="text-gray-600">Most requested technical skills</p>
            </div>
          </div>
          <button
            onClick={() => downloadAnalytics('Skills')}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Export Skills Data</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsDemandData.map((skill, index) => (
            <div key={skill.skill} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-gray-900">{skill.skill}</div>
                <div className="text-sm text-gray-500">{skill.jobs} jobs</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Demand</span>
                  <span className="font-bold" style={{ color: skill.color }}>{skill.demand}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner relative">
                  <div 
                    className="h-full rounded-full transition-all duration-1500 ease-out relative"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
                      width: animationComplete ? `${skill.demand}%` : '0%',
                      transitionDelay: `${index * 150}ms`,
                      boxShadow: `0 2px 8px ${skill.color}40`
                    }}
                  >
                    {/* Animated Shine Effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                      style={{
                        animation: `shine 2s ease-in-out infinite`,
                        animationDelay: `${index * 150 + 1000}ms`
                      }}
                    ></div>
                    {/* Pulsing End Indicator */}
                    <div 
                      className="absolute right-0 top-0 w-1 h-full bg-white/60 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 150 + 800}ms` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Analytics Summary */}
      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Analytics Summary</h3>
                <p className="text-purple-100">Key insights from your hiring data</p>
              </div>
            </div>
            <button
              onClick={() => downloadAnalytics('Complete')}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Download Complete Report</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold">+34%</div>
                  <div className="text-purple-100 text-sm">Overall Growth</div>
                </div>
              </div>
              <p className="text-purple-100 text-sm">
                Significant improvement in hiring metrics compared to last quarter
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-purple-100 text-sm">Quality Score</div>
                </div>
              </div>
              <p className="text-purple-100 text-sm">
                High-quality candidates with excellent skill matches
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold">18 days</div>
                  <div className="text-purple-100 text-sm">Avg. Time to Hire</div>
                </div>
              </div>
              <p className="text-purple-100 text-sm">
                Faster hiring process with improved candidate experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;