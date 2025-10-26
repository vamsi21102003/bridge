import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function Opportunities() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const opportunities = [
    // Jobs
    {
      id: 1,
      type: 'job',
      title: 'Senior Frontend Developer',
      company: 'Google',
      logo: '🔍',
      logoColor: 'linear-gradient(45deg, #4285f4, #34a853)',
      location: 'Bangalore, India',
      salary: '₹25-35 LPA',
      experience: '3-5 years',
      skills: ['React', 'TypeScript', 'Node.js'],
      description: 'Join Google\'s innovative team to build next-generation web applications that impact billions of users worldwide.',
      deadline: '2024-11-15',
      applicants: '2.5K+'
    },
    {
      id: 2,
      type: 'job',
      title: 'Data Scientist',
      company: 'Microsoft',
      logo: '🪟',
      logoColor: 'linear-gradient(45deg, #00bcf2, #0078d4)',
      location: 'Hyderabad, India',
      salary: '₹20-30 LPA',
      experience: '2-4 years',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Work with cutting-edge AI technologies to solve complex business problems and drive innovation.',
      deadline: '2024-11-20',
      applicants: '1.8K+'
    },
    // Internships
    {
      id: 3,
      type: 'internship',
      title: 'Software Development Intern',
      company: 'Amazon',
      logo: '📦',
      logoColor: 'linear-gradient(45deg, #ff9900, #232f3e)',
      location: 'Bangalore, India',
      salary: '₹50K/month',
      duration: '3 months',
      skills: ['Java', 'AWS', 'Spring Boot'],
      description: 'Gain hands-on experience building scalable systems that serve millions of customers globally.',
      deadline: '2024-11-10',
      applicants: '5K+'
    },
    {
      id: 4,
      type: 'internship',
      title: 'Product Management Intern',
      company: 'Flipkart',
      logo: '🛒',
      logoColor: 'linear-gradient(45deg, #047bd6, #2874f0)',
      location: 'Bangalore, India',
      salary: '₹40K/month',
      duration: '6 months',
      skills: ['Analytics', 'Strategy', 'Communication'],
      description: 'Learn product strategy and execution in India\'s leading e-commerce platform.',
      deadline: '2024-11-25',
      applicants: '3.2K+'
    },
    // Hackathons
    {
      id: 5,
      type: 'hackathon',
      title: 'Smart India Hackathon 2024',
      company: 'Government of India',
      logo: '🇮🇳',
      logoColor: 'linear-gradient(45deg, #ff9933, #138808)',
      location: 'Pan India',
      prize: '₹1 Lakh',
      duration: '36 hours',
      skills: ['Innovation', 'Problem Solving', 'Technology'],
      description: 'India\'s biggest hackathon to solve pressing problems using technology and innovation.',
      deadline: '2024-12-01',
      applicants: '50K+'
    },
    {
      id: 6,
      type: 'hackathon',
      title: 'HackMIT 2024',
      company: 'MIT',
      logo: '🎓',
      logoColor: 'linear-gradient(45deg, #8b0000, #a31621)',
      location: 'Boston, USA',
      prize: '$10,000',
      duration: '48 hours',
      skills: ['AI/ML', 'Blockchain', 'IoT'],
      description: 'Premier hackathon bringing together the brightest minds to build the future.',
      deadline: '2024-11-30',
      applicants: '8K+'
    },
    // Coding Competitions
    {
      id: 7,
      type: 'competition',
      title: 'Google Code Jam 2024',
      company: 'Google',
      logo: '🏆',
      logoColor: 'linear-gradient(45deg, #4285f4, #ea4335)',
      location: 'Online',
      prize: '$15,000',
      duration: '3 rounds',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
      description: 'Google\'s longest running global coding competition for programmers of all levels.',
      deadline: '2024-12-15',
      applicants: '25K+'
    },
    {
      id: 8,
      type: 'competition',
      title: 'Meta Hacker Cup 2024',
      company: 'Meta',
      logo: '👥',
      logoColor: 'linear-gradient(45deg, #1877f2, #42a5f5)',
      location: 'Online',
      prize: '$20,000',
      duration: '4 rounds',
      skills: ['Competitive Programming', 'Mathematics', 'Logic'],
      description: 'Meta\'s annual programming contest challenging developers worldwide.',
      deadline: '2024-12-10',
      applicants: '15K+'
    },
    {
      id: 9,
      type: 'competition',
      title: 'ACM ICPC World Finals',
      company: 'ACM',
      logo: '🌍',
      logoColor: 'linear-gradient(45deg, #0066cc, #004499)',
      location: 'Dhaka, Bangladesh',
      prize: '$50,000',
      duration: '5 hours',
      skills: ['Team Programming', 'Algorithms', 'Strategy'],
      description: 'The most prestigious programming contest in the world for university students.',
      deadline: '2024-11-05',
      applicants: '60K+'
    }
  ];

  const categories = [
    { id: 'all', label: t('opportunities.allOpportunities'), icon: '🌟' },
    { id: 'job', label: t('opportunities.jobs'), icon: '💼' },
    { id: 'internship', label: t('opportunities.internships'), icon: '🎯' },
    { id: 'hackathon', label: t('opportunities.hackathons'), icon: '💡' },
    { id: 'competition', label: t('opportunities.competitions'), icon: '🏆' }
  ];

  const filteredOpportunities = activeCategory === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.type === activeCategory);

  const getTypeColor = (type) => {
    switch(type) {
      case 'job': return 'linear-gradient(45deg, #667eea, #764ba2)';
      case 'internship': return 'linear-gradient(45deg, #48bb78, #38a169)';
      case 'hackathon': return 'linear-gradient(45deg, #ff6b6b, #feca57)';
      case 'competition': return 'linear-gradient(45deg, #f093fb, #f5576c)';
      default: return 'linear-gradient(45deg, #667eea, #764ba2)';
    }
  };

  return (
    <div className="opportunities-page">
      <div className="opportunities-hero">
        <div className="container">
          <h1 className="page-title">{t('opportunities.title')}</h1>
          <p className="page-subtitle">
            {t('opportunities.subtitle')}
          </p>
          
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="opportunities-content">
        <div className="container">
          <div className="opportunities-stats">
            <div className="stat-item">
              <span className="stat-number">{filteredOpportunities.length}</span>
              <span className="stat-label">{t('opportunities.found')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {filteredOpportunities.reduce((sum, opp) => 
                  sum + parseInt(opp.applicants.replace(/[^\d]/g, '')), 0
                )}K+
              </span>
              <span className="stat-label">{t('opportunities.totalApplicants')}</span>
            </div>
          </div>

          <div className="opportunities-grid">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="opportunity-card">
                <div className="card-header">
                  <div 
                    className="company-logo"
                    style={{ background: opportunity.logoColor }}
                  >
                    {opportunity.logo}
                  </div>
                  <div className="card-meta">
                    <span 
                      className="opportunity-type"
                      style={{ background: getTypeColor(opportunity.type) }}
                    >
                      {t(`opportunities.${opportunity.type}`)}
                    </span>
                    <span className="deadline">
                      {t('opportunities.deadline')}: {new Date(opportunity.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="opportunity-title">{opportunity.title}</h3>
                  <p className="company-name">{opportunity.company}</p>
                  <p className="opportunity-description">{opportunity.description}</p>

                  <div className="opportunity-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span>{opportunity.location}</span>
                    </div>
                    {opportunity.salary && (
                      <div className="detail-item">
                        <span className="detail-icon">💰</span>
                        <span>{opportunity.salary}</span>
                      </div>
                    )}
                    {opportunity.prize && (
                      <div className="detail-item">
                        <span className="detail-icon">🏆</span>
                        <span>{opportunity.prize}</span>
                      </div>
                    )}
                    {opportunity.duration && (
                      <div className="detail-item">
                        <span className="detail-icon">⏱️</span>
                        <span>{opportunity.duration}</span>
                      </div>
                    )}
                    {opportunity.experience && (
                      <div className="detail-item">
                        <span className="detail-icon">📈</span>
                        <span>{opportunity.experience}</span>
                      </div>
                    )}
                  </div>

                  <div className="skills-section">
                    <h4>{t('opportunities.requiredSkills')}:</h4>
                    <div className="skills-list">
                      {opportunity.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="applicants-count">
                      <span className="applicants-icon">👥</span>
                      <span>{opportunity.applicants} {t('opportunities.applied')}</span>
                    </div>
                    <button 
                      className="apply-button"
                      style={{ background: getTypeColor(opportunity.type) }}
                    >
                      {t('opportunities.applyNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;