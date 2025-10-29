'use client';

import React from 'react';
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your hiring performance and job posting metrics</p>
        </div>
        
        <AnalyticsOverview />
      </div>
    </div>
  );
}