'use client';

import { useState, useCallback, useEffect } from 'react';

// ===== TYPE DEFINITIONS =====
export interface FormData {
  // Common fields (all user types)
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
  
  // Student-specific fields
  bputRollNumber: string;
  primaryBranch: string;
  collegeName: string;
  graduationYear: string;
  linkedinProfile: string;
  
  // University-specific fields
  designation: string;
  officialContactNumber: string;
  officialCollegeEmail: string;
  verificationCode: string;
  
  // Employer-specific fields
  companyName: string;
  industryType: string;
  companyWebsite: string;
  representativeName: string;
  representativeDesignation: string;
  officialCompanyEmail: string;
}

export interface AnimationState {
  isActive: boolean;
  isAnimating: boolean;
}

export type UserType = 'student' | 'employer' | 'university';

// ===== CONFIGURATION DATA =====
export const AUTH_CONFIG = {
  BPUT_COLLEGES: [
    "VSSUT, Burla",
    "CET, Bhubaneswar",
    "IIIT, Bhubaneswar",
    "IGIT, Sarang",
    "PMEC, Berhampur",
    "GCE, Keonjhar",
    "Silicon Institute, Bhubaneswar",
    "CV Raman Global University, Bhubaneswar",
    "IMIT, Cuttack",
    "GITA, Bhubaneswar",
    "Other College"
  ],
  
  BRANCHES: [
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Other"
  ],
  
  INDUSTRY_TYPES: [
    "IT Services",
    "Software Development",
    "Manufacturing",
    "Healthcare",
    "Finance & Banking",
    "Education",
    "Consulting",
    "E-commerce",
    "Other"
  ],
  
  USER_TYPES: [
    { id: 'student' as const, label: 'Student', icon: '🎓' },
    { id: 'employer' as const, label: 'Employer', icon: '💼' },
    { id: 'university' as const, label: 'University', icon: '🏛️' }
  ],
  
  SOCIAL_PROVIDERS: [
    { provider: 'google' as const, iconClass: 'fab fa-google' },
    { provider: 'facebook' as const, iconClass: 'fab fa-facebook-f' },
    { provider: 'github' as const, iconClass: 'fab fa-github' },
    { provider: 'linkedin' as const, iconClass: 'fab fa-linkedin-in' }
  ]
};

// ===== UTILITY FUNCTIONS =====
export const generateGraduationYears = (): string[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 11 }, (_, i) => (currentYear + i).toString());
};

export const getInitialFormData = (): FormData => ({
  // Common fields
  email: '',
  password: '',
  fullName: '',
  confirmPassword: '',
  
  // Student-specific fields
  bputRollNumber: '',
  primaryBranch: '',
  collegeName: '',
  graduationYear: '',
  linkedinProfile: '',
  
  // University-specific fields
  designation: '',
  officialContactNumber: '',
  officialCollegeEmail: '',
  verificationCode: '',
  
  // Employer-specific fields
  companyName: '',
  industryType: '',
  companyWebsite: '',
  representativeName: '',
  representativeDesignation: '',
  officialCompanyEmail: ''
});

// ===== VALIDATION FUNCTIONS =====
export const validateRoleSpecificFields = (userType: UserType, formData: FormData): boolean => {
  switch (userType) {
    case 'student':
      return !!(formData.bputRollNumber && formData.primaryBranch && 
               formData.collegeName && formData.graduationYear);
    case 'university':
      return !!(formData.collegeName && formData.designation && 
               formData.officialContactNumber && formData.officialCollegeEmail && 
               formData.verificationCode);
    case 'employer':
      return !!(formData.companyName && formData.industryType && 
               formData.companyWebsite && formData.representativeName && 
               formData.representativeDesignation && formData.officialCompanyEmail);
    default:
      return true;
  }
};

export const validateCommonFields = (formData: FormData, isSignUp: boolean): string | null => {
  if (isSignUp) {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      return 'Please fill in all required fields.';
    }
    
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match.';
    }
  } else {
    if (!formData.email || !formData.password) {
      return 'Please enter your email and password.';
    }
  }
  
  return null;
};

// ===== COMPONENT INTERFACES =====
interface UserTypeSelectorProps {
  userType: UserType;
  onUserTypeChange: (type: UserType) => void;
}

