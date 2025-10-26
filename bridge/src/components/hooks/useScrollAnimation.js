import { useRef, useEffect, useState } from 'react';

/**
 * Simple scroll animation hook stub
 * Returns [ref, isVisible] format expected by components
 */
const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef(null);
  const isVisible = true; // Always visible for now
  
  return [elementRef, isVisible];
};

/**
 * Hook to detect scroll direction
 */
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};

export { useScrollAnimation, useScrollDirection };
export default useScrollAnimation;