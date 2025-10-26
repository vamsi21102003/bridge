import React from 'react';

/**
 * Wrapper component that applies the student-app CSS namespace
 * to ensure proper styling isolation for student components
 */
const StudentAppWrapper = ({ children, className = '' }) => {
  return (
    <div className={`student-app ${className}`.trim()}>
      {children}
    </div>
  );
};

export default StudentAppWrapper;