import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Bridge Components (updated paths)
import Header from './components/bridge-components/Header';
import Hero from './components/bridge-components/Hero';
import Features from './components/bridge-components/Features';
import FreemiumFeatures from './components/bridge-components/FreemiumFeatures';
import OpportunitiesStatic from './components/bridge-components/Opportunities/OpportunitiesStatic';
import Dashboard from './components/bridge-components/Dashboard';
import Footer from './components/bridge-components/Footer';
import LoginPage from './components/bridge-components/LoginPage';
import ProfileCompletionForm from './components/bridge-components/ProfileCompletionForm';
import StudentForm from './components/bridge-components/StudentForm';
import ScrollTriggeredModal from './components/bridge-components/ScrollTriggeredModal';

// Context and utilities
import { LanguageProvider } from './contexts/LanguageContext';
import { NAVIGATION_STATES, DEFAULT_APP_STATE, STUDENT_PAGES } from './constants/navigationStates';
import { handleNavigationError } from './utils/navigationErrorHandler';
import { handleEnhancedNavigationError } from './utils/enhancedNavigationErrorHandler';
import { initializeComponentIsolation } from './utils/componentIsolation';
import { initializeErrorMonitoring } from './utils/errorMonitoring';

import { initializeCodeSplitting } from './utils/codeSplitting';
import { initializeMemoryOptimization } from './utils/memoryOptimizer';
import { initializeFinalOptimizations } from './utils/finalOptimizations';
import { NavigationLoader, PageTransitionLoader } from './components/LoadingStates';
import StudentDashboardRouter from './components/StudentDashboardRouter';
import { injectSharedVariables } from './utils/cssConflictPrevention';
import { loadConditionalCSS } from './utils/cssLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ComponentErrorBoundary from './components/ComponentErrorBoundary';


// Styles
import './styles/bridge-styles/globals.css';
import './styles/student-styles/index.css';
import './App.css';

