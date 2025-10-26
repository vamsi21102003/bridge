/**
 * CSS Conflict Prevention utilities
 * Helps prevent styling conflicts between bridge and student components
 */

import { CSS_PREFIXES } from './cssNamespacing';

/**
 * CSS Reset for component isolation
 */
export const CSS_RESET = `
  /* Component isolation reset */
  .bridge-component,
  .student-component {
    /* Reset box model */
    box-sizing: border-box;
    
    /* Reset positioning */
    position: relative;
    
    /* Reset text properties */
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    text-align: inherit;
    text-decoration: inherit;
    
    /* Reset spacing */
    margin: 0;
    padding: 0;
    
    /* Reset borders */
    border: none;
    outline: none;
    
    /* Reset background */
    background: transparent;
    
    /* Reset list styles */
    list-style: none;
    
    /* Reset table styles */
    border-collapse: inherit;
    border-spacing: inherit;
  }
  
  /* Prevent global style leakage */
  .bridge-component * {
    box-sizing: inherit;
  }
  
  .student-component * {
    box-sizing: inherit;
  }
`;

/**
 * Critical CSS variables that should be consistent across components
 */
export const SHARED_CSS_VARIABLES = {
  // Color palette
  '--shared-primary-color': '#667eea',
  '--shared-secondary-color': '#764ba2',
  '--shared-accent-color': '#feca57',
  '--shared-success-color': '#48bb78',
  '--shared-warning-color': '#ed8936',
  '--shared-error-color': '#f56565',
  '--shared-info-color': '#4299e1',
  
  // Typography
  '--shared-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  '--shared-font-size-base': '1rem',
  '--shared-line-height-base': '1.6',
  
  // Spacing
  '--shared-spacing-xs': '0.25rem',
  '--shared-spacing-sm': '0.5rem',
  '--shared-spacing-md': '1rem',
  '--shared-spacing-lg': '1.5rem',
  '--shared-spacing-xl': '2rem',
  '--shared-spacing-2xl': '3rem',
  
  // Border radius
  '--shared-border-radius-sm': '0.25rem',
  '--shared-border-radius-md': '0.5rem',
  '--shared-border-radius-lg': '0.75rem',
  '--shared-border-radius-xl': '1rem',
  '--shared-border-radius-2xl': '1.5rem',
  
  // Shadows
  '--shared-shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--shared-shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--shared-shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--shared-shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  // Z-index layers
  '--shared-z-dropdown': '1000',
  '--shared-z-sticky': '1020',
  '--shared-z-fixed': '1030',
  '--shared-z-modal-backdrop': '1040',
  '--shared-z-modal': '1050',
  '--shared-z-popover': '1060',
  '--shared-z-tooltip': '1070',
  '--shared-z-toast': '1080'
};

/**
 * Injects shared CSS variables into the document
 */
export const injectSharedVariables = () => {
  const existingStyle = document.getElementById('shared-css-variables');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  const style = document.createElement('style');
  style.id = 'shared-css-variables';
  
  const variablesCSS = `:root {
    ${Object.entries(SHARED_CSS_VARIABLES)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n    ')}
  }
  
  ${CSS_RESET}`;
  
  style.textContent = variablesCSS;
  document.head.insertBefore(style, document.head.firstChild);
  
  console.log('Shared CSS variables and reset injected');
};

/**
 * Detects potential CSS conflicts between loaded stylesheets
 * @returns {Array} - Array of potential conflicts
 */
export const detectCSSConflicts = () => {
  const conflicts = [];
  const stylesheets = Array.from(document.styleSheets);
  
  try {
    stylesheets.forEach((stylesheet, index) => {
      if (!stylesheet.href) return;
      
      const isBridgeCSS = stylesheet.href.includes('bridge-styles');
      const isStudentCSS = stylesheet.href.includes('student-styles');
      
      if (isBridgeCSS || isStudentCSS) {
        try {
          const rules = Array.from(stylesheet.cssRules || []);
          rules.forEach(rule => {
            if (rule.type === CSSRule.STYLE_RULE) {
              const selector = rule.selectorText;
              
              // Check for global selectors that might conflict
              if (selector && !selector.includes('.bridge-') && !selector.includes('.student-')) {
                if (selector.match(/^(body|html|\*|\.container|\.header|\.footer)$/)) {
                  conflicts.push({
                    type: 'global-selector',
                    selector: selector,
                    stylesheet: stylesheet.href,
                    namespace: isBridgeCSS ? 'bridge' : 'student'
                  });
                }
              }
            }
          });
        } catch (e) {
          // CORS or other access issues - skip this stylesheet
          console.warn('Cannot access stylesheet rules:', stylesheet.href);
        }
      }
    });
  } catch (error) {
    console.error('Error detecting CSS conflicts:', error);
  }
  
  return conflicts;
};

/**
 * Applies CSS isolation to a component
 * @param {HTMLElement} element - The component element
 * @param {string} namespace - The namespace (bridge or student)
 */
export const applyCSSIsolation = (element, namespace) => {
  if (!element || !namespace) return;
  
  const isolationClass = `${namespace}-component`;
  
  // Add isolation class if not already present
  if (!element.classList.contains(isolationClass)) {
    element.classList.add(isolationClass);
  }
  
  // Add namespace-specific container class
  const containerClass = `${CSS_PREFIXES[namespace.toUpperCase()]}container`;
  if (!element.classList.contains(containerClass)) {
    element.classList.add(containerClass);
  }
};

/**
 * Removes CSS isolation from a component
 * @param {HTMLElement} element - The component element
 * @param {string} namespace - The namespace (bridge or student)
 */
export const removeCSSIsolation = (element, namespace) => {
  if (!element || !namespace) return;
  
  const isolationClass = `${namespace}-component`;
  const containerClass = `${CSS_PREFIXES[namespace.toUpperCase()]}container`;
  
  element.classList.remove(isolationClass, containerClass);
};

/**
 * Creates a CSS scope for dynamic styles
 * @param {string} namespace - The namespace for scoping
 * @param {string} css - The CSS to scope
 * @returns {string} - Scoped CSS
 */
export const createCSSScope = (namespace, css) => {
  const scopeClass = `.${namespace}-scope`;
  
  // Simple CSS scoping - prepend scope class to selectors
  return css.replace(/([^{}]+){/g, (match, selector) => {
    // Skip @media, @keyframes, and other @ rules
    if (selector.trim().startsWith('@')) {
      return match;
    }
    
    // Add scope to each selector
    const scopedSelector = selector
      .split(',')
      .map(s => `${scopeClass} ${s.trim()}`)
      .join(', ');
    
    return `${scopedSelector} {`;
  });
};

/**
 * Monitors for CSS conflicts and logs warnings
 */
export const startCSSConflictMonitoring = () => {
  // Check for conflicts periodically
  const checkConflicts = () => {
    const conflicts = detectCSSConflicts();
    if (conflicts.length > 0) {
      console.warn('CSS conflicts detected:', conflicts);
    }
  };
  
  // Initial check
  setTimeout(checkConflicts, 1000);
  
  // Monitor for new stylesheets
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'LINK' && node.rel === 'stylesheet') {
          setTimeout(checkConflicts, 100);
        }
        if (node.tagName === 'STYLE') {
          setTimeout(checkConflicts, 100);
        }
      });
    });
  });
  
  observer.observe(document.head, {
    childList: true,
    subtree: true
  });
  
  return observer;
};