import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import './ScrollTriggeredModal.css';

const ScrollTriggeredModal = ({ onLoginSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Trigger when user is within 100px of the bottom
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 100;
      
      if (isAtBottom && !hasTriggered) {
        setIsModalOpen(true);
        setHasTriggered(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    // Close modal if clicking on backdrop
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  const handleLoginSuccess = (userData) => {
    closeModal();
    if (onLoginSuccess) {
      onLoginSuccess(userData);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className={`modal-backdrop ${isModalOpen ? 'modal-open' : ''}`}
      onClick={handleModalClick}
    >
      <div className="modal-container">
        <button 
          className="modal-close-btn"
          onClick={closeModal}
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="modal-content">
          <LoginPage 
            onLoginSuccess={handleLoginSuccess}
            onClose={closeModal}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollTriggeredModal;