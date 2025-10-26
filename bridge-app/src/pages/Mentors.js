import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Mentors() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Aakash Verma',
      role: 'Software Engineer',
      company: 'Google',
      image: '🧑‍💻',
      description: 'Helping students understand how to crack coding interviews and write scalable code.',
      expertise: ['DSA', 'System Design', 'Interview Prep'],
      availability: 'Every Saturday',
      category: 'tech',
      rating: 4.9,
      sessions: 150,
      experience: '5 years'
    },
    {
      id: 2,
      name: 'Riya Patel',
      role: 'Product Manager',
      company: 'Microsoft',
      image: '👩‍💼',
      description: 'Turning great ideas into successful digital products — mentoring on product thinking and roadmap design.',
      expertise: ['Product Design', 'Agile', 'Roadmaps'],
      availability: 'Weekend Slots',
      category: 'career',
      rating: 4.8,
      sessions: 120,
      experience: '6 years'
    },
    {
      id: 3,
      name: 'Arjun Das',
      role: 'Data Analyst',
      company: 'Deloitte',
      image: '🧑‍🏫',
      description: 'Guiding data enthusiasts to master visualization, analysis, and storytelling with data.',
      expertise: ['Power BI', 'SQL', 'Python', 'Excel'],
      availability: 'Tues–Fri Evenings',
      category: 'data',
      rating: 4.7,
      sessions: 95,
      experience: '4 years'
    },
    {
      id: 4,
      name: 'Sneha Roy',
      role: 'AI Research Intern',
      company: 'NVIDIA',
      image: '👩‍💻',
      description: 'Exploring AI for real-world problems — let\'s discuss machine learning projects and career opportunities.',
      expertise: ['ML', 'Deep Learning', 'AI Ethics'],
      availability: 'Flexible',
      category: 'data',
      rating: 4.9,
      sessions: 80,
      experience: '3 years'
    },
    {
      id: 5,
      name: 'Rahul Menon',
      role: 'Startup Founder',
      company: 'CodeVerse',
      image: '🧑‍🚀',
      description: 'Empowering students to turn ideas into startups — learn how to pitch, plan, and build.',
      expertise: ['Entrepreneurship', 'Funding', 'Growth'],
      availability: 'Fridays',
      category: 'entrepreneurship',
      rating: 4.8,
      sessions: 110,
      experience: '8 years'
    },
    {
      id: 6,
      name: 'Priya Sinha',
      role: 'ML Engineer',
      company: 'Swiggy',
      image: '🧑‍🎓',
      description: 'Helping juniors navigate placements, internships, and AI career paths.',
      expertise: ['Placement Prep', 'Python', 'AI Career'],
      availability: 'Sunday 4–6 PM',
      category: 'alumni',
      rating: 4.9,
      sessions: 200,
      experience: '5 years',
      college: 'IIT Bombay'
    },
    {
      id: 7,
      name: 'Kavya Sharma',
      role: 'UX Designer',
      company: 'Adobe',
      image: '🎨',
      description: 'Creating user-centered designs that solve real problems and delight users.',
      expertise: ['UI/UX Design', 'Figma', 'User Research'],
      availability: 'Weekends',
      category: 'design',
      rating: 4.8,
      sessions: 85,
      experience: '4 years'
    },
    {
      id: 8,
      name: 'Vikram Singh',
      role: 'DevOps Engineer',
      company: 'Amazon',
      image: '⚙️',
      description: 'Scaling applications and infrastructure to serve millions of users worldwide.',
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      availability: 'Mon–Wed Evenings',
      category: 'tech',
      rating: 4.7,
      sessions: 130,
      experience: '6 years'
    }
  ];

  const categories = [
    { id: 'all', label: t('mentors.allMentors'), icon: '🌟' },
    { id: 'tech', label: t('mentors.techDevelopment'), icon: '🌐' },
    { id: 'data', label: t('mentors.dataScience'), icon: '🧮' },
    { id: 'career', label: t('mentors.careerSkills'), icon: '💼' },
    { id: 'design', label: t('mentors.designCreativity'), icon: '🎨' },
    { id: 'entrepreneurship', label: t('mentors.entrepreneurship'), icon: '🧠' },
    { id: 'alumni', label: t('mentors.alumni'), icon: '🏛️' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: t('mentorEvents.resumeReview'),
      date: 'Oct 25, 6PM',
      mentor: 'Priya Sinha'
    },
    {
      id: 2,
      title: t('mentorEvents.systemDesign'),
      date: 'Oct 27, 5PM',
      mentor: 'Aakash Verma'
    },
    {
      id: 3,
      title: t('mentorEvents.aiCareerGuidance'),
      date: 'Oct 29, 4PM',
      mentor: 'Sneha Roy'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = activeCategory === 'all' || mentor.category === activeCategory;
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const aiRecommendation = mentors.find(mentor => mentor.name === 'Sneha Roy');

  return (
    <div className="mentors-page">
      {/* Floating Network Lines Background */}
      <div className="network-background">
        <div className="network-line line-1"></div>
        <div className="network-line line-2"></div>
        <div className="network-line line-3"></div>
        <div className="network-node node-1"></div>
        <div className="network-node node-2"></div>
        <div className="network-node node-3"></div>
      </div>

      {/* Hero Section */}
      <div className="mentors-hero">
        <div className="container">
          <h1 className="page-title">{t('mentors.title')}</h1>
          <p className="page-subtitle">
            {t('mentors.subtitle')}
          </p>
          
          <div className="intro-text">
            <div className="intro-icon">💡</div>
            <p>
              {t('mentors.intro')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mentor-search">
            <input
              type="text"
              placeholder={t('mentors.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>

          {/* Category Filters */}
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

      {/* Main Content */}
      <div className="mentors-content">
        <div className="container">
          {/* Stats and AI Recommendation */}
          <div className="mentors-info">
            <div className="mentors-stats">
              <div className="stat-item">
                <span className="stat-number">{filteredMentors.length}</span>
                <span className="stat-label">{t('mentors.available')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {filteredMentors.reduce((sum, mentor) => sum + mentor.sessions, 0)}
                </span>
                <span className="stat-label">{t('mentors.totalSessions')}</span>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="ai-recommendation">
              <div className="ai-header">
                <span className="ai-icon">🤖</span>
                <h3>{t('mentors.aiRecommendation')}</h3>
              </div>
              <p>{t('mentors.basedOnInterests')}</p>
              <div className="recommended-mentor">
                <span className="mentor-avatar">{aiRecommendation.image}</span>
                <div className="mentor-info">
                  <strong>{aiRecommendation.name}</strong>
                  <span>{aiRecommendation.role} at {aiRecommendation.company}</span>
                </div>
                <button className="connect-btn-small">{t('mentors.connect')}</button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="upcoming-events">
            <h3>🕒 {t('mentors.upcomingEvents')}</h3>
            <p>{t('mentors.joinLiveSessions')}</p>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <span className="event-date">{event.date}</span>
                  </div>
                  <button className="join-event-btn">{t('mentors.join')}</button>
                </div>
              ))}
            </div>
            <button className="view-all-events">{t('mentors.viewAllEvents')}</button>
          </div>

          {/* Mentors Grid */}
          <div className="mentors-grid">
            {filteredMentors.map((mentor, index) => (
              <div key={mentor.id} className="mentor-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mentor-header">
                  <div className="mentor-avatar-large">
                    {mentor.image}
                  </div>
                  <div className="mentor-basic-info">
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <p className="mentor-role">{mentor.role} at {mentor.company}</p>
                    {mentor.college && (
                      <p className="mentor-college">Alumni, {mentor.college}</p>
                    )}
                  </div>
                  <div className="mentor-rating">
                    <span className="rating-star">⭐</span>
                    <span className="rating-value">{mentor.rating}</span>
                  </div>
                </div>

                <p className="mentor-description">{mentor.description}</p>

                <div className="mentor-expertise">
                  <h4>🔹 {t('mentors.expertise')}:</h4>
                  <div className="expertise-tags">
                    {mentor.expertise.map((skill, index) => (
                      <span key={index} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="mentor-details">
                  <div className="detail-row">
                    <span className="detail-label">🔹 {t('mentors.availability')}:</span>
                    <span className="detail-value">{mentor.availability}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">📊 {t('mentors.sessions')}:</span>
                    <span className="detail-value">{mentor.sessions} {t('mentors.completed')}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">💼 {t('mentors.experience')}:</span>
                    <span className="detail-value">{mentor.experience}</span>
                  </div>
                </div>

                <div className="mentor-actions">
                  <button className="primary-action-btn">{t('mentors.bookSession')}</button>
                  <button className="secondary-action-btn">{t('mentors.viewProfile')}</button>
                  <button className="tertiary-action-btn">{t('mentors.message')}</button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Quotes */}
          <div className="featured-quotes">
            <div className="quote-item">
              <p>"{t('mentors.quote1')}"</p>
            </div>
            <div className="quote-item">
              <p>"{t('mentors.quote2')}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentors;