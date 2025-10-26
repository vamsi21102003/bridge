import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './MockPracticeSection.css';
import './CommonSections.css';

function MockPracticeSection() {
  const { t } = useLanguage();
  const practiceOptions = [
    {
      id: 1,
      title: "Mock Practice Quiz",
      description: "Test your knowledge with curated quizzes across various domains",
      icon: "📝",
      features: ["Timed Tests", "Instant Results", "Performance Analytics"],
      difficulty: "All Levels"
    },
    {
      id: 2,
      title: "How to Enhance Profile Tips",
      description: "Get personalized tips to improve your professional profile",
      icon: "💡",
      features: ["Profile Analysis", "Skill Recommendations", "Industry Insights"],
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Practice with AI-powered mock interviews",
      icon: "🎤",
      features: ["Video Practice", "Real-time Feedback", "Industry-specific Questions"],
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Coding Challenges",
      description: "Solve coding problems and improve your programming skills",
      icon: "💻",
      features: ["Multiple Languages", "Difficulty Levels", "Solution Explanations"],
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Aptitude Tests",
      description: "Sharpen your logical and analytical thinking",
      icon: "🧠",
      features: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability"],
      difficulty: "All Levels"
    },
    {
      id: 6,
      title: "Soft Skills Assessment",
      description: "Evaluate and improve your communication and leadership skills",
      icon: "🤝",
      features: ["Communication Skills", "Leadership Assessment", "Team Collaboration"],
      difficulty: "Intermediate"
    }
  ];

  return (
    <section className="mock-practice-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Practice & Improve</h2>
          <p className="section-subtitle">
            Enhance your skills with our comprehensive practice modules and get ready for your dream opportunity
          </p>
        </div>

        <div className="practice-grid">
          {practiceOptions.map((option) => (
            <div key={option.id} className="practice-card">
              <div className="practice-icon">{option.icon}</div>
              <div className="practice-content">
                <h3 className="practice-title">{option.title}</h3>
                <p className="practice-description">{option.description}</p>
                
                <div className="practice-features">
                  {option.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
                
                <div className="practice-footer">
                  <span className="difficulty-badge">{option.difficulty}</span>
                  <button className="start-btn">Start Practice</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="practice-stats">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <h4>Track Progress</h4>
              <p>Monitor your improvement with detailed analytics</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <h4>Earn Badges</h4>
              <p>Unlock achievements as you complete challenges</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <h4>Personalized Learning</h4>
              <p>Get recommendations based on your performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MockPracticeSection;