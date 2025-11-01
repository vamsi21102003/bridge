'use client';

import { Download } from 'lucide-react';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  exportable?: boolean;
  className?: string;
}

export function ChartContainer({ 
  title, 
  children, 
  exportable = false, 
  className = "" 
}: ChartContainerProps) {
  const handleExport = () => {
    // Export functionality would be implemented here
    console.log('Exporting chart:', title);
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 chart-enter ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {exportable && (
          <button 
            onClick={handleExport}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        )}
      </div>
      
      <div className="chart-container">
        {children}
      </div>
    </div>
  );
}