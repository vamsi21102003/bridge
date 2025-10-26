import React from 'react';

/**
 * Loading States and Transition Components
 * Provides smooth loading indicators and transitions for better UX
 */

// Navigation Loading Indicator
export const NavigationLoader = ({ message = 'Loading...', size = 'medium' }) => {
  const sizes = {
    small: { width: '24px', height: '24px', fontSize: '12px' },
    medium: { width: '40px', height: '40px', fontSize: '14px' },
    large: { width: '60px', height: '60px', fontSize: '16px' }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(2px)'
    }}>
      <div style={{
        width: currentSize.width,
        height: currentSize.height,
        border: '3px solid #e5e7eb',
        borderTop: '3px solid #667eea',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '16px'
      }}></div>
      <p style={{
        color: '#6b7280',
        fontSize: currentSize.fontSize,
        fontWeight: '500',
        margin: 0
      }}>
        {message}
      </p>
    </div>
  );
};

// Page Transition Loader
export const PageTransitionLoader = ({ isVisible, message = 'Loading page...' }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      height: '4px',
      backgroundColor: '#e5e7eb',
      zIndex: 9998,
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        backgroundColor: '#667eea',
        animation: 'progressBar 2s ease-in-out infinite',
        transformOrigin: 'left'
      }}></div>
      
      {message && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          color: '#6b7280',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

// Component Loading Skeleton
export const ComponentSkeleton = ({ type = 'default', count = 1 }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    let skeletonContent;

    switch (type) {
      case 'card':
        skeletonContent = (
          <div key={i} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              height: '20px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              marginBottom: '12px',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div style={{
              height: '16px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              marginBottom: '8px',
              width: '80%',
              animation: 'pulse 2s ease-in-out infinite 0.2s'
            }}></div>
            <div style={{
              height: '16px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              width: '60%',
              animation: 'pulse 2s ease-in-out infinite 0.4s'
            }}></div>
          </div>
        );
        break;

      case 'list':
        skeletonContent = (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e5e7eb',
              borderRadius: '50%',
              marginRight: '12px',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div style={{ flex: 1 }}>
              <div style={{
                height: '16px',
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
                marginBottom: '8px',
                width: '70%',
                animation: 'pulse 2s ease-in-out infinite 0.2s'
              }}></div>
              <div style={{
                height: '14px',
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
                width: '50%',
                animation: 'pulse 2s ease-in-out infinite 0.4s'
              }}></div>
            </div>
          </div>
        );
        break;

      case 'header':
        skeletonContent = (
          <div key={i} style={{
            height: '60px',
            backgroundColor: '#e5e7eb',
            borderRadius: '8px',
            marginBottom: '16px',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
        );
        break;

      default:
        skeletonContent = (
          <div key={i} style={{
            height: '100px',
            backgroundColor: '#e5e7eb',
            borderRadius: '8px',
            marginBottom: '16px',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
        );
    }

    skeletons.push(skeletonContent);
  }

  return <div>{skeletons}</div>;
};

// Fade Transition Wrapper
export const FadeTransition = ({ children, isVisible, duration = 300 }) => {
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}ms ease-in-out`,
      pointerEvents: isVisible ? 'auto' : 'none'
    }}>
      {children}
    </div>
  );
};

// Slide Transition Wrapper
export const SlideTransition = ({ children, isVisible, direction = 'right', duration = 300 }) => {
  const transforms = {
    right: isVisible ? 'translateX(0)' : 'translateX(100%)',
    left: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    up: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    down: isVisible ? 'translateY(0)' : 'translateY(100%)'
  };

  return (
    <div style={{
      transform: transforms[direction],
      transition: `transform ${duration}ms ease-in-out`,
      overflow: 'hidden'
    }}>
      {children}
    </div>
  );
};

// Loading Button
export const LoadingButton = ({ 
  children, 
  isLoading, 
  onClick, 
  disabled, 
  variant = 'primary',
  size = 'medium',
  ...props 
}) => {
  const variants = {
    primary: {
      backgroundColor: isLoading || disabled ? '#9ca3af' : '#667eea',
      color: 'white',
      border: 'none'
    },
    secondary: {
      backgroundColor: isLoading || disabled ? '#f3f4f6' : 'white',
      color: isLoading || disabled ? '#9ca3af' : '#374151',
      border: '1px solid #d1d5db'
    }
  };

  const sizes = {
    small: { padding: '6px 12px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '12px 24px', fontSize: '16px' }
  };

  return (
    <button
      onClick={isLoading || disabled ? undefined : onClick}
      disabled={isLoading || disabled}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: '6px',
        cursor: isLoading || disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.2s ease-in-out',
        fontWeight: '500',
        ...props.style
      }}
      {...props}
    >
      {isLoading && (
        <div style={{
          width: '16px',
          height: '16px',
          border: '2px solid transparent',
          borderTop: '2px solid currentColor',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
      )}
      {children}
    </button>
  );
};

// Progress Indicator
export const ProgressIndicator = ({ progress, showPercentage = true, color = '#667eea' }) => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e5e7eb',
      borderRadius: '10px',
      overflow: 'hidden',
      height: '8px',
      position: 'relative'
    }}>
      <div style={{
        width: `${Math.min(100, Math.max(0, progress))}%`,
        height: '100%',
        backgroundColor: color,
        transition: 'width 0.3s ease-in-out',
        borderRadius: '10px'
      }}></div>
      {showPercentage && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '0',
          fontSize: '12px',
          color: '#6b7280',
          fontWeight: '500'
        }}>
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

// Smooth Page Transition Hook (for use with React components)
export const useSmoothTransition = (isVisible, duration = 300) => {
  const [shouldRender, setShouldRender] = React.useState(isVisible);

  React.useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  return {
    shouldRender,
    transitionStyle: {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}ms ease-in-out`
    }
  };
};

// CSS Animations
const animationStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes progressBar {
    0% { transform: scaleX(0); }
    50% { transform: scaleX(0.7); }
    100% { transform: scaleX(1); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .smooth-transition {
    transition: all 0.3s ease-in-out;
  }

  .fade-enter {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-enter-right {
    animation: slideInRight 0.3s ease-in-out;
  }

  .slide-enter-left {
    animation: slideInLeft 0.3s ease-in-out;
  }
`;

// Inject animation styles
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('loading-animations');
  if (!existingStyle) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'loading-animations';
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
  }
}

export default {
  NavigationLoader,
  PageTransitionLoader,
  ComponentSkeleton,
  FadeTransition,
  SlideTransition,
  LoadingButton,
  ProgressIndicator,
  useSmoothTransition
};