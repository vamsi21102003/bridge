import { NAVIGATION_STATES, STUDENT_PAGES } from '../constants/navigationStates';

/**
 * Navigation State Manager
 * Provides utilities for managing complex navigation flows
 */
export class NavigationStateManager {
  constructor(initialState) {
    this.state = initialState;
    this.history = [initialState];
  }

  // Update the current state
  updateState(newState) {
    this.state = { ...this.state, ...newState };
    this.history.push(this.state);
    return this.state;
  }

  // Get current state
  getCurrentState() {
    return this.state;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.state.isAuthenticated && this.state.userData;
  }

  // Check if user is a student
  isStudent() {
    return this.state.userType === 'student';
  }

  // Check if currently in student dashboard
  isInStudentDashboard() {
    return this.state.currentPage === NAVIGATION_STATES.STUDENT_DASHBOARD;
  }

  // Get the appropriate landing page for user type
  getLandingPage() {
    if (!this.isAuthenticated()) {
      return NAVIGATION_STATES.BRIDGE_HOME;
    }

    switch (this.state.userType) {
      case 'student':
        return NAVIGATION_STATES.STUDENT_DASHBOARD;
      case 'employer':
      case 'institution':
        return NAVIGATION_STATES.BRIDGE_HOME;
      default:
        return NAVIGATION_STATES.BRIDGE_HOME;
    }
  }

  // Validate navigation transition
  canNavigateTo(targetPage) {
    const currentPage = this.state.currentPage;

    // Always allow navigation to bridge home
    if (targetPage === NAVIGATION_STATES.BRIDGE_HOME) {
      return true;
    }

    // Login page accessible from anywhere
    if (targetPage === NAVIGATION_STATES.LOGIN) {
      return true;
    }

    // Profile completion requires login
    if (targetPage === NAVIGATION_STATES.PROFILE_COMPLETION) {
      return this.isAuthenticated();
    }

    // Student form requires profile completion
    if (targetPage === NAVIGATION_STATES.STUDENT_FORM) {
      return this.isAuthenticated() && this.isStudent();
    }

    // Student dashboard requires student user type
    if (targetPage === NAVIGATION_STATES.STUDENT_DASHBOARD) {
      return this.isAuthenticated() && this.isStudent();
    }

    return true;
  }

  // Get navigation breadcrumbs
  getBreadcrumbs() {
    const breadcrumbs = [];
    const currentPage = this.state.currentPage;

    switch (currentPage) {
      case NAVIGATION_STATES.BRIDGE_HOME:
        breadcrumbs.push({ label: 'Home', page: NAVIGATION_STATES.BRIDGE_HOME });
        break;
      case NAVIGATION_STATES.LOGIN:
        breadcrumbs.push({ label: 'Home', page: NAVIGATION_STATES.BRIDGE_HOME });
        breadcrumbs.push({ label: 'Login', page: NAVIGATION_STATES.LOGIN });
        break;
      case NAVIGATION_STATES.PROFILE_COMPLETION:
        breadcrumbs.push({ label: 'Home', page: NAVIGATION_STATES.BRIDGE_HOME });
        breadcrumbs.push({ label: 'Profile Setup', page: NAVIGATION_STATES.PROFILE_COMPLETION });
        break;
      case NAVIGATION_STATES.STUDENT_FORM:
        breadcrumbs.push({ label: 'Home', page: NAVIGATION_STATES.BRIDGE_HOME });
        breadcrumbs.push({ label: 'Profile Setup', page: NAVIGATION_STATES.PROFILE_COMPLETION });
        breadcrumbs.push({ label: 'Student Information', page: NAVIGATION_STATES.STUDENT_FORM });
        break;
      case NAVIGATION_STATES.STUDENT_DASHBOARD:
        breadcrumbs.push({ label: 'Student Dashboard', page: NAVIGATION_STATES.STUDENT_DASHBOARD });
        if (this.state.currentStudentPage && this.state.currentStudentPage !== STUDENT_PAGES.HOME) {
          breadcrumbs.push({ 
            label: this.getStudentPageLabel(this.state.currentStudentPage), 
            page: this.state.currentStudentPage 
          });
        }
        break;
    }

    return breadcrumbs;
  }

  // Get student page label
  getStudentPageLabel(studentPage) {
    const labels = {
      [STUDENT_PAGES.HOME]: 'Home',
      [STUDENT_PAGES.PROFILE]: 'Profile',
      [STUDENT_PAGES.PROFILE_EDIT]: 'Edit Profile',
      [STUDENT_PAGES.OPPORTUNITIES]: 'Opportunities',
      [STUDENT_PAGES.MENTORS]: 'Mentors',
      [STUDENT_PAGES.GAMES]: 'Games',
      [STUDENT_PAGES.BADGES]: 'Badges',
      [STUDENT_PAGES.AIPRO]: 'AI Pro'
    };
    return labels[studentPage] || 'Unknown';
  }

  // Get navigation history
  getHistory() {
    return this.history;
  }

  // Go back to previous state
  goBack() {
    if (this.history.length > 1) {
      this.history.pop(); // Remove current state
      this.state = this.history[this.history.length - 1];
      return this.state;
    }
    return this.state;
  }

  // Clear navigation history
  clearHistory() {
    this.history = [this.state];
  }
}

// Create a singleton instance
let navigationManager = null;

export const getNavigationManager = (initialState = null) => {
  if (!navigationManager && initialState) {
    navigationManager = new NavigationStateManager(initialState);
  }
  return navigationManager;
};

export const resetNavigationManager = (newState) => {
  navigationManager = new NavigationStateManager(newState);
  return navigationManager;
};

export default NavigationStateManager;