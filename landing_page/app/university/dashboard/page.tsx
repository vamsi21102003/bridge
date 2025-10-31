'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { UniversityOverview } from '@/components/university/dashboard/UniversityOverview';
import { useUniversityStats } from '@/hooks/university/useUniversityStats';

export default function UniversityDashboardPage() {
  const { data, isLoading, error } = useUniversityStats();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 university-dashboard-layout dashboard-layout">
        <Header userRole="university_admin" currentPage="dashboard" />
        
        <div className="flex">
          <Sidebar currentPage="dashboard" />
          
          <main className="main-content-with-sidebar flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Dashboard</h2>
              <p className="text-gray-600">Please try refreshing the page</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 university-dashboard-layout dashboard-layout university-website particle-bg">
      <Header userRole="university_admin" currentPage="dashboard" />
      
      <div className="flex">
        <main className="main-content-with-sidebar-right p-6">
          <div className="page-enter">
            {/* Enhanced Header with Animations */}
            <div className="mb-8 slide-in-left">
              <div className="relative">
                <h1 className="text-4xl font-bold gradient-text mb-4 float-animation">
                  🎯 University Dashboard
                </h1>
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-lg text-gray-700 slide-in-right stagger-2 font-medium">
                ✨ Comprehensive analytics and insights for university placement outcomes
              </p>
              
              {/* Animated Stats Bar */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Active Students', value: '12,456', icon: '👥', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Placement Rate', value: '94.2%', icon: '📈', color: 'from-green-500 to-emerald-500' },
                  { label: 'Partner Companies', value: '450+', icon: '🏢', color: 'from-purple-500 to-pink-500' },
                  { label: 'Avg Package', value: '₹8.5L', icon: '💰', color: 'from-orange-500 to-red-500' }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`enhanced-card hover-lift-rotate stagger-${index + 1} zoom-in p-4 text-center group cursor-pointer`}
                  >
                    <div className={`text-2xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Overview Component */}
            <div className="slide-in-bottom stagger-3">
              <UniversityOverview data={data} isLoading={isLoading} />
            </div>
          </div>
        </main>
        
        <Sidebar currentPage="dashboard" />
      </div>
    </div>
  );
}