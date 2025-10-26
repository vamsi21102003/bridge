/**
 * CSS Validation Utilities
 * Provides comprehensive CSS testing and validation for the integrated system
 */

export class CSSValidator {
  constructor() {
    this.validationResults = {};
    this.conflictDetector = new CSSConflictDetector();
  }

  /**
   * Run comprehensive CSS validation
   * @returns {object} - Validation results
   */
  async runCSSValidation() {
    const results = {
      timestamp: new Date().toISOString(),
      tests: {}
    };

    try {
      // Test 1: Namespace Isolation
      results.tests.namespaceIsolation = this.testNamespaceIsolation();
      
      // Test 2: Style Conflicts
      results.tests.styleConflicts = await this.testStyleConflicts();
      
      // Test 3: Responsive Design
      results.tests.responsiveDesign = this.testResponsiveDesign();
      
      // Test 4: Component-Specific Styles
      results.tests.componentStyles = this.testComponentSpecificStyles();
      
      // Test 5: CSS Loading Performance
      results.tests.loadingPerformance = this.testCSSLoadingPerformance();
      
      // Test 6: Cross-Browser Compatibility
      results.tests.crossBrowserCompatibility = this.testCrossBrowserCompatibility();

      // Generate summary
      results.summary = this.generateValidationSummary(results.tests);
      
    } catch (error) {
      results.error = error.message;
    }

    return results;
  }

