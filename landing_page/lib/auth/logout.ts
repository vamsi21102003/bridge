/**
 * Logout utility function
 * Clears all authentication data and redirects to landing page
 */
export const logout = () => {
  try {
    console.log('Starting logout process...');
    
    // Clear authentication cookies with multiple path variations
    const cookiesToClear = ['authToken', 'userType', 'userData'];
    const paths = ['/', '/university', '/dashboard'];
    
    cookiesToClear.forEach(cookieName => {
      paths.forEach(path => {
        document.cookie = `${cookieName}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        document.cookie = `${cookieName}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${window.location.hostname};`;
      });
    });
    
    // Clear localStorage items if they exist
    if (typeof window !== 'undefined') {
      const localStorageKeys = ['authToken', 'userType', 'userData', 'sessionData'];
      
      localStorageKeys.forEach(key => {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          console.warn(`Could not remove ${key} from localStorage:`, e);
        }
      });
      
      // Clear sessionStorage as well
      try {
        sessionStorage.clear();
      } catch (e) {
        console.warn('Could not clear sessionStorage:', e);
      }
    }
    
    console.log('Logout process completed successfully');
    return { success: true, message: 'Successfully logged out!' };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: 'Error during logout. Please try again.' };
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for auth token in cookies
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => cookie.trim().startsWith('authToken='));
  
  if (authCookie) {
    const token = authCookie.split('=')[1];
    return token && token !== '' && token !== 'undefined';
  }
  
  // Fallback to localStorage
  const localToken = localStorage.getItem('authToken');
  return localToken && localToken !== '' && localToken !== 'null';
};

/**
 * Get current user type
 */
export const getUserType = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  // Check cookies first
  const cookies = document.cookie.split(';');
  const userTypeCookie = cookies.find(cookie => cookie.trim().startsWith('userType='));
  
  if (userTypeCookie) {
    const userType = userTypeCookie.split('=')[1];
    return userType && userType !== '' ? userType : null;
  }
  
  // Fallback to localStorage
  return localStorage.getItem('userType');
};