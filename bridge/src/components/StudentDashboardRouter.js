import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy-loaded Student Pages
import {
  LazyHomeWithBoundary as Home,
  LazyProfileWithBoundary as Profile,
  LazyProfileEditWithBoundary as ProfileEdit,
  LazyOpportunitiesWithBoundary as Opportunities,
  LazyMentorsWithBoundary as Mentors,
  LazyGamesWithBoundary as Games,
  LazyBadgesWithBoundary as Badges,
  LazyAIProWithBoundary as AIPro,
  lazyComponentPreloader
} from './LazyStudentComponents';

// Student Components
import Header from '../components/student-components/Header';
import ComponentErrorBoundary from './ComponentErrorBoundary';
import { StudentNavigationProvider } from '../contexts/StudentNavigationContext';
import { STUDENT_PAGES } from '../constants/navigationStates';

/**
 * Router component for the student dashboard
 * Handles all routing within the student application
 */
const StudentDashboardRouter = ({ userData, onBackToHome, currentStudentPage, onNavigateToStudentPage }) => {
  // Debug logging
  console.log('StudentDashboardRouter rendered with:', { 
    userData: userData?.email || 'No user data', 
    currentStudentPage 
  });

  // Preload components based on current page
  useEffect(() => {
    if (currentStudentPage) {
      lazyComponentPreloader.preloadBasedOnBehavior(currentStudentPage);
    }
  }, [currentStudentPage]);

  return (
    <ComponentErrorBoundary componentName="StudentDashboardRouter">
      <StudentNavigationProvider initialPage={currentStudentPage || STUDENT_PAGES.HOME}>
        <div className="student-dashboard">
          {/* Student Header - always visible in student dashboard */}
          <Header userData={userData} onBackToHome={onBackToHome} />
          
          {/* Student Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile userData={userData} />} />
            <Route path="/profile/edit" element={<ProfileEdit userData={userData} />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/games" element={<Games />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/aipro" element={<AIPro />} />
            
            {/* Fallback route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </StudentNavigationProvider>
    </ComponentErrorBoundary>
  );
};

export default StudentDashboardRouter;