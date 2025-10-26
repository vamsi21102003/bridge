import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Features.css';

const Features = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      image: <AIJobRecommendationsIcon />,
      title: 'AI Job Recommendations',
      description: 'Get personalized job and internship recommendations powered by advanced AI algorithms that understand your unique profile and career aspirations.',
      gradient: 'linear-gradient(135deg, #4cc9f0, #4361ee)',
      type: 'neon'
    },
    {
      image: <StructuredCareerPathsIcon />,
      title: 'Structured Career Paths',
      description: 'Transform your skill analysis into clear, structured career roadmaps with step-by-step guidance and course recommendations.',
      gradient: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
      type: 'holographic'
    },
    {
      image: <BriDGeProIcon />,
      title: 'BriDGe Pro Personalised Features',
      description: 'Advanced personalised features to unlock your potential - track your progress, discover strengths, and access premium career insights.',
      gradient: 'linear-gradient(135deg, #3a0ca3, #f72585)',
      type: 'liquid'
    },
    {
      image: <SmartSkillAnalysisIcon />,
      title: 'Smart Skill Analysis',
      description: 'AI-powered assessment that analyzes your skills, experiences, and potential to create personalized development plans.',
      gradient: 'linear-gradient(135deg, #f72585, #7209b7)',
      type: 'neon'
    },
    {
      image: <CourseRecommendationsIcon />,
      title: 'Course Recommendations',
      description: 'Get targeted course suggestions based on your career goals and skill gaps to accelerate your professional growth.',
      gradient: 'linear-gradient(135deg, #7209b7, #4895ef)',
      type: 'frosted'
    },
    {
      image: <CareerProgressTrackingIcon />,
      title: 'Career Progress Tracking',
      description: 'Monitor your career development journey with detailed analytics and insights about your professional growth.',
      gradient: 'linear-gradient(135deg, #4895ef, #4cc9f0)',
      type: 'holographic'
    }
  ];

  return (
    <section id="features" className="section section-gradient">
      <div className="section-title">
        <h2>Discover Your Career Potential</h2>
        <p>AI-powered insights, structured career paths, and personalized recommendations to guide your professional journey</p>
      </div>
      
      <div ref={ref} className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              index={index}
              isVisible={isVisible}
              isActive={activeFeature === index}
              onHover={() => setActiveFeature(index)}
              onLeave={() => setActiveFeature(null)}
            />
          ))}
        </div>
        
        {/* Feature Spotlight */}
        <div className="feature-spotlight glass-frosted">
          {activeFeature !== null ? (
            <div className="spotlight-content">
              <div 
                className="spotlight-icon"
                style={{ background: features[activeFeature].gradient }}
              >
                {features[activeFeature].image}
              </div>
              <h3>{features[activeFeature].title}</h3>
              <p>{features[activeFeature].description}</p>
              <div className="spotlight-glow"></div>
            </div>
          ) : (
            <div className="spotlight-placeholder">
              <DiscoverIcon />
              <p style={{ color: 'black' }}>Discover your career goals. Hover over any feature card to explore its capabilities and see how it can transform your career journey</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  image, 
  title, 
  description, 
  gradient, 
  type, 
  index, 
  isVisible, 
  isActive, 
  onHover, 
  onLeave 
}) => (
  <div 
    className={`features-card glass-${type} scroll-scale-in magnetic-hover ${
      isVisible ? 'visible' : ''
    } ${isActive ? 'active' : ''}`}
    style={{ 
      transitionDelay: `${index * 0.1}s`,
      '--tx': `${(index % 3 - 1) * 5}px`,
      '--ty': `${Math.floor(index / 3) * 5}px`
    }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div 
      className="features-icon-wrapper"
      style={{ background: gradient }}
    >
      {image}
    </div>
    <h3 className="gradient-text">{title}</h3>
    <p>{description}</p>
    <div className="features-hover-indicator">
      <div className="features-indicator-bar"></div>
    </div>
  </div>
);

// SVG Icon Components for Features
const AIJobRecommendationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
    <path d="M19 12L19.74 15.26L23 16L19.74 16.74L19 20L18.26 16.74L15 16L18.26 15.26L19 12Z" fill="currentColor"/>
    <path d="M5 12L5.74 15.26L9 16L5.74 16.74L5 20L4.26 16.74L1 16L4.26 15.26L5 12Z" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6"/>
  </svg>
);

const StructuredCareerPathsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h3m0 0l3-3m-3 3l3 3m6-6h3m0 0l3-3m-3 3l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="12" r="2" fill="currentColor"/>
    <circle cx="18" cy="12" r="2" fill="currentColor"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8v8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const BriDGeProIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"/>
    <path d="M12 9v6M9 12h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="6" r="1" fill="currentColor"/>
  </svg>
);

const SmartSkillAnalysisIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2A7.5 7.5 0 0 0 2 9.5c0 5.61 7.5 13.5 7.5 13.5s7.5-7.89 7.5-13.5A7.5 7.5 0 0 0 9.5 2z" fill="currentColor" opacity="0.7"/>
    <circle cx="9.5" cy="9.5" r="2.5" fill="currentColor"/>
    <path d="M19 19l-2-2m0 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M15 9h6m-3-3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CourseRecommendationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L21 9l-9-6z" fill="currentColor" opacity="0.7"/>
    <path d="M12 12l9-5-9-5-9 5 9 5z" fill="currentColor"/>
    <path d="M12 12v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 11.18v6L12 21l7-3.82v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="18" cy="6" r="2" fill="currentColor"/>
  </svg>
);

const CareerProgressTrackingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M7 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="7" cy="16" r="2" fill="currentColor"/>
    <circle cx="11" cy="12" r="2" fill="currentColor"/>
    <circle cx="15" cy="16" r="2" fill="currentColor"/>
    <circle cx="21" cy="10" r="2" fill="currentColor"/>
    <path d="M7 20v-8M11 20v-12M15 20v-8M21 20v-14" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const DiscoverIcon = () => (
  <div className="discover-icon-wrapper">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Compass base */}
      <circle cx="12" cy="12" r="10" stroke="#4cc9f0" strokeWidth="2" fill="rgba(76, 201, 240, 0.1)"/>
      <circle cx="12" cy="12" r="6" stroke="#4361ee" strokeWidth="1.5" fill="rgba(67, 97, 238, 0.1)"/>
      
      {/* Compass needle */}
      <path d="M12 6l2 6-6-2 6-4z" fill="#f72585"/>
      <path d="M12 18l-2-6 6 2-6 4z" fill="#7209b7"/>
      
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.5" fill="#4cc9f0"/>
      
      {/* Direction markers */}
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#4361ee" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Discovery sparkles */}
      <circle cx="18" cy="6" r="1" fill="#f72585" opacity="0.8"/>
      <circle cx="6" cy="18" r="1" fill="#7209b7" opacity="0.8"/>
      <circle cx="6" cy="6" r="0.5" fill="#4cc9f0" opacity="0.6"/>
      <circle cx="18" cy="18" r="0.5" fill="#4895ef" opacity="0.6"/>
    </svg>
    <div className="discover-pulse"></div>
  </div>
);

export default Features;