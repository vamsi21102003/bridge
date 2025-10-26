import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './JobsSection.css';
import './CommonSections.css';

function JobsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('available');

  const availableJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "₹8-12 LPA",
      type: "Full-time",
      skills: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow Inc",
      location: "Bangalore",
      salary: "₹15-20 LPA",
      type: "Full-time",
      skills: ["Python", "ML", "SQL"]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Mumbai",
      salary: "₹6-10 LPA",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    }
  ];

  const recommendedJobs = [
    {
      id: 4,
      title: "Backend Developer",
      company: "CloudTech",
      location: "Hyderabad",
      salary: "₹10-15 LPA",
      type: "Full-time",
      skills: ["Node.js", "MongoDB", "AWS"],
      match: "95%"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Delhi",
      salary: "₹18-25 LPA",
      type: "Full-time",
      skills: ["Strategy", "Analytics", "Leadership"],
      match: "88%"
    }
  ];

  return (
    <section className="jobs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('jobs.title')}</h2>
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
              onClick={() => setActiveTab('available')}
            >
              {t('jobs.availableJobs')}
            </button>
            <button
              className={`tab-btn ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommended')}
            >
              {t('jobs.recommendedJobs')}
            </button>
          </div>
        </div>

        <div className="jobs-grid">
          {(activeTab === 'available' ? availableJobs : recommendedJobs).map((job) => (
            <div key={job.id} className="job-card">
              {job.match && <div className="match-badge">{job.match} {t('jobs.match')}</div>}
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-company">{job.company}</div>
              <div className="job-details">
                <span className="job-location">📍 {job.location}</span>
                <span className="job-salary">💰 {job.salary}</span>
              </div>
              <div className="job-skills">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button className="apply-btn">{t('jobs.applyNow')}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobsSection;