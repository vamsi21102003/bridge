'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { PieChart } from '@/components/university/charts/PieChart';
import { BarChart } from '@/components/university/charts/BarChart';
import { Building2, Users, TrendingUp, Award, Search, Filter, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function EmployersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const summaryCards = [
    {
      title: 'Total Employers',
      value: '245',
      icon: <Building2 className="w-6 h-6" />,
      trend: { value: 15.2, isPositive: true },
    },
    {
      title: 'Active Partnerships',
      value: '189',
      icon: <Users className="w-6 h-6" />,
      trend: { value: 8.7, isPositive: true },
    },
    {
      title: 'Total Hires',
      value: '12,336',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 12.3, isPositive: true },
    },
    {
      title: 'Avg Package Offered',
      value: '₹8.2L',
      icon: <Award className="w-6 h-6" />,
      trend: { value: 18.5, isPositive: true },
    },
  ];

  const industryData = [
    { name: 'IT Services', value: 98, percentage: 40.0 },
    { name: 'Technology', value: 45, percentage: 18.4 },
    { name: 'Consulting', value: 32, percentage: 13.1 },
    { name: 'Manufacturing', value: 28, percentage: 11.4 },
    { name: 'Finance', value: 25, percentage: 10.2 },
    { name: 'Others', value: 17, percentage: 6.9 },
  ];

  const hiringTrends = [
    { name: 'TCS', placed: 450, total: 500, rate: '90.0' },
    { name: 'Infosys', placed: 380, total: 420, rate: '90.5' },
    { name: 'Wipro', placed: 320, total: 350, rate: '91.4' },
    { name: 'Accenture', placed: 280, total: 300, rate: '93.3' },
    { name: 'Cognizant', placed: 250, total: 280, rate: '89.3' },
  ];

  const employers = [
    {
      id: 1,
      name: 'Tata Consultancy Services',
      industry: 'IT Services',
      location: 'Mumbai',
      employees: '500K+',
      hires: 450,
      avgPackage: '₹4-7 LPA',
      status: 'active',
      partnership: 'Premium',
      lastHiring: '2024-10-25',
    },
    {
      id: 2,
      name: 'Microsoft',
      industry: 'Technology',
      location: 'Hyderabad',
      employees: '220K+',
      hires: 45,
      avgPackage: '₹12-25 LPA',
      status: 'active',
      partnership: 'Premium',
      lastHiring: '2024-10-20',
    },
    {
      id: 3,
      name: 'Amazon',
      industry: 'Technology',
      location: 'Bangalore',
      employees: '1.5M+',
      hires: 35,
      avgPackage: '₹15-30 LPA',
      status: 'active',
      partnership: 'Premium',
      lastHiring: '2024-10-18',
    },
    {
      id: 4,
      name: 'Infosys',
      industry: 'IT Services',
      location: 'Bangalore',
      employees: '300K+',
      hires: 380,
      avgPackage: '₹4.5-8 LPA',
      status: 'active',
      partnership: 'Standard',
      lastHiring: '2024-10-22',
    },
    {
      id: 5,
      name: 'Wipro',
      industry: 'IT Services',
      location: 'Bangalore',
      employees: '250K+',
      hires: 320,
      avgPackage: '₹4.2-7.5 LPA',
      status: 'active',
      partnership: 'Standard',
      lastHiring: '2024-10-19',
    },
  ];

  const industries = ['all', 'IT Services', 'Technology', 'Consulting', 'Manufacturing', 'Finance'];

  const filteredEmployers = employers.filter(employer => {
    const matchesSearch = employer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || employer.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPartnershipColor = (partnership: string) => {
    switch (partnership) {
      case 'Premium': return 'bg-purple-100 text-purple-800';
      case 'Standard': return 'bg-blue-100 text-blue-800';
      case 'Basic': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="employers" />
      
      <div className="flex">
        <Sidebar currentPage="employers" />
        
        <main className="main-content-with-sidebar p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Employer Management
              </h1>
              <p className="text-gray-600">
                Manage industry partnerships and track hiring performance
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

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Industry Distribution */}
              <ChartContainer title="Employers by Industry" exportable>
                <PieChart data={industryData} height={300} />
              </ChartContainer>

              {/* Top Hiring Companies */}
              <ChartContainer title="Top Hiring Companies (2024)" exportable>
                <BarChart data={hiringTrends} height={300} />
              </ChartContainer>
            </div>

            {/* Employers List */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Employer Partners</h3>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search employers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none text-sm"
                    >
                      {industries.map(industry => (
                        <option key={industry} value={industry}>
                          {industry === 'all' ? 'All Industries' : industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredEmployers.map((employer, index) => (
                  <div
                    key={employer.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{employer.name}</h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{employer.location}</span>
                        </div>
                        <p className="text-sm text-gray-500">{employer.industry} • {employer.employees} employees</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(employer.status)}`}>
                          {employer.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPartnershipColor(employer.partnership)}`}>
                          {employer.partnership}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{employer.hires}</div>
                        <div className="text-sm text-gray-600">Total Hires</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{employer.avgPackage}</div>
                        <div className="text-sm text-gray-600">Avg Package</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500">
                        Last hiring: {new Date(employer.lastHiring).toLocaleDateString()}
                      </div>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredEmployers.length === 0 && (
                <div className="text-center py-8">
                  <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No employers found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}