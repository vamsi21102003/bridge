import React, { useState, useEffect } from 'react';
import './ProfileCompletionForm.css';

const ProfileCompletionForm = ({ userRole, initialData = {}, onSubmit, onSkip, onBack }) => {
  const [formData, setFormData] = useState({
    // Common fields
    userRole: userRole,
    
    // Student-specific fields
    academicPerformance: {
      currentGPA: '',
      aggregatePercentage: '',
      keySubjectStrengths: []
    },
    skills: {
      technicalSkills: [],
      softSkills: [],
      certifications: []
    },
    projectsExperience: {
      majorProjects: '',
      internshipExperience: []
    },
    interestsPreferences: {
      preferredIndustries: [],
      desiredJobRole: '',
      workStyle: ''
    },
    
    // Institution-specific fields
    placementDetails: {
      totalStudents: '',
      placementPortalUrl: '',
      defaultCriteria: '',
      trainingInterventions: []
    },
    
    // Employer-specific fields
    companyDetails: {
      companyDescription: '',
      numberOfEmployees: '',
      headquartersLocation: '',
      hiringNeeds: {
        primarySkills: [],
        typicalInternshipDuration: ''
      }
    }
  });

  const [currentCertification, setCurrentCertification] = useState({ title: '', issuingAuthority: '' });
  const [currentInternship, setCurrentInternship] = useState({ title: '', company: '', duration: '' });

  // Predefined options
  const technicalSkillsOptions = [
    'Python', 'JavaScript', 'Java', 'C++', 'React', 'Node.js', 'AWS', 'Azure',
    'AutoCAD', 'SolidWorks', 'MATLAB', 'Machine Learning', 'Data Analysis',
    'Cloud Computing', 'DevOps', 'UI/UX Design', 'Mobile Development'
  ];

  const softSkillsOptions = [
    'Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Critical Thinking',
    'Time Management', 'Adaptability', 'Creativity', 'Emotional Intelligence'
  ];

  const industrySectors = [
    'IT Services', 'Software Development', 'Manufacturing', 'Healthcare', 
    'Finance & Banking', 'Education', 'Consulting', 'E-commerce', 'Automotive',
    'Energy', 'Telecommunications', 'Retail', 'Hospitality'
  ];

  const jobRoles = [
    'Software Developer', 'Data Scientist', 'Web Developer', 'Mobile App Developer',
    'DevOps Engineer', 'UI/UX Designer', 'Product Manager', 'Business Analyst',
    'Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Research Scientist'
  ];

  const trainingInterventions = [
    'Technical Skill Development', 'Soft Skills Training', 'Interview Preparation',
    'Resume Building', 'Career Counseling', 'Industry Workshops', 'Mock Interviews'
  ];

  const employeeRanges = [
    '1-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+'
  ];

  const internshipDurations = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);



  const handleNestedInputChange = (section, subSection, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [field]: value
        }
      }
    }));
  };

  const handleArrayToggle = (section, subSection, field, value) => {
    setFormData(prev => {
      const currentArray = prev[section][subSection][field] || [];
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [subSection]: {
            ...prev[section][subSection],
            [field]: updatedArray
          }
        }
      };
    });
  };

  const addCertification = () => {
    if (currentCertification.title && currentCertification.issuingAuthority) {
      setFormData(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          certifications: [...prev.skills.certifications, { ...currentCertification }]
        }
      }));
      setCurrentCertification({ title: '', issuingAuthority: '' });
    }
  };

  const removeCertification = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        certifications: prev.skills.certifications.filter((_, i) => i !== index)
      }
    }));
  };

  const addInternship = () => {
    if (currentInternship.title && currentInternship.company && currentInternship.duration) {
      setFormData(prev => ({
        ...prev,
        projectsExperience: {
          ...prev.projectsExperience,
          internshipExperience: [...prev.projectsExperience.internshipExperience, { ...currentInternship }]
        }
      }));
      setCurrentInternship({ title: '', company: '', duration: '' });
    }
  };

  const removeInternship = (index) => {
    setFormData(prev => ({
      ...prev,
      projectsExperience: {
        ...prev.projectsExperience,
        internshipExperience: prev.projectsExperience.internshipExperience.filter((_, i) => i !== index)
      }
    }));
  };

  const validateStudentProfile = () => {
    const required = [
      formData.academicPerformance.currentGPA,
      formData.academicPerformance.aggregatePercentage,
      formData.skills.technicalSkills.length > 0,
      formData.interestsPreferences.desiredJobRole,
      formData.interestsPreferences.workStyle
    ];
    
    return required.every(field => field);
  };

  const validateInstitutionProfile = () => {
    const required = [
      formData.placementDetails.totalStudents,
      formData.placementDetails.defaultCriteria,
      formData.placementDetails.trainingInterventions.length > 0
    ];
    
    return required.every(field => field);
  };

  const validateEmployerProfile = () => {
    const required = [
      formData.companyDetails.companyDescription,
      formData.companyDetails.numberOfEmployees,
      formData.companyDetails.headquartersLocation,
      formData.companyDetails.hiringNeeds.primarySkills.length > 0,
      formData.companyDetails.hiringNeeds.typicalInternshipDuration
    ];
    
    return required.every(field => field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate based on user role
    let isValid = false;
    let missingFields = '';
    
    if (userRole === 'student') {
      isValid = validateStudentProfile();
      missingFields = 'Please fill in GPA, percentage, at least one technical skill, desired job role, and work style preference.';
    } else if (userRole === 'institution') {
      isValid = validateInstitutionProfile();
      missingFields = 'Please fill in total students, default criteria, and at least one training intervention.';
    } else if (userRole === 'employer') {
      isValid = validateEmployerProfile();
      missingFields = 'Please fill in company description, number of employees, location, at least one primary skill, and internship duration.';
    }
    
    if (!isValid) {
      alert(missingFields);
      return;
    }
    
    try {
      // Prepare profile data based on user role
      let profileData = {};
      
      if (userRole === 'student') {
        profileData = {
          bput_roll_no: initialData?.bputRollNumber || '',
          college_id: null, // You'll need to map college name to ID
          branch_code: initialData?.primaryBranch || '',
          graduation_year: parseInt(initialData?.graduationYear) || new Date().getFullYear() + 4,
          current_semester: 1,
          gpa: parseFloat(formData.academicPerformance.currentGPA) || 0,
          percentage: parseFloat(formData.academicPerformance.aggregatePercentage) || 0,
          linkedin_url: initialData?.linkedinProfile || '',
          career_interests: formData.interestsPreferences.preferredIndustries || [],
          summary: formData.projectsExperience.majorProjects || '',
          skills: formData.skills.technicalSkills || []
        };
      } else if (userRole === 'employer') {
        profileData = {
          company_name: initialData?.companyName || '',
          industry_id: 1, // You'll need to map industry type to ID
          website: initialData?.companyWebsite || '',
          employee_count: parseInt(formData.companyDetails.numberOfEmployees?.split('-')[0]) || 0,
          headquarters: {
            city: formData.companyDetails.headquartersLocation || '',
            country: 'India'
          },
          branding: {}
        };
      }

      console.log('Submitting profile data:', profileData);
      
      // For now, just call the onSubmit callback
      // In a real implementation, you would create API endpoints for profile creation
      if (onSubmit) {
        onSubmit({
          ...formData,
          profileData,
          apiReady: true
        });
      } else {
        alert('Profile completed successfully!');
      }
      
    } catch (error) {
      console.error('Profile submission error:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  // Student Profile Section
  const renderStudentProfile = () => (
    <div className="profile-section">
      <h2>Student Profile Completion</h2>
      <p className="section-description">Complete your profile for AI-driven career recommendations and matching</p>

      {/* Academic Performance */}
      <div className="form-section">
        <h3>Academic Performance</h3>
        <div className="input-group">
          <label>Current GPA</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            value={formData.academicPerformance.currentGPA}
            onChange={(e) => handleNestedInputChange('academicPerformance', '', 'currentGPA', e.target.value)}
            placeholder="Enter your current GPA"
          />
        </div>
        
        <div className="input-group">
          <label>Aggregate Percentage</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={formData.academicPerformance.aggregatePercentage}
            onChange={(e) => handleNestedInputChange('academicPerformance', '', 'aggregatePercentage', e.target.value)}
            placeholder="Enter aggregate percentage"
          />
        </div>

        <div className="input-group">
          <label>Key Subject Strengths</label>
          <div className="tags-container">
            {technicalSkillsOptions.map(skill => (
              <button
                key={skill}
                type="button"
                className={`tag ${formData.academicPerformance.keySubjectStrengths.includes(skill) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('academicPerformance', '', 'keySubjectStrengths', skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills & Certifications */}
      <div className="form-section">
        <h3>Skills & Certifications</h3>
        
        <div className="input-group">
          <label>Technical Skills</label>
          <div className="tags-container">
            {technicalSkillsOptions.map(skill => (
              <button
                key={skill}
                type="button"
                className={`tag ${formData.skills.technicalSkills.includes(skill) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('skills', '', 'technicalSkills', skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Soft Skills</label>
          <div className="tags-container">
            {softSkillsOptions.map(skill => (
              <button
                key={skill}
                type="button"
                className={`tag ${formData.skills.softSkills.includes(skill) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('skills', '', 'softSkills', skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Certifications & Courses</label>
          <div className="dynamic-list">
            <div className="add-item-form">
              <input
                type="text"
                placeholder="Certification Title"
                value={currentCertification.title}
                onChange={(e) => setCurrentCertification(prev => ({ ...prev, title: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Issuing Authority"
                value={currentCertification.issuingAuthority}
                onChange={(e) => setCurrentCertification(prev => ({ ...prev, issuingAuthority: e.target.value }))}
              />
              <button type="button" onClick={addCertification} className="add-btn">
                Add Certification
              </button>
            </div>
            <div className="items-list">
              {formData.skills.certifications.map((cert, index) => (
                <div key={index} className="list-item">
                  <span>{cert.title} - {cert.issuingAuthority}</span>
                  <button type="button" onClick={() => removeCertification(index)} className="remove-btn">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects & Experience */}
      <div className="form-section">
        <h3>Projects & Experience</h3>
        
        <div className="input-group">
          <label>Major Academic/Personal Projects Summary</label>
          <textarea
            value={formData.projectsExperience.majorProjects}
            onChange={(e) => handleNestedInputChange('projectsExperience', '', 'majorProjects', e.target.value)}
            placeholder="Describe your major projects, technologies used, and your contributions..."
            rows="4"
          />
        </div>

        <div className="input-group">
          <label>Past Internship Experience</label>
          <div className="dynamic-list">
            <div className="add-item-form">
              <input
                type="text"
                placeholder="Internship Title"
                value={currentInternship.title}
                onChange={(e) => setCurrentInternship(prev => ({ ...prev, title: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Company"
                value={currentInternship.company}
                onChange={(e) => setCurrentInternship(prev => ({ ...prev, company: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Duration (months)"
                value={currentInternship.duration}
                onChange={(e) => setCurrentInternship(prev => ({ ...prev, duration: e.target.value }))}
              />
              <button type="button" onClick={addInternship} className="add-btn">
                Add Internship
              </button>
            </div>
            <div className="items-list">
              {formData.projectsExperience.internshipExperience.map((internship, index) => (
                <div key={index} className="list-item">
                  <span>{internship.title} at {internship.company} ({internship.duration} months)</span>
                  <button type="button" onClick={() => removeInternship(index)} className="remove-btn">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests & Preferences */}
      <div className="form-section">
        <h3>Interests & Preferences</h3>
        
        <div className="input-group">
          <label>Preferred Industry Sector</label>
          <div className="tags-container">
            {industrySectors.map(industry => (
              <button
                key={industry}
                type="button"
                className={`tag ${formData.interestsPreferences.preferredIndustries.includes(industry) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('interestsPreferences', '', 'preferredIndustries', industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Desired Job Role/Function</label>
          <select
            value={formData.interestsPreferences.desiredJobRole}
            onChange={(e) => handleNestedInputChange('interestsPreferences', '', 'desiredJobRole', e.target.value)}
          >
            <option value="">Select desired job role</option>
            {jobRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Work Style Preference</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="workStyle"
                value="structured"
                checked={formData.interestsPreferences.workStyle === 'structured'}
                onChange={(e) => handleNestedInputChange('interestsPreferences', '', 'workStyle', e.target.value)}
              />
              <span>Prefer structured work with clear guidelines</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="workStyle"
                value="flexible"
                checked={formData.interestsPreferences.workStyle === 'flexible'}
                onChange={(e) => handleNestedInputChange('interestsPreferences', '', 'workStyle', e.target.value)}
              />
              <span>Prefer flexible work with autonomy</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="workStyle"
                value="balanced"
                checked={formData.interestsPreferences.workStyle === 'balanced'}
                onChange={(e) => handleNestedInputChange('interestsPreferences', '', 'workStyle', e.target.value)}
              />
              <span>Balanced approach</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  // Institution Profile Section
  const renderInstitutionProfile = () => (
    <div className="profile-section">
      <h2>Institution Profile Completion</h2>
      <p className="section-description">Configure your institution settings for the University Employability Dashboard</p>

      <div className="form-section">
        <h3>Placement Cell Details</h3>
        
        <div className="input-group">
          <label>Total Number of Students Managed</label>
          <input
            type="number"
            value={formData.placementDetails.totalStudents}
            onChange={(e) => handleNestedInputChange('placementDetails', '', 'totalStudents', e.target.value)}
            placeholder="Enter total number of students"
          />
        </div>

        <div className="input-group">
          <label>Existing Placement Portal URL (Optional)</label>
          <input
            type="url"
            value={formData.placementDetails.placementPortalUrl}
            onChange={(e) => handleNestedInputChange('placementDetails', '', 'placementPortalUrl', e.target.value)}
            placeholder="https://your-portal-url.com"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Policy & Settings</h3>
        
        <div className="input-group">
          <label>Default Placement Criteria (Minimum GPA/Eligibility)</label>
          <input
            type="text"
            value={formData.placementDetails.defaultCriteria}
            onChange={(e) => handleNestedInputChange('placementDetails', '', 'defaultCriteria', e.target.value)}
            placeholder="e.g., 7.0 GPA or 70% aggregate"
          />
        </div>

        <div className="input-group">
          <label>Training Interventions Offered</label>
          <div className="tags-container">
            {trainingInterventions.map(intervention => (
              <button
                key={intervention}
                type="button"
                className={`tag ${formData.placementDetails.trainingInterventions.includes(intervention) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('placementDetails', '', 'trainingInterventions', intervention)}
              >
                {intervention}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Employer Profile Section
  const renderEmployerProfile = () => (
    <div className="profile-section">
      <h2>Employer Profile Completion</h2>
      <p className="section-description">Set up your company profile for seamless collaboration and job postings</p>

      <div className="form-section">
        <h3>Company Details</h3>
        
        <div className="input-group">
          <label>Company Description</label>
          <textarea
            value={formData.companyDetails.companyDescription}
            onChange={(e) => handleNestedInputChange('companyDetails', '', 'companyDescription', e.target.value)}
            placeholder="Brief description of your company, mission, and values..."
            rows="4"
          />
        </div>

        <div className="input-group">
          <label>Number of Employees</label>
          <select
            value={formData.companyDetails.numberOfEmployees}
            onChange={(e) => handleNestedInputChange('companyDetails', '', 'numberOfEmployees', e.target.value)}
          >
            <option value="">Select employee range</option>
            {employeeRanges.map(range => (
              <option key={range} value={range}>{range} employees</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Headquarters Location</label>
          <input
            type="text"
            value={formData.companyDetails.headquartersLocation}
            onChange={(e) => handleNestedInputChange('companyDetails', '', 'headquartersLocation', e.target.value)}
            placeholder="City, Country"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Hiring Needs</h3>
        
        <div className="input-group">
          <label>Primary Skills in Demand</label>
          <div className="tags-container">
            {technicalSkillsOptions.map(skill => (
              <button
                key={skill}
                type="button"
                className={`tag ${formData.companyDetails.hiringNeeds.primarySkills.includes(skill) ? 'active' : ''}`}
                onClick={() => handleArrayToggle('companyDetails', 'hiringNeeds', 'primarySkills', skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Typical Internship Duration (Months)</label>
          <select
            value={formData.companyDetails.hiringNeeds.typicalInternshipDuration}
            onChange={(e) => handleNestedInputChange('companyDetails', 'hiringNeeds', 'typicalInternshipDuration', e.target.value)}
          >
            <option value="">Select duration</option>
            {internshipDurations.map(duration => (
              <option key={duration} value={duration}>{duration} months</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="profile-completion-form">
      <div className="form-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1>Complete Your Profile</h1>
            <p>Fill in your details to enhance your experience on our platform</p>
          </div>
          <button 
            type="button"
            onClick={() => onSkip && onSkip()}
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '14px',
              color: '#666',
              cursor: 'pointer',
              marginTop: '10px'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#f5f5f5';
              e.target.style.borderColor = '#999';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = '#ccc';
            }}
          >
            Skip for now
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="dynamic-form">
        {userRole === 'student' && renderStudentProfile()}
        {userRole === 'institution' && renderInstitutionProfile()}
        {userRole === 'employer' && renderEmployerProfile()}

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Complete Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCompletionForm;