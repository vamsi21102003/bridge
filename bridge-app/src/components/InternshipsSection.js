import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function InternshipsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('available');

  const availableInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Microsoft",
      location: "Bangalore",
      duration: "3 months",
      stipend: "₹50,000/month",
      type: "Paid",
      skills: ["Java", "Spring Boot", "React"]
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flipkart",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000/month",
      type: "Paid",
      skills: ["Python", "Machine Learning", "SQL"]
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "Zomato",
      location: "Gurgaon",
      duration: "4 months",
      stipend: "₹35,000/month",
      type: "Paid",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping"]
    }
  ];

  const recommendedInternships = [
    {
      id: 4,
      title: "Frontend Development Intern",
      company: "Swiggy",
      location: "Bangalore",
      duration: "3 months",
      stipend: "₹45,000/month",
      type: "Paid",
      skills: ["React", "JavaScript", "CSS"],
      match: "92%"
    },
    {
      id: 5,
      title: "Product Management Intern",
      company: "Paytm",
      location: "Noida",
      duration: "6 months",
      stipend: "₹55,000/month",
      type: "Paid",
      skills: ["Analytics", "Strategy", "Communication"],
      match: "87%"
    }
  ];

  return (
    <section className="internships-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Internship Opportunities</h2>
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
              onClick={() => setActiveTab('available')}
            >
              Available Internships
            </button>
            <button 
              className={`tab-btn ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended Internships
            </button>
          </div>
        </div>

        <div className="internships-grid">
          {(activeTab === 'available' ? availableInternships : recommendedInternships).map((internship) => (
            <div key={internship.id} className="internship-card">
              {internship.match && <div className="match-badge">{internship.match} Match</div>}
              <div className="internship-header">
                <h3 className="internship-title">{internship.title}</h3>
                <span className="internship-type">{internship.type}</span>
              </div>
              <div className="internship-company">{internship.company}</div>
              <div className="internship-details">
                <span className="internship-location">📍 {internship.location}</span>
                <span className="internship-duration">⏱️ {internship.duration}</span>
                <span className="internship-stipend">💰 {internship.stipend}</span>
              </div>
              <div className="internship-skills">
                {internship.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InternshipsSection;