'use client';

import React from 'react';
import ApplicantsTable from '@/components/dashboard/ApplicantsTable';

export default function ApplicantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 relative overflow-hidden">
      {/* Beautiful Sky Blue Background with Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Bubbles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full blur-sm animate-float" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-200/25 to-sky-300/15 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-cyan-200/10 rounded-full blur-md animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-sky-300/20 to-blue-200/15 rounded-full blur-sm animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-cyan-300/15 to-sky-200/10 rounded-full blur-md animate-bounce" style={{ animationDuration: '5s', animationDelay: '3s' }}></div>
        
        {/* Medium Floating Bubbles */}
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-blue-300/15 rounded-full blur-sm animate-float" style={{ animationDuration: '9s' }}></div>
        <div className="absolute top-80 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/25 to-sky-300/20 rounded-full blur-sm animate-pulse" style={{ animationDuration: '6s', animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-22 h-22 bg-gradient-to-br from-blue-300/20 to-cyan-300/15 rounded-full blur-sm animate-bounce" style={{ animationDuration: '7s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/4 left-3/4 w-18 h-18 bg-gradient-to-br from-sky-300/25 to-blue-400/20 rounded-full blur-sm animate-float" style={{ animationDuration: '8s', animationDelay: '4s' }}></div>
        
        {/* Small Floating Bubbles */}
        <div className="absolute top-10 left-1/2 w-12 h-12 bg-sky-300/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-1/3 w-8 h-8 bg-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 left-1/4 w-10 h-10 bg-cyan-400/35 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/2 w-6 h-6 bg-sky-500/45 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 bg-blue-300/30 rounded-full animate-ping" style={{ animationDuration: '4.5s', animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/5 w-9 h-9 bg-cyan-500/40 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '2.5s' }}></div>
        
        {/* Gradient Orbs for Depth */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-sky-200/8 to-blue-200/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-200/6 to-sky-200/4 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-100/5 to-cyan-100/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
        <div className="absolute top-24 right-32 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-sky-500 rounded-full animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.9s' }}></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1.2s' }}></div>
        <div className="absolute top-2/3 right-8 w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDuration: '2.3s', animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Applicants</h1>
          <p className="text-gray-600">Review and manage applications for your job postings</p>
        </div>
        
        <ApplicantsTable />
      </div>
    </div>
  );
}