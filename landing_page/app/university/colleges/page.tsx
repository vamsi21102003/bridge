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
      id: 'gec',
      name: 'Gandhi Engineering College (GEC)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'GEC001',
      totalStudents: 2000,
      placedStudents: 1920,
      placementRate: 96.0,
      avgPackage: 1000000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 2000,
    },
    {
      id: 'giet_bhubaneswar',
      name: 'Gandhi Institute for Education & Technology (GIET) – Bhubaneswar',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'GIET001',
      totalStudents: 1800,
      placedStudents: 1440,
      placementRate: 80.0,
      avgPackage: 1000000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 1997,
    },
    {
      id: 'coeb',
      name: 'College of Engineering Bhubaneswar (COEB)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'COEB001',
      totalStudents: 1500,
      placedStudents: 1050,
      placementRate: 70.0,
      avgPackage: 750000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE'],
      status: 'active',
      establishedYear: 1981,
    },
    {
      id: 'giet_different',
      name: 'Gandhi Institute of Excellent Technocrats (GIET)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'GIET002',
      totalStudents: 1200,
      placedStudents: 720,
      placementRate: 60.0,
      avgPackage: 375000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE'],
      status: 'active',
      establishedYear: 1999,
    },    {
 
     id: 'kist',
      name: 'Konark Institute of Science & Technology (KIST)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'KIST001',
      totalStudents: 1400,
      placedStudents: 1204,
      placementRate: 86.0,
      avgPackage: 600000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 2001,
    },
    {
      id: 'tat',
      name: 'Trident Academy of Technology (TAT)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'TAT001',
      totalStudents: 1600,
      placedStudents: 1280,
      placementRate: 80.0,
      avgPackage: 650000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 2000,
    },
    {
      id: 'kec',
      name: 'Krupajal Engineering College (KEC)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'KEC001',
      totalStudents: 1300,
      placedStudents: 975,
      placementRate: 75.0,
      avgPackage: 550000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE'],
      status: 'active',
      establishedYear: 1997,
    },
    {
      id: 'gift',
      name: 'Gandhi Institute for Technology (GIFT)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'GIFT001',
      totalStudents: 1100,
      placedStudents: 825,
      placementRate: 75.0,
      avgPackage: 600000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
      status: 'active',
      establishedYear: 2002,
    },
    {
      id: 'cvraman',
      name: 'C. V. Raman College of Engineering (C.V. Raman Global University)',
      location: 'Bhubaneswar',
      district: 'Khordha',
      affiliationId: 'CVR001',
      totalStudents: 2200,
      placedStudents: 1760,
      placementRate: 80.0,
      avgPackage: 700000,
      departments: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT', 'BT'],
      status: 'active',
      establishedYear: 1997,
    },
    {
      id: 'imit',
      name: 'Institute of Management & Information Technology (IMIT), Cuttack',
      location: 'Cuttack',
      district: 'Cuttack',
      affiliationId: 'IMIT001',
      totalStudents: 800,
      placedStudents: 560,
      placementRate: 70.0,
      avgPackage: 500000,
      departments: ['CSE', 'ECE', 'IT', 'MBA'],
      status: 'active',
      establishedYear: 1996,
    },
  ];

  const districts = ['all', 'Khordha', 'Cuttack', 'Sundargarh', 'Sambalpur', 'Ganjam'];

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="colleges" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Enhanced Header */}
            <div className="mb-8 slide-in-left">
              <div className="relative">
                <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                  🏛️ College Management
                </h1>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
                🎓 Manage and monitor all affiliated colleges under Uni-BriDGe
              </p>
            </div>

            {/* Enhanced Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="enhanced-card hover-lift-rotate stagger-1 zoom-in group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg glow-effect group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-blue-500 opacity-20 group-hover:opacity-40 transition-opacity">
                      🏛️
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                    {totalStats.totalColleges}
                  </div>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">Total Colleges</p>
                </div>
              </div>

              <div className="enhanced-card hover-lift-rotate stagger-2 zoom-in group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg glow-effect group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-green-500 opacity-20 group-hover:opacity-40 transition-opacity">
                      👥
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                    {totalStats.totalStudents.toLocaleString()}
                  </div>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">Total Students</p>
                </div>
              </div>

              <div className="enhanced-card hover-lift-rotate stagger-3 zoom-in group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg glow-effect group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-purple-500 opacity-20 group-hover:opacity-40 transition-opacity">
                      📈
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                    {totalStats.totalPlaced.toLocaleString()}
                  </div>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">Students Placed</p>
                </div>
              </div>

              <div className="enhanced-card hover-lift-rotate stagger-4 zoom-in group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg glow-effect group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-yellow-500 opacity-20 group-hover:opacity-40 transition-opacity">
                      🎯
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                    {totalStats.avgPlacementRate}%
                  </div>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">Avg Placement Rate</p>
                </div>
              </div>
            </div>

            {/* Enhanced Filters */}
            <div className="enhanced-card hover-tilt slide-in-bottom stagger-5 mb-8">
              <div className="p-6">
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
            </div>

            {/* Enhanced Colleges Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredColleges.map((college, index) => (
                <div
                  key={college.id}
                  className="enhanced-card hover-lift-rotate morphing-card group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-6 z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          🏛️ {college.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2 group-hover:text-gray-800 transition-colors">
                          <MapPin className="w-4 h-4 mr-1 group-hover:text-blue-500 transition-colors" />
                          <span className="text-sm">📍 {college.location}, {college.district}</span>
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          🆔 ID: {college.affiliationId}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(college.status)} group-hover:scale-110 transition-transform duration-300 glow-effect`}>
                        ✅ {college.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          👥 {college.totalStudents.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Total Students</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          📈 {college.placementRate}%
                        </div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Placement Rate</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          🎯 Placement Progress
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                          {college.placedStudents}/{college.totalStudents}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${college.placementRate}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
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
        
        <Sidebar currentPage="colleges" />
      </div>
    </div>
  );
}