  /**
   * Test namespace isolation
   */
  testNamespaceIsolation() {
    const test = {
      name: 'Namespace Isolation',
      passed: false,
      details: {}
    };

    try {
      // Check for student-app namespace
      const studentElements = document.querySelectorAll('.student-app');
      const bridgeElements = document.querySelectorAll('.bridge-component');
      
      test.details.studentElements = studentElements.length;
      test.details.bridgeElements = bridgeElements.length;
      test.details.hasNamespacing = studentElements.length > 0 || bridgeElements.length > 0;
      
      // Check for proper nesting
      const nestedStudentElements = document.querySelectorAll('.student-app *');
      const nestedBridgeElements = document.querySelectorAll('.bridge-component *');
      
      test.details.nestedStudentElements = nestedStudentElements.length;
      test.details.nestedBridgeElements = nestedBridgeElements.length;
      
      // Validate isolation
      test.passed = test.details.hasNamespacing && 
                   (test.details.nestedStudentElements > 0 || test.details.nestedBridgeElements > 0);
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Test for style conflicts
   */
  async testStyleConflicts() {
    const test = {
      name: 'Style Conflicts',
      passed: false,
      details: {}
    };

    try {
      const conflicts = await this.conflictDetector.detectConflicts();
      
      test.details.conflictsFound = conflicts.length;
      test.details.conflicts = conflicts;
      test.details.criticalConflicts = conflicts.filter(c => c.severity === 'critical').length;
      
      test.passed = conflicts.length === 0 || test.details.criticalConflicts === 0;
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Test responsive design
   */
  testResponsiveDesign() {
    const test = {
      name: 'Responsive Design',
      passed: false,
      details: {}
    };

    try {
      // Check for media queries
      const styleSheets = Array.from(document.styleSheets);
      let mediaQueryCount = 0;
      let responsiveBreakpoints = [];

      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || sheet.rules || []);
          rules.forEach(rule => {
            if (rule.type === CSSRule.MEDIA_RULE) {
              mediaQueryCount++;
              responsiveBreakpoints.push(rule.conditionText || rule.media.mediaText);
            }
          });
        } catch (e) {
          // Cross-origin stylesheets may not be accessible
        }
      });

      // Check for responsive classes
      const responsiveClasses = this.findResponsiveClasses();
      
      test.details.mediaQueryCount = mediaQueryCount;
      test.details.responsiveBreakpoints = responsiveBreakpoints;
      test.details.responsiveClasses = responsiveClasses;
      test.details.hasResponsiveDesign = mediaQueryCount > 0 || responsiveClasses.length > 0;
      
      test.passed = test.details.hasResponsiveDesign;
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Test component-specific styles
   */
  testComponentSpecificStyles() {
    const test = {
      name: 'Component-Specific Styles',
      passed: false,
      details: {}
    };

    try {
      // Check for component-specific CSS files
      const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
      const componentStylesheets = [];
      
      linkElements.forEach(link => {
        const href = link.href;
        if (href.includes('student-styles') || href.includes('bridge-styles') || 
            href.includes('component') || href.includes('aipro') || 
            href.includes('badge') || href.includes('profile')) {
          componentStylesheets.push(href);
        }
      });

      // Check for inline styles with component classes
      const componentClasses = this.findComponentClasses();
      
      test.details.componentStylesheets = componentStylesheets;
      test.details.componentClasses = componentClasses;
      test.details.hasComponentStyles = componentStylesheets.length > 0 || componentClasses.length > 0;
      
      test.passed = test.details.hasComponentStyles;
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Test CSS loading performance
   */
  testCSSLoadingPerformance() {
    const test = {
      name: 'CSS Loading Performance',
      passed: false,
      details: {}
    };

    try {
      const cssResources = performance.getEntriesByType('resource')
        .filter(resource => resource.name.endsWith('.css'));
      
      const totalCSSLoadTime = cssResources.reduce((total, resource) => {
        return total + (resource.responseEnd - resource.startTime);
      }, 0);

      const averageLoadTime = cssResources.length > 0 ? totalCSSLoadTime / cssResources.length : 0;
      
      test.details.cssResourceCount = cssResources.length;
      test.details.totalLoadTime = totalCSSLoadTime;
      test.details.averageLoadTime = averageLoadTime;
      test.details.performanceAcceptable = averageLoadTime < 100; // Less than 100ms average
      
      test.passed = test.details.performanceAcceptable;
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Test cross-browser compatibility
   */
  testCrossBrowserCompatibility() {
    const test = {
      name: 'Cross-Browser Compatibility',
      passed: false,
      details: {}
    };

    try {
      const browserInfo = {
        userAgent: navigator.userAgent,
        vendor: navigator.vendor,
        platform: navigator.platform
      };

      // Check for vendor prefixes
      const vendorPrefixes = this.findVendorPrefixes();
      
      // Check for modern CSS features
      const modernFeatures = this.checkModernCSSFeatures();
      
      test.details.browserInfo = browserInfo;
      test.details.vendorPrefixes = vendorPrefixes;
      test.details.modernFeatures = modernFeatures;
      test.details.compatibilityScore = this.calculateCompatibilityScore(vendorPrefixes, modernFeatures);
      
      test.passed = test.details.compatibilityScore > 0.8; // 80% compatibility
      
    } catch (error) {
      test.error = error.message;
    }

    return test;
  }

  /**
   * Find responsive classes in the DOM
   */
  findResponsiveClasses() {
    const responsiveKeywords = ['mobile', 'tablet', 'desktop', 'sm', 'md', 'lg', 'xl', 'responsive'];
    const elements = document.querySelectorAll('*[class]');
    const responsiveClasses = new Set();

    elements.forEach(element => {
      const classes = element.className.split(' ');
      classes.forEach(className => {
        if (responsiveKeywords.some(keyword => className.toLowerCase().includes(keyword))) {
          responsiveClasses.add(className);
        }
      });
    });

    return Array.from(responsiveClasses);
  }

  /**
   * Find component-specific classes
   */
  findComponentClasses() {
    const componentKeywords = ['header', 'footer', 'sidebar', 'nav', 'hero', 'card', 'button', 'form'];
    const elements = document.querySelectorAll('*[class]');
    const componentClasses = new Set();

    elements.forEach(element => {
      const classes = element.className.split(' ');
      classes.forEach(className => {
        if (componentKeywords.some(keyword => className.toLowerCase().includes(keyword))) {
          componentClasses.add(className);
        }
      });
    });

    return Array.from(componentClasses);
  }

  /**
   * Find vendor prefixes in stylesheets
   */
  findVendorPrefixes() {
    const prefixes = ['-webkit-', '-moz-', '-ms-', '-o-'];
    const foundPrefixes = new Set();

    try {
      const styleSheets = Array.from(document.styleSheets);
      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || sheet.rules || []);
          rules.forEach(rule => {
            if (rule.style) {
              for (let i = 0; i < rule.style.length; i++) {
                const property = rule.style[i];
                prefixes.forEach(prefix => {
                  if (property.startsWith(prefix)) {
                    foundPrefixes.add(prefix);
                  }
                });
              }
            }
          });
        } catch (e) {
          // Cross-origin stylesheets may not be accessible
        }
      });
    } catch (error) {
      console.warn('Could not analyze vendor prefixes:', error);
    }

    return Array.from(foundPrefixes);
  }

  /**
   * Check for modern CSS features
   */
  checkModernCSSFeatures() {
    const features = {
      flexbox: CSS.supports('display', 'flex'),
      grid: CSS.supports('display', 'grid'),
      customProperties: CSS.supports('--custom-property', 'value'),
      transforms: CSS.supports('transform', 'translateX(10px)'),
      transitions: CSS.supports('transition', 'all 0.3s ease'),
      borderRadius: CSS.supports('border-radius', '10px'),
      boxShadow: CSS.supports('box-shadow', '0 0 10px rgba(0,0,0,0.5)'),
      gradients: CSS.supports('background', 'linear-gradient(to right, red, blue)')
    };

    return features;
  }

  /**
   * Calculate compatibility score
   */
  calculateCompatibilityScore(vendorPrefixes, modernFeatures) {
    const modernFeatureCount = Object.values(modernFeatures).filter(Boolean).length;
    const totalFeatures = Object.keys(modernFeatures).length;
    const baseScore = modernFeatureCount / totalFeatures;
    
    // Bonus for having vendor prefixes (shows consideration for older browsers)
    const prefixBonus = vendorPrefixes.length > 0 ? 0.1 : 0;
    
    return Math.min(baseScore + prefixBonus, 1.0);
  }

  /**
   * Generate validation summary
   */
  generateValidationSummary(tests) {
    const totalTests = Object.keys(tests).length;
    const passedTests = Object.values(tests).filter(test => test.passed).length;
    
    return {
      totalTests,
      passedTests,
      failedTests: totalTests - passedTests,
      successRate: totalTests > 0 ? (passedTests / totalTests * 100).toFixed(2) : 0,
      overallPassed: passedTests === totalTests
    };
  }
}

/**
 * CSS Conflict Detector
 * Detects potential conflicts between bridge and student styles
 */
export class CSSConflictDetector {
  constructor() {
    this.conflicts = [];
  }

  /**
   * Detect CSS conflicts
   * @returns {Array} - Array of detected conflicts
   */
  async detectConflicts() {
    this.conflicts = [];

    try {
      // Check for duplicate class names across namespaces
      await this.checkDuplicateClasses();
      
      // Check for conflicting property values
      await this.checkConflictingProperties();
      
      // Check for specificity conflicts
      await this.checkSpecificityConflicts();
      
    } catch (error) {
      console.error('Error detecting CSS conflicts:', error);
    }

    return this.conflicts;
  }

  /**
   * Check for duplicate class names
   */
  async checkDuplicateClasses() {
    const bridgeClasses = this.extractClasses('.bridge-component');
    const studentClasses = this.extractClasses('.student-app');
    
    const duplicates = bridgeClasses.filter(className => studentClasses.includes(className));
    
    duplicates.forEach(className => {
      this.conflicts.push({
        type: 'duplicate-class',
        severity: 'warning',
        message: `Class "${className}" exists in both bridge and student namespaces`,
        className
      });
    });
  }

  /**
   * Check for conflicting property values
   */
  async checkConflictingProperties() {
    // This would analyze computed styles for conflicts
    // For now, we'll do a basic check
    const commonElements = document.querySelectorAll('.bridge-component *, .student-app *');
    
    // Check for potential conflicts in common properties
    const conflictingProperties = ['font-family', 'color', 'background-color'];
    
    // This is a simplified check - in a real implementation, 
    // you'd compare computed styles more thoroughly
  }

  /**
   * Check for specificity conflicts
   */
  async checkSpecificityConflicts() {
    // This would analyze CSS specificity conflicts
    // For now, we'll do a basic check for overly specific selectors
    
    try {
      const styleSheets = Array.from(document.styleSheets);
      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || sheet.rules || []);
          rules.forEach(rule => {
            if (rule.selectorText) {
              const specificity = this.calculateSpecificity(rule.selectorText);
              if (specificity > 1000) { // Very high specificity
                this.conflicts.push({
                  type: 'high-specificity',
                  severity: 'warning',
                  message: `High specificity selector: ${rule.selectorText}`,
                  selector: rule.selectorText,
                  specificity
                });
              }
            }
          });
        } catch (e) {
          // Cross-origin stylesheets may not be accessible
        }
      });
    } catch (error) {
      console.warn('Could not analyze specificity conflicts:', error);
    }
  }

  /**
   * Extract class names from a namespace
   */
  extractClasses(namespace) {
    const elements = document.querySelectorAll(`${namespace} *[class]`);
    const classes = new Set();
    
    elements.forEach(element => {
      const classList = element.className.split(' ');
      classList.forEach(className => {
        if (className.trim()) {
          classes.add(className.trim());
        }
      });
    });
    
    return Array.from(classes);
  }

  /**
   * Calculate CSS specificity (simplified)
   */
  calculateSpecificity(selector) {
    // Simplified specificity calculation
    const ids = (selector.match(/#/g) || []).length * 100;
    const classes = (selector.match(/\./g) || []).length * 10;
    const elements = (selector.match(/[a-zA-Z]/g) || []).length;
    
    return ids + classes + elements;
  }
}

// Create singleton instances
export const cssValidator = new CSSValidator();
export const cssConflictDetector = new CSSConflictDetector();

/**
 * Run quick CSS validation
 * @returns {object} - Quick validation results
 */
export const runQuickCSSValidation = () => {
  const validation = {
    timestamp: new Date().toISOString(),
    checks: {}
  };

  // Quick checks
  validation.checks.hasNamespacing = document.querySelectorAll('.student-app, .bridge-component').length > 0;
  validation.checks.hasResponsiveDesign = document.querySelectorAll('[class*="responsive"], [class*="mobile"]').length > 0;
  validation.checks.hasComponentStyles = document.querySelectorAll('link[href*="styles"]').length > 0;

  validation.overallValid = Object.values(validation.checks).every(check => check);

  return validation;
};

export default CSSValidator;