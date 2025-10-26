import React from 'react';
import { useStudentNavigation } from '../contexts/StudentNavigationContext';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Test component to verify student dashboard integration
 * This component can be temporarily added to test functionality
 */
const StudentDashboardTest = () => {
  const { currentStudentPage, navigateToStudentPage, canGoBack, goBack } = useStudentNavigation();
  const { currentLanguage, t } = useLanguage();

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <h4>Dashboard Test</h4>
      <p>Current Page: {currentStudentPage}</p>
      <p>Language: {currentLanguage}</p>
      <p>Can Go Back: {canGoBack() ? 'Yes' : 'No'}</p>
      <p>Translation Test: {t('header.logo')}</p>
      
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={() => navigateToStudentPage('opportunities')}
          style={{ margin: '2px', padding: '4px 8px', fontSize: '10px' }}
        >
          Go to Opportunities
        </button>
        <button 
          onClick={() => navigateToStudentPage('profile')}
          style={{ margin: '2px', padding: '4px 8px', fontSize: '10px' }}
        >
          Go to Profile
        </button>
        {canGoBack() && (
          <button 
            onClick={goBack}
            style={{ margin: '2px', padding: '4px 8px', fontSize: '10px' }}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentDashboardTest;