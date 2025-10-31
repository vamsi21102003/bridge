'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { SummaryCard } from '@/components/university/cards/SummaryCard';
import { ChartContainer } from '@/components/university/charts/ChartContainer';
import { PieChart } from '@/components/university/charts/PieChart';
import { BarChart } from '@/components/university/charts/BarChart';
import { Users, GraduationCap, TrendingUp, Award, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const summaryCards = [
    {
      title: 'Total Students',
      value: '15,420',
      icon: <Users className="w-6 h-6" />,
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: 'Students Placed',
      value: '12,336',
      icon: <GraduationCap className="w-6 h-6" />,
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: 'Placement Rate',
      value: '80.0%',
      icon: <TrendingUp className="w-6 h-6" />,
      trend: { value: 4.2, isPositive: true },
    },
    {
      title: 'Avg Package',
      value: '₹6.8L',
      icon: <Award className="w-6 h-6" />,
      trend: { value: 15.3, isPositive: true },
    },
  ];

  const departmentData = [
    { name: 'CSE', value: 4200, percentage: 27.2 },
    { name: 'ECE', value: 3100, percentage: 20.1 },
    { name: 'ME', value: 2800, percentage: 18.2 },
    { name: 'EE', value: 2200, percentage: 14.3 },
    { name: 'CE', value: 1800, percentage: 11.7 },
    { name: 'IT', value: 1320, percentage: 8.6 },
  ];

  const placementByDepartment = [
    { name: 'CSE', placed: 3780, total: 4200, rate: '90.0' },
    { name: 'ECE', placed: 2635, total: 3100, rate: '85.0' },
    { name: 'ME', placed: 2240, total: 2800, rate: '80.0' },
    { name: 'EE', placed: 1760, total: 2200, rate: '80.0' },
    { name: 'CE', placed: 1260, total: 1800, rate: '70.0' },
    { name: 'IT', placed: 1188, total: 1320, rate: '90.0' },
  ];

  const recentPlacements = [
    {
      id: 1,
      name: 'Rahul Sharma',
      department: 'CSE',
      college: 'Gandhi Engineering College (GEC)',
      company: 'Google',
      package: '₹45 LPA',
      date: '2024-10-28',
      status: 'placed',
    },
    {
      id: 2,
      name: 'Priya Patel',
      department: 'ECE',
      college: 'Gandhi Institute for Education & Technology (GIET)',
      company: 'Microsoft',
      package: '₹28 LPA',
      date: '2024-10-27',
      status: 'placed',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      department: 'IT',
      college: 'Konark Institute of Science & Technology (KIST)',
      company: 'Amazon',
      package: '₹35 LPA',
      date: '2024-10-26',
      status: 'placed',
    },
    {
      id: 4,
      name: 'Sneha Singh',
      department: 'CSE',
      college: 'C. V. Raman College of Engineering',
      company: 'TCS',
      package: '₹7.5 LPA',
      date: '2024-10-25',
      status: 'placed',
    },
    {
      id: 5,
      name: 'Vikash Jena',
      department: 'ME',
      college: 'Trident Academy of Technology (TAT)',
      company: 'Infosys',
      package: '₹6.2 LPA',
      date: '2024-10-24',
      status: 'placed',
    },
  ];

  const departments = ['all', 'CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'];

  const filteredPlacements = recentPlacements.filter(placement => {
    const matchesSearch = placement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || placement.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'placed': return 'bg-green-100 text-green-800';
      case 'interviewing': return 'bg-blue-100 text-blue-800';
      case 'applied': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="students" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Enhanced Header */}
            <div className="mb-8 slide-in-left">
              <div className="relative">
                <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                  👨‍🎓 Student Analytics
                </h1>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
                📊 Comprehensive overview of student placement performance
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
              {/* Student Distribution by Department */}
              <ChartContainer title="Student Distribution by Department" exportable>
                <PieChart data={departmentData} height={300} />
              </ChartContainer>

              {/* Placement Rate by Department */}
              <ChartContainer title="Placement Rate by Department" exportable>
                <BarChart data={placementByDepartment} height={300} />
              </ChartContainer>
            </div>

            {/* Recent Placements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Placements</h3>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none text-sm"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>
                          {dept === 'all' ? 'All Departments' : dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        College
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Package
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPlacements.map((placement) => (
                      <tr key={placement.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {placement.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{placement.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                            {placement.department}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {placement.college}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {placement.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                          {placement.package}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(placement.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(placement.status)}`}>
                            {placement.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredPlacements.length === 0 && (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No placements found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <Sidebar currentPage="students" />
      </div>
    </div>
  );
}