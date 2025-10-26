import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = ({ studentData, onSubmit, onSkip, onBack }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: studentData?.name || '',
      email: studentData?.email || '',
      phone: '',
      address: ''
    },
    academicInfo: {
      college: studentData?.college || '',
      branch: studentData?.primaryBranch || '',
      rollNumber: studentData?.bputRollNumber || '',
      graduationYear: studentData?.graduationYear || '',
      currentSemester: '',
      gpa: ''
    },
    skills: {
      technicalSkills: [],
      programmingLanguages: [],
      tools: []
    },
    projects: [],
    experience: []
  });

  const technicalSkills = [
    'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
    'Cloud Computing', 'DevOps', 'UI/UX Design', 'Database Management'
  ];

  const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'React', 'Node.js',
    'Angular', 'Vue.js', 'Django', 'Flask', 'Spring Boot'
  ];

  const tools = [
    'Git', 'Docker', 'AWS', 'Azure', 'MongoDB', 'MySQL', 'PostgreSQL',
    'Jenkins', 'Kubernetes', 'Figma', 'Adobe XD'
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSkillToggle = (skillType, skill) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skillType]: prev.skills[skillType].includes(skill)
          ? prev.skills[skillType].filter(s => s !== skill)
          : [...prev.skills[skillType], skill]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Form Data:', formData);
    
    // Call the onSubmit callback with form data
    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert('Student form submitted successfully!');
    }
  };

  return (
    <div className="student-form-container">
      <div className="form-header" style={{ position: 'relative' }}>
        {/* Skip button positioned in top-right corner */}
        <button 
          type="button"
          onClick={() => {
            console.log('Student form skipped');
            if (onSkip) {
              onSkip();
            } else {
              alert('Student form skipped for now');
            }
          }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: '12px',
            color: '#666',
            cursor: 'pointer',
            zIndex: 10
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
        
        {/* Back button and title */}
        <button onClick={onBack} className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <h1>Student Information Form</h1>
        <p>Complete your student profile</p>
      </div>

      <form onSubmit={handleSubmit} className="student-form">
        {/* Personal Information */}
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.personalInfo.fullName}
                onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="input-group">
              <label>Address</label>
              <textarea
                value={formData.personalInfo.address}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                placeholder="Enter your address"
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="form-section">
          <h2>Academic Information</h2>
          <div className="form-grid">
            <div className="input-group">
              <label>College</label>
              <input
                type="text"
                value={formData.academicInfo.college}
                onChange={(e) => handleInputChange('academicInfo', 'college', e.target.value)}
                placeholder="College name"
                readOnly
              />
            </div>
            <div className="input-group">
              <label>Branch</label>
              <input
                type="text"
                value={formData.academicInfo.branch}
                onChange={(e) => handleInputChange('academicInfo', 'branch', e.target.value)}
                placeholder="Branch/Department"
                readOnly
              />
            </div>
            <div className="input-group">
              <label>Roll Number</label>
              <input
                type="text"
                value={formData.academicInfo.rollNumber}
                onChange={(e) => handleInputChange('academicInfo', 'rollNumber', e.target.value)}
                placeholder="BPUT Roll Number"
                readOnly
              />
            </div>
            <div className="input-group">
              <label>Graduation Year</label>
              <input
                type="text"
                value={formData.academicInfo.graduationYear}
                onChange={(e) => handleInputChange('academicInfo', 'graduationYear', e.target.value)}
                placeholder="Year of graduation"
                readOnly
              />
            </div>
            <div className="input-group">
              <label>Current Semester</label>
              <select
                value={formData.academicInfo.currentSemester}
                onChange={(e) => handleInputChange('academicInfo', 'currentSemester', e.target.value)}
                required
              >
                <option value="">Select Semester</option>
                {[1,2,3,4,5,6,7,8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>Current GPA/CGPA</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={formData.academicInfo.gpa}
                onChange={(e) => handleInputChange('academicInfo', 'gpa', e.target.value)}
                placeholder="Enter your GPA"
                required
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="form-section">
          <h2>Skills & Technologies</h2>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map(skill => (
                <button
                  key={skill}
                  type="button"
                  className={`skill-tag ${formData.skills.technicalSkills.includes(skill) ? 'active' : ''}`}
                  onClick={() => handleSkillToggle('technicalSkills', skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Programming Languages & Frameworks</h3>
            <div className="skills-grid">
              {programmingLanguages.map(lang => (
                <button
                  key={lang}
                  type="button"
                  className={`skill-tag ${formData.skills.programmingLanguages.includes(lang) ? 'active' : ''}`}
                  onClick={() => handleSkillToggle('programmingLanguages', lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              {tools.map(tool => (
                <button
                  key={tool}
                  type="button"
                  className={`skill-tag ${formData.skills.tools.includes(tool) ? 'active' : ''}`}
                  onClick={() => handleSkillToggle('tools', tool)}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Student Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;