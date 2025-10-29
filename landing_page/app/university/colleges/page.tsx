'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { Building2, Users, TrendingUp, MapPin, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const colleges = [
    {
      id: 'kiit',
      name: 'KIIT University',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'KIIT001',
      totalStudents: 4500,
      placedStudents: 3825,
      placementRate: 85.0,
      avgPackage: 650000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 1997,
    },
    {
      id: 'nit',
      name: 'NIT Rourkela',
      location: 'Rourkela',
      district: 'Sundargarh',
      affiliationId: 'NIT001',
      totalStudents: 2800,
      placedStudents: 2576,
      placementRate: 92.0,
      avgPackage: 850000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'MME'],
      status: 'active',
      establishedYear: 1961,
    },
    {
      id: 'iiit',
      name: 'IIIT Bhubaneswar',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'IIIT001',
      totalStudents: 1200,
      placedStudents: 1056,
      placementRate: 88.0,
      avgPackage: 750000,
      departments: ['CSE', 'ECE', 'IT'],
      status: 'active',
      establishedYear: 2006,
    },
    {
      id: 'soa',
      name: 'SOA University',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'SOA001',
      totalStudents: 3200,
      placedStudents: 2624,
      placementRate: 82.0,
      avgPackage: 580000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT', 'BT'],
      status: 'active',
      establishedYear: 1996,
    },
    {
      id: 'cet',
      name: 'CET Bhubaneswar',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'CET001',
      totalStudents: 1800,
      placedStudents: 1404,
      placementRate: 78.0,
      avgPackage: 520000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE'],
      status: 'active',
      establishedYear: 1981,
    },
    {
      id: 'vssut',
      name: 'VSSUT Burla',
      location: 'Burla',
      district: 'Sambalpur',
      affiliationId: 'VSSUT001',
      totalStudents: 2200,
      placedStudents: 1650,
      placementRate: 75.0,
      avgPackage: 480000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 1956,
    },
  ];

  const districts = ['all', 'Khordha', 'Sundargarh', 'Sambalpur', 'Cuttack', 'Ganjam'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === 'all' || college.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  const totalStats = {
    totalColleges: colleges.length,
    totalStudents: colleges.reduce((sum, college) => sum + college.totalStudents, 0),
    totalPlaced: colleges.reduce((sum, college) => sum + college.placedStudents, 0),
    avgPlacementRate: (colleges.reduce((sum, college) => sum + college.placementRate, 0) / colleges.length).toFixed(1),
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="colleges" />
      
      <div className="flex">
        <Sidebar currentPage="colleges" />
        
        <main className="main-content-with-sidebar p-6">
          <div className="page-enter">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                College Management
              </h1>
              <p className="text-gray-600">
                Manage and monitor all affiliated colleges under BPUT
              </p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{totalStats.totalColleges}</div>
                <p className="text-gray-600 text-sm font-medium">Total Colleges</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{totalStats.totalStudents.toLocaleString()}</div>
                <p className="text-gray-600 text-sm font-medium">Total Students</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{totalStats.totalPlaced.toLocaleString()}</div>
                <p className="text-gray-600 text-sm font-medium">Students Placed</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{totalStats.avgPlacementRate}%</div>
                <p className="text-gray-600 text-sm font-medium">Avg Placement Rate</p>
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
                      placeholder="Search colleges by name or location..."
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
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                    >
                      {districts.map(district => (
                        <option key={district} value={district}>
                          {district === 'all' ? 'All Districts' : district}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Colleges Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredColleges.map((college, index) => (
                <div
                  key={college.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{college.location}, {college.district}</span>
                      </div>
                      <p className="text-sm text-gray-500">ID: {college.affiliationId}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(college.status)}`}>
                      {college.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{college.totalStudents.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{college.placementRate}%</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Placement Progress</span>
                      <span className="text-sm text-gray-600">{college.placedStudents}/{college.totalStudents}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${college.placementRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Departments</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.departments.map((dept) => (
                        <span
                          key={dept}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-lg font-bold text-gray-900">₹{(college.avgPackage / 100000).toFixed(1)}L</div>
                      <div className="text-sm text-gray-600">Avg Package</div>
                    </div>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredColleges.length === 0 && (
              <div className="text-center py-12">
                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}