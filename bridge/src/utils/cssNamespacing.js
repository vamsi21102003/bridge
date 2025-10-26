/**
 * CSS Namespacing utilities to prevent conflicts between bridge and student styles
 */

// CSS class prefixes for different components
export const CSS_PREFIXES = {
  BRIDGE: 'bridge-',
  STUDENT: 'student-',
  SHARED: 'shared-'
};

/**
 * Adds namespace prefix to CSS classes
 * @param {string} className - The original class name
 * @param {string} namespace - The namespace prefix (bridge-, student-, shared-)
 * @returns {string} - The namespaced class name
 */
export const addNamespace = (className, namespace) => {
  if (!className || className.startsWith(namespace)) {
    return className;
  }
  return `${namespace}${className}`;
};

/**
 * Creates namespaced class names for bridge components
 * @param {string|Array} classNames - Class name(s) to namespace
 * @returns {string} - Namespaced class names
 */
export const bridgeClasses = (classNames) => {
  if (Array.isArray(classNames)) {
    return classNames.map(cls => addNamespace(cls, CSS_PREFIXES.BRIDGE)).join(' ');
  }
  return addNamespace(classNames, CSS_PREFIXES.BRIDGE);
};

/**
 * Creates namespaced class names for student components
 * @param {string|Array} classNames - Class name(s) to namespace
 * @returns {string} - Namespaced class names
 */
export const studentClasses = (classNames) => {
  if (Array.isArray(classNames)) {
    return classNames.map(cls => addNamespace(cls, CSS_PREFIXES.STUDENT)).join(' ');
  }
  return addNamespace(classNames, CSS_PREFIXES.STUDENT);
};

/**
 * Creates namespaced class names for shared components
 * @param {string|Array} classNames - Class name(s) to namespace
 * @returns {string} - Namespaced class names
 */
export const sharedClasses = (classNames) => {
  if (Array.isArray(classNames)) {
    return classNames.map(cls => addNamespace(cls, CSS_PREFIXES.SHARED)).join(' ');
  }
  return addNamespace(classNames, CSS_PREFIXES.SHARED);
};

/**
 * Conditionally applies CSS classes based on navigation state
 * @param {string} navigationState - Current navigation state
 * @param {object} classMap - Object mapping states to class names
 * @returns {string} - Appropriate class names for current state
 */
export const conditionalClasses = (navigationState, classMap) => {
  const { NAVIGATION_STATES } = require('../constants/navigationStates');
  
  // Default classes that apply to all states
  let classes = classMap.default || '';
  
  // Add state-specific classes
  if (classMap[navigationState]) {
    classes += ` ${classMap[navigationState]}`;
  }
  
  // Add bridge-specific classes for pre-login states
  if ([
    NAVIGATION_STATES.BRIDGE_HOME,
    NAVIGATION_STATES.LOGIN,
    NAVIGATION_STATES.PROFILE_COMPLETION,
    NAVIGATION_STATES.STUDENT_FORM
  ].includes(navigationState)) {
    classes += ` ${bridgeClasses('container')}`;
  }
  
  // Add student-specific classes for post-login states
  if (navigationState === NAVIGATION_STATES.STUDENT_DASHBOARD) {
    classes += ` ${studentClasses('container')}`;
  }
  
  return classes.trim();
};

/**
 * Generates CSS variable names with namespace
 * @param {string} variableName - The CSS variable name
 * @param {string} namespace - The namespace prefix
 * @returns {string} - Namespaced CSS variable
 */
export const cssVariable = (variableName, namespace = CSS_PREFIXES.SHARED) => {
  return `--${namespace}${variableName}`;
};

/**
 * Creates a CSS-in-JS style object with namespaced variables
 * @param {object} styles - Style object with CSS properties
 * @param {string} namespace - The namespace prefix
 * @returns {object} - Style object with namespaced CSS variables
 */
export const namespacedStyles = (styles, namespace = CSS_PREFIXES.SHARED) => {
  const namespacedStyleObj = {};
  
  Object.keys(styles).forEach(key => {
    if (typeof styles[key] === 'string' && styles[key].startsWith('var(--')) {
      // Replace CSS variables with namespaced versions
      const variableName = styles[key].match(/var\(--(.+)\)/)?.[1];
      if (variableName) {
        namespacedStyleObj[key] = `var(${cssVariable(variableName, namespace)})`;
      }
    } else {
      namespacedStyleObj[key] = styles[key];
    }
  });
  
  return namespacedStyleObj;
};

/**
 * Utility to merge multiple class name strings safely
 * @param {...string} classNames - Multiple class name strings
 * @returns {string} - Merged and deduplicated class names
 */
export const mergeClasses = (...classNames) => {
  return classNames
    .filter(Boolean)
    .join(' ')
    .split(' ')
    .filter((cls, index, arr) => cls && arr.indexOf(cls) === index)
    .join(' ');
};

/**
 * Checks if a CSS class belongs to a specific namespace
 * @param {string} className - The class name to check
 * @param {string} namespace - The namespace to check against
 * @returns {boolean} - Whether the class belongs to the namespace
 */
export const belongsToNamespace = (className, namespace) => {
  return className && className.startsWith(namespace);
};

/**
 * Removes namespace prefix from a class name
 * @param {string} className - The namespaced class name
 * @param {string} namespace - The namespace to remove
 * @returns {string} - Class name without namespace
 */
export const removeNamespace = (className, namespace) => {
  if (belongsToNamespace(className, namespace)) {
    return className.substring(namespace.length);
  }
  return className;
};