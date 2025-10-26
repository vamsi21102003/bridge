import React from 'react';
import ComponentErrorBoundary from './ComponentErrorBoundary';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Specialized error boundary for student components
 * Provides student-specific error handling and fallback UI
 */
const StudentComponentErrorBoundary = ({ children, componentName, showRetry = true }) => {
  const { t } = useLanguage();

  const studentFallback = (
    <div className="student-app">
      <div style={{
        padding: '20px',
        margin: '16px',
        border: '2px solid #667eea',
        borderRadius: '12px',
        backgroundColor: '#f8fafc',
        color: '#1a202c',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔧</div>
        <h3 style={{ margin: '0 0 8px 0', color: '#667eea' }}>
          Component Temporarily Unavailable
        </h3>
        <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
          The {componentName || 'component'} is currently experiencing issues. 
          This doesn't affect other parts of your dashboard.
        </p>
        {showRetry && (
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a67d8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
          >
            Retry Component
          </button>
        )}
      </div>
    </div>
  );

  const handleStudentComponentError = (error, errorInfo) => {
    console.error(`Student component error in ${componentName}:`, error);
    
    // Log additional context for student components
    console.error('Student component error context:', {
      componentName,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorInfo
    });

    // Could send to error reporting service with student-specific tags
    // errorReportingService.captureException(error, {
    //   tags: { 
    //     component: componentName,
    //     type: 'student-component',
    //     dashboard: 'student'
    //   },
    //   extra: errorInfo
    // });
  };

  return (
    <ComponentErrorBoundary
      fallback={studentFallback}
      componentName={componentName}
      onError={handleStudentComponentError}
    >
      {children}
    </ComponentErrorBoundary>
  );
};

export default StudentComponentErrorBoundary;