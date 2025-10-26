import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './NetworkingSection.css';
import './CommonSections.css';

function NetworkingSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('mentors');

  const mentors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      experience: "8 years",
      expertise: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessions: 150,
      image: "👩‍💻"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Data Science Manager",
      company: "Amazon",
      experience: "10 years",
      expertise: ["Machine Learning", "Python", "AWS"],
      rating: 4.8,
      sessions: 200,
      image: "👨‍💼"
    }
  ];

  const alumni = [
    {
      id: 3,
      name: "Anita Desai",
      role: "Product Manager",
      company: "Microsoft",
      college: "IIT Delhi",
      batch: "2018",
      expertise: ["Product Strategy", "Analytics", "Leadership"],
      image: "👩‍🎓"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Startup Founder",
      company: "TechStart Inc",
      college: "IIT Bombay",
      batch: "2016",
      expertise: ["Entrepreneurship", "Fundraising", "Strategy"],
      image: "👨‍💼"
    }
  ];

  const institutions = [
    {
      id: 5,
      name: "Indian Institute of Technology",
      location: "Delhi",
      programs: ["B.Tech", "M.Tech", "PhD"],
      ranking: "#1 Engineering",
      students: "10,000+",
      image: "🏛️"
    },
    {
      id: 6,
      name: "Indian Institute of Management",
      location: "Ahmedabad",
      programs: ["MBA", "Executive MBA", "PhD"],
      ranking: "#1 Management",
      students: "2,000+",
      image: "🏢"
    }
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'mentors': return mentors;
      case 'alumni': return alumni;
      case 'institutions': return institutions;
      default: return mentors;
    }
  };

  return (
    <section className="networking-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect & Network</h2>
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'mentors' ? 'active' : ''}`}
              onClick={() => setActiveTab('mentors')}
            >
              Connect with Mentors
            </button>
            <button 
              className={`tab-btn ${activeTab === 'alumni' ? 'active' : ''}`}
              onClick={() => setActiveTab('alumni')}
            >
              Connect with Alumni
            </button>
            <button 
              className={`tab-btn ${activeTab === 'institutions' ? 'active' : ''}`}
              onClick={() => setActiveTab('institutions')}
            >
              Connect with Institutions
            </button>
          </div>
        </div>

        <div className="networking-grid">
          {getCurrentData().map((item) => (
            <div key={item.id} className="network-card">
              <div className="network-avatar">{item.image}</div>
              <div className="network-content">
                <h3 className="network-name">{item.name}</h3>
                <p className="network-role">{item.role}</p>
                <p className="network-company">{item.company || item.location}</p>
                
                {item.experience && (
                  <div className="network-stats">
                    <span>📅 {item.experience}</span>
                    <span>⭐ {item.rating}</span>
                    <span>👥 {item.sessions} sessions</span>
                  </div>
                )}
                
                {item.college && (
                  <div className="network-stats">
                    <span>🎓 {item.college}</span>
                    <span>📅 Batch {item.batch}</span>
                  </div>
                )}
                
                {item.programs && (
                  <div className="network-stats">
                    <span>🏆 {item.ranking}</span>
                    <span>👥 {item.students}</span>
                  </div>
                )}
                
                <div className="network-expertise">
                  {(item.expertise || item.programs || []).map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                
                <button className="connect-btn">
                  {activeTab === 'institutions' ? 'Learn More' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetworkingSection;