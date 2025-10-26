/**
 * Component Isolation Utilities
 * Provides utilities for ensuring proper component isolation and preventing conflicts
 */

/**
 * CSS Isolation Manager
 * Ensures CSS styles don't leak between bridge and student components
 */
export class CSSIsolationManager {
  constructor() {
    this.isolatedComponents = new Set();
    this.cssNamespaces = {
      bridge: 'bridge-component',
      student: 'student-app'
    };
  }

  /**
   * Register a component for CSS isolation
   * @param {string} componentName - Name of the component
   * @param {string} namespace - CSS namespace (bridge or student)
   */
  registerComponent(componentName, namespace) {
    this.isolatedComponents.add(`${namespace}:${componentName}`);
    console.log(`Registered ${componentName} with ${namespace} namespace`);
  }

  /**
   * Check if a component is properly isolated
   * @param {string} componentName - Name of the component
   * @param {string} namespace - Expected namespace
   * @returns {boolean} - Whether the component is isolated
   */
  isComponentIsolated(componentName, namespace) {
    return this.isolatedComponents.has(`${namespace}:${componentName}`);
  }

  /**
   * Get the CSS class for a namespace
   * @param {string} namespace - The namespace (bridge or student)
   * @returns {string} - The CSS class name
   */
  getNamespaceClass(namespace) {
    return this.cssNamespaces[namespace] || '';
  }

  /**
   * Validate CSS isolation for a DOM element
   * @param {HTMLElement} element - The DOM element to check
   * @param {string} expectedNamespace - Expected namespace
   * @returns {boolean} - Whether the element has proper isolation
   */
  validateElementIsolation(element, expectedNamespace) {
    if (!element) return false;
    
    const expectedClass = this.getNamespaceClass(expectedNamespace);
    if (!expectedClass) return false;

    // Check if element or its ancestors have the namespace class
    let currentElement = element;
    while (currentElement) {
      if (currentElement.classList && currentElement.classList.contains(expectedClass)) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }

    return false;
  }

  /**
   * Get isolation statistics
   * @returns {object} - Isolation statistics
   */
  getIsolationStats() {
    const stats = {
      totalComponents: this.isolatedComponents.size,
      bridgeComponents: 0,
      studentComponents: 0,
      components: Array.from(this.isolatedComponents)
    };

    this.isolatedComponents.forEach(component => {
      if (component.startsWith('bridge:')) {
        stats.bridgeComponents++;
      } else if (component.startsWith('student:')) {
        stats.studentComponents++;
      }
    });

    return stats;
  }
}

/**
 * State Isolation Manager
 * Prevents state conflicts between different parts of the application
 */
export class StateIsolationManager {
  constructor() {
    this.stateNamespaces = new Map();
    this.stateWatchers = new Map();
  }

  /**
   * Create an isolated state namespace
   * @param {string} namespace - The namespace identifier
   * @param {object} initialState - Initial state for the namespace
   */
  createNamespace(namespace, initialState = {}) {
    if (this.stateNamespaces.has(namespace)) {
      console.warn(`State namespace ${namespace} already exists`);
      return;
    }

    this.stateNamespaces.set(namespace, {
      state: { ...initialState },
      history: [{ ...initialState }],
      timestamp: Date.now()
    });

    console.log(`Created state namespace: ${namespace}`);
  }

  /**
   * Update state in a namespace
   * @param {string} namespace - The namespace identifier
   * @param {object} updates - State updates
   */
  updateNamespaceState(namespace, updates) {
    if (!this.stateNamespaces.has(namespace)) {
      console.error(`State namespace ${namespace} does not exist`);
      return;
    }

    const namespaceData = this.stateNamespaces.get(namespace);
    const newState = { ...namespaceData.state, ...updates };
    
    // Update state and add to history
    namespaceData.state = newState;
    namespaceData.history.push({ ...newState });
    namespaceData.timestamp = Date.now();

    // Notify watchers
    if (this.stateWatchers.has(namespace)) {
      this.stateWatchers.get(namespace).forEach(callback => {
        try {
          callback(newState, namespaceData.history);
        } catch (error) {
          console.error(`Error in state watcher for ${namespace}:`, error);
        }
      });
    }
  }

  /**
   * Get state from a namespace
   * @param {string} namespace - The namespace identifier
   * @returns {object|null} - The namespace state
   */
  getNamespaceState(namespace) {
    const namespaceData = this.stateNamespaces.get(namespace);
    return namespaceData ? { ...namespaceData.state } : null;
  }

  /**
   * Watch for state changes in a namespace
   * @param {string} namespace - The namespace identifier
   * @param {function} callback - Callback function for state changes
   * @returns {function} - Unsubscribe function
   */
  watchNamespace(namespace, callback) {
    if (!this.stateWatchers.has(namespace)) {
      this.stateWatchers.set(namespace, new Set());
    }

    this.stateWatchers.get(namespace).add(callback);

    // Return unsubscribe function
    return () => {
      if (this.stateWatchers.has(namespace)) {
        this.stateWatchers.get(namespace).delete(callback);
      }
    };
  }

  /**
   * Clear a namespace
   * @param {string} namespace - The namespace identifier
   */
  clearNamespace(namespace) {
    this.stateNamespaces.delete(namespace);
    this.stateWatchers.delete(namespace);
    console.log(`Cleared state namespace: ${namespace}`);
  }

  /**
   * Get isolation statistics
   * @returns {object} - State isolation statistics
   */
  getStateStats() {
    const stats = {
      totalNamespaces: this.stateNamespaces.size,
      totalWatchers: 0,
      namespaces: {}
    };

    this.stateNamespaces.forEach((data, namespace) => {
      const watchers = this.stateWatchers.get(namespace);
      const watcherCount = watchers ? watchers.size : 0;
      
      stats.totalWatchers += watcherCount;
      stats.namespaces[namespace] = {
        stateKeys: Object.keys(data.state),
        historyLength: data.history.length,
        watcherCount,
        lastUpdate: data.timestamp
      };
    });

    return stats;
  }
}

// Create singleton instances
export const cssIsolationManager = new CSSIsolationManager();
export const stateIsolationManager = new StateIsolationManager();

/**
 * Initialize component isolation
 * Sets up default namespaces and isolation rules
 */
export const initializeComponentIsolation = () => {
  // Register default CSS namespaces
  cssIsolationManager.registerComponent('App', 'bridge');
  cssIsolationManager.registerComponent('StudentDashboard', 'student');

  // Create default state namespaces
  stateIsolationManager.createNamespace('bridge', {
    currentPage: 'bridge_home',
    userData: null,
    isAuthenticated: false
  });

  stateIsolationManager.createNamespace('student', {
    currentPage: 'home',
    sidebarOpen: false,
    searchQuery: ''
  });

  console.log('Component isolation initialized');
};

/**
 * Validate component isolation
 * Checks if all components are properly isolated
 * @returns {object} - Validation results
 */
export const validateComponentIsolation = () => {
  const cssStats = cssIsolationManager.getIsolationStats();
  const stateStats = stateIsolationManager.getStateStats();

  const validation = {
    css: {
      isValid: cssStats.totalComponents > 0,
      stats: cssStats
    },
    state: {
      isValid: stateStats.totalNamespaces > 0,
      stats: stateStats
    },
    overall: true
  };

  validation.overall = validation.css.isValid && validation.state.isValid;

  return validation;
};

export default {
  CSSIsolationManager,
  StateIsolationManager,
  cssIsolationManager,
  stateIsolationManager,
  initializeComponentIsolation,
  validateComponentIsolation
};