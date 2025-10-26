import { NAVIGATION_STATES } from '../constants/navigationStates';

/**
 * Handles navigation errors and provides safe fallback navigation
 * @param {Error} error - The error that occurred
 * @param {string} currentState - The current navigation state
 * @param {function} setCurrentPage - Function to set the current page
 * @returns {string} - The safe fallback state
 */
export const handleNavigationError = (error, currentState, setCurrentPage) => {
  console.error('Navigation error:', error);
  
  let fallbackState;
  
  // Determine safe fallback based on current state
  switch (currentState) {
    case NAVIGATION_STATES.STUDENT_DASHBOARD:
      // If student dashboard fails, go back to bridge home
      fallbackState = NAVIGATION_STATES.BRIDGE_HOME;
      break;
    case NAVIGATION_STATES.LOGIN:
      // If login fails, stay on bridge home
      fallbackState = NAVIGATION_STATES.BRIDGE_HOME;
      break;
    case NAVIGATION_STATES.PROFILE_COMPLETION:
      // If profile completion fails, go back to login
      fallbackState = NAVIGATION_STATES.LOGIN;
      break;
    case NAVIGATION_STATES.STUDENT_FORM:
      // If student form fails, go back to profile completion
      fallbackState = NAVIGATION_STATES.PROFILE_COMPLETION;
      break;
    default:
      // Default fallback to bridge home
      fallbackState = NAVIGATION_STATES.BRIDGE_HOME;
  }
  
  // Set the fallback state
  if (setCurrentPage) {
    setCurrentPage(fallbackState);
  }
  
  return fallbackState;
};

/**
 * Validates if a navigation state is valid
 * @param {string} state - The state to validate
 * @returns {boolean} - Whether the state is valid
 */
export const isValidNavigationState = (state) => {
  return Object.values(NAVIGATION_STATES).includes(state);
};

/**
 * Gets the next valid state in the flow
 * @param {string} currentState - The current state
 * @param {object} userData - User data to determine flow
 * @returns {string} - The next state in the flow
 */
export const getNextNavigationState = (currentState, userData) => {
  switch (currentState) {
    case NAVIGATION_STATES.BRIDGE_HOME:
      return NAVIGATION_STATES.LOGIN;
    case NAVIGATION_STATES.LOGIN:
      return NAVIGATION_STATES.PROFILE_COMPLETION;
    case NAVIGATION_STATES.PROFILE_COMPLETION:
      if (userData?.userType === 'student') {
        return NAVIGATION_STATES.STUDENT_FORM;
      }
      return NAVIGATION_STATES.BRIDGE_HOME;
    case NAVIGATION_STATES.STUDENT_FORM:
      return NAVIGATION_STATES.STUDENT_DASHBOARD;
    case NAVIGATION_STATES.STUDENT_DASHBOARD:
      return NAVIGATION_STATES.STUDENT_DASHBOARD; // Stay in dashboard
    default:
      return NAVIGATION_STATES.BRIDGE_HOME;
  }
};

/**
 * Gets the previous valid state in the flow
 * @param {string} currentState - The current state
 * @returns {string} - The previous state in the flow
 */
export const getPreviousNavigationState = (currentState) => {
  switch (currentState) {
    case NAVIGATION_STATES.LOGIN:
      return NAVIGATION_STATES.BRIDGE_HOME;
    case NAVIGATION_STATES.PROFILE_COMPLETION:
      return NAVIGATION_STATES.LOGIN;
    case NAVIGATION_STATES.STUDENT_FORM:
      return NAVIGATION_STATES.PROFILE_COMPLETION;
    case NAVIGATION_STATES.STUDENT_DASHBOARD:
      return NAVIGATION_STATES.BRIDGE_HOME; // Logout goes to home
    default:
      return NAVIGATION_STATES.BRIDGE_HOME;
  }
};