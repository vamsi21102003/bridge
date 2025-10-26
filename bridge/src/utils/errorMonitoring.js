/**
 * Error Monitoring and Reporting System
 * Provides comprehensive error tracking and reporting for the application
 */

export class ErrorMonitor {
  constructor() {
    this.errors = [];
    this.maxErrors = 100; // Keep last 100 errors
    this.errorCounts = new Map();
    this.isInitialized = false;
  }

  /**
   * Initialize error monitoring
   */
  initialize() {
    if (this.isInitialized) return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        timestamp: new Date().toISOString()
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled promise rejection',
        reason: event.reason,
        timestamp: new Date().toISOString()
      });
    });

    // React error boundary integration
    this.setupReactErrorCapture();

    this.isInitialized = true;
    console.log('Error monitoring initialized');
  }

  /**
   * Capture an error
   * @param {object} errorData - Error data to capture
   */
  captureError(errorData) {
    const enrichedError = {
      id: this.generateErrorId(),
      ...errorData,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: errorData.timestamp || new Date().toISOString(),
      stackTrace: errorData.error?.stack || 'No stack trace available'
    };

    // Add to errors array
    this.errors.unshift(enrichedError);
    
    // Keep only the last maxErrors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(0, this.maxErrors);
    }

    // Update error counts
    const errorKey = `${errorData.type}:${errorData.message}`;
    this.errorCounts.set(errorKey, (this.errorCounts.get(errorKey) || 0) + 1);

    // Log error
    console.error('Error captured:', enrichedError);

    // Check if this is a critical error
    if (this.isCriticalError(enrichedError)) {
      this.handleCriticalError(enrichedError);
    }

    // Report to external service (if configured)
    this.reportError(enrichedError);
  }

  /**
   * Generate unique error ID
   * @returns {string} - Unique error ID
   */
  generateErrorId() {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Check if error is critical
   * @param {object} errorData - Error data
   * @returns {boolean} - Whether error is critical
   */
  isCriticalError(errorData) {
    const criticalKeywords = [
      'navigation',
      'authentication',
      'network',
      'chunk',
      'module'
    ];

    return criticalKeywords.some(keyword => 
      errorData.message.toLowerCase().includes(keyword)
    );
  }

  /**
   * Handle critical errors
   * @param {object} errorData - Critical error data
   */
  handleCriticalError(errorData) {
    console.error('CRITICAL ERROR DETECTED:', errorData);
    
    // Could trigger user notification
    // this.notifyUser('A critical error occurred. The page may need to be refreshed.');
    
    // Could trigger automatic recovery
    // this.attemptRecovery(errorData);
  }

  /**
   * Report error to external service
   * @param {object} errorData - Error data to report
   */
  reportError(errorData) {
    // This would integrate with error reporting services like Sentry, LogRocket, etc.
    // For now, we'll just log it
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send to error reporting service
      console.log('Would report error to external service:', errorData);
    }
  }

  /**
   * Setup React error boundary integration
   */
  setupReactErrorCapture() {
    // This method can be called by error boundaries to report React errors
    window.captureReactError = (error, errorInfo, componentName) => {
      this.captureError({
        type: 'react',
        message: error.message,
        componentName,
        error,
        errorInfo,
        timestamp: new Date().toISOString()
      });
    };
  }

  /**
   * Get error statistics
   * @returns {object} - Error statistics
   */
  getErrorStats() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const recentErrors = this.errors.filter(error => 
      new Date(error.timestamp) > oneHourAgo
    );

    const dailyErrors = this.errors.filter(error => 
      new Date(error.timestamp) > oneDayAgo
    );

    const errorsByType = {};
    this.errors.forEach(error => {
      errorsByType[error.type] = (errorsByType[error.type] || 0) + 1;
    });

    return {
      totalErrors: this.errors.length,
      recentErrors: recentErrors.length,
      dailyErrors: dailyErrors.length,
      errorsByType,
      topErrors: this.getTopErrors(),
      criticalErrors: this.errors.filter(error => this.isCriticalError(error)).length
    };
  }

  /**
   * Get top errors by frequency
   * @param {number} limit - Number of top errors to return
   * @returns {Array} - Top errors
   */
  getTopErrors(limit = 5) {
    return Array.from(this.errorCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([error, count]) => ({ error, count }));
  }

  /**
   * Get recent errors
   * @param {number} limit - Number of recent errors to return
   * @returns {Array} - Recent errors
   */
  getRecentErrors(limit = 10) {
    return this.errors.slice(0, limit);
  }

  /**
   * Clear error history
   */
  clearErrors() {
    this.errors = [];
    this.errorCounts.clear();
    console.log('Error history cleared');
  }

  /**
   * Export error data
   * @returns {object} - Exportable error data
   */
  exportErrorData() {
    return {
      errors: this.errors,
      stats: this.getErrorStats(),
      exportTime: new Date().toISOString()
    };
  }
}

// Create singleton instance
export const errorMonitor = new ErrorMonitor();

/**
 * Initialize error monitoring
 */
export const initializeErrorMonitoring = () => {
  errorMonitor.initialize();
};

/**
 * Capture a custom error
 * @param {string} message - Error message
 * @param {object} context - Additional context
 */
export const captureCustomError = (message, context = {}) => {
  errorMonitor.captureError({
    type: 'custom',
    message,
    context,
    timestamp: new Date().toISOString()
  });
};

/**
 * Get error monitoring dashboard data
 * @returns {object} - Dashboard data
 */
export const getErrorDashboardData = () => {
  return {
    stats: errorMonitor.getErrorStats(),
    recentErrors: errorMonitor.getRecentErrors(),
    topErrors: errorMonitor.getTopErrors()
  };
};

export default ErrorMonitor;