'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseScrollToBottomOptions {
  threshold?: number; // Percentage from bottom to trigger (0-100)
  delay?: number; // Delay in milliseconds before showing modal
  onlyOnce?: boolean; // Show modal only once per session
}

export const useScrollToBottom = (options: UseScrollToBottomOptions = {}) => {
  const {
    threshold = 95, // Trigger when 95% scrolled
    delay = 500, // 500ms delay
    onlyOnce = true
  } = options;

  const [isTriggered, setIsTriggered] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  const checkScrollPosition = useCallback(() => {
    // Skip if already shown once and onlyOnce is true
    if (onlyOnce && hasShownOnce) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100;
    
    // Trigger when threshold is reached
    if (scrollPercentage >= threshold && !isTriggered) {
      setTimeout(() => {
        setIsTriggered(true);
        if (onlyOnce) {
          setHasShownOnce(true);
        }
      }, delay);
    }
  }, [threshold, delay, isTriggered, onlyOnce, hasShownOnce]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScrollPosition, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [checkScrollPosition]);

  const resetTrigger = useCallback(() => {
    setIsTriggered(false);
  }, []);

  const resetSession = useCallback(() => {
    setIsTriggered(false);
    setHasShownOnce(false);
  }, []);

  return {
    isTriggered,
    resetTrigger,
    resetSession,
    hasShownOnce
  };
};