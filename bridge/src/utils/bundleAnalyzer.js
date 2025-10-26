/**
 * Bundle Analyzer Utility
 * Provides bundle size analysis and optimization recommendations
 */

export class BundleAnalyzer {
  constructor() {
    this.analysisResults = {};
    this.optimizationRecommendations = [];
  }

  /**
   * Analyze current bundle size and performance
   * @returns {object} - Analysis results
   */
  async analyzeBundleSize() {
    const analysis = {
      timestamp: new Date().toISOString(),
      metrics: {},
      recommendations: []
    };

    try {
      // Analyze resource loading
      analysis.metrics.resources = this.analyzeResourceLoading();
      
      // Analyze JavaScript bundles
      analysis.metrics.javascript = this.analyzeJavaScriptBundles();
      
      // Analyze CSS bundles
      analysis.metrics.css = this.analyzeCSSBundles();
      
      // Analyze component loading
      analysis.metrics.components = this.analyzeComponentLoading();
      
      // Generate optimization recommendations
      analysis.recommendations = this.generateOptimizationRecommendations(analysis.metrics);
      
      // Calculate overall score
      analysis.performanceScore = this.calculatePerformanceScore(analysis.metrics);
      
    } catch (error) {
      analysis.error = error.message;
    }

    return analysis;
  }

  /**
   * Analyze resource loading performance
   */
  analyzeResourceLoading() {
    const resources = performance.getEntriesByType('resource');
    
    const analysis = {
      totalResources: resources.length,
      totalSize: 0,
      totalLoadTime: 0,
      resourceTypes: {},
      largestResources: [],
      slowestResources: []
    };

    resources.forEach(resource => {
      const type = this.getResourceType(resource.name);
      const size = resource.transferSize || 0;
      const loadTime = resource.responseEnd - resource.startTime;

      analysis.totalSize += size;
      analysis.totalLoadTime += loadTime;

      if (!analysis.resourceTypes[type]) {
        analysis.resourceTypes[type] = {
          count: 0,
          totalSize: 0,
          totalLoadTime: 0
        };
      }

      analysis.resourceTypes[type].count++;
      analysis.resourceTypes[type].totalSize += size;
      analysis.resourceTypes[type].totalLoadTime += loadTime;

      // Track largest resources
      if (size > 100000) { // > 100KB
        analysis.largestResources.push({
          name: resource.name,
          size,
          type
        });
      }

      // Track slowest resources
      if (loadTime > 1000) { // > 1 second
        analysis.slowestResources.push({
          name: resource.name,
          loadTime,
          type
        });
      }
    });

    // Sort by size and load time
    analysis.largestResources.sort((a, b) => b.size - a.size);
    analysis.slowestResources.sort((a, b) => b.loadTime - a.loadTime);

    return analysis;
  }

  /**
   * Analyze JavaScript bundles
   */
  analyzeJavaScriptBundles() {
    const jsResources = performance.getEntriesByType('resource')
      .filter(resource => resource.name.endsWith('.js'));

    const analysis = {
      bundleCount: jsResources.length,
      totalSize: 0,
      mainBundle: null,
      chunkBundles: [],
      vendorBundles: []
    };

    jsResources.forEach(resource => {
      const size = resource.transferSize || 0;
      analysis.totalSize += size;

      const name = resource.name.split('/').pop();
      
      if (name.includes('main') || name.includes('app')) {
        analysis.mainBundle = {
          name,
          size,
          loadTime: resource.responseEnd - resource.startTime
        };
      } else if (name.includes('chunk') || name.includes('lazy')) {
        analysis.chunkBundles.push({
          name,
          size,
          loadTime: resource.responseEnd - resource.startTime
        });
      } else if (name.includes('vendor') || name.includes('node_modules')) {
        analysis.vendorBundles.push({
          name,
          size,
          loadTime: resource.responseEnd - resource.startTime
        });
      }
    });

    return analysis;
  }

  /**
   * Analyze CSS bundles
   */
  analyzeCSSBundles() {
    const cssResources = performance.getEntriesByType('resource')
      .filter(resource => resource.name.endsWith('.css'));

    const analysis = {
      bundleCount: cssResources.length,
      totalSize: 0,
      bundles: []
    };

    cssResources.forEach(resource => {
      const size = resource.transferSize || 0;
      analysis.totalSize += size;

      analysis.bundles.push({
        name: resource.name.split('/').pop(),
        size,
        loadTime: resource.responseEnd - resource.startTime
      });
    });

    return analysis;
  }

  /**
   * Analyze component loading patterns
   */
  analyzeComponentLoading() {
    const analysis = {
      studentComponents: this.countComponents('.student-app'),
      bridgeComponents: this.countComponents('.bridge-component'),
      totalComponents: 0,
      lazyLoadCandidates: []
    };

    analysis.totalComponents = analysis.studentComponents + analysis.bridgeComponents;

    // Identify components that could benefit from lazy loading
    const heavyComponents = [
      'StudentDashboard',
      'ProfileEdit',
      'Games',
      'AIPro',
      'Opportunities',
      'Mentors'
    ];

    heavyComponents.forEach(component => {
      if (document.querySelector(`[class*="${component.toLowerCase()}"]`)) {
        analysis.lazyLoadCandidates.push(component);
      }
    });

    return analysis;
  }