function App() {
  const [appState, setAppState] = useState(DEFAULT_APP_STATE);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigationMessage, setNavigationMessage] = useState('');

  // Initialize CSS and shared variables
  useEffect(() => {
    injectSharedVariables();
    loadConditionalCSS(appState.currentPage);
    initializeComponentIsolation();
    initializeErrorMonitoring();

    initializeCodeSplitting();
    initializeMemoryOptimization();
    
    // Apply final optimizations after other systems are initialized
    setTimeout(() => {
      initializeFinalOptimizations();
    }, 1000);
  }, []);

  // Load CSS when navigation state changes
  useEffect(() => {
    loadConditionalCSS(appState.currentPage);
  }, [appState.currentPage]);

  // Get navigation message for loading state
  const getNavigationMessage = (page) => {
    switch (page) {
      case NAVIGATION_STATES.LOGIN:
        return 'Loading login...';
      case NAVIGATION_STATES.PROFILE_COMPLETION:
        return 'Loading profile form...';
      case NAVIGATION_STATES.STUDENT_FORM:
        return 'Loading student form...';
      case NAVIGATION_STATES.STUDENT_DASHBOARD:
        return 'Loading student dashboard...';
      case NAVIGATION_STATES.BRIDGE_HOME:
      default:
        return 'Loading...';
    }
  };

  // Safe navigation with error handling
  const navigateToPage = (page, userData = null, studentPage = null) => {
    try {
      // Show loading state
      setIsNavigating(true);
      setNavigationMessage(getNavigationMessage(page));

      // Simulate brief loading for smooth transition
      setTimeout(() => {
        setAppState(prev => ({
          ...prev,
          currentPage: page,
          currentStudentPage: studentPage || prev.currentStudentPage,
          userData: userData || prev.userData,
          isAuthenticated: userData ? true : prev.isAuthenticated,
          userType: userData?.userType || prev.userType
        }));
        
        // Hide loading state
        setTimeout(() => {
          setIsNavigating(false);
          setNavigationMessage('');
        }, 300);
      }, 150);
    } catch (error) {
      // Use enhanced navigation error handler
      handleEnhancedNavigationError(error, page, setAppState, appState).catch(() => {
        // Fallback to basic error handler if enhanced handler fails
        handleNavigationError(error, page, (fallbackPage) => {
          setAppState(prev => ({ ...prev, currentPage: fallbackPage }));
        });
      });
    }
  };

  // Navigate within student dashboard
  const navigateToStudentPage = (studentPage) => {
    setAppState(prev => ({
      ...prev,
      currentStudentPage: studentPage
    }));
  };

  const handleLoginSuccess = (data) => {
    navigateToPage(NAVIGATION_STATES.PROFILE_COMPLETION, data);
  };

  const handleProfileComplete = (profileData) => {
    const updatedUserData = { ...appState.userData, ...profileData };
    
    // Navigate to appropriate form based on user role
    if (updatedUserData.userType === 'student') {
      navigateToPage(NAVIGATION_STATES.STUDENT_FORM, updatedUserData);
    } else if (updatedUserData.userType === 'employer') {
      navigateToPage(NAVIGATION_STATES.BRIDGE_HOME, updatedUserData);
    } else if (updatedUserData.userType === 'institution') {
      navigateToPage(NAVIGATION_STATES.BRIDGE_HOME, updatedUserData);
    }
  };

  const handleProfileSkip = () => {
    // If user is a student or no user type is set, navigate to student form first
    // Otherwise, navigate to bridge home
    if (!appState.userData?.userType || appState.userData?.userType === 'student') {
      navigateToPage(NAVIGATION_STATES.STUDENT_FORM, appState.userData);
    } else {
      navigateToPage(NAVIGATION_STATES.BRIDGE_HOME, appState.userData);
    }
  };

  const handleStudentFormComplete = (studentData) => {
    const updatedUserData = { ...appState.userData, ...studentData };
    navigateToPage(NAVIGATION_STATES.STUDENT_DASHBOARD, updatedUserData);
  };

  const handleStudentFormSkip = () => {
    navigateToPage(NAVIGATION_STATES.STUDENT_DASHBOARD);
  };

  const handleBackToProfile = () => {
    navigateToPage(NAVIGATION_STATES.PROFILE_COMPLETION);
  };

  const handleBackToLogin = () => {
    navigateToPage(NAVIGATION_STATES.LOGIN);
    setAppState(prev => ({ ...prev, userData: null, isAuthenticated: false }));
  };

  const handleBackToHome = () => {
    navigateToPage(NAVIGATION_STATES.BRIDGE_HOME);
  };

  const handleShowLogin = () => {
    navigateToPage(NAVIGATION_STATES.LOGIN);
  };

  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case NAVIGATION_STATES.LOGIN:
        return (
          <ComponentErrorBoundary componentName="LoginPage">
            <LoginPage 
              onLoginSuccess={handleLoginSuccess} 
              onClose={handleBackToHome} 
            />
          </ComponentErrorBoundary>
        );
      
      case NAVIGATION_STATES.PROFILE_COMPLETION:
        return (
          <ComponentErrorBoundary componentName="ProfileCompletionForm">
            <ProfileCompletionForm
              userRole={appState.userData?.userType}
              initialData={appState.userData}
              onSubmit={handleProfileComplete}
              onSkip={handleProfileSkip}
              onBack={handleBackToLogin}
            />
          </ComponentErrorBoundary>
        );
      
      case NAVIGATION_STATES.STUDENT_FORM:
        return (
          <ComponentErrorBoundary componentName="StudentForm">
            <StudentForm
              studentData={appState.userData}
              onSubmit={handleStudentFormComplete}
              onSkip={handleStudentFormSkip}
              onBack={handleBackToProfile}
            />
          </ComponentErrorBoundary>
        );
      
      case NAVIGATION_STATES.STUDENT_DASHBOARD:
        return (
          <ComponentErrorBoundary componentName="StudentDashboard">
            <StudentDashboardRouter 
              userData={appState.userData}
              onBackToHome={handleBackToHome}
              currentStudentPage={appState.currentStudentPage}
              onNavigateToStudentPage={navigateToStudentPage}
            />
          </ComponentErrorBoundary>
        );
      
      case NAVIGATION_STATES.BRIDGE_HOME:
      default:
        return (
          <ComponentErrorBoundary componentName="BridgeHome">
            <div className="App bridge-component">
              <Header onShowLogin={handleShowLogin} />
              <Hero onShowLogin={handleShowLogin} />
              <Features />
              <FreemiumFeatures />
              <OpportunitiesStatic />
              <Dashboard />
              <Footer />
              
              {/* Scroll-triggered login modal */}
              <ScrollTriggeredModal onLoginSuccess={handleLoginSuccess} />
            </div>
          </ComponentErrorBoundary>
        );
    }
  };

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          {renderCurrentPage()}

        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;