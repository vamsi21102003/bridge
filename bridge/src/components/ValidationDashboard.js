import React, { useState, useEffect } from 'react';
import { integrationTestSuite, runQuickValidation } from '../utils/integrationTesting';
import { getErrorDashboardData } from '../utils/errorMonitoring';
import { validateComponentIsolation } from '../utils/componentIsolation';

/**
 * Validation Dashboard Component
 * Provides comprehensive testing and validation interface for the integrated system
 */
const ValidationDashboard = ({ appState, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [quickValidation, setQuickValidation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Run quick validation on mount
    const validation = runQuickValidation();
    setQuickValidation(validation);
  }, []);

  const runFullTests = async () => {
    setIsRunning(true);
    try {
      const results = await integrationTestSuite.runAllTests(appState, onNavigate);
      setTestResults(results);
    } catch (error) {
      console.error('Failed to run integration tests:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusColor = (passed) => {
    return passed ? '#10b981' : '#ef4444';
  };

  const getStatusIcon = (passed) => {
    return passed ? '✅' : '❌';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '12px 16px',
          backgroundColor: quickValidation?.overallValid ? '#10b981' : '#f59e0b',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        🧪 Validation Dashboard
        {quickValidation && (
          <span style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '12px'
          }}>
            {Object.values(quickValidation.checks).filter(Boolean).length}/{Object.keys(quickValidation.checks).length}
          </span>
        )}
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      width: '500px',
      maxHeight: '80vh',
      backgroundColor: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '20px',
        backgroundColor: '#667eea',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>
          🧪 Integration Validation
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ✕
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#f9fafb'
      }}>
        {['overview', 'tests', 'errors', 'performance'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              backgroundColor: activeTab === tab ? 'white' : 'transparent',
              color: activeTab === tab ? '#667eea' : '#6b7280',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeTab === tab ? '600' : '400',
              borderBottom: activeTab === tab ? '2px solid #667eea' : 'none'
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '20px', maxHeight: '60vh', overflowY: 'auto' }}>
        {activeTab === 'overview' && (
          <OverviewTab 
            quickValidation={quickValidation}
            testResults={testResults}
            onRunTests={runFullTests}
            isRunning={isRunning}
          />
        )}
        
        {activeTab === 'tests' && (
          <TestsTab 
            testResults={testResults}
            onRunTests={runFullTests}
            isRunning={isRunning}
          />
        )}
        
        {activeTab === 'errors' && (
          <ErrorsTab />
        )}
        
        {activeTab === 'performance' && (
          <PerformanceTab />
        )}
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = ({ quickValidation, testResults, onRunTests, isRunning }) => (
  <div>
    <h4 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>System Status</h4>
    
    {quickValidation && (
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          padding: '16px',
          backgroundColor: quickValidation.overallValid ? '#ecfdf5' : '#fef3c7',
          border: `1px solid ${quickValidation.overallValid ? '#10b981' : '#f59e0b'}`,
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px', marginRight: '8px' }}>
              {quickValidation.overallValid ? '✅' : '⚠️'}
            </span>
            <span style={{ fontWeight: '600', color: '#1f2937' }}>
              {quickValidation.overallValid ? 'All Systems Operational' : 'Issues Detected'}
            </span>
          </div>
          
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {Object.entries(quickValidation.checks).map(([check, passed]) => (
              <div key={check} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>{check.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                <span>{passed ? '✅' : '❌'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {testResults && (
      <div style={{ marginBottom: '20px' }}>
        <h5 style={{ margin: '0 0 12px 0', color: '#1f2937' }}>Full Test Results</h5>
        <div style={{
          padding: '16px',
          backgroundColor: testResults.summary.overallPassed ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${testResults.summary.overallPassed ? '#10b981' : '#ef4444'}`,
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Tests Passed:</span>
            <span style={{ fontWeight: '600' }}>
              {testResults.summary.passedTests}/{testResults.summary.totalTests}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Success Rate:</span>
            <span style={{ fontWeight: '600' }}>{testResults.summary.successRate}%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subtests Passed:</span>
            <span style={{ fontWeight: '600' }}>
              {testResults.summary.passedSubtests}/{testResults.summary.totalSubtests}
            </span>
          </div>
        </div>
      </div>
    )}

    <button
      onClick={onRunTests}
      disabled={isRunning}
      style={{
        width: '100%',
        padding: '12px',
        backgroundColor: isRunning ? '#9ca3af' : '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: isRunning ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        fontWeight: '600'
      }}
    >
      {isRunning ? '🔄 Running Tests...' : '🚀 Run Full Integration Tests'}
    </button>
  </div>
);

// Tests Tab Component
const TestsTab = ({ testResults, onRunTests, isRunning }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <h4 style={{ margin: 0, color: '#1f2937' }}>Test Results</h4>
      <button
        onClick={onRunTests}
        disabled={isRunning}
        style={{
          padding: '6px 12px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        {isRunning ? '🔄' : '🔄 Refresh'}
      </button>
    </div>

    {testResults ? (
      <div>
        {Object.entries(testResults.tests).map(([testName, test]) => (
          <div key={testName} style={{ marginBottom: '16px' }}>
            <div style={{
              padding: '12px',
              backgroundColor: test.passed ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${test.passed ? '#22c55e' : '#ef4444'}`,
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ marginRight: '8px' }}>{test.passed ? '✅' : '❌'}</span>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>{test.name}</span>
              </div>
              
              {test.subtests && (
                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                  {Object.entries(test.subtests).map(([subtestName, subtest]) => (
                    <div key={subtestName} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span>{subtest.name}</span>
                      <span>{subtest.passed ? '✅' : '❌'}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {test.error && (
                <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '8px' }}>
                  Error: {test.error}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div style={{ textAlign: 'center', color: '#6b7280', padding: '40px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧪</div>
        <p>No test results yet. Run the integration tests to see detailed results.</p>
      </div>
    )}
  </div>
);

// Errors Tab Component
const ErrorsTab = () => {
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    try {
      const data = getErrorDashboardData();
      setErrorData(data);
    } catch (error) {
      console.error('Failed to get error data:', error);
    }
  }, []);

  return (
    <div>
      <h4 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>Error Monitoring</h4>
      
      {errorData ? (
        <div>
          <div style={{
            padding: '16px',
            backgroundColor: errorData.stats.totalErrors === 0 ? '#ecfdf5' : '#fef3c7',
            border: `1px solid ${errorData.stats.totalErrors === 0 ? '#10b981' : '#f59e0b'}`,
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Total Errors:</span>
              <span style={{ fontWeight: '600' }}>{errorData.stats.totalErrors}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Recent Errors:</span>
              <span style={{ fontWeight: '600' }}>{errorData.stats.recentErrors}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Critical Errors:</span>
              <span style={{ fontWeight: '600' }}>{errorData.stats.criticalErrors}</span>
            </div>
          </div>

          {errorData.recentErrors.length > 0 && (
            <div>
              <h5 style={{ margin: '0 0 12px 0', color: '#1f2937' }}>Recent Errors</h5>
              {errorData.recentErrors.slice(0, 3).map((error, index) => (
                <div key={index} style={{
                  padding: '12px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '6px',
                  marginBottom: '8px'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>
                    {error.type}: {error.message}
                  </div>
                  <div style={{ fontSize: '10px', color: '#6b7280' }}>
                    {new Date(error.timestamp).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: '#6b7280', padding: '40px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
          <p>Error monitoring data not available.</p>
        </div>
      )}
    </div>
  );
};

// Performance Tab Component
const PerformanceTab = () => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const data = {
      loadTime: performance.now(),
      memory: performance.memory || {},
      navigation: performance.getEntriesByType('navigation')[0] || {},
      resources: performance.getEntriesByType('resource').length
    };
    setPerformanceData(data);
  }, []);

  return (
    <div>
      <h4 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>Performance Metrics</h4>
      
      {performanceData && (
        <div>
          <div style={{
            padding: '16px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #22c55e',
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Page Load Time:</span>
              <span style={{ fontWeight: '600' }}>{performanceData.loadTime.toFixed(2)}ms</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Resources Loaded:</span>
              <span style={{ fontWeight: '600' }}>{performanceData.resources}</span>
            </div>
            {performanceData.memory.usedJSHeapSize && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Memory Usage:</span>
                <span style={{ fontWeight: '600' }}>
                  {(performanceData.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB
                </span>
              </div>
            )}
          </div>

          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            <p>Performance metrics are collected in real-time and help identify potential optimization opportunities.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidationDashboard;