import React, { useState, useRef } from 'react';
// API service removed - using mock authentication
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess, onClose, isModal = false }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    college: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student',

    // Student-specific fields
    bputRollNumber: '',
    primaryBranch: '',
    graduationYear: '',
    linkedinProfile: '',

    // Institution-specific fields
    designation: '',
    officialContact: '',
    officialEmail: '',
    verificationCode: '',

    // Employer-specific fields
    companyName: '',
    industryType: '',
    companyWebsite: '',
    representativeName: '',
    representativeDesignation: '',
    officialCompanyEmail: ''
  });

  const containerRef = useRef(null);
  const formRef = useRef(null);

  // BPUT-affiliated colleges data
  const bputColleges = [
    "CET, Bhubaneswar",
    "GITA, Bhubaneswar",
    "TECHNO, Bhubaneswar",
    "GIET, Gunupur",
    "CEC, Jharsuguda",
    "VSSUT, Burla",
    "ITER, Bhubaneswar",
    "Other BPUT Affiliated College"
  ];

  // Branch/Discipline options
  const branches = [
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Other"
  ];

  // Industry types
  const industryTypes = [
    "IT Services",
    "Software Development",
    "Manufacturing",
    "Healthcare",
    "Finance & Banking",
    "Education",
    "Consulting",
    "E-commerce",
    "Other"
  ];

  // Graduation years
  const graduationYears = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);



  const handleToggle = () => {
    setIsLogin(!isLogin);
    if (containerRef.current) {
      containerRef.current.classList.toggle('active');
    }
    if (formRef.current) {
      formRef.current.scrollTop = 0;
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({
      ...formData,
      userType: type
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords for signup
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
      }
    }

    // Role-specific validation
    if (!validateRoleSpecificFields()) {
      return;
    }

    try {
      if (isLogin) {
        // Handle Login
        // Mock login (backend removed)
        const data = { 
          user: { 
            id: 'mock_user_' + Date.now(), 
            email: formData.email, 
            role: 'student' 
          } 
        };
        
        console.log('Login successful:', data.user);
        // Call the success callback to navigate to profile completion
        if (onLoginSuccess) {
          onLoginSuccess({
            ...data.user,
            userType: data.user.role
          });
        }
      } else {
        // Handle Registration
        const registrationData = {
          email: formData.email,
          password: formData.password,
          role: userType,
          preferences: {}
        };

        // Mock registration (backend removed)
        const data = { 
          user: { 
            id: 'mock_user_' + Date.now(), 
            email: registrationData.email, 
            role: registrationData.role 
          } 
        };
        
        console.log('Registration successful:', data.user);
        // After successful registration, pass the form data for profile completion
        if (onLoginSuccess) {
          onLoginSuccess({
            ...data.user,
            userType: data.user.role,
            // Include form data for profile completion
            name: formData.name,
            college: formData.college,
            bputRollNumber: formData.bputRollNumber,
            primaryBranch: formData.primaryBranch,
            graduationYear: formData.graduationYear,
            linkedinProfile: formData.linkedinProfile,
            designation: formData.designation,
            officialContact: formData.officialContact,
            officialEmail: formData.officialEmail,
            verificationCode: formData.verificationCode,
            companyName: formData.companyName,
            industryType: formData.industryType,
            companyWebsite: formData.companyWebsite,
            representativeName: formData.representativeName,
            representativeDesignation: formData.representativeDesignation,
            officialCompanyEmail: formData.officialCompanyEmail
          });
        }
      }
    } catch (error) {
      console.error('API Error:', error);
      alert(error.message || 'Network error. Please check your connection and try again.');
    }
  };

  const validateRoleSpecificFields = () => {
    if (isLogin) return true; // No additional validation for login

    switch (userType) {
      case 'student':
        if (!formData.bputRollNumber) {
          alert("BPUT Roll Number is required!");
          return false;
        }
        if (!formData.primaryBranch) {
          alert("Primary Branch is required!");
          return false;
        }
        if (!formData.graduationYear) {
          alert("Graduation Year is required!");
          return false;
        }
        break;

      case 'institution':
        if (!formData.designation) {
          alert("Designation is required!");
          return false;
        }
        if (!formData.officialContact) {
          alert("Official Contact Number is required!");
          return false;
        }
        if (!formData.officialEmail) {
          alert("Official College Email is required!");
          return false;
        }
        break;

      case 'employer':
        if (!formData.companyName) {
          alert("Company Name is required!");
          return false;
        }
        if (!formData.industryType) {
          alert("Industry Type is required!");
          return false;
        }
        if (!formData.representativeName) {
          alert("Representative Name is required!");
          return false;
        }
        if (!formData.officialCompanyEmail) {
          alert("Official Company Email is required!");
          return false;
        }
        break;

      default:
        break;
    }
    return true;
  };

  // Render student-specific fields
  const renderStudentFields = () => {
    if (userType !== 'student' || isLogin) return null;

    return (
      <>
        <div className="input-group">
          <input
            type="text"
            name="bputRollNumber"
            placeholder="BPUT Roll Number / Unique ID"
            className="input-field"
            value={formData.bputRollNumber}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-id-card"></i>
        </div>

        <div className="input-group">
          <select
            name="primaryBranch"
            className="input-field"
            value={formData.primaryBranch}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Primary Branch/Discipline</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
          <i className="input-icon fas fa-graduation-cap"></i>
        </div>

        <div className="input-group">
          <select
            name="college"
            className="input-field"
            value={formData.college}
            onChange={handleInputChange}
            required
          >
            <option value="">Select College Name</option>
            {bputColleges.map(college => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
          <i className="input-icon fas fa-school"></i>
        </div>

        <div className="input-group">
          <select
            name="graduationYear"
            className="input-field"
            value={formData.graduationYear}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Year of Graduation</option>
            {graduationYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <i className="input-icon fas fa-calendar-alt"></i>
        </div>

        <div className="input-group">
          <input
            type="url"
            name="linkedinProfile"
            placeholder="LinkedIn Profile URL (Optional)"
            className="input-field"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
          />
          <i className="input-icon fab fa-linkedin"></i>
        </div>
      </>
    );
  };

  // Render institution-specific fields
  const renderInstitutionFields = () => {
    if (userType !== 'institution' || isLogin) return null;

    return (
      <>
        <div className="input-group">
          <select
            name="college"
            className="input-field"
            value={formData.college}
            onChange={handleInputChange}
            required
          >
            <option value="">Select College Name</option>
            {bputColleges.map(college => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
          <i className="input-icon fas fa-university"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="designation"
            placeholder="Designation (e.g., Placement Officer)"
            className="input-field"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-user-tie"></i>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="officialContact"
            placeholder="Official Contact Number"
            className="input-field"
            value={formData.officialContact}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-phone"></i>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="officialEmail"
            placeholder="Official College Email"
            className="input-field"
            value={formData.officialEmail}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-envelope"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="verificationCode"
            placeholder="Verification Code (Will be provided by admin)"
            className="input-field"
            value={formData.verificationCode}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-shield-alt"></i>
        </div>
      </>
    );
  };

  // Render employer-specific fields
  const renderEmployerFields = () => {
    if (userType !== 'employer' || isLogin) return null;

    return (
      <>
        <div className="input-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="input-field"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-building"></i>
        </div>

        <div className="input-group">
          <select
            name="industryType"
            className="input-field"
            value={formData.industryType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Industry Type</option>
            {industryTypes.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          <i className="input-icon fas fa-industry"></i>
        </div>

        <div className="input-group">
          <input
            type="url"
            name="companyWebsite"
            placeholder="Company Website URL"
            className="input-field"
            value={formData.companyWebsite}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-globe"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="representativeName"
            placeholder="Representative Name"
            className="input-field"
            value={formData.representativeName}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-user"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="representativeDesignation"
            placeholder="Representative Designation"
            className="input-field"
            value={formData.representativeDesignation}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-id-badge"></i>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="officialCompanyEmail"
            placeholder="Official Company Email"
            className="input-field"
            value={formData.officialCompanyEmail}
            onChange={handleInputChange}
            required
          />
          <i className="input-icon fas fa-envelope"></i>
        </div>
      </>
    );
  };

  return (
    <div className={`login-container ${isModal ? 'modal-mode' : ''}`}>
      {/* Decorative background */}
      <div className="decorative-background" />

      {/* Close Button */}
      {onClose && (
        <button className="close-btn" onClick={onClose} title="Close">
          <i className="fas fa-times"></i>
        </button>
      )}

      {/* Main Container */}
      <div className="container" ref={containerRef}>

        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit} className="form" ref={formRef}>
            <h1 className="form-title">Create Account</h1>
            <div className="social-icons">
              <button type="button" className="icon glowing-icon" title="Sign up with Google">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign up with Facebook">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign up with GitHub">
                <i className="fab fa-github"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign up with LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
            <span className="subtitle">or use your email for registration</span>

            {/* User Type Selection */}
            <div className="user-type-selector">
              <button
                type="button"
                className={`type-btn ${userType === 'student' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('student')}
              >
                <i className="fas fa-user-graduate"></i>
                Student
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'employer' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('employer')}
              >
                <i className="fas fa-briefcase"></i>
                Employer
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'institution' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('institution')}
              >
                <i className="fas fa-university"></i>
                Institution
              </button>
            </div>

            {/* Common Fields */}
            {!isLogin && (
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <i className="input-icon fas fa-user"></i>
              </div>
            )}

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <i className="input-icon fas fa-envelope"></i>
            </div>

            {/* Dynamic Role-Specific Fields */}
            {renderStudentFields()}
            {renderInstitutionFields()}
            {renderEmployerFields()}

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength="6"
              />
              <i className="input-icon fas fa-lock"></i>
            </div>

            {!isLogin && (
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-field"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  minLength="6"
                />
                <i className="input-icon fas fa-lock"></i>
              </div>
            )}

            <button type="submit" className="submit-btn">
              <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit} className="form" ref={formRef}>
            <h1 className="form-title">Sign In</h1>
            <div className="social-icons">
              <button type="button" className="icon glowing-icon" title="Sign in with Google">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign in with Facebook">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign in with GitHub">
                <i className="fab fa-github"></i>
              </button>
              <button type="button" className="icon glowing-icon" title="Sign in with LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
            <span className="subtitle">or use your email password</span>

            {/* User Type Selection */}
            <div className="user-type-selector">
              <button
                type="button"
                className={`type-btn ${userType === 'student' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('student')}
              >
                <i className="fas fa-user-graduate"></i>
                Student
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'employer' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('employer')}
              >
                <i className="fas fa-briefcase"></i>
                Employer
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'institution' ? 'active' : ''}`}
                onClick={() => handleUserTypeChange('institution')}
              >
                <i className="fas fa-university"></i>
                Institution
              </button>
            </div>

            {/* Login Fields - No additional role-specific fields needed */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <i className="input-icon fas fa-envelope"></i>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <i className="input-icon fas fa-lock"></i>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <button type="button" className="forgot-password">Forgot Password?</button>
            </div>

            <button type="submit" className="submit-btn">
              <span>Sign In</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Toggle Container (unchanged) */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="submit-btn ghost" onClick={handleToggle}>
                Sign In
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="submit-btn ghost" onClick={handleToggle}>
                Sign Up
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;