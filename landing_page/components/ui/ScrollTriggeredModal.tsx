'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

// Types
type Role = 'student' | 'institution';

type SignInForm = {
  email: string;
  password: string;
  remember?: boolean;
};

type SignUpForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface ScrollTriggeredModalProps {
  onClose?: () => void;
  onSubmit?: (data: any) => void;
  onSocialLogin?: (provider: string) => void;
}

// Social providers configuration
const SOCIAL_PROVIDERS = [
  { provider: 'google', icon: 'G', iconClass: 'fab fa-google' },
  { provider: 'facebook', icon: 'f', iconClass: 'fab fa-facebook-f' },
  { provider: 'github', icon: 'gh', iconClass: 'fab fa-github' },
  { provider: 'linkedin', icon: 'in', iconClass: 'fab fa-linkedin-in' }
];

const ROLES = [
  { key: 'student' as const, label: 'Student', icon: '🎓' },
  { key: 'institution' as const, label: 'Institution', icon: '🏛️' }
];

export const ScrollTriggeredModal: React.FC<ScrollTriggeredModalProps> = ({
  onClose,
  onSubmit,
  onSocialLogin
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [role, setRole] = useState<Role>('student');

  const signInForm = useForm<SignInForm>({
    defaultValues: { email: '', password: '', remember: false }
  });

  const signUpForm = useForm<SignUpForm>({
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '' }
  });

  const handleToggle = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsSignUp(prev => !prev);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  const handleSignInSubmit = (data: SignInForm) => {
    if (onSubmit) {
      onSubmit({ ...data, role, mode: 'signin' });
    } else {
      console.log('Sign in', role, data);
      alert('Sign in successful! Check console for details.');
    }
  };

  const handleSignUpSubmit = (data: SignUpForm) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (onSubmit) {
      onSubmit({ ...data, role, mode: 'signup' });
    } else {
      console.log('Sign up', role, data);
      alert('Sign up successful! Check console for details.');
    }
  };

  const handleSocialClick = (provider: string) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    } else {
      alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login ready for integration!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.4
        }}
        className="w-[92%] md:w-3/4 lg:w-3/5 max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="auth-page">
          <div className={`auth-container ${isSignUp ? 'active' : ''}`} style={{ minHeight: '500px' }}>
            
            {/* Close Button - Inside the modal box */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2} />
            </button>
            
            {/* Mobile Toggle Button */}
            <button
              onClick={handleToggle}
              disabled={isAnimating}
              className="mobile-toggle lg:hidden"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          
            {/* SIGN-UP PANEL */}
            <div className="signup-panel">
              <form onSubmit={signUpForm.handleSubmit(handleSignUpSubmit)} className="auth-form">
                <div className="form-content-wrapper">
                  <h1 className="form-title">Create Account</h1>
                  
                  <div className="social-icons">
                    {SOCIAL_PROVIDERS.map(({ provider, iconClass }) => (
                      <button 
                        key={provider}
                        type="button"
                        className="icon" 
                        onClick={() => handleSocialClick(provider)}
                        title={`Sign up with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
                      >
                        <i className={iconClass}></i>
                      </button>
                    ))}
                  </div>
                  
                  <p>or use your email for registration</p>
                  
                  {/* Role selector */}
                  <div className="user-type-selector">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => setRole(r.key)}
                        className={`user-type-btn ${role === r.key ? 'active' : ''}`}
                      >
                        <span style={{ marginRight: '0.5rem' }}>{r.icon}</span>
                        <span>{r.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="form-fields">
                    <div className="input-group">
                      <span className="input-icon">👤</span>
                      <input
                        {...signUpForm.register("fullName", { required: true })}
                        type="text"
                        placeholder="Full Name"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="input-group">
                      <span className="input-icon">✉️</span>
                      <input
                        {...signUpForm.register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="input-group">
                      <span className="input-icon">🔒</span>
                      <input
                        {...signUpForm.register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="input-group">
                      <span className="input-icon">🔒</span>
                      <input
                        {...signUpForm.register("confirmPassword", { required: true })}
                        type="password"
                        placeholder="Confirm Password"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isAnimating} className="submit-btn">
                    <span>Sign Up</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* SIGN-IN PANEL */}
            <div className="signin-panel">
              <form onSubmit={signInForm.handleSubmit(handleSignInSubmit)} className="auth-form">
                <div className="form-content-wrapper">
                  <h1 className="form-title">Sign In</h1>
                  
                  <div className="social-icons">
                    {SOCIAL_PROVIDERS.map(({ provider, iconClass }) => (
                      <button 
                        key={provider}
                        type="button"
                        className="icon" 
                        onClick={() => handleSocialClick(provider)}
                        title={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
                      >
                        <i className={iconClass}></i>
                      </button>
                    ))}
                  </div>
                  
                  <p>or use your email password</p>
                  
                  {/* Role selector */}
                  <div className="user-type-selector">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => setRole(r.key)}
                        className={`user-type-btn ${role === r.key ? 'active' : ''}`}
                      >
                        <span style={{ marginRight: '0.5rem' }}>{r.icon}</span>
                        <span>{r.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="form-fields">
                    <div className="input-group">
                      <span className="input-icon">✉️</span>
                      <input
                        {...signInForm.register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="input-group">
                      <span className="input-icon">🔒</span>
                      <input
                        {...signInForm.register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-options">
                    <label className="remember-me">
                      <input {...signInForm.register("remember")} type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                  </div>
                  
                  <button type="submit" disabled={isAnimating} className="submit-btn">
                    <span>Sign In</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* TOGGLE OVERLAY PANEL */}
            <div className="toggle-overlay hidden lg:block">
              <div className="toggle-wrapper">
                <div className="promotional-panel promotional-panel-left">
                  <div>
                    <h2 className="promo-title">Welcome Back!</h2>
                    <p className="promo-description">Enter your personal details to use all of site features</p>
                    <button onClick={handleToggle} disabled={isAnimating} className="toggle-btn">
                      SIGN IN →
                    </button>
                  </div>
                </div>
                
                <div className="promotional-panel promotional-panel-right">
                  <div>
                    <h2 className="promo-title">Hello, Friend!</h2>
                    <p className="promo-description">Register with your personal details to use all of site features</p>
                    <button onClick={handleToggle} disabled={isAnimating} className="toggle-btn">
                      SIGN UP →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollTriggeredModal;