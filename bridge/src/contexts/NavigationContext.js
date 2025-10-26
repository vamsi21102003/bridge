import React, { createContext, useContext, useReducer } from 'react';
import { NAVIGATION_STATES, DEFAULT_APP_STATE, getNextPage } from '../constants/navigationStates';

// Create the navigation context
const NavigationContext = createContext();

// Action types
const NAVIGATION_ACTIONS = {
  SET_PAGE: 'SET_PAGE',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  NAVIGATE_TO: 'NAVIGATE_TO',
  RESET_STATE: 'RESET_STATE'
};

// Navigation reducer
const navigationReducer = (state, action) => {
  switch (action.type) {
    case NAVIGATION_ACTIONS.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    
    case NAVIGATION_ACTIONS.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    
    case NAVIGATION_ACTIONS.SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        userType: action.payload.userType || state.userType
      };
    
    case NAVIGATION_ACTIONS.NAVIGATE_TO:
      const nextPage = getNextPage(state.currentPage, action.payload.action);
      return {
        ...state,
        currentPage: nextPage,
        ...(action.payload.userData && { userData: action.payload.userData })
      };
    
    case NAVIGATION_ACTIONS.RESET_STATE:
      return DEFAULT_APP_STATE;
    
    default:
      return state;
  }
};

// Navigation provider component
export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, DEFAULT_APP_STATE);

  // Navigation actions
  const setPage = (page) => {
    dispatch({ type: NAVIGATION_ACTIONS.SET_PAGE, payload: page });
  };

  const setUserData = (userData) => {
    dispatch({ type: NAVIGATION_ACTIONS.SET_USER_DATA, payload: userData });
  };

  const setAuthentication = (isAuthenticated, userType = null) => {
    dispatch({ 
      type: NAVIGATION_ACTIONS.SET_AUTHENTICATION, 
      payload: { isAuthenticated, userType } 
    });
  };

  const navigateTo = (action, userData = null) => {
    dispatch({ 
      type: NAVIGATION_ACTIONS.NAVIGATE_TO, 
      payload: { action, userData } 
    });
  };

  const resetState = () => {
    dispatch({ type: NAVIGATION_ACTIONS.RESET_STATE });
  };

  // Navigation error handler
  const handleNavigationError = (error, currentState) => {
    console.error('Navigation error:', error);
    
    // Fallback to safe state based on current state
    switch (currentState) {
      case NAVIGATION_STATES.STUDENT_DASHBOARD:
        // If student dashboard fails, go back to bridge home
        setPage(NAVIGATION_STATES.BRIDGE_HOME);
        break;
      case NAVIGATION_STATES.LOGIN:
        // If login fails, stay on bridge home
        setPage(NAVIGATION_STATES.BRIDGE_HOME);
        break;
      default:
        // Default fallback to bridge home
        setPage(NAVIGATION_STATES.BRIDGE_HOME);
    }
  };

  const value = {
    // State
    ...state,
    
    // Actions
    setPage,
    setUserData,
    setAuthentication,
    navigateTo,
    resetState,
    handleNavigationError,
    
    // Constants
    NAVIGATION_STATES
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use navigation context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export default NavigationContext;