interface InputFieldProps {
  icon: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

interface SelectFieldProps {
  icon: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

interface SocialButtonProps {
  provider: 'google' | 'facebook' | 'github' | 'linkedin';
  onClick?: () => void;
}

interface DynamicRoleFieldsProps {
  userType: UserType;
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface AuthenticationFormProps {
  initialMode?: 'login' | 'signup';
  defaultUserType?: UserType;
  onSubmit?: (data: {
    mode: 'Sign Up' | 'Login';
    userType: UserType;
    commonFields: {
      fullName: string;
      email: string;
      password: string;
    };
    roleSpecificFields: Record<string, any>;
  }) => void;
  onSocialLogin?: (provider: string) => void;
}

// ===== REUSABLE COMPONENTS =====
const UserTypeSelector = ({ userType, onUserTypeChange }: UserTypeSelectorProps) => (
  <div className="user-type-selector">
    {AUTH_CONFIG.USER_TYPES.map((type) => (
      <button
        key={type.id}
        type="button"
        onClick={() => onUserTypeChange(type.id)}
        className={`user-type-btn ${userType === type.id ? 'active' : ''}`}
      >
        <span style={{ marginRight: '0.5rem' }}>{type.icon}</span>
        <span>{type.label}</span>
      </button>
    ))}
  </div>
);

const InputField = ({ 
  icon, 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false 
}: InputFieldProps) => (
  <div className="input-group">
    <span className="input-icon">{icon}</span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="form-input"
    />
  </div>
);

const SelectField = ({ 
  icon, 
  name, 
  placeholder, 
  value, 
  onChange, 
  options,
  required = false 
}: SelectFieldProps) => (
  <div className="input-group">
    <span className="input-icon">{icon}</span>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="form-input form-select"
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
  const config = AUTH_CONFIG.SOCIAL_PROVIDERS.find(p => p.provider === provider);
  
  return (
    <button 
      type="button" 
      className="icon" 
      onClick={onClick}
      title={`Login with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
    >
      <i className={config?.iconClass}></i>
    </button>
  );
};

const DynamicRoleFields = ({ userType, formData, onChange }: DynamicRoleFieldsProps) => {
  const graduationYears = generateGraduationYears();
  
  switch (userType) {
    case 'student':
      return (
        <>
          <InputField icon="🆔" type="text" name="bputRollNumber" placeholder="BPUT Roll Number / Unique ID" value={formData.bputRollNumber} onChange={onChange} required />
          <SelectField icon="🎓" name="primaryBranch" placeholder="Select Primary Branch/Discipline" value={formData.primaryBranch} onChange={onChange} options={AUTH_CONFIG.BRANCHES} required />
          <SelectField icon="🏫" name="collegeName" placeholder="Select College Name" value={formData.collegeName} onChange={onChange} options={AUTH_CONFIG.BPUT_COLLEGES} required />
          <SelectField icon="📅" name="graduationYear" placeholder="Select Graduation Year" value={formData.graduationYear} onChange={onChange} options={graduationYears} required />
          <InputField icon="💼" type="url" name="linkedinProfile" placeholder="LinkedIn Profile URL (Optional)" value={formData.linkedinProfile} onChange={onChange} />
        </>
      );
      
    case 'university':
      return (
        <>
          <SelectField icon="🏛️" name="collegeName" placeholder="Select College Name" value={formData.collegeName} onChange={onChange} options={AUTH_CONFIG.BPUT_COLLEGES} required />
          <InputField icon="👔" type="text" name="designation" placeholder="Designation (e.g., Placement Officer)" value={formData.designation} onChange={onChange} required />
          <InputField icon="📞" type="tel" name="officialContactNumber" placeholder="Official Contact Number" value={formData.officialContactNumber} onChange={onChange} required />
          <InputField icon="✉️" type="email" name="officialCollegeEmail" placeholder="Official College Email" value={formData.officialCollegeEmail} onChange={onChange} required />
          <InputField icon="🛡️" type="text" name="verificationCode" placeholder="Verification Code (Will be provided by admin)" value={formData.verificationCode} onChange={onChange} required />
        </>
      );
      
    case 'employer':
      return (
        <>
          <InputField icon="🏢" type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={onChange} required />
          <SelectField icon="🏭" name="industryType" placeholder="Select Industry Type" value={formData.industryType} onChange={onChange} options={AUTH_CONFIG.INDUSTRY_TYPES} required />
          <InputField icon="🌐" type="url" name="companyWebsite" placeholder="Company Website URL" value={formData.companyWebsite} onChange={onChange} required />
          <InputField icon="👤" type="text" name="representativeName" placeholder="Representative Name" value={formData.representativeName} onChange={onChange} required />
          <InputField icon="🏷️" type="text" name="representativeDesignation" placeholder="Representative Designation" value={formData.representativeDesignation} onChange={onChange} required />
          <InputField icon="✉️" type="email" name="officialCompanyEmail" placeholder="Official Company Email" value={formData.officialCompanyEmail} onChange={onChange} required />
        </>
      );
      
    default:
      return null;
  }
};

// ===== MAIN AUTHENTICATION FORM COMPONENT =====
export default function AuthenticationForm({ 
  initialMode = 'login',
  defaultUserType = 'student',
  onSubmit, 
  onSocialLogin 
}: AuthenticationFormProps) {
  // State management - Start with prop-based initial state to avoid hydration mismatch
  const [animationState, setAnimationState] = useState<AnimationState>({
    isActive: initialMode === 'signup',
    isAnimating: false
  });

  // Track if component has mounted to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);
  
  const [userType, setUserType] = useState<UserType>(defaultUserType);
  const [formData, setFormData] = useState<FormData>(getInitialFormData());

  // Handle initial URL parameter check after mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    
    // Check URL parameters after component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    
    if (modeParam === 'signup' || modeParam === 'login') {
      const shouldBeActive = modeParam === 'signup';
      setAnimationState(prev => ({
        ...prev,
        isActive: shouldBeActive
      }));
    }
  }, []);

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    if (!isMounted) return;

    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const modeParam = urlParams.get('mode');
      const shouldBeActive = modeParam === 'signup';
      
      if (shouldBeActive !== animationState.isActive) {
        setAnimationState(prev => ({
          ...prev,
          isActive: shouldBeActive
        }));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [animationState.isActive, isMounted]);

  // Event handlers
  const handleToggle = useCallback(() => {
    if (animationState.isAnimating || !isMounted) return;
    
    setAnimationState(prev => {
      const newIsActive = !prev.isActive;
      
      // Update URL to reflect current mode
      const url = new URL(window.location.href);
      url.searchParams.set('mode', newIsActive ? 'signup' : 'login');
      window.history.replaceState({}, '', url.toString());
      
      return {
        isActive: newIsActive,
        isAnimating: true
      };
    });
    
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isAnimating: false }));
    }, 600);
  }, [animationState.isAnimating, isMounted]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleUserTypeChange = useCallback((type: UserType) => {
    setUserType(type);
    setFormData(prev => ({
      ...prev,
      bputRollNumber: '',
      primaryBranch: '',
      collegeName: type === 'student' || type === 'university' ? prev.collegeName : '',
      graduationYear: '',
      linkedinProfile: '',
      designation: '',
      officialContactNumber: '',
      officialCollegeEmail: '',
      verificationCode: '',
      companyName: '',
      industryType: '',
      companyWebsite: '',
      representativeName: '',
      representativeDesignation: '',
      officialCompanyEmail: ''
    }));
  }, []);

  const getRoleSpecificData = useCallback(() => {
    switch (userType) {
      case 'student':
        return {
          bputRollNumber: formData.bputRollNumber,
          primaryBranch: formData.primaryBranch,
          collegeName: formData.collegeName,
          graduationYear: formData.graduationYear,
          linkedinProfile: formData.linkedinProfile
        };
      case 'university':
        return {
          collegeName: formData.collegeName,
          designation: formData.designation,
          officialContactNumber: formData.officialContactNumber,
          officialCollegeEmail: formData.officialCollegeEmail,
          verificationCode: formData.verificationCode
        };
      case 'employer':
        return {
          companyName: formData.companyName,
          industryType: formData.industryType,
          companyWebsite: formData.companyWebsite,
          representativeName: formData.representativeName,
          representativeDesignation: formData.representativeDesignation,
          officialCompanyEmail: formData.officialCompanyEmail
        };
      default:
        return {};
    }
  }, [userType, formData]);

  const handleSubmit = useCallback((e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    if (animationState.isAnimating) return;
    
    // Validation
    const commonValidationError = validateCommonFields(formData, isSignUp);
    if (commonValidationError) {
      alert(commonValidationError);
      return;
    }
    
    if (isSignUp && !validateRoleSpecificFields(userType, formData)) {
      alert(`Please fill in all required ${userType} fields.`);
      return;
    }
    
    // Prepare submission data
    const submissionData = {
      mode: (isSignUp ? 'Sign Up' : 'Login') as 'Sign Up' | 'Login',
      userType,
      commonFields: {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      },
      roleSpecificFields: getRoleSpecificData()
    };
    
    if (onSubmit) {
      onSubmit(submissionData);
    } else {
      console.log('Form submitted:', submissionData);
      alert(`${isSignUp ? 'Sign Up' : 'Login'} successful! Check console for details.`);
    }
  }, [animationState.isAnimating, userType, formData, onSubmit, getRoleSpecificData]);

  const handleSocialLogin = useCallback((provider: string) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    } else {
      alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login ready for integration!`);
    }
  }, [onSocialLogin]);

  return (
    <div className="auth-page min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className={`auth-container ${animationState.isActive ? 'active' : ''}`}>
        
        {/* Mobile Toggle Button */}
        <button
          onClick={handleToggle}
          disabled={animationState.isAnimating || !isMounted}
          className="mobile-toggle lg:hidden"
        >
          {isMounted ? (animationState.isActive ? 'Login' : 'Sign Up') : 'Sign Up'}
        </button>
        
        {/* SIGN-UP PANEL */}
        <div className="signup-panel">
          <form onSubmit={(e) => handleSubmit(e, true)} className="auth-form">
            <div className="form-content-wrapper">
              <h1 className="form-title">Create Account</h1>
              
              <div className="social-icons">
                {AUTH_CONFIG.SOCIAL_PROVIDERS.map(({ provider }) => (
                  <SocialButton 
                    key={provider} 
                    provider={provider} 
                    onClick={() => handleSocialLogin(provider)} 
                  />
                ))}
              </div>
              
              <p>or use your email for registration</p>
              
              <UserTypeSelector userType={userType} onUserTypeChange={handleUserTypeChange} />
              
              <div className="form-fields">
                <InputField icon="👤" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
                <InputField icon="✉️" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                <DynamicRoleFields userType={userType} formData={formData} onChange={handleInputChange} />
                <InputField icon="🔒" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                <InputField icon="🔒" type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
              </div>
              
              <button type="submit" disabled={animationState.isAnimating} className="submit-btn">
                <span>Sign Up</span>
                <span>→</span>
              </button>
            </div>
          </form>
        </div>

        {/* SIGN-IN PANEL */}
        <div className="signin-panel">
          <form onSubmit={(e) => handleSubmit(e, false)} className="auth-form">
            <div className="form-content-wrapper">
              <h1 className="form-title">Login</h1>
              
              <div className="social-icons">
                {AUTH_CONFIG.SOCIAL_PROVIDERS.map(({ provider }) => (
                  <SocialButton 
                    key={provider} 
                    provider={provider} 
                    onClick={() => handleSocialLogin(provider)} 
                  />
                ))}
              </div>
              
              <p>or use your email account</p>
              
              <UserTypeSelector userType={userType} onUserTypeChange={handleUserTypeChange} />
              
              <div className="form-fields">
                <InputField icon="✉️" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                <InputField icon="🔒" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              </div>
              
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
              <button type="submit" disabled={animationState.isAnimating} className="submit-btn">
                <span>Login</span>
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
                <button onClick={handleToggle} disabled={animationState.isAnimating} className="toggle-btn">
                  LOG IN →
                </button>
              </div>
            </div>
            
            <div className="promotional-panel promotional-panel-right">
              <div>
                <h2 className="promo-title">Hello, Friend!</h2>
                <p className="promo-description">Register with your personal details to use all of site features</p>
                <button onClick={handleToggle} disabled={animationState.isAnimating} className="toggle-btn">
                  SIGN UP ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}