  /**
   * Generate optimization recommendations
   */
  generateOptimizationRecommendations(metrics) {
    const recommendations = [];

    // Bundle size recommendations
    if (metrics.javascript.totalSize > 1000000) { // > 1MB
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: 'JavaScript bundle size is large (>1MB). Consider code splitting.',
        suggestion: 'Implement lazy loading for student dashboard components'
      });
    }

    // Resource count recommendations
    if (metrics.resources.totalResources > 50) {
      recommendations.push({
        type: 'resource-count',
        priority: 'medium',
        message: 'High number of resources loaded. Consider bundling.',
        suggestion: 'Combine smaller CSS/JS files into bundles'
      });
    }

    // Large resource recommendations
    if (metrics.resources.largestResources.length > 0) {
      recommendations.push({
        type: 'large-resources',
        priority: 'medium',
        message: `${metrics.resources.largestResources.length} large resources detected.`,
        suggestion: 'Consider compression or lazy loading for large assets'
      });
    }

    // Lazy loading recommendations
    if (metrics.components.lazyLoadCandidates.length > 0) {
      recommendations.push({
        type: 'lazy-loading',
        priority: 'medium',
        message: 'Components suitable for lazy loading detected.',
        suggestion: `Consider lazy loading: ${metrics.components.lazyLoadCandidates.join(', ')}`
      });
    }

    return recommendations;
  }

  /**
   * Calculate performance score
   */
  calculatePerformanceScore(metrics) {
    let score = 100;

    // Deduct points for large bundle size
    if (metrics.javascript.totalSize > 1000000) score -= 20;
    else if (metrics.javascript.totalSize > 500000) score -= 10;

    // Deduct points for too many resources
    if (metrics.resources.totalResources > 50) score -= 15;
    else if (metrics.resources.totalResources > 30) score -= 5;

    // Deduct points for slow loading resources
    if (metrics.resources.slowestResources.length > 5) score -= 10;

    // Bonus points for code splitting
    if (metrics.javascript.chunkBundles.length > 0) score += 5;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Get resource type from URL
   */
  getResourceType(url) {
    if (url.endsWith('.js')) return 'javascript';
    if (url.endsWith('.css')) return 'css';
    if (url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }

  /**
   * Count components in a namespace
   */
  countComponents(selector) {
    const elements = document.querySelectorAll(`${selector} [class]`);
    const components = new Set();

    elements.forEach(element => {
      const classes = element.className.split(' ');
      classes.forEach(className => {
        if (className.includes('component') || className.includes('section')) {
          components.add(className);
        }
      });
    });

    return components.size;
  }
}

/**
 * Code Splitting Utility
 * Provides utilities for implementing code splitting and lazy loading
 */
export class CodeSplittingUtility {
  constructor() {
    this.lazyComponents = new Map();
    this.loadingStates = new Map();
  }

  /**
   * Create a lazy-loaded component
   * @param {function} importFunction - Dynamic import function
   * @param {object} options - Loading options
   * @returns {React.Component} - Lazy component
   */
  createLazyComponent(importFunction, options = {}) {
    const {
      fallback = null,
      errorBoundary = true,
      preload = false
    } = options;

    // This would be implemented with React.lazy in a real React app
    // For now, we'll return a placeholder
    return {
      type: 'lazy',
      importFunction,
      fallback,
      errorBoundary,
      preload
    };
  }

  /**
   * Preload a component
   * @param {string} componentName - Name of component to preload
   */
  async preloadComponent(componentName) {
    if (this.lazyComponents.has(componentName)) {
      const component = this.lazyComponents.get(componentName);
      try {
        await component.importFunction();
        console.log(`Preloaded component: ${componentName}`);
      } catch (error) {
        console.error(`Failed to preload component ${componentName}:`, error);
      }
    }
  }

  /**
   * Get loading state for a component
   * @param {string} componentName - Name of component
   * @returns {string} - Loading state
   */
  getLoadingState(componentName) {
    return this.loadingStates.get(componentName) || 'idle';
  }

  /**
   * Set loading state for a component
   * @param {string} componentName - Name of component
   * @param {string} state - Loading state
   */
  setLoadingState(componentName, state) {
    this.loadingStates.set(componentName, state);
  }
}

// Create singleton instances
export const bundleAnalyzer = new BundleAnalyzer();
export const codeSplittingUtility = new CodeSplittingUtility();

/**
 * Run quick bundle analysis
 * @returns {object} - Quick analysis results
 */
export const runQuickBundleAnalysis = () => {
  const resources = performance.getEntriesByType('resource');
  const jsResources = resources.filter(r => r.name.endsWith('.js'));
  const cssResources = resources.filter(r => r.name.endsWith('.css'));

  const totalSize = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
  const jsSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
  const cssSize = cssResources.reduce((sum, r) => sum + (r.transferSize || 0), 0);

  return {
    timestamp: new Date().toISOString(),
    totalResources: resources.length,
    totalSize: totalSize,
    javascript: {
      count: jsResources.length,
      size: jsSize
    },
    css: {
      count: cssResources.length,
      size: cssSize
    },
    recommendations: totalSize > 1000000 ? ['Consider code splitting'] : ['Bundle size is acceptable']
  };
};

export default BundleAnalyzer;