import React from 'react';
import ComponentErrorBoundary from './ComponentErrorBoundary';

/**
 * Specialized error boundary for bridge components
 * Provides bridge-specific error handling and fallback UI
 */
const BridgeComponentErrorBoundary = ({ children, componentName, showRetry = true }) => {
  const bridgeFallback = (
    <div className="bridge-component">
      <div style={{
        padding: '20px',
        margin: '16px',
        border: '2px solid #e53e3e',
        borderRadius: '8px',
        backgroundColor: '#fed7d7',
        color: '#742a2a',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h3 style={{ margin: '0 0 8px 0', color: '#e53e3e' }}>
          Service Temporarily Unavailable
        </h3>
        <p style={{ margin: '0 0 16px 0' }}>
          The {componentName || 'service'} is currently experiencing issues. 
          Please try again in a few moments.
        </p>
        {showRetry && (
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#e53e3e',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
          >
            Retry Service
          </button>
        )}
      </div>
    </div>
  );

  const handleBridgeComponentError = (error, errorInfo) => {
    console.error(`Bridge component error in ${componentName}:`, error);
    
    // Log additional context for bridge components
    console.error('Bridge component error context:', {
      componentName,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorInfo
    });

    // Could send to error reporting service with bridge-specific tags
    // errorReportingService.captureException(error, {
    //   tags: { 
    //     component: componentName,
    //     type: 'bridge-component',
    //     dashboard: 'bridge'
    //   },
    //   extra: errorInfo
    // });
  };

  return (
    <ComponentErrorBoundary
      fallback={bridgeFallback}
      componentName={componentName}
      onError={handleBridgeComponentError}
    >
      {children}
    </ComponentErrorBoundary>
  );
};

export default BridgeComponentErrorBoundary;