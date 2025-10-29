'use client';

import React from 'react';
import ApplicantsTable from '@/components/dashboard/ApplicantsTable';

export default function ApplicantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Applicants</h1>
          <p className="text-gray-600">Review and manage applications for your job postings</p>
        </div>
        
        <ApplicantsTable />
      </div>
    </div>
  );
}