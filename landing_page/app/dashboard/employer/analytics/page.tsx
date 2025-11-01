'use client';

import React from 'react';
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-100 relative overflow-hidden">
      {/* Beautiful Sky Blue Background with Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-sky-200/20 to-blue-300/15 rounded-full blur-xl animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-200/15 to-sky-300/10 rounded-full blur-lg animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-200/10 to-cyan-200/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-br from-sky-300/15 to-blue-200/12 rounded-full blur-xl animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
        
        {/* Medium Floating Elements */}
        <div className="absolute top-60 left-1/2 w-24 h-24 bg-sky-300/20 rounded-full blur-md animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-cyan-400/15 rounded-full blur-lg animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        {/* Small Floating Particles */}
        <div className="absolute top-16 left-1/3 w-4 h-4 bg-sky-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-blue-500/50 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 left-1/5 w-5 h-5 bg-cyan-400/45 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-sky-500/60 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}></div>
        
        {/* Gradient Background Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-sky-200/6 to-blue-200/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-200/5 to-sky-200/3 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your hiring performance and job posting metrics</p>
        </div>
        
        <AnalyticsOverview />
      </div>
    </div>
  );
}