import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const ComponentErrorBoundary = ({ children, fallback, componentName }) => {
  const defaultFallback = (
    <div style={{
      padding: '16px',
      margin: '8px',
      border: '1px solid #ffa726',
      borderRadius: '6px',
      backgroundColor: '#fff3e0',
      color: '#ef6c00',
      textAlign: 'center'
    }}>
      <p>Failed to load {componentName || 'component'}. Please try refreshing the page.</p>
    </div>
  );

  const handleError = (error, errorInfo) => {
    console.error(`Error in ${componentName || 'component'}:`, error);
    
    // You could send this to an error reporting service
    // errorReportingService.captureException(error, {
    //   extra: errorInfo,
    //   tags: { component: componentName }
    // });
  };

  return (
    <ErrorBoundary
      fallback={fallback || defaultFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ComponentErrorBoundary;