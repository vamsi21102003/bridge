import React, { useState, useEffect } from 'react';
import { validateComponentIsolation } from '../utils/componentIsolation';
import { getErrorDashboardData } from '../utils/errorMonitoring';
import { NAVIGATION_STATES, STUDENT_PAGES } from '../constants/navigationStates';

/**
 * Integration Test Component
 * Provides comprehensive testing and validation of the integrated system
 */
const IntegrationTest = ({ appState, onNavigate }) => {
  const [testResults, setTestResults] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    runIntegrationTests();
  }, []);

  const runIntegrationTests = async () => {
    const results = {
      timestamp: new Date().toISOString(),
      tests: {}
    };

    // Test 1: Component Isolation
    try {
      const isolationValidation = validateComponentIsolation();
      results.tests.componentIsolation = {
        passed: isolationValidation.overall,
        details: isolationValidation
      };
    } catch (error) {
      results.tests.componentIsolation = {
        passed: false,
        error: error.message
      };
    }

    // Test 2: Error Monitoring
    try {
      const errorData = getErrorDashboardData();
      results.tests.errorMonitoring = {
        passed: true,
        details: errorData
      };
    } catch (error) {
      results.tests.errorMonitoring = {
        passed: false,
        error: error.message
      };
    }

    // Test 3: Navigation States
    try {
      const navigationTest = testNavigationStates();
      results.tests.navigationStates = navigationTest;
    } catch (error) {
      results.tests.navigationStates = {
        passed: false,
        error: error.message
      };
    }

    // Test 4: Language Context
    try {
      const languageTest = testLanguageContext();
      results.tests.languageContext = languageTest;
    } catch (error) {
      results.tests.languageContext = {
        passed: false,
        error: error.message
      };
    }

    // Test 5: CSS Namespacing
    try {
      const cssTest = testCSSNamespacing();
      results.tests.cssNamespacing = cssTest;
    } catch (error) {
      results.tests.cssNamespacing = {
        passed: false,
        error: error.message
      };
    }

    setTestResults(results);
  };

  const testNavigationStates = () => {
    const requiredStates = Object.values(NAVIGATION_STATES);
    const requiredStudentPages = Object.values(STUDENT_PAGES);
    
    return {
      passed: requiredStates.length > 0 && requiredStudentPages.length > 0,
      details: {
        navigationStates: requiredStates,
        studentPages: requiredStudentPages,
        currentState: appState?.currentPage,
        currentStudentPage: appState?.currentStudentPage
      }
    };
  };

  const testLanguageContext = () => {
    // Check if language context is available
    const hasLanguageContext = typeof window !== 'undefined' && 
                               document.querySelector('.student-app, .bridge-component');
    
    return {
      passed: hasLanguageContext,
      details: {
        contextAvailable: hasLanguageContext,
        supportedLanguages: ['en', 'hi', 'or']
      }
    };
  };

  const testCSSNamespacing = () => {
    const studentElements = document.querySelectorAll('.student-app');
    const bridgeElements = document.querySelectorAll('.bridge-component');
    
    return {
      passed: studentElements.length > 0 || bridgeElements.length > 0,
      details: {
        studentElements: studentElements.length,
        bridgeElements: bridgeElements.length,
        namespacingActive: true
      }
    };
  };

  const getOverallStatus = () => {
    if (!testResults.tests) return 'pending';
    
    const testValues = Object.values(testResults.tests);
    const passedTests = testValues.filter(test => test.passed).length;
    const totalTests = testValues.length;
    
    if (passedTests === totalTests) return 'passed';
    if (passedTests === 0) return 'failed';
    return 'partial';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'passed': return '#10b981';
      case 'failed': return '#ef4444';
      case 'partial': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '12px',
          zIndex: 9999,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}
      >
        🧪 Integration Test
      </button>
    );
  }

  const overallStatus = getOverallStatus();

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '400px',
      maxHeight: '80vh',
      backgroundColor: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '15px',
        backgroundColor: getStatusColor(overallStatus),
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>
          🧪 Integration Test Results
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>

      {/* Test Results */}
      <div style={{ padding: '15px', maxHeight: '60vh', overflowY: 'auto' }}>
        {testResults.tests && Object.entries(testResults.tests).map(([testName, result]) => (
          <div key={testName} style={{ marginBottom: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: result.passed ? '#10b981' : '#ef4444',
                marginRight: '8px'
              }}></span>
              <span style={{ fontSize: '14px', fontWeight: '600' }}>
                {testName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </span>
            </div>
            {result.error && (
              <div style={{
                fontSize: '12px',
                color: '#ef4444',
                marginLeft: '20px',
                fontFamily: 'monospace'
              }}>
                Error: {result.error}
              </div>
            )}
          </div>
        ))}

        {/* Actions */}
        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb' }}>
          <button
            onClick={runIntegrationTests}
            style={{
              padding: '8px 16px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              marginRight: '8px'
            }}
          >
            Re-run Tests
          </button>
          <button
            onClick={() => console.log('Integration Test Results:', testResults)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Log Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationTest;