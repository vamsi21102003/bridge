import React, { useState, useEffect } from 'react';
import { bundleAnalyzer, runQuickBundleAnalysis } from '../utils/bundleAnalyzer';

/**
 * Performance Monitor Component
 * Provides real-time performance monitoring and optimization insights
 */
const PerformanceMonitor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const [bundleAnalysis, setBundleAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // Run initial quick analysis
    const quickAnalysis = runQuickBundleAnalysis();
    setBundleAnalysis(quickAnalysis);

    // Monitor performance metrics
    const interval = setInterval(() => {
      updatePerformanceMetrics();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const updatePerformanceMetrics = () => {
    const metrics = {
      timestamp: new Date().toISOString(),
      memory: performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
      } : null,
      timing: {
        loadTime: performance.now(),
        domContentLoaded: performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd || 0,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      },
      resources: {
        total: performance.getEntriesByType('resource').length,
        javascript: performance.getEntriesByType('resource').filter(r => r.name.endsWith('.js')).length,
        css: performance.getEntriesByType('resource').filter(r => r.name.endsWith('.css')).length,
        images: performance.getEntriesByType('resource').filter(r => /\.(png|jpg|jpeg|gif|svg|webp)$/.test(r.name)).length
      }
    };

    setPerformanceData(metrics);
  };

  const runFullAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const analysis = await bundleAnalyzer.analyzeBundleSize();
      setBundleAnalysis(analysis);
    } catch (error) {
      console.error('Failed to run bundle analysis:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getPerformanceScore = () => {
    if (!performanceData) return 0;
    
    let score = 100;
    
    // Memory usage score
    if (performanceData.memory) {
      const memoryUsage = performanceData.memory.used / performanceData.memory.limit;
      if (memoryUsage > 0.8) score -= 20;
      else if (memoryUsage > 0.6) score -= 10;
    }
    
    // Load time score
    if (performanceData.timing.loadTime > 3000) score -= 15;
    else if (performanceData.timing.loadTime > 1000) score -= 5;
    
    // Resource count score
    if (performanceData.resources.total > 50) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#10b981';
    if (score >= 70) return '#f59e0b';
    return '#ef4444';
  };

  if (!isVisible) {
    const score = getPerformanceScore();
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '20px',
          padding: '10px 14px',
          backgroundColor: getScoreColor(score),
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 9999,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        ⚡ Performance
        <span style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          padding: '2px 6px',
          borderRadius: '10px',
          fontSize: '10px'
        }}>
          {score}
        </span>
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      width: '350px',
      maxHeight: '70vh',
      backgroundColor: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px',
        backgroundColor: '#667eea',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
          ⚡ Performance Monitor
        </h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '16px', maxHeight: '50vh', overflowY: 'auto' }}>
        {/* Performance Score */}
        {performanceData && (
          <div style={{
            padding: '12px',
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: getScoreColor(getPerformanceScore()),
              marginBottom: '4px'
            }}>
              {getPerformanceScore()}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              Performance Score
            </div>
          </div>
        )}

        {/* Memory Usage */}
        {performanceData?.memory && (
          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#374151' }}>
              Memory Usage
            </h5>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '4px'
            }}>
              <span>Used: {performanceData.memory.used}MB</span>
              <span>Limit: {performanceData.memory.limit}MB</span>
            </div>
            <div style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#e5e7eb',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(performanceData.memory.used / performanceData.memory.limit) * 100}%`,
                height: '100%',
                backgroundColor: performanceData.memory.used / performanceData.memory.limit > 0.8 ? '#ef4444' : '#10b981',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>
        )}

        {/* Resource Count */}
        {performanceData?.resources && (
          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#374151' }}>
              Resources Loaded
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
              <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontWeight: '600', color: '#374151' }}>Total</div>
                <div style={{ color: '#6b7280' }}>{performanceData.resources.total}</div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontWeight: '600', color: '#374151' }}>JS</div>
                <div style={{ color: '#6b7280' }}>{performanceData.resources.javascript}</div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontWeight: '600', color: '#374151' }}>CSS</div>
                <div style={{ color: '#6b7280' }}>{performanceData.resources.css}</div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontWeight: '600', color: '#374151' }}>Images</div>
                <div style={{ color: '#6b7280' }}>{performanceData.resources.images}</div>
              </div>
            </div>
          </div>
        )}

        {/* Bundle Analysis */}
        {bundleAnalysis && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h5 style={{ margin: 0, fontSize: '14px', color: '#374151' }}>
                Bundle Analysis
              </h5>
              <button
                onClick={runFullAnalysis}
                disabled={isAnalyzing}
                style={{
                  padding: '4px 8px',
                  fontSize: '10px',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isAnalyzing ? 'not-allowed' : 'pointer'
                }}
              >
                {isAnalyzing ? '🔄' : '🔄 Refresh'}
              </button>
            </div>
            
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Total Size:</span>
                <span>{Math.round(bundleAnalysis.totalSize / 1024)}KB</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>JS Size:</span>
                <span>{Math.round(bundleAnalysis.javascript.size / 1024)}KB</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>CSS Size:</span>
                <span>{Math.round(bundleAnalysis.css.size / 1024)}KB</span>
              </div>
            </div>

            {bundleAnalysis.recommendations && bundleAnalysis.recommendations.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#f59e0b', marginBottom: '4px' }}>
                  Recommendations:
                </div>
                {bundleAnalysis.recommendations.slice(0, 2).map((rec, index) => (
                  <div key={index} style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>
                    • {rec}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={updatePerformanceMetrics}
            style={{
              flex: 1,
              padding: '8px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => console.log('Performance Data:', { performanceData, bundleAnalysis })}
            style={{
              flex: 1,
              padding: '8px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            📊 Log Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;