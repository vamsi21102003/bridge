import React, { Suspense, lazy } from 'react';
import StudentComponentErrorBoundary from './StudentComponentErrorBoundary';

/**
 * Lazy Loading Wrapper for Student Components
 * Implements code splitting and lazy loading for better performance
 */

// Loading component
const ComponentLoader = ({ componentName }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    margin: '16px 0'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #e5e7eb',
        borderTop: '3px solid #667eea',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p style={{ color: '#6b7280', fontSize: '14px' }}>
        Loading {componentName}...
      </p>
    </div>
  </div>
);

// Lazy load student pages
export const LazyHome = lazy(() => 
  import('../pages/student-pages/Home').catch(error => {
    console.error('Failed to load Home component:', error);
    return { default: () => <div>Failed to load Home component</div> };
  })
);

export const LazyProfile = lazy(() => 
  import('../pages/student-pages/Profile').catch(error => {
    console.error('Failed to load Profile component:', error);
    return { default: () => <div>Failed to load Profile component</div> };
  })
);

export const LazyProfileEdit = lazy(() => 
  import('../pages/student-pages/ProfileEdit').catch(error => {
    console.error('Failed to load ProfileEdit component:', error);
    return { default: () => <div>Failed to load ProfileEdit component</div> };
  })
);

export const LazyOpportunities = lazy(() => 
  import('../pages/student-pages/Opportunities').catch(error => {
    console.error('Failed to load Opportunities component:', error);
    return { default: () => <div>Failed to load Opportunities component</div> };
  })
);

export const LazyMentors = lazy(() => 
  import('../pages/student-pages/Mentors').catch(error => {
    console.error('Failed to load Mentors component:', error);
    return { default: () => <div>Failed to load Mentors component</div> };
  })
);

export const LazyGames = lazy(() => 
  import('../pages/student-pages/Games').catch(error => {
    console.error('Failed to load Games component:', error);
    return { default: () => <div>Failed to load Games component</div> };
  })
);

export const LazyBadges = lazy(() => 
  import('../pages/student-pages/Badges').catch(error => {
    console.error('Failed to load Badges component:', error);
    return { default: () => <div>Failed to load Badges component</div> };
  })
);

export const LazyAIPro = lazy(() => 
  import('../pages/student-pages/AIPro').catch(error => {
    console.error('Failed to load AIPro component:', error);
    return { default: () => <div>Failed to load AIPro component</div> };
  })
);

/**
 * Higher-order component for lazy loading with error boundaries
 */
export const withLazyLoading = (LazyComponent, componentName) => {
  return React.forwardRef((props, ref) => (
    <StudentComponentErrorBoundary componentName={componentName}>
      <Suspense fallback={<ComponentLoader componentName={componentName} />}>
        <LazyComponent {...props} ref={ref} />
      </Suspense>
    </StudentComponentErrorBoundary>
  ));
};

// Wrapped lazy components with error boundaries
export const LazyHomeWithBoundary = withLazyLoading(LazyHome, 'Home');
export const LazyProfileWithBoundary = withLazyLoading(LazyProfile, 'Profile');
export const LazyProfileEditWithBoundary = withLazyLoading(LazyProfileEdit, 'ProfileEdit');
export const LazyOpportunitiesWithBoundary = withLazyLoading(LazyOpportunities, 'Opportunities');
export const LazyMentorsWithBoundary = withLazyLoading(LazyMentors, 'Mentors');
export const LazyGamesWithBoundary = withLazyLoading(LazyGames, 'Games');
export const LazyBadgesWithBoundary = withLazyLoading(LazyBadges, 'Badges');
export const LazyAIProWithBoundary = withLazyLoading(LazyAIPro, 'AIPro');

/**
 * Preloader utility for warming up lazy components
 */
export class LazyComponentPreloader {
  constructor() {
    this.preloadedComponents = new Set();
    this.preloadPromises = new Map();
  }

  /**
   * Preload a component
   * @param {string} componentName - Name of component to preload
   * @returns {Promise} - Preload promise
   */
  async preload(componentName) {
    if (this.preloadedComponents.has(componentName)) {
      return this.preloadPromises.get(componentName);
    }

    let preloadPromise;

    switch (componentName) {
      case 'Home':
        preloadPromise = import('../pages/student-pages/Home');
        break;
      case 'Profile':
        preloadPromise = import('../pages/student-pages/Profile');
        break;
      case 'ProfileEdit':
        preloadPromise = import('../pages/student-pages/ProfileEdit');
        break;
      case 'Opportunities':
        preloadPromise = import('../pages/student-pages/Opportunities');
        break;
      case 'Mentors':
        preloadPromise = import('../pages/student-pages/Mentors');
        break;
      case 'Games':
        preloadPromise = import('../pages/student-pages/Games');
        break;
      case 'Badges':
        preloadPromise = import('../pages/student-pages/Badges');
        break;
      case 'AIPro':
        preloadPromise = import('../pages/student-pages/AIPro');
        break;
      default:
        console.warn(`Unknown component for preloading: ${componentName}`);
        return Promise.resolve();
    }

    this.preloadPromises.set(componentName, preloadPromise);

    try {
      await preloadPromise;
      this.preloadedComponents.add(componentName);
      console.log(`Preloaded component: ${componentName}`);
    } catch (error) {
      console.error(`Failed to preload component ${componentName}:`, error);
    }

    return preloadPromise;
  }

  /**
   * Preload multiple components
   * @param {Array<string>} componentNames - Array of component names
   * @returns {Promise} - Promise that resolves when all components are preloaded
   */
  async preloadMultiple(componentNames) {
    const preloadPromises = componentNames.map(name => this.preload(name));
    return Promise.allSettled(preloadPromises);
  }

  /**
   * Preload components based on user behavior
   * @param {string} currentPage - Current page name
   */
  async preloadBasedOnBehavior(currentPage) {
    const preloadStrategies = {
      'Home': ['Profile', 'Opportunities'], // Users often go to profile or opportunities from home
      'Profile': ['ProfileEdit'], // Users often edit profile from profile page
      'Opportunities': ['Mentors'], // Users often look for mentors after opportunities
      'Games': ['Badges'], // Users often check badges after games
      'Mentors': ['Profile'] // Users often update profile after mentor sessions
    };

    const componentsToPreload = preloadStrategies[currentPage] || [];
    if (componentsToPreload.length > 0) {
      console.log(`Preloading components based on current page (${currentPage}):`, componentsToPreload);
      await this.preloadMultiple(componentsToPreload);
    }
  }

  /**
   * Get preload status
   * @returns {object} - Preload status
   */
  getPreloadStatus() {
    return {
      preloadedComponents: Array.from(this.preloadedComponents),
      pendingPreloads: Array.from(this.preloadPromises.keys()).filter(
        name => !this.preloadedComponents.has(name)
      )
    };
  }
}

// Create singleton instance
export const lazyComponentPreloader = new LazyComponentPreloader();

// CSS for loading animation
const loadingStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject loading styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = loadingStyles;
  document.head.appendChild(styleSheet);
}

export default {
  LazyHome,
  LazyProfile,
  LazyProfileEdit,
  LazyOpportunities,
  LazyMentors,
  LazyGames,
  LazyBadges,
  LazyAIPro,
  LazyHomeWithBoundary,
  LazyProfileWithBoundary,
  LazyProfileEditWithBoundary,
  LazyOpportunitiesWithBoundary,
  LazyMentorsWithBoundary,
  LazyGamesWithBoundary,
  LazyBadgesWithBoundary,
  LazyAIProWithBoundary,
  withLazyLoading,
  lazyComponentPreloader
};