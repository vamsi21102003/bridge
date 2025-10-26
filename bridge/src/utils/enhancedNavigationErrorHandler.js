import { NAVIGATION_STATES, STUDENT_PAGES } from '../constants/navigationStates';
import { handleNavigationError } from './navigationErrorHandler';

/**
 * Enhanced navigation error handler with retry mechanisms and user feedback
 */
export class EnhancedNavigationErrorHandler {
  constructor() {
    this.errorCount = 0;
    this.maxRetries = 3;
    this.errorHistory = [];
  }

  /**
   * Handle navigation errors with enhanced recovery
   * @param {Error} error - The navigation error
   * @param {string} targetState - The state we were trying to navigate to
   * @param {function} setAppState - Function to update app state
   * @param {object} currentAppState - Current application state
   * @returns {Promise<string>} - The recovery state
   */
  async handleNavigationError(error, targetState, setAppState, currentAppState) {
    this.errorCount++;
    this.errorHistory.push({
      error: error.message,
      targetState,
      timestamp: new Date().toISOString(),
      currentState: currentAppState.currentPage
    });

    console.error('Enhanced navigation error:', {
      error,
      targetState,
      errorCount: this.errorCount,
      currentState: currentAppState.currentPage
    });

    // If we've exceeded max retries, go to safe state
    if (this.errorCount >= this.maxRetries) {
      console.warn('Max navigation retries exceeded, going to safe state');
      return this.goToSafeState(setAppState, currentAppState);
    }

    // Try to recover based on error type
    return this.attemptRecovery(error, targetState, setAppState, currentAppState);
  }

  /**
   * Attempt to recover from navigation error
   * @param {Error} error - The navigation error
   * @param {string} targetState - The state we were trying to navigate to
   * @param {function} setAppState - Function to update app state
   * @param {object} currentAppState - Current application state
   * @returns {Promise<string>} - The recovery state
   */
  async attemptRecovery(error, targetState, setAppState, currentAppState) {
    // Check if it's a permission/authentication error
    if (this.isAuthenticationError(error, targetState, currentAppState)) {
      return this.handleAuthenticationError(setAppState, currentAppState);
    }

    // Check if it's a component loading error
    if (this.isComponentError(error)) {
      return this.handleComponentError(targetState, setAppState, currentAppState);
    }

    // Check if it's a routing error
    if (this.isRoutingError(error)) {
      return this.handleRoutingError(targetState, setAppState, currentAppState);
    }

    // Default fallback
    return this.fallbackNavigation(targetState, setAppState, currentAppState);
  }

  /**
   * Check if error is authentication related
   */
  isAuthenticationError(error, targetState, currentAppState) {
    const authRequiredStates = [
      NAVIGATION_STATES.PROFILE_COMPLETION,
      NAVIGATION_STATES.STUDENT_FORM,
      NAVIGATION_STATES.STUDENT_DASHBOARD
    ];

    return authRequiredStates.includes(targetState) && !currentAppState.isAuthenticated;
  }

  /**
   * Handle authentication errors
   */
  handleAuthenticationError(setAppState, currentAppState) {
    console.log('Authentication error detected, redirecting to login');
    
    setAppState(prev => ({
      ...prev,
      currentPage: NAVIGATION_STATES.LOGIN,
      userData: null,
      isAuthenticated: false
    }));

    return NAVIGATION_STATES.LOGIN;
  }

  /**
   * Check if error is component loading related
   */
  isComponentError(error) {
    const componentErrorKeywords = ['chunk', 'loading', 'import', 'module'];
    return componentErrorKeywords.some(keyword => 
      error.message.toLowerCase().includes(keyword)
    );
  }

  /**
   * Handle component loading errors
   */
  async handleComponentError(targetState, setAppState, currentAppState) {
    console.log('Component loading error detected, attempting reload');
    
    // Try to reload the page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    // In the meantime, show a loading state
    return currentAppState.currentPage;
  }

  /**
   * Check if error is routing related
   */
  isRoutingError(error) {
    const routingErrorKeywords = ['route', 'path', 'navigation', 'history'];
    return routingErrorKeywords.some(keyword => 
      error.message.toLowerCase().includes(keyword)
    );
  }

  /**
   * Handle routing errors
   */
  handleRoutingError(targetState, setAppState, currentAppState, error = null) {
    console.log('Routing error detected, using fallback navigation');
    
    // Use the original navigation error handler as fallback
    return handleNavigationError(error || new Error('Routing error'), targetState, (fallbackState) => {
      setAppState(prev => ({ ...prev, currentPage: fallbackState }));
    });
  }

  /**
   * Fallback navigation when other recovery methods fail
   */
  fallbackNavigation(targetState, setAppState, currentAppState) {
    console.log('Using fallback navigation');
    
    let fallbackState;
    
    // Determine safe fallback based on user state
    if (currentAppState.isAuthenticated && currentAppState.userType === 'student') {
      fallbackState = NAVIGATION_STATES.STUDENT_DASHBOARD;
    } else if (currentAppState.isAuthenticated) {
      fallbackState = NAVIGATION_STATES.BRIDGE_HOME;
    } else {
      fallbackState = NAVIGATION_STATES.BRIDGE_HOME;
    }

    setAppState(prev => ({ ...prev, currentPage: fallbackState }));
    return fallbackState;
  }

  /**
   * Go to the safest possible state
   */
  goToSafeState(setAppState, currentAppState) {
    console.log('Going to safe state due to repeated errors');
    
    // Clear error state and go to bridge home
    this.reset();
    
    setAppState(prev => ({
      ...prev,
      currentPage: NAVIGATION_STATES.BRIDGE_HOME,
      currentStudentPage: STUDENT_PAGES.HOME
    }));

    return NAVIGATION_STATES.BRIDGE_HOME;
  }

  /**
   * Reset error tracking
   */
  reset() {
    this.errorCount = 0;
    this.errorHistory = [];
  }

  /**
   * Get error statistics
   */
  getErrorStats() {
    return {
      errorCount: this.errorCount,
      errorHistory: this.errorHistory,
      maxRetries: this.maxRetries
    };
  }
}

// Create singleton instance
export const enhancedNavigationErrorHandler = new EnhancedNavigationErrorHandler();

/**
 * Convenience function to handle navigation errors
 * @param {Error} error - The navigation error
 * @param {string} targetState - The state we were trying to navigate to
 * @param {function} setAppState - Function to update app state
 * @param {object} currentAppState - Current application state
 * @returns {Promise<string>} - The recovery state
 */
export const handleEnhancedNavigationError = async (error, targetState, setAppState, currentAppState) => {
  return enhancedNavigationErrorHandler.handleNavigationError(error, targetState, setAppState, currentAppState);
};

export default EnhancedNavigationErrorHandler;