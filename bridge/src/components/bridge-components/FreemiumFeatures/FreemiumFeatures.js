import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FreemiumFeatures.css';

const FreemiumFeatures = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [activeFeature, setActiveFeature] = useState(null);

  const freemiumFeatures = [
    {
      id: 1,
      icon: <AIProfilingIcon />,
      title: 'AI-Powered Student Profiling',
      shortDesc: 'Smart digital profiles with AI insights',
      description: 'Create intelligent student profiles using AI and NLP. Extract insights from resumes, LinkedIn, and coursework to visualize skill balance across technical, soft, and emerging skills.',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      category: 'profiling'
    },
    {
      id: 2,
      icon: <SkillGapIcon />,
      title: 'AI-Based Skill Gap Analyzer',
      shortDesc: 'Identify missing skills with AI-driven paths',
      description: 'Upload your resume or connect LinkedIn to identify missing skills. Get AI-driven learning paths that bridge gaps between current and trending industry requirements.',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      category: 'analysis'
    },
    {
      id: 3,
      icon: <InterviewCoachIcon />,
      title: 'Intelligent Interview Coach',
      shortDesc: 'Realistic mock interviews with instant feedback',
      description: 'Experience realistic mock interviews with NLP-powered virtual interviewers. Receive instant feedback on answers, tone, and confidence with improvement tips.',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      category: 'coaching'
    },
    {
      id: 4,
      icon: <DashboardIcon />,
      title: 'Personalized Career Dashboard',
      shortDesc: 'All-in-one career readiness hub',
      description: 'Track progress with dynamic Career Readiness Score, visualize goal journey, and get matched with nearby internship opportunities.',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
      category: 'dashboard'
    },
    {
      id: 5,
      icon: <RecommendationIcon />,
      title: 'Smart Recommendation System',
      shortDesc: 'AI suggests right courses and certifications',
      description: 'AI suggests the right courses, MOOCs, and certifications based on your goals. Automatically generates learning paths and delivers Career Health Reports.',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
      category: 'recommendations'
    },
    {
      id: 6,
      icon: <AlertsIcon />,
      title: 'Personalized Job Alerts',
      shortDesc: 'Real-time notifications for opportunities',
      description: 'Get real-time notifications for job and internship openings tailored to your evolving skills. Includes geo-targeted alerts and calendar integration.',
      gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
      category: 'alerts'
    },
    {
      id: 7,
      icon: <InsightsIcon />,
      title: 'University Insights Dashboard',
      shortDesc: 'Real-time placement analytics for administrators',
      description: 'Empower administrators with placement analytics, employability heatmaps, branch-wise skill distribution, and exportable reports for data-driven decisions.',
      gradient: 'linear-gradient(135deg, #d299c2, #fef9d7)',
      category: 'insights'
    },
    {
      id: 8,
      icon: <MentorIcon />,
      title: 'AI Mentor Assistant',
      shortDesc: 'Personal AI career guide',
      description: 'Meet your personal AI career guide. Receive resume feedback, interview prep, and learning suggestions with transparent LLM-based reasoning.',
      gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
      category: 'mentor'
    },
    {
      id: 9,
      icon: <PersonalizationIcon />,
      title: 'Personalization Tools',
      shortDesc: 'AI-crafted resumes and profiles',
      description: 'Generate AI-crafted resumes that highlight your projects, strengths, and achievements — automatically formatted for maximum impact.',
      gradient: 'linear-gradient(135deg, #fdbb2d, #22c1c3)',
      category: 'tools'
    },
    {
      id: 10,
      icon: <MultilingualIcon />,
      title: 'Multilingual Support',
      shortDesc: 'English and Odia language support',
      description: 'Seamlessly use the platform in both English and Odia, ensuring accessibility for every learner in their preferred language.',
      gradient: 'linear-gradient(135deg, #ee9ca7, #ffdde1)',
      category: 'support'
    },
    {
      id: 11,
      icon: <PathPredictorIcon />,
      title: 'AI Path Predictor',
      shortDesc: 'Visualize your future career trajectory',
      description: 'Visualize your future with AI-generated trajectory graph. See where your current skills can take you in 1, 3, or 5 years and shape that journey.',
      gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
      category: 'prediction'
    }
  ];

  return (
    <section id="freemium-features" className="section freemium-features section-gradient">
      <div className="section-title">
        <div className="title-badge glass-neon">
          <i className="fas fa-gift"></i>
          <span>🎓 Free Tier Features</span>
        </div>
        <h2 className="gradient-text">Freemium Features</h2>
        <p>Unlock your potential with our comprehensive free tier - everything you need to kickstart your career journey</p>
      </div>

      <div ref={ref} className="freemium-container-full">
        <div className="features-showcase">
          {freemiumFeatures.map((feature, index) => (
            <FreemiumCard
              key={feature.id}
              {...feature}
              index={index}
              isVisible={isVisible}
              isActive={activeFeature === feature.id}
              onHover={() => setActiveFeature(feature.id)}
              onLeave={() => setActiveFeature(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FreemiumCard = ({ 
  icon, 
  title, 
  shortDesc, 
  gradient, 
  index, 
  isVisible, 
  isActive, 
  onHover, 
  onLeave 
}) => (
  <div 
    className={`freemium-card glass-morphism scroll-scale-in magnetic-hover ${
      isVisible ? 'visible' : ''
    } ${isActive ? 'active' : ''}`}
    style={{ 
      transitionDelay: `${index * 0.1}s`,
      '--feature-gradient': gradient
    }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="card-background" style={{ background: gradient }}></div>
    <div className="card-content">
      <div className="feature-icon-container">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-short-desc">{shortDesc}</p>
      <div className="card-shine"></div>
    </div>
    <div className="card-border-glow"></div>
  </div>
);



// SVG Icon Components
const AIProfilingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
    <path d="M21 9V7L15 4L9 7V9C9 10.1 9.9 11 11 11V13C11 14.1 11.9 15 13 15H15C16.1 15 17 14.1 17 13V11C18.1 11 19 10.1 19 9Z" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="18" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
);

const SkillGapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="7" cy="16" r="2" fill="currentColor"/>
    <circle cx="11" cy="12" r="2" fill="currentColor"/>
    <circle cx="15" cy="16" r="2" fill="currentColor"/>
    <circle cx="21" cy="10" r="2" fill="currentColor"/>
  </svg>
);

const InterviewCoachIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" opacity="0.7"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="9" cy="9" r="1" fill="currentColor"/>
    <circle cx="15" cy="9" r="1" fill="currentColor"/>
    <path d="M12 6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DashboardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor"/>
    <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.5"/>
    <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.8"/>
  </svg>
);

const RecommendationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5"/>
  </svg>
);

const AlertsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" opacity="0.7"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="19" cy="5" r="3" fill="currentColor"/>
  </svg>
);

const InsightsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h3l3-9 6 18 3-9h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
  </svg>
);

const MentorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="7" r="4" fill="currentColor"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M21 21v-2a4 4 0 0 0-3-3.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PersonalizationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" opacity="0.7"/>
    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MultilingualIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const PathPredictorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h3l3-9 6 18 3-9h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M12 2v20" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <circle cx="6" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="21" r="2" fill="currentColor"/>
    <circle cx="18" cy="3" r="2" fill="currentColor"/>
  </svg>
);

export default FreemiumFeatures;