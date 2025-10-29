'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { Settings, Users, Shield, Database, Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function AdminPage() {
  const summaryCards = [
    {
      title: 'System Health',
      value: '98.5%',
      icon: <Activity className="w-6 h-6" />,
      trend: { value: 0.2, isPositive: true },
    },
    {
      title: 'Active Users',
      value: '1,247',
      icon: <Users className="w-6 h-6" />,
      trend: { value: 8.3, isPositive: true },
    },
    {
      title: 'Security Score',
      value: '95%',
      icon: <Shield className="w-6 h-6" />,
      trend: { value: 2.1, isPositive: true },
    },
    {
      title: 'Data Integrity',
      value: '99.9%',
      icon: <Database className="w-6 h-6" />,
      trend: { value: 0.1, isPositive: true },
    },
  ];

  const systemStatus = [
    { service: 'API Gateway', status: 'healthy', uptime: '99.9%', lastCheck: '2 min ago' },
    { service: 'Database', status: 'healthy', uptime: '99.8%', lastCheck: '1 min ago' },
    { service: 'Authentication', status: 'healthy', uptime: '99.9%', lastCheck: '3 min ago' },
    { service: 'File Storage', status: 'warning', uptime: '98.5%', lastCheck: '5 min ago' },
    { service: 'Email Service', status: 'healthy', uptime: '99.7%', lastCheck: '2 min ago' },
    { service: 'Analytics Engine', status: 'healthy', uptime: '99.6%', lastCheck: '4 min ago' },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_login',
      description: 'Admin user logged in from new device',
      user: 'admin@unibridge.ac.in',
      timestamp: '2024-10-29 14:30:00',
      severity: 'info',
    },
    {
      id: 2,
      type: 'data_backup',
      description: 'Daily database backup completed successfully',
      user: 'system',
      timestamp: '2024-10-29 02:00:00',
      severity: 'success',
    },
    {
      id: 3,
      type: 'security_alert',
      description: 'Multiple failed login attempts detected',
      user: 'security@unibridge.ac.in',
      timestamp: '2024-10-29 10:15:00',
      severity: 'warning',
    },
    {
      id: 4,
      type: 'system_update',
      description: 'System maintenance completed',
      user: 'system',
      timestamp: '2024-10-28 23:45:00',
      severity: 'info',
    },
    {
      id: 5,
      type: 'user_registration',
      description: 'New college administrator registered',
      user: 'gec@unibridge.ac.in',
      timestamp: '2024-10-28 16:20:00',
      severity: 'info',
    },
  ];

  const adminTools = [
    {
      title: 'User Management',
      description: 'Manage user accounts, roles, and permissions',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-500',
      actions: ['View Users', 'Add User', 'Manage Roles'],
    },
    {
      title: 'System Configuration',
      description: 'Configure system settings and parameters',
      icon: <Settings className="w-8 h-8" />,
      color: 'bg-green-500',
      actions: ['General Settings', 'API Config', 'Email Settings'],
    },
    {
      title: 'Security Center',
      description: 'Monitor security events and manage access',
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-red-500',
      actions: ['Security Logs', 'Access Control', 'Audit Trail'],
    },
    {
      title: 'Database Management',
      description: 'Database operations and maintenance',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-purple-500',
      actions: ['Backup', 'Restore', 'Optimize'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="admin" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Enhanced Header */}
            <div className="mb-8 slide-in-left">
              <div className="relative">
                <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                  ⚙️ System Administration
                </h1>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
                🔧 Monitor system health, manage users, and configure platform settings
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

            {/* Admin Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {adminTools.map((tool, index) => (
                <div
                  key={tool.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* System Status */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">System Status</h3>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => (
                    <div
                      key={service.service}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <div className="font-medium text-gray-900">{service.service}</div>
                          <div className="text-sm text-gray-500">Uptime: {service.uptime}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{service.lastCheck}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">{activity.description}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(activity.severity)}`}>
                            {activity.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div>User: {activity.user}</div>
                          <div>Time: {new Date(activity.timestamp).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Sidebar currentPage="admin" />
      </div>
    </div>
  );
}