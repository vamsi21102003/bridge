import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitle')}
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">{t('home.stats.opportunities')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">{t('home.stats.mentors')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">{t('home.stats.students')}</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="cta-primary">{t('home.hero.getStarted')}</button>
            <button className="cta-secondary">{t('home.hero.learnMore')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;