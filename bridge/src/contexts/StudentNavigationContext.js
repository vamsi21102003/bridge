import React, { createContext, useContext, useState } from 'react';
import { STUDENT_PAGES } from '../constants/navigationStates';

const StudentNavigationContext = createContext();

export const useStudentNavigation = () => {
  const context = useContext(StudentNavigationContext);
  if (!context) {
    throw new Error('useStudentNavigation must be used within a StudentNavigationProvider');
  }
  return context;
};

export const StudentNavigationProvider = ({ children, initialPage = STUDENT_PAGES.HOME }) => {
  const [currentStudentPage, setCurrentStudentPage] = useState(initialPage);
  const [navigationHistory, setNavigationHistory] = useState([initialPage]);

  const navigateToStudentPage = (page) => {
    setCurrentStudentPage(page);
    setNavigationHistory(prev => [...prev, page]);
  };

  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = navigationHistory.slice(0, -1);
      const previousPage = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setCurrentStudentPage(previousPage);
      return previousPage;
    }
    return currentStudentPage;
  };

  const canGoBack = () => {
    return navigationHistory.length > 1;
  };

  const value = {
    currentStudentPage,
    navigationHistory,
    navigateToStudentPage,
    goBack,
    canGoBack
  };

  return (
    <StudentNavigationContext.Provider value={value}>
      {children}
    </StudentNavigationContext.Provider>
  );
};

export default StudentNavigationContext;