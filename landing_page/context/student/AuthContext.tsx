'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface StudentUser {
  id: string;
  name: string;
  email: string;
  level: number;
  xp: number;
  skills: string[];
  profileCompletion: number;
}

interface StudentAuthContextType {
  user: StudentUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, userData?: Partial<StudentUser>) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<StudentUser>) => void;
}

const StudentAuthContext = createContext<StudentAuthContextType | undefined>(undefined);

export const StudentAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<StudentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      const authToken = getCookie('authToken');
      const userType = getCookie('userType');
      
      if (authToken && userType === 'student') {
        // Load user data from localStorage or set default
        if (typeof window !== 'undefined') {
          const savedUser = localStorage.getItem('studentUser');
          if (savedUser) {
            setUser(JSON.parse(savedUser));
          } else {
            // Set default user data
            const defaultUser: StudentUser = {
              id: '1',
              name: 'Arjun Sharma',
              email: 'arjun.sharma@student.edu',
              level: 12,
              xp: 2450,
              skills: ['React', 'Python', 'UI/UX', 'Node.js', 'TypeScript'],
              profileCompletion: 80,
            };
            setUser(defaultUser);
            localStorage.setItem('studentUser', JSON.stringify(defaultUser));
          }
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, userData?: Partial<StudentUser>) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set cookies
      setCookie('authToken', 'demo-student-token', 24 * 60 * 60 * 1000); // 24 hours
      setCookie('userType', 'student', 24 * 60 * 60 * 1000);
      
      // Create user object
      const newUser: StudentUser = {
        id: '1',
        name: userData?.name || 'Student User',
        email: email,
        level: userData?.level || 12,
        xp: userData?.xp || 2450,
        skills: userData?.skills || ['React', 'Python', 'UI/UX', 'Node.js', 'TypeScript'],
        profileCompletion: userData?.profileCompletion || 80,
      };
      
      setUser(newUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('studentUser', JSON.stringify(newUser));
      }
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Clear cookies
    setCookie('authToken', '', -1);
    setCookie('userType', '', -1);
    
    // Clear user data
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('studentUser');
    }
    
    // Redirect to home
    router.push('/');
  };

  const updateUser = (userData: Partial<StudentUser>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('studentUser', JSON.stringify(updatedUser));
      }
    }
  };

  const value: StudentAuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return (
    <StudentAuthContext.Provider value={value}>
      {children}
    </StudentAuthContext.Provider>
  );
};

export const useStudentAuth = (): StudentAuthContextType => {
  const context = useContext(StudentAuthContext);
  if (!context) {
    throw new Error('useStudentAuth must be used within a StudentAuthProvider');
  }
  return context;
};

// Helper functions for cookie management
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function setCookie(name: string, value: string, maxAge: number) {
  if (typeof document === 'undefined') return;
  
  if (maxAge < 0) {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  } else {
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
  }
}