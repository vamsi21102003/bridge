/**
 * Dynamically loads a CSS stylesheet
 * @param {string} href - The path to the CSS file
 * @param {string} id - Optional ID for the link element
 * @returns {Promise} - Promise that resolves when CSS is loaded
 */
export const loadStylesheet = (href, id = null) => {
  return new Promise((resolve, reject) => {
    // Check if stylesheet is already loaded
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (id) {
      link.id = id;
    }
    
    link.onload = () => {
      console.log(`CSS loaded successfully: ${href}`);
      resolve();
    };
    
    link.onerror = (error) => {
      console.error(`Failed to load CSS: ${href}`, error);
      reject(new Error(`Failed to load stylesheet: ${href}`));
    };
    
    document.head.appendChild(link);
  });
};

/**
 * Removes a dynamically loaded stylesheet
 * @param {string} id - The ID of the link element to remove
 */
export const removeStylesheet = (id) => {
  const link = document.getElementById(id);
  if (link) {
    document.head.removeChild(link);
    console.log(`CSS removed: ${id}`);
  }
};

/**
 * Loads CSS conditionally based on navigation state
 * @param {string} navigationState - Current navigation state
 * @returns {Promise} - Promise that resolves when all required CSS is loaded
 */
export const loadConditionalCSS = async (navigationState) => {
  const { NAVIGATION_STATES } = await import('../constants/navigationStates');
  
  try {
    // Always load bridge styles for bridge components
    await loadStylesheet('./src/styles/bridge-styles/globals.css', 'bridge-globals');
    
    // Load student styles when in student dashboard
    if (navigationState === NAVIGATION_STATES.STUDENT_DASHBOARD) {
      await Promise.all([
        loadStylesheet('./src/styles/student-styles/styles.css', 'student-styles'),
        loadStylesheet('./src/styles/student-styles/aipro.css', 'student-aipro'),
        loadStylesheet('./src/styles/student-styles/badge.css', 'student-badge'),
        loadStylesheet('./src/styles/student-styles/profileEdit.css', 'student-profile-edit')
      ]);
    } else {
      // Remove student styles when not in student dashboard
      removeStylesheet('student-styles');
      removeStylesheet('student-aipro');
      removeStylesheet('student-badge');
      removeStylesheet('student-profile-edit');
    }
  } catch (error) {
    console.error('Error loading conditional CSS:', error);
    // Don't throw - CSS loading errors shouldn't break the app
  }
};

/**
 * Preloads CSS files for faster navigation
 * @param {Array} cssFiles - Array of CSS file paths to preload
 */
export const preloadCSS = (cssFiles) => {
  cssFiles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
};

/**
 * Loads CSS with namespace isolation
 * @param {string} href - CSS file path
 * @param {string} namespace - Namespace for CSS isolation
 * @returns {Promise} - Promise that resolves when CSS is loaded
 */
export const loadNamespacedCSS = async (href, namespace) => {
  try {
    const response = await fetch(href);
    const cssText = await response.text();
    
    // Add namespace prefix to CSS rules (basic implementation)
    const namespacedCSS = cssText.replace(
      /([^{}]+){/g, 
      (match, selector) => {
        // Skip @media, @keyframes, and other @ rules
        if (selector.trim().startsWith('@')) {
          return match;
        }
        // Add namespace prefix to selectors
        const namespacedSelector = selector
          .split(',')
          .map(s => `.${namespace} ${s.trim()}`)
          .join(', ');
        return `${namespacedSelector} {`;
      }
    );
    
    // Create and inject style element
    const style = document.createElement('style');
    style.id = `${namespace}-styles`;
    style.textContent = namespacedCSS;
    document.head.appendChild(style);
    
    console.log(`Namespaced CSS loaded: ${href} with namespace: ${namespace}`);
  } catch (error) {
    console.error(`Failed to load namespaced CSS: ${href}`, error);
    throw error;
  }
};