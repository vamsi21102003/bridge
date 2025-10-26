import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function FeaturedUpdates() {
  const { t } = useLanguage();
  
  const updates = [
    {
      id: 1,
      title: t('featured.aiTool.title'),
      description: t('featured.aiTool.description'),
      category: t('featured.productUpdate'),
      time: "2 hours ago",
      image: "🚀"
    },
    {
      id: 2,
      title: t('featured.gsoc.title'),
      description: t('featured.gsoc.description'),
      category: t('featured.opportunity'),
      time: "5 hours ago",
      image: "💻"
    },
    {
      id: 3,
      title: t('featured.partnership.title'),
      description: t('featured.partnership.description'),
      category: t('featured.partnershipCategory'),
      time: "1 day ago",
      image: "🎓"
    }
  ];

  return (
    <section className="featured-updates">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('featured.title')}</h2>
          <p className="section-subtitle">{t('featured.subtitle')}</p>
        </div>
        
        <div className="updates-grid">
          {updates.map((update) => (
            <div key={update.id} className="update-card">
              <div className="update-icon">{update.image}</div>
              <div className="update-content">
                <span className="update-category">{update.category}</span>
                <h3 className="update-title">{update.title}</h3>
                <p className="update-description">{update.description}</p>
                <span className="update-time">{update.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedUpdates;