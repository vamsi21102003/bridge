/**
 * Code Splitting Utilities
 * Provides dynamic imports and lazy loading for better performance
 */

import React, { lazy, Suspense } from 'react';

/**
 * Loading component for lazy-loaded components
 */
const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    color: '#6b7280'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #e5e7eb',
      borderTop: '3px solid #667eea',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '16px'
    }}></div>
    <p>{message}</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

/**
 * Error boundary for lazy-loaded components
 */
class LazyLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy load error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          color: '#ef4444',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          backgroundColor: '#fef2f2'
        }}>
          <h3>Failed to load component</h3>
          <p>Please refresh the page to try again.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '16px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component for lazy loading
 */
export const withLazyLoading = (importFunc, loadingMessage) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <LazyLoadErrorBoundary>
      <Suspense fallback={<LoadingSpinner message={loadingMessage} />}>
        <LazyComponent {...props} />
      </Suspense>
    </LazyLoadErrorBoundary>
  );
};

/**
 * Component Preloader
 */
export class ComponentPreloader {
  constructor() {
    this.preloadedComponents = new Set();
    this.preloadPromises = new Map();
  }

  /**
   * Preload a component
   */
  preload(componentName, importFunc) {
    if (this.preloadedComponents.has(componentName)) {
      return this.preloadPromises.get(componentName);
    }

    const promise = importFunc().then(module => {
      this.preloadedComponents.add(componentName);
      console.log(`✅ Preloaded component: ${componentName}`);
      return module;
    }).catch(error => {
      console.error(`❌ Failed to preload component ${componentName}:`, error);
      throw error;
    });

    this.preloadPromises.set(componentName, promise);
    return promise;
  }

  /**
   * Preload critical student components
   */
  preloadCriticalStudentComponents() {
    // This would preload critical components
    // For now, we'll just simulate the preloading
    console.log('🔮 Preloading critical student components...');
    
    return Promise.resolve();
  }

  /**
   * Get preload statistics
   */
  getPreloadStats() {
    return {
      preloadedCount: this.preloadedComponents.size,
      preloadedComponents: Array.from(this.preloadedComponents),
      pendingPreloads: this.preloadPromises.size - this.preloadedComponents.size
    };
  }
}

/**
 * Resource preloader for critical assets
 */
export class ResourcePreloader {
  constructor() {
    this.preloadedResources = new Set();
  }

  /**
   * Preload CSS files
   */
  preloadCSS(cssFiles) {
    cssFiles.forEach(href => {
      if (this.preloadedResources.has(href)) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        this.preloadedResources.add(href);
        console.log(`✅ Preloaded CSS: ${href}`);
      };
      link.onerror = () => {
        console.error(`❌ Failed to preload CSS: ${href}`);
      };
      
      document.head.appendChild(link);
    });
  }

  /**
   * Get preload statistics
   */
  getPreloadStats() {
    return {
      preloadedCount: this.preloadedResources.size,
      preloadedResources: Array.from(this.preloadedResources)
    };
  }
}

// Create singleton instances
export const componentPreloader = new ComponentPreloader();
export const resourcePreloader = new ResourcePreloader();

/**
 * Initialize code splitting optimizations
 */
export const initializeCodeSplitting = () => {
  // Preload critical components
  componentPreloader.preloadCriticalStudentComponents();
  
  // Preload critical CSS
  resourcePreloader.preloadCSS([
    '/static/css/main.css'
  ]);
  
  console.log('🚀 Code splitting optimization initialized');
};

/**
 * Get code splitting statistics
 */
export const getCodeSplittingStats = () => {
  return {
    components: componentPreloader.getPreloadStats(),
    resources: resourcePreloader.getPreloadStats(),
    timestamp: new Date().toISOString()
  };
};

export default {
  withLazyLoading,
  ComponentPreloader,
  ResourcePreloader,
  componentPreloader,
  resourcePreloader,
  initializeCodeSplitting,
  getCodeSplittingStats
};