import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

const Hero = ({ onShowLogin }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero section-gradient">
      {/* Simplified Background */}
      <div className="hero-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
      </div>

      <div 
        ref={ref} 
        className={`hero-content ${isVisible ? 'visible' : ''}`}
      >
        <div className="hero-text">
          <h1 className="gradient-text">
            Transform Your Career Journey with <span className="text-glow-accent">AI-Powered</span> Insights
          </h1>
          <p className="hero-description">
            CareerConnect bridges the gap between talent and opportunity. Our platform uses 
            advanced AI to match students with ideal career paths, internships, and jobs while 
            helping employers find the perfect candidates.
          </p>
          
          <div className="hero-features">
            <FeatureItem 
              icon="fas fa-briefcase"
              title="Job Matches"
              description="5 new opportunities match your profile"
            />
            <FeatureItem 
              icon="fas fa-user-check"
              title="Profile Completion"
              description="Complete your profile to get personalized recommendations"
            />
            <FeatureItem 
              icon="fas fa-chart-line"
              title="Skill Analysis"
              description="AI-powered assessment of your skills and growth areas"
            />
          </div>

          <div className="hero-btns">
            <button className="btn btn-primary glass-neon" onClick={onShowLogin}>
              <i className="fas fa-rocket"></i>
              Get Started
            </button>
            <button className="btn btn-outline glass">
              <i className="fas fa-play"></i>
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="main-visual-card glass-neon">
            <div className="visual-header">
              <h3>Your Career Dashboard</h3>
              <div className="profile-badge">
                <div className="avatar">AJ</div>
              </div>
            </div>
            <div className="visual-stats">
              <StatItem value="85%" label="Profile Score" />
              <StatItem value="12" label="Applications" />
              <StatItem value="5" label="Matches" />
              <StatItem value="3" label="Interviews" />
            </div>
            <div className="opportunity-preview">
              <div className="opportunity-item glass">
                <div className="opp-company">
                  <div className="company-logo-small">TC</div>
                  <span>TechCorp</span>
                </div>
                <span className="opp-badge">Internship</span>
              </div>
              <div className="opportunity-item glass">
                <div className="opp-company">
                  <div className="company-logo-small">DA</div>
                  <span>DataAnalytics</span>
                </div>
                <span className="opp-badge">Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item glass magnetic-hover">
    <div className="feature-icon">
      <i className={icon}></i>
    </div>
    <div className="feature-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="stat-item">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default Hero;