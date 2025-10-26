import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero section-gradient">
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div 
        ref={ref} 
        className={`hero-content ${isVisible ? 'visible' : ''}`}
        style={{
          transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`
        }}
      >
        <div className="hero-text scroll-slide-left magnetic-hover">
          <h1 className="gradient-text text-glow">
            BPUT Real-time <span className="text-glow-accent">Intelligent Digital</span><br />
            Guidance Engine
          </h1>
          <p className="text-glow">
            Discover your perfect career path with AI-recommended jobs and internships tailored to your unique profile. 
            Get structured career guidance, skill analysis, and personalized job matches through BriDGe Pro personalised features.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary glass-neon shimmer">
              <span className="btn-content">
                <i className="fas fa-rocket"></i>
                Get Started
              </span>
            </button>
            <button className="btn btn-outline glass-liquid shimmer">
              <span className="btn-content">
                <i className="fas fa-play"></i>
                Watch Demo
              </span>
            </button>
          </div>
        </div>
        
        <div className="hero-cards scroll-slide-right">
          <div className="cards-container">
            <FeatureCard 
              title="AI Recommended JOBS and Internships"
              description="Get personalized job and internship recommendations powered by AI"
              image={<AIJobsIcon />}
              delay={0}
              className="card-primary"
            />
            <div className="cards-row">
              <FeatureCard 
                title="Profile Completion"
                description="Complete your profile to get personalized recommendations"
                image={<ProfileIcon />}
                delay={1}
                className="card-secondary"
                showProgress={true}
                progress={85}
              />
              <FeatureCard 
                title="Structured Career Path/Courses"
                description="Skill analysis transformed into structured career roadmaps and course recommendations"
                image={<CareerPathIcon />}
                delay={2}
                className="card-secondary"
              />
            </div>
            <FeatureCard 
              title="BriDGe Pro Personalised Features"
              description="Advanced personalised features to unlock your potential - track progress and discover opportunities"
              image={<ProFeaturesIcon />}
              delay={3}
              className="card-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, image, delay, className, showProgress, progress }) => (
  <div 
    className={`hero-feature-card hero-${className} glass-card floating magnetic-hover`}
    style={{ 
      animationDelay: `${delay}s`,
      transitionDelay: `${delay * 0.2}s`
    }}
  >
    <div className="hero-card-content">
      <div className="hero-card-icon">
        {image}
      </div>
      <h3 className="hero-card-title">{title}</h3>
      <p className="hero-card-description">{description}</p>
      {showProgress && (
        <div className="hero-progress-bar">
          <div className="hero-progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
    <div className="hero-card-glow"></div>
  </div>
);

// SVG Icon Components
const AIJobsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
    <path d="M19 12L19.74 15.26L23 16L19.74 16.74L19 20L18.26 16.74L15 16L18.26 15.26L19 12Z" fill="currentColor"/>
    <path d="M5 12L5.74 15.26L9 16L5.74 16.74L5 20L4.26 16.74L1 16L4.26 15.26L5 12Z" fill="currentColor"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.7"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="currentColor"/>
    <path d="M20 19v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a6 6 0 016-6h4a6 6 0 016 6z" fill="currentColor"/>
    <path d="M16 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const CareerPathIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h3m0 0l3-3m-3 3l3 3m6-6h3m0 0l3-3m-3 3l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="12" r="2" fill="currentColor"/>
    <circle cx="18" cy="12" r="2" fill="currentColor"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ProFeaturesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default Hero;