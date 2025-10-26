import { useRef } from 'react';

/**
 * Simple scroll animation hook stub
 * Returns [ref, isVisible] format expected by components
 */
const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef(null);
  const isVisible = true; // Always visible for now
  
  return [elementRef, isVisible];
};

export { useScrollAnimation };
export default useScrollAnimation;