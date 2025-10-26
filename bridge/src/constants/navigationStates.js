// Navigation states for the integrated application flow
export const NAVIGATION_STATES = {
  BRIDGE_HOME: 'bridge_home',
  LOGIN: 'login',
  PROFILE_COMPLETION: 'profile_completion',
  STUDENT_FORM: 'student_form',
  STUDENT_DASHBOARD: 'student_dashboard'
};

// Student dashboard page states
export const STUDENT_PAGES = {
  HOME: 'home',
  PROFILE: 'profile',
  PROFILE_EDIT: 'profile_edit',
  OPPORTUNITIES: 'opportunities',
  MENTORS: 'mentors',
  GAMES: 'games',
  BADGES: 'badges',
  AIPRO: 'aipro'
};

// Default application state
export const DEFAULT_APP_STATE = {
  currentPage: NAVIGATION_STATES.BRIDGE_HOME,
  currentStudentPage: STUDENT_PAGES.HOME,
  userData: null,
  isAuthenticated: false,
  userType: null // 'student', 'employer', 'institution'
};

// Navigation flow helpers
export const getNextPage = (currentPage, action) => {
  switch (currentPage) {
    case NAVIGATION_STATES.BRIDGE_HOME:
      if (action === 'login') return NAVIGATION_STATES.LOGIN;
      break;
    case NAVIGATION_STATES.LOGIN:
      if (action === 'success') return NAVIGATION_STATES.PROFILE_COMPLETION;
      break;
    case NAVIGATION_STATES.PROFILE_COMPLETION:
      if (action === 'skip') return NAVIGATION_STATES.STUDENT_DASHBOARD;
      if (action === 'complete') return NAVIGATION_STATES.STUDENT_FORM;
      break;
    case NAVIGATION_STATES.STUDENT_FORM:
      if (action === 'skip' || action === 'complete') return NAVIGATION_STATES.STUDENT_DASHBOARD;
      break;
    default:
      return NAVIGATION_STATES.BRIDGE_HOME;
  }
  return currentPage;
};

// Student dashboard navigation helpers
export const isStudentDashboard = (currentPage) => {
  return currentPage === NAVIGATION_STATES.STUDENT_DASHBOARD;
};

export const getStudentPageRoute = (studentPage) => {
  const routes = {
    [STUDENT_PAGES.HOME]: '/',
    [STUDENT_PAGES.PROFILE]: '/profile',
    [STUDENT_PAGES.PROFILE_EDIT]: '/profile/edit',
    [STUDENT_PAGES.OPPORTUNITIES]: '/opportunities',
    [STUDENT_PAGES.MENTORS]: '/mentors',
    [STUDENT_PAGES.GAMES]: '/games',
    [STUDENT_PAGES.BADGES]: '/badges',
    [STUDENT_PAGES.AIPRO]: '/aipro'
  };
  return routes[studentPage] || '/';
};

export const getStudentPageFromRoute = (route) => {
  const pages = {
    '/': STUDENT_PAGES.HOME,
    '/profile': STUDENT_PAGES.PROFILE,
    '/profile/edit': STUDENT_PAGES.PROFILE_EDIT,
    '/opportunities': STUDENT_PAGES.OPPORTUNITIES,
    '/mentors': STUDENT_PAGES.MENTORS,
    '/games': STUDENT_PAGES.GAMES,
    '/badges': STUDENT_PAGES.BADGES,
    '/aipro': STUDENT_PAGES.AIPRO
  };
  return pages[route] || STUDENT_PAGES.HOME;
};