import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileEdit() {
  console.log('🎉 ProfileEdit component loaded successfully!');
  console.log('Current URL:', window.location.href);
  
  const [activeSection, setActiveSection] = useState('personal');
  const [profileImage, setProfileImage] = useState('/profile-avatar.svg');
  const [coverImage, setCoverImage] = useState('');

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: 'Arjun',
    lastName: 'Sharma',
    email: 'arjun.sharma@student.edu',
    phone: '+91 9876543210',
    dateOfBirth: '1999-05-15',
    gender: 'Male',
    nationality: 'Indian',
    location: 'Bangalore, India',
    address: '123 Tech Street, Koramangala, Bangalore, Karnataka 560034',
    bio: 'Passionate computer science student with expertise in full-stack development and AI/ML.',
    linkedinUrl: 'https://linkedin.com/in/arjunsharma',
    githubUrl: 'https://github.com/arjunsharma',
    portfolioUrl: 'https://arjunsharma.dev',
    
    // Education Details
    currentEducation: {
      institution: 'Indian Institute of Technology',
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      startYear: '2021',
      endYear: '2025',
      cgpa: '8.7',
      semester: '7th Semester',
      percentage: '87%'
    },
    
    // Additional Education
    previousEducation: [
      {
        institution: 'Delhi Public School',
        degree: '12th Grade',
        field: 'Science (PCM)',
        year: '2021',
        percentage: '94.5%',
        board: 'CBSE'
      },
      {
        institution: 'Delhi Public School',
        degree: '10th Grade',
        field: 'All Subjects',
        year: '2019',
        percentage: '96.2%',
        board: 'CBSE'
      }
    ],
    
    // Skills
    technicalSkills: ['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'AWS', 'Docker', 'Git'],
    softSkills: ['Leadership', 'Communication', 'Problem Solving', 'Team Work'],
    languages: ['English', 'Hindi', 'Kannada'],
    
    // Experience & Projects
    workExperience: [
      {
        company: 'TechCorp Solutions',
        position: 'Software Development Intern',
        startDate: '2024-06',
        endDate: '2024-08',
        description: 'Developed web applications using React and Node.js',
        location: 'Bangalore, India'
      }
    ],
    
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Full-stack e-commerce application with payment integration',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://github.com/arjun/ecommerce',
        startDate: '2024-01',
        endDate: '2024-03'
      }
    ]
  });

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'skills', name: 'Skills', icon: '💡' },
    { id: 'experience', name: 'Experience & Projects', icon: '💼' },
    { id: 'additional', name: 'Additional Info', icon: '📋' }
  ];

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      if (index !== null) {
        const newArray = [...prev[section]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prev, [section]: newArray };
      } else if (section === 'currentEducation') {
        return {
          ...prev,
          [section]: { ...prev[section], [field]: value }
        };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  const handleImageUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'profile') {
          setProfileImage(e.target.result);
        } else {
          setCoverImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addArrayItem = (section, newItem) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const renderPersonalInfo = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: '#feca57', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
        👤 Personal Information
      </h3>
      
      {/* Profile & Cover Image Upload */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Profile & Cover Images</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Profile Picture
            </label>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '3px dashed rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: profileImage ? `url(${profileImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload('profile', e)}
                style={{ display: 'none' }}
                id="profile-upload"
              />
              <label htmlFor="profile-upload" style={{
                cursor: 'pointer',
                color: 'white',
                textAlign: 'center',
                fontSize: '0.9rem',
                background: 'rgba(0,0,0,0.7)',
                padding: '0.5rem',
                borderRadius: '10px'
              }}>
                {profileImage ? '📷 Change' : '📷 Upload'}
              </label>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Cover Image
            </label>
            <div style={{
              width: '100%',
              height: '150px',
              border: '3px dashed rgba(255, 255, 255, 0.3)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: coverImage ? `url(${coverImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload('cover', e)}
                style={{ display: 'none' }}
                id="cover-upload"
              />
              <label htmlFor="cover-upload" style={{
                cursor: 'pointer',
                color: 'white',
                textAlign: 'center',
                fontSize: '0.9rem',
                background: 'rgba(0,0,0,0.7)',
                padding: '0.5rem',
                borderRadius: '10px'
              }}>
                {coverImage ? '📷 Change Cover' : '📷 Upload Cover'}
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange(null, 'firstName', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange(null, 'lastName', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(null, 'email', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange(null, 'phone', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange(null, 'dateOfBirth', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange(null, 'gender', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          >
            <option value="Male" style={{ background: '#333', color: 'white' }}>Male</option>
            <option value="Female" style={{ background: '#333', color: 'white' }}>Female</option>
            <option value="Other" style={{ background: '#333', color: 'white' }}>Other</option>
            <option value="Prefer not to say" style={{ background: '#333', color: 'white' }}>Prefer not to say</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Nationality
          </label>
          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => handleInputChange(null, 'nationality', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Current Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange(null, 'location', e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            placeholder="City, State, Country"
          />
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Full Address
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange(null, 'address', e.target.value)}
            rows="3"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Complete address with pincode"
          />
        </div>
        
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
            Bio / About Yourself
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleInputChange(null, 'bio', e.target.value)}
            rows="4"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Tell us about yourself, your interests, goals, and what makes you unique..."
          />
        </div>
        
        {/* Social Links */}
        <div style={{ gridColumn: '1 / -1' }}>
          <h4 style={{ color: 'white', marginBottom: '1rem', marginTop: '1rem' }}>Social Links</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => handleInputChange(null, 'linkedinUrl', e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem'
                }}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                GitHub Profile
              </label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => handleInputChange(null, 'githubUrl', e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem'
                }}
                placeholder="https://github.com/username"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                Portfolio Website
              </label>
              <input
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => handleInputChange(null, 'portfolioUrl', e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem'
                }}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: '#feca57', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
        🎓 Education Details
      </h3>
      
      {/* Current Education */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Current Education</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Institution Name *
            </label>
            <input
              type="text"
              value={formData.currentEducation.institution}
              onChange={(e) => handleInputChange('currentEducation', 'institution', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Degree *
            </label>
            <select
              value={formData.currentEducation.degree}
              onChange={(e) => handleInputChange('currentEducation', 'degree', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            >
              <option value="Bachelor of Technology" style={{ background: '#333', color: 'white' }}>Bachelor of Technology</option>
              <option value="Bachelor of Engineering" style={{ background: '#333', color: 'white' }}>Bachelor of Engineering</option>
              <option value="Bachelor of Science" style={{ background: '#333', color: 'white' }}>Bachelor of Science</option>
              <option value="Bachelor of Computer Applications" style={{ background: '#333', color: 'white' }}>Bachelor of Computer Applications</option>
              <option value="Master of Technology" style={{ background: '#333', color: 'white' }}>Master of Technology</option>
              <option value="Master of Science" style={{ background: '#333', color: 'white' }}>Master of Science</option>
              <option value="MBA" style={{ background: '#333', color: 'white' }}>MBA</option>
              <option value="Other" style={{ background: '#333', color: 'white' }}>Other</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Field of Study *
            </label>
            <input
              type="text"
              value={formData.currentEducation.field}
              onChange={(e) => handleInputChange('currentEducation', 'field', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
              placeholder="e.g., Computer Science Engineering"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Current Semester
            </label>
            <select
              value={formData.currentEducation.semester}
              onChange={(e) => handleInputChange('currentEducation', 'semester', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            >
              {[1,2,3,4,5,6,7,8,9,10].map(sem => (
                <option key={sem} value={`${sem}th Semester`} style={{ background: '#333', color: 'white' }}>
                  {sem}th Semester
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Current CGPA / Percentage
            </label>
            <input
              type="text"
              value={formData.currentEducation.cgpa}
              onChange={(e) => handleInputChange('currentEducation', 'cgpa', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
              placeholder="8.7 CGPA or 87%"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Start Year
            </label>
            <input
              type="number"
              min="2000"
              max="2030"
              value={formData.currentEducation.startYear}
              onChange={(e) => handleInputChange('currentEducation', 'startYear', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
              Expected End Year
            </label>
            <input
              type="number"
              min="2020"
              max="2035"
              value={formData.currentEducation.endYear}
              onChange={(e) => handleInputChange('currentEducation', 'endYear', e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Previous Education */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'white', margin: 0 }}>Previous Education</h4>
          <button
            onClick={() => addArrayItem('previousEducation', {
              institution: '',
              degree: '',
              field: '',
              year: '',
              percentage: '',
              board: ''
            })}
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
              border: 'none',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            + Add Education
          </button>
        </div>
        
        {formData.previousEducation.map((edu, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Institution
                </label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleInputChange('previousEducation', 'institution', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Class/Degree
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleInputChange('previousEducation', 'degree', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                  placeholder="12th Grade, 10th Grade, etc."
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Stream/Field
                </label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleInputChange('previousEducation', 'field', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                  placeholder="Science (PCM), Commerce, etc."
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Year of Completion
                </label>
                <input
                  type="number"
                  min="2000"
                  max="2030"
                  value={edu.year}
                  onChange={(e) => handleInputChange('previousEducation', 'year', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Percentage/CGPA
                </label>
                <input
                  type="text"
                  value={edu.percentage}
                  onChange={(e) => handleInputChange('previousEducation', 'percentage', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                  placeholder="94.5% or 9.4 CGPA"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Board/University
                </label>
                <input
                  type="text"
                  value={edu.board}
                  onChange={(e) => handleInputChange('previousEducation', 'board', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                  placeholder="CBSE, ICSE, State Board, etc."
                />
              </div>
            </div>
            
            <button
              onClick={() => removeArrayItem('previousEducation', index)}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                border: 'none',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Remove Education
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkillsAndLanguages = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: '#feca57', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
        💡 Skills & Languages
      </h3>
      
      {/* Technical Skills */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Technical Skills</h4>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Add a technical skill and press Enter"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                setFormData(prev => ({
                  ...prev,
                  technicalSkills: [...prev.technicalSkills, e.target.value.trim()]
                }));
                e.target.value = '';
              }
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
          {formData.technicalSkills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {skill}
              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    technicalSkills: prev.technicalSkills.filter((_, i) => i !== index)
                  }));
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
      
      {/* Soft Skills */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Soft Skills</h4>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Add a soft skill and press Enter"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                setFormData(prev => ({
                  ...prev,
                  softSkills: [...prev.softSkills, e.target.value.trim()]
                }));
                e.target.value = '';
              }
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
          {formData.softSkills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {skill}
              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    softSkills: prev.softSkills.filter((_, i) => i !== index)
                  }));
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
      
      {/* Languages */}
      <div>
        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Languages Known</h4>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Add a language and press Enter"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                setFormData(prev => ({
                  ...prev,
                  languages: [...prev.languages, e.target.value.trim()]
                }));
                e.target.value = '';
              }
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
          {formData.languages.map((language, index) => (
            <span
              key={index}
              style={{
                background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {language}
              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    languages: prev.languages.filter((_, i) => i !== index)
                  }));
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExperienceAndProjects = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: '#feca57', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
        💼 Experience & Projects
      </h3>
      
      {/* Work Experience */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'white', margin: 0 }}>Work Experience</h4>
          <button
            onClick={() => addArrayItem('workExperience', {
              company: '',
              position: '',
              startDate: '',
              endDate: '',
              description: ''
            })}
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
              border: 'none',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            + Add Experience
          </button>
        </div>
        
        {formData.workExperience.map((exp, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleInputChange('workExperience', 'company', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Position
                </label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleInputChange('workExperience', 'position', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Start Date
                </label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleInputChange('workExperience', 'startDate', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  End Date
                </label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleInputChange('workExperience', 'endDate', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Description
                </label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleInputChange('workExperience', 'description', e.target.value, index)}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => removeArrayItem('workExperience', index)}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                border: 'none',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      {/* Projects */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'white', margin: 0 }}>Projects</h4>
          <button
            onClick={() => addArrayItem('projects', {
              name: '',
              description: '',
              technologies: [],
              link: ''
            })}
            style={{
              background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
              border: 'none',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            + Add Project
          </button>
        </div>
        
        {formData.projects.map((project, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Project Name
                </label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => handleInputChange('projects', 'name', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Project Link
                </label>
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) => handleInputChange('projects', 'link', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', color: '#00BFFF', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => removeArrayItem('projects', index)}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                border: 'none',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdditionalInfo = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: '#feca57', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
        📋 Additional Information
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Achievements */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>🏆 Achievements & Awards</h4>
          <textarea
            rows="4"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="List your achievements, awards, certifications, competitions won..."
          />
        </div>
        
        {/* Extracurricular */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>🎯 Extracurricular Activities</h4>
          <textarea
            rows="4"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Clubs, sports, volunteer work, leadership roles..."
          />
        </div>
        
        {/* Career Goals */}
        <div style={{ gridColumn: '1 / -1' }}>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>🎯 Career Goals & Interests</h4>
          <textarea
            rows="4"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Describe your career aspirations, areas of interest, future goals..."
          />
        </div>
        
        {/* Preferred Job Roles */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>💼 Preferred Job Roles</h4>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            placeholder="Software Developer, Data Scientist, Product Manager..."
          />
        </div>
        
        {/* Expected Salary */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>💰 Expected Salary Range</h4>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem'
            }}
            placeholder="₹5-8 LPA, ₹10-15 LPA, etc."
          />
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{
        height: '250px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ff6b6b 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'end',
        padding: '2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}>
          <Link
            to="/profile"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              textDecoration: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontWeight: '600'
            }}
          >
            ← Back to Profile
          </Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'end', gap: '2rem' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            border: '4px solid rgba(255, 255, 255, 0.3)'
          }}>
            👤
          </div>
          
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {formData.firstName} {formData.lastName}
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              {formData.email}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '0 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: '0',
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          gap: '0',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                background: activeSection === section.id ? 'rgba(254, 202, 87, 0.1)' : 'transparent',
                border: 'none',
                color: activeSection === section.id ? '#feca57' : 'rgba(255, 255, 255, 0.7)',
                padding: '1.5rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontWeight: '600',
                borderBottom: activeSection === section.id ? '3px solid #feca57' : '3px solid transparent'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{section.icon}</span>
              <span>{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '25px',
          padding: '2.5rem'
        }}>
          {activeSection === 'personal' && renderPersonalInfo()}
          {activeSection === 'education' && renderEducation()}
          {activeSection === 'skills' && renderSkillsAndLanguages()}
          {activeSection === 'experience' && renderExperienceAndProjects()}
          {activeSection === 'additional' && renderAdditionalInfo()}
          
          {/* Save Button */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '3rem'
          }}>
            <button style={{
              background: 'linear-gradient(45deg, #feca57, #ff9ff3)',
              border: 'none',
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}>
              💾 Save Changes
            </button>
            
            <Link
              to="/profile"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                textDecoration: 'none',
                padding: '1.2rem 3rem',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: '700'
              }}
            >
              👁️ Preview Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;