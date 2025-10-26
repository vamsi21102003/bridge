import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1">💼</div>
          <div className="shape shape-2">🎓</div>
          <div className="shape shape-3">🚀</div>
          <div className="shape shape-4">⭐</div>
          <div className="shape shape-5">🏆</div>
          <div className="shape shape-6">💡</div>
          <div className="shape shape-7">🎯</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-emoji">🎉</span>
            <span className="badge-text">Welcome to Your Future!</span>
            <span className="badge-emoji">✨</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-emoji">🌟</span>
            {t('home.hero.title') || 'Unlock Your Potential'}
            <span className="gradient-text"> & Achieve Greatness</span>
          </h1>
          
          <p className="hero-subtitle">
            <span className="subtitle-emoji">🚀</span>
            {t('home.hero.subtitle') || 'Discover opportunities, connect with mentors, and build your dream career with AI-powered recommendations'}
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-emoji">💼</span>
              <span className="stat-number">10K+</span>
              <span className="stat-label">{t('home.stats.opportunities') || 'Job Opportunities'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">👨‍🏫</span>
              <span className="stat-number">5K+</span>
              <span className="stat-label">{t('home.stats.mentors') || 'Expert Mentors'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">🎓</span>
              <span className="stat-number">50K+</span>
              <span className="stat-label">{t('home.stats.students') || 'Success Stories'}</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="cta-primary">
              <span className="cta-emoji">🚀</span>
              {t('home.hero.getStarted') || 'Get Started'}
              <span className="cta-arrow">→</span>
            </button>
            <button className="cta-secondary">
              <span className="cta-emoji">📖</span>
              {t('home.hero.learnMore') || 'Learn More'}
            </button>
          </div>
          
          <div className="hero-features">
            <div className="feature-tag">
              <span className="feature-emoji">🤖</span>
              <span className="feature-text">AI-Powered Matching</span>
            </div>
            <div className="feature-tag">
              <span className="feature-emoji">⚡</span>
              <span className="feature-text">Instant Notifications</span>
            </div>
            <div className="feature-tag">
              <span className="feature-emoji">🏆</span>
              <span className="feature-text">Achievement System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;