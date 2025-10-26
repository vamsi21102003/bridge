import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Opportunities.css';

const Opportunities = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [activeFilter, setActiveFilter] = useState('all');

  // Static opportunities data with Indian companies and locations
  const opportunities = [
    {
      company: 'TechMahindra',
      industry: 'Software Development',
      logo: 'TM',
      type: 'internship',
      title: 'Frontend Developer Intern',
      location: 'Pune, Maharashtra',
      salary: '₹25k/mo',
      skills: ['React', 'JavaScript', 'CSS'],
      deadline: 'Jun 30, 2023',
      urgent: true,
      featured: true,
      gradient: 'linear-gradient(135deg, #4cc9f0, #4361ee)'
    },
    {
      company: 'Infosys Analytics',
      industry: 'Data Science',
      logo: 'IA',
      type: 'job',
      title: 'Junior Data Scientist',
      location: 'Bangalore, Karnataka',
      salary: '₹8.5L/yr',
      skills: ['Python', 'SQL', 'Machine Learning'],
      deadline: 'Jul 15, 2023',
      urgent: false,
      featured: true,
      gradient: 'linear-gradient(135deg, #4361ee, #3a0ca3)'
    },
    {
      company: 'Digital Bharat Marketing',
      industry: 'Marketing',
      logo: 'DB',
      type: 'internship',
      title: 'Digital Marketing Intern',
      location: 'Mumbai, Maharashtra',
      salary: '₹22k/mo',
      skills: ['SEO', 'Social Media', 'Content Creation'],
      deadline: 'Jun 25, 2023',
      urgent: true,
      featured: false,
      gradient: 'linear-gradient(135deg, #f72585, #7209b7)'
    },
    {
      company: 'Wipro Cloud Solutions',
      industry: 'Cloud Computing',
      logo: 'WC',
      type: 'job',
      title: 'Senior Backend Developer',
      location: 'Hyderabad, Telangana',
      salary: '₹12L/yr',
      skills: ['Node.js', 'AWS', 'Docker', 'MongoDB'],
      deadline: 'Aug 10, 2023',
      urgent: true,
      featured: true,
      gradient: 'linear-gradient(135deg, #06ffa5, #4cc9f0)'
    },
    {
      company: 'Paytm FinTech',
      industry: 'Financial Technology',
      logo: 'PF',
      type: 'internship',
      title: 'Product Management Intern',
      location: 'Noida, Uttar Pradesh',
      salary: '₹28k/mo',
      skills: ['Product Strategy', 'Analytics', 'Figma'],
      deadline: 'Jul 05, 2023',
      urgent: false,
      featured: true,
      gradient: 'linear-gradient(135deg, #7209b7, #f72585)'
    },
    {
      company: 'Nazara Games Studio',
      industry: 'Gaming',
      logo: 'NG',
      type: 'job',
      title: 'Unity Game Developer',
      location: 'Chennai, Tamil Nadu',
      salary: '₹9.5L/yr',
      skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
      deadline: 'Jul 20, 2023',
      urgent: false,
      featured: false,
      gradient: 'linear-gradient(135deg, #ff6b6b, #feca57)'
    },
    {
      company: 'Tata Green Energy',
      industry: 'Clean Technology',
      logo: 'TG',
      type: 'internship',
      title: 'Sustainability Research Intern',
      location: 'Bhubaneswar, Odisha',
      salary: '₹24k/mo',
      skills: ['Research', 'Data Analysis', 'Environmental Science'],
      deadline: 'Jun 28, 2023',
      urgent: true,
      featured: false,
      gradient: 'linear-gradient(135deg, #48cae4, #06ffa5)'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Opportunities', icon: 'fas fa-layer-group', count: opportunities.length },
    { key: 'internship', label: 'Internships', icon: 'fas fa-user-graduate', count: opportunities.filter(o => o.type === 'internship').length },
    { key: 'job', label: 'Full-time Jobs', icon: 'fas fa-briefcase', count: opportunities.filter(o => o.type === 'job').length },
    { key: 'urgent', label: 'Urgent', icon: 'fas fa-clock', count: opportunities.filter(o => o.urgent).length },
    { key: 'featured', label: 'Featured', icon: 'fas fa-star', count: opportunities.filter(o => o.featured).length }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'urgent') return opp.urgent;
    if (activeFilter === 'featured') return opp.featured;
    return opp.type === activeFilter;
  });

  return (
    <section id="opportunities" className="section opportunities section-gradient">
      <div className="section-title">
        <h2>AI Recommended Jobs & Internships</h2>
        <p>Personalized opportunities matched to your profile through advanced AI analysis</p>
      </div>
      
      <div className="opportunities-filters glass-frosted">
        {filters.map(filter => (
          <FilterButton
            key={filter.key}
            filter={filter}
            isActive={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
          />
        ))}
      </div>

      <div ref={ref} className="opportunities-grid">
        {filteredOpportunities.map((opp, index) => (
          <OpportunityCard 
            key={index} 
            {...opp} 
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

const FilterButton = ({ filter, isActive, onClick }) => (
  <button
    className={`filter-btn glass ${isActive ? 'active glass-neon' : ''} magnetic-hover`}
    onClick={onClick}
  >
    <i className={filter.icon}></i>
    <span>{filter.label}</span>
    <span className="filter-count">{filter.count}</span>
  </button>
);

const OpportunityCard = ({ 
  company, 
  industry, 
  logo, 
  type, 
  title, 
  location, 
  salary, 
  skills, 
  deadline, 
  urgent, 
  featured,
  gradient,
  index,
  isVisible 
}) => (
  <div 
    className={`opportunity-card glass-liquid scroll-fade-in magnetic-hover ${
      isVisible ? 'visible' : ''
    } ${featured ? 'featured' : ''} ${urgent ? 'urgent' : ''}`}
    style={{ 
      transitionDelay: `${index * 0.1}s`,
      '--tx': `${(index % 2) * 3}px`,
      '--ty': `${(index % 3) * 3}px`
    }}
  >
    {featured && (
      <div className="featured-badge glass-neon">
        <i className="fas fa-star"></i>
        Featured
      </div>
    )}
    
    {urgent && (
      <div className="urgent-badge glass" style={{ background: 'rgba(220, 53, 69, 0.2)' }}>
        <i className="fas fa-bolt"></i>
        Urgent
      </div>
    )}

    <div className="opp-header">
      <div className="opp-company">
        <div 
          className="company-logo glass"
          style={{ background: gradient }}
        >
          {logo}
        </div>
        <div>
          <h4>{company}</h4>
          <p>{industry}</p>
        </div>
      </div>
      <span className={`opp-type type-${type} glass`}>
        {type === 'internship' ? 'Internship' : 'Full-time'}
      </span>
    </div>
    
    <h3 className="opp-title">{title}</h3>
    
    <div className="opp-details">
      <div><i className="fas fa-map-marker-alt"></i> {location}</div>
      <div><i className="fas fa-money-bill-wave"></i> {salary}</div>
    </div>
    
    <div className="opp-skills">
      {skills.map((skill, skillIndex) => (
        <span key={skillIndex} className="skill-tag glass">{skill}</span>
      ))}
    </div>
    
    <div className="opp-footer">
      <div className="opp-deadline">
        <i className="fas fa-clock"></i>
        Apply by: {deadline}
      </div>
      <button className="btn btn-primary glass-neon shimmer">
        Apply Now
      </button>
    </div>

    <div className="card-glow" style={{ background: gradient }}></div>
  </div>
);

export default Opportunities;