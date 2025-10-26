import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './CoursesSection.css';
import './CommonSections.css';

function CoursesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('youtube-available');

  const youtubeCourses = [
    {
      id: 1,
      title: "Complete React Tutorial",
      instructor: "Code with Harry",
      duration: "12 hours",
      rating: 4.8,
      students: "2.5M",
      thumbnail: "📹",
      platform: "YouTube"
    },
    {
      id: 2,
      title: "Python for Beginners",
      instructor: "Programming with Mosh",
      duration: "6 hours",
      rating: 4.9,
      students: "1.8M",
      thumbnail: "🐍",
      platform: "YouTube"
    }
  ];

  const courseraCourses = [
    {
      id: 3,
      title: "Machine Learning Specialization",
      instructor: "Andrew Ng",
      duration: "3 months",
      rating: 4.9,
      students: "500K",
      thumbnail: "🤖",
      platform: "Coursera",
      certificate: true
    },
    {
      id: 4,
      title: "Google Data Analytics Certificate",
      instructor: "Google",
      duration: "6 months",
      rating: 4.7,
      students: "300K",
      thumbnail: "📊",
      platform: "Coursera",
      certificate: true
    }
  ];

  const tabs = [
    { id: 'youtube-available', label: 'Available Courses (YouTube)' },
    { id: 'coursera-available', label: 'Available Courses (Coursera)' },
    { id: 'youtube-recommended', label: 'Recommended (YouTube)' },
    { id: 'coursera-recommended', label: 'Recommended (Coursera)' }
  ];

  const getCurrentCourses = () => {
    if (activeTab.includes('youtube')) return youtubeCourses;
    return courseraCourses;
  };

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('courses.title')}</h2>
          <div className="course-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {getCurrentCourses().map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-thumbnail">{course.thumbnail}</div>
              <div className="course-content">
                <div className="course-platform">{course.platform}</div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">By {course.instructor}</p>
                <div className="course-stats">
                  <span className="course-rating">⭐ {course.rating}</span>
                  <span className="course-students">👥 {course.students}</span>
                  <span className="course-duration">⏱️ {course.duration}</span>
                </div>
                {course.certificate && (
                  <div className="certificate-badge">🏆 Certificate Available</div>
                )}
                <button className="enroll-btn">
                  {course.platform === 'YouTube' ? 'Watch Free' : 'Enroll Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;