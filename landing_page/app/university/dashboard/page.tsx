'use client';

import { Header } from '@/components/university-layout/Header';
import { Sidebar } from '@/components/university-layout/Sidebar';
import { UniversityOverview } from '@/components/university/dashboard/UniversityOverview';
import { useUniversityStats } from '@/hooks/university/useUniversityStats';

export default function UniversityDashboardPage() {
  const { data, isLoading, error } = useUniversityStats();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
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
    <div className="min-h-screen bg-gray-50 bput-dashboard-layout dashboard-layout">
      <Header userRole="university_admin" currentPage="dashboard" />
      
      <div className="flex">
        <Sidebar currentPage="dashboard" />
        
        <main className="main-content-with-sidebar p-6">
          <div className="page-enter">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                University Dashboard
              </h1>
              <p className="text-gray-600">
                Comprehensive analytics and insights for BPUT placement outcomes
              </p>
            </div>
            
            <UniversityOverview data={data} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  );
}