import React, { useState } from 'react';
import '../../styles/student-styles/aipro.css';
import { useLanguage } from '../../contexts/LanguageContext';

function AIPro() {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState('career-guidance');
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'Hello! I\'m your AI Career Assistant. How can I help you accelerate your career today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const aiFeatures = [
    {
      id: 'career-guidance',
      title: t('aipro.careerGuidance'),
      icon: '🤖',
      description: t('aipro.careerGuidanceDesc'),
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      premium: true
    },
    {
      id: 'smart-matching',
      title: t('aipro.smartMatching'),
      icon: '🎯',
      description: t('aipro.smartMatchingDesc'),
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      premium: true
    },
    {
      id: 'skill-analysis',
      title: t('aipro.skillAnalysis'),
      icon: '📊',
      description: t('aipro.skillAnalysisDesc'),
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      premium: true
    },
    {
      id: 'interview-coach',
      title: t('aipro.interviewCoach'),
      icon: '🎤',
      description: t('aipro.interviewCoachDesc'),
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      premium: true
    },
    {
      id: 'resume-optimizer',
      title: t('aipro.resumeOptimizer'),
      icon: '📄',
      description: t('aipro.resumeOptimizerDesc'),
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      premium: true
    },
    {
      id: 'market-insights',
      title: t('aipro.marketInsights'),
      icon: '📈',
      description: t('aipro.marketInsightsDesc'),
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      premium: true
    },
    {
      id: 'mentor-ai',
      title: t('aipro.mentorMatching'),
      icon: '🧠',
      description: t('aipro.mentorMatchingDesc'),
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      premium: true
    },
    {
      id: 'learning-path',
      title: t('aipro.personalizedLearning'),
      icon: '🎓',
      description: t('aipro.personalizedLearningDesc'),
      color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      premium: true
    },
    {
      id: 'salary-negotiator',
      title: t('aipro.salaryNegotiator'),
      icon: '💰',
      description: t('aipro.salaryNegotiatorDesc'),
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      premium: true
    },
    {
      id: 'network-builder',
      title: t('aipro.networkBuilder'),
      icon: '🌐',
      description: t('aipro.networkBuilderDesc'),
      color: 'linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)',
      premium: true
    },
    {
      id: 'career-predictor',
      title: t('aipro.careerPredictor'),
      icon: '🔮',
      description: t('aipro.careerPredictorDesc'),
      color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      premium: true
    },
    {
      id: 'ai-portfolio',
      title: t('aipro.portfolioBuilder'),
      icon: '🎨',
      description: t('aipro.portfolioBuilderDesc'),
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      premium: true
    }
  ];

  const subscriptionPlans = [
    {
      name: 'AI Pro Monthly',
      price: '₹999',
      period: '/month',
      features: [
        'Unlimited AI Career Guidance',
        'Smart Job Matching',
        'AI Interview Coach',
        'Resume Optimizer',
        'Skill Gap Analysis',
        'Priority Support',
        'Advanced Analytics',
        'Exclusive AI Features'
      ],
      popular: false
    },
    {
      name: 'AI Pro Annual',
      price: '₹8,999',
      period: '/year',
      originalPrice: '₹11,988',
      discount: '25% OFF',
      features: [
        'Everything in Monthly',
        'AI Mentor Matching',
        'Personalized Learning Paths',
        'Market Insights Premium',
        'Career Roadmap AI',
        'Interview Simulation',
        'Salary Negotiation AI',
        'Lifetime Updates'
      ],
      popular: true
    },
    {
      name: 'AI Pro Lifetime',
      price: '₹24,999',
      period: 'one-time',
      originalPrice: '₹50,000',
      discount: '50% OFF',
      features: [
        'Everything in Annual',
        'Lifetime Access',
        'Future AI Features',
        'Premium Community',
        'Direct AI Team Access',
        'Custom AI Training',
        'White-glove Onboarding',
        'Success Guarantee'
      ],
      popular: false
    }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: inputMessage },
        { type: 'ai', message: 'Analyzing your query with advanced AI... Based on your profile and current market trends, here are my personalized recommendations for you.' }
      ]);
      setInputMessage('');
    }
  };

  const renderFeatureContent = () => {
    switch(activeFeature) {
      case 'career-guidance':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>🤖 AI Career Guidance</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="ai-chat-container">
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    <div className="message-avatar">
                      {msg.type === 'ai' ? '🤖' : '👤'}
                    </div>
                    <div className="message-content">{msg.message}</div>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Ask me about your career path, skills, or goals..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-btn">
                  <span>Send</span>
                  <span className="send-icon">🚀</span>
                </button>
              </div>
            </div>
            <div className="ai-suggestions">
              <h4>💡 Quick AI Insights:</h4>
              <div className="suggestion-chips">
                <span className="chip" onClick={() => setInputMessage('What career path suits my skills?')}>
                  What career path suits me?
                </span>
                <span className="chip" onClick={() => setInputMessage('How to improve my technical skills?')}>
                  How to improve my skills?
                </span>
                <span className="chip" onClick={() => setInputMessage('What are the trending technologies in 2024?')}>
                  Industry trends for 2024
                </span>
                <span className="chip" onClick={() => setInputMessage('How to negotiate salary effectively?')}>
                  Salary negotiation tips
                </span>
              </div>
            </div>
          </div>
        );
      
      case 'smart-matching':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>🎯 Smart Job Matching</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="matching-dashboard">
              <div className="match-stats">
                <div className="stat-card">
                  <span className="stat-number">47</span>
                  <span className="stat-label">Perfect Matches</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Avg Match Score</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Interviews Secured</span>
                </div>
              </div>
              <div className="matching-results">
                <div className="match-card">
                  <div className="match-score">97% Match</div>
                  <div className="job-info">
                    <h4>Senior Frontend Developer</h4>
                    <p className="company">Google • Bangalore</p>
                    <p className="salary">₹25-35 LPA</p>
                  </div>
                  <div className="match-reasons">
                    <span className="reason">React Expert</span>
                    <span className="reason">5+ Years Exp</span>
                    <span className="reason">Location Match</span>
                  </div>
                  <button className="apply-ai-btn">Apply with AI</button>
                </div>
                <div className="match-card">
                  <div className="match-score">94% Match</div>
                  <div className="job-info">
                    <h4>Full Stack Engineer</h4>
                    <p className="company">Microsoft • Hyderabad</p>
                    <p className="salary">₹20-30 LPA</p>
                  </div>
                  <div className="match-reasons">
                    <span className="reason">Node.js Skills</span>
                    <span className="reason">Cloud Experience</span>
                    <span className="reason">Team Lead Ready</span>
                  </div>
                  <button className="apply-ai-btn">Apply with AI</button>
                </div>
                <div className="match-card">
                  <div className="match-score">91% Match</div>
                  <div className="job-info">
                    <h4>Tech Lead - AI/ML</h4>
                    <p className="company">Amazon • Bangalore</p>
                    <p className="salary">₹35-50 LPA</p>
                  </div>
                  <div className="match-reasons">
                    <span className="reason">AI Interest</span>
                    <span className="reason">Leadership Potential</span>
                    <span className="reason">Growth Opportunity</span>
                  </div>
                  <button className="apply-ai-btn">Apply with AI</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'skill-analysis':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>📊 AI Skill Gap Analysis</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="skill-analysis-dashboard">
              <div className="skill-overview">
                <div className="skill-score">
                  <div className="score-circle">
                    <span className="score">85</span>
                    <span className="score-label">Overall Score</span>
                  </div>
                </div>
                <div className="skill-insights">
                  <div className="insight-card">
                    <span className="insight-icon">🚀</span>
                    <span>Top 15% in React.js</span>
                  </div>
                  <div className="insight-card">
                    <span className="insight-icon">⚡</span>
                    <span>Fast learner profile</span>
                  </div>
                  <div className="insight-card">
                    <span className="insight-icon">🎯</span>
                    <span>Ready for senior roles</span>
                  </div>
                </div>
              </div>
              <div className="skill-categories">
                <div className="skill-category">
                  <h4>💻 Technical Skills</h4>
                  <div className="skill-bars">
                    <div className="skill-bar">
                      <div className="skill-info">
                        <span>React.js</span>
                        <span className="skill-level">Expert - 92%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress expert" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-info">
                        <span>Node.js</span>
                        <span className="skill-level">Advanced - 78%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress advanced" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-info">
                        <span>AWS</span>
                        <span className="skill-level">Intermediate - 45%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress intermediate" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-info">
                        <span>Docker</span>
                        <span className="skill-level">Beginner - 25%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress beginner" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recommendations-panel">
                  <h4>🎯 AI Recommendations</h4>
                  <div className="recommendation-cards">
                    <div className="rec-card priority">
                      <span className="rec-icon">🔥</span>
                      <div className="rec-content">
                        <h5>High Priority</h5>
                        <p>Learn AWS fundamentals - 89% of jobs require cloud skills</p>
                      </div>
                    </div>
                    <div className="rec-card medium">
                      <span className="rec-icon">⚡</span>
                      <div className="rec-content">
                        <h5>Medium Priority</h5>
                        <p>Docker & Kubernetes - DevOps skills in high demand</p>
                      </div>
                    </div>
                    <div className="rec-card low">
                      <span className="rec-icon">💡</span>
                      <div className="rec-content">
                        <h5>Future Growth</h5>
                        <p>Machine Learning basics - AI integration trending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'interview-coach':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>🎤 AI Interview Coach</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="interview-coach-dashboard">
              <div className="coach-stats">
                <div className="stat-card">
                  <span className="stat-number">127</span>
                  <span className="stat-label">Practice Sessions</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">94%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">8.7</span>
                  <span className="stat-label">Avg Score</span>
                </div>
              </div>
              <div className="interview-types">
                <h4>🎯 Interview Types</h4>
                <div className="interview-grid">
                  <div className="interview-type-card">
                    <div className="type-icon">💻</div>
                    <h5>Technical Interview</h5>
                    <p>Coding challenges, system design, algorithms</p>
                    <button className="start-interview-btn">Start Practice</button>
                  </div>
                  <div className="interview-type-card">
                    <div className="type-icon">🤝</div>
                    <h5>Behavioral Interview</h5>
                    <p>Leadership, teamwork, problem-solving scenarios</p>
                    <button className="start-interview-btn">Start Practice</button>
                  </div>
                  <div className="interview-type-card">
                    <div className="type-icon">🎯</div>
                    <h5>Case Study</h5>
                    <p>Business analysis, strategic thinking</p>
                    <button className="start-interview-btn">Start Practice</button>
                  </div>
                </div>
              </div>
              <div className="recent-feedback">
                <h4>📊 Recent AI Feedback</h4>
                <div className="feedback-card">
                  <div className="feedback-header">
                    <span className="feedback-type">Technical Interview</span>
                    <span className="feedback-score">9.2/10</span>
                  </div>
                  <div className="feedback-content">
                    <div className="strength">
                      <span className="feedback-icon">✅</span>
                      <span>Excellent problem-solving approach and clean code structure</span>
                    </div>
                    <div className="improvement">
                      <span className="feedback-icon">💡</span>
                      <span>Consider discussing time complexity earlier in your explanation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'salary-negotiator':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>💰 AI Salary Negotiator</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="salary-dashboard">
              <div className="salary-insights">
                <div className="market-value-card">
                  <h4>📈 Your Market Value</h4>
                  <div className="value-range">
                    <span className="min-value">₹18 LPA</span>
                    <div className="value-bar">
                      <div className="current-position" style={{left: '65%'}}>
                        <span className="current-value">₹25 LPA</span>
                        <div className="position-marker">You</div>
                      </div>
                    </div>
                    <span className="max-value">₹35 LPA</span>
                  </div>
                  <p className="market-insight">You're earning 15% above market average! 🎉</p>
                </div>
                <div className="negotiation-tips">
                  <h4>🎯 AI Negotiation Strategy</h4>
                  <div className="tip-cards">
                    <div className="tip-card">
                      <span className="tip-icon">📊</span>
                      <div className="tip-content">
                        <h5>Market Data</h5>
                        <p>Similar roles at Google pay 20-30% more</p>
                      </div>
                    </div>
                    <div className="tip-card">
                      <span className="tip-icon">🏆</span>
                      <div className="tip-content">
                        <h5>Your Achievements</h5>
                        <p>Highlight your 40% performance improvement</p>
                      </div>
                    </div>
                    <div className="tip-card">
                      <span className="tip-icon">⏰</span>
                      <div className="tip-content">
                        <h5>Timing</h5>
                        <p>Best time: After project completion next month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="negotiation-simulator">
                <h4>🎭 Negotiation Simulator</h4>
                <div className="simulator-card">
                  <div className="scenario">
                    <p><strong>Scenario:</strong> Annual review meeting with your manager</p>
                    <p><strong>Goal:</strong> 25% salary increase to ₹31.25 LPA</p>
                  </div>
                  <button className="start-simulation-btn">Start AI Simulation</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'career-predictor':
        return (
          <div className="feature-content">
            <div className="feature-header">
              <h3>🔮 Career Path Predictor</h3>
              <span className="pro-badge">PRO</span>
            </div>
            <div className="predictor-dashboard">
              <div className="career-timeline">
                <h4>🚀 Your Predicted Career Journey</h4>
                <div className="timeline">
                  <div className="timeline-item current">
                    <div className="timeline-marker">📍</div>
                    <div className="timeline-content">
                      <h5>Current: Senior Developer</h5>
                      <p>₹25 LPA • 2024</p>
                    </div>
                  </div>
                  <div className="timeline-item predicted">
                    <div className="timeline-marker">🎯</div>
                    <div className="timeline-content">
                      <h5>Next: Tech Lead</h5>
                      <p>₹35-40 LPA • 2025 (85% probability)</p>
                    </div>
                  </div>
                  <div className="timeline-item predicted">
                    <div className="timeline-marker">🚀</div>
                    <div className="timeline-content">
                      <h5>Future: Engineering Manager</h5>
                      <p>₹50-60 LPA • 2027 (72% probability)</p>
                    </div>
                  </div>
                  <div className="timeline-item predicted">
                    <div className="timeline-marker">👑</div>
                    <div className="timeline-content">
                      <h5>Peak: VP Engineering</h5>
                      <p>₹1.2-2 Cr • 2030 (45% probability)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="success-factors">
                <h4>📊 Success Probability Factors</h4>
                <div className="factor-bars">
                  <div className="factor-bar">
                    <div className="factor-info">
                      <span>Technical Skills</span>
                      <span className="factor-score">92%</span>
                    </div>
                    <div className="factor-progress">
                      <div className="progress-fill" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="factor-bar">
                    <div className="factor-info">
                      <span>Leadership Potential</span>
                      <span className="factor-score">78%</span>
                    </div>
                    <div className="factor-progress">
                      <div className="progress-fill" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="factor-bar">
                    <div className="factor-info">
                      <span>Network Strength</span>
                      <span className="factor-score">65%</span>
                    </div>
                    <div className="factor-progress">
                      <div className="progress-fill" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="factor-bar">
                    <div className="factor-info">
                      <span>Market Timing</span>
                      <span className="factor-score">88%</span>
                    </div>
                    <div className="factor-progress">
                      <div className="progress-fill" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="feature-content">
            <div className="feature-placeholder">
              <h3>🚀 Coming Soon</h3>
              <p>This AI feature is being developed with cutting-edge technology.</p>
              <div className="coming-soon-features">
                <div className="soon-feature">
                  <span className="soon-icon">🎨</span>
                  <span>AI Portfolio Builder</span>
                </div>
                <div className="soon-feature">
                  <span className="soon-icon">🌐</span>
                  <span>Network Builder AI</span>
                </div>
                <div className="soon-feature">
                  <span className="soon-icon">📄</span>
                  <span>Resume Optimizer</span>
                </div>
                <div className="soon-feature">
                  <span className="soon-icon">📈</span>
                  <span>Market Insights</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="aipro-page">
      {/* Animated AI Background */}
      <div className="ai-background">
        <div className="neural-network">
          <div className="node node-1"></div>
          <div className="node node-2"></div>
          <div className="node node-3"></div>
          <div className="node node-4"></div>
          <div className="node node-5"></div>
          <div className="connection conn-1"></div>
          <div className="connection conn-2"></div>
          <div className="connection conn-3"></div>
        </div>
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="aipro-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="aipro-title">
              <span className="ai-icon">🤖</span>
              {t('aipro.title')}
            </h1>
            <p className="aipro-subtitle">
              {t('aipro.subtitle')}
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">{t('aipro.aiRecommendations')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">{t('aipro.successRate')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">{t('aipro.aiAssistant')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="aipro-content">
        <div className="container">
          <div className="features-section">
            <h2 className="section-title">{t('aipro.aiPoweredFeatures')}</h2>
            <div className="features-grid">
              {aiFeatures.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
                  onClick={() => setActiveFeature(feature.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon" style={{ background: feature.color }}>
                    {feature.icon}
                  </div>
                  <div className="feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.premium && <span className="premium-badge">PRO</span>}
                  </div>
                  <div className="feature-arrow">→</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Content Display */}
          <div className="feature-display">
            {renderFeatureContent()}
          </div>

          {/* Subscription Plans */}
          <div className="subscription-section">
            <h2 className="section-title">{t('aipro.chooseYourPlan')}</h2>
            <div className="plans-grid">
              {subscriptionPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`plan-card ${plan.popular ? 'popular' : ''}`}
                >
                  {plan.popular && <div className="popular-badge">{t('aipro.mostPopular')}</div>}
                  {plan.discount && <div className="discount-badge">{plan.discount}</div>}
                  
                  <div className="plan-header">
                    <h3>{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="original-price">
                        <span>Was {plan.originalPrice}</span>
                      </div>
                    )}
                  </div>

                  <div className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`plan-btn ${plan.popular ? 'popular-btn' : ''}`}>
                    {plan.popular ? t('aipro.startFreeTrial') : t('aipro.getStarted')}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Testimonials */}
          <div className="testimonials-section">
            <h2 className="section-title">{t('aipro.successStories')}</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "AI Pro helped me land my dream job at Google. The interview coach was incredible!"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍💻</div>
                  <div className="author-info">
                    <span className="author-name">Rahul Kumar</span>
                    <span className="author-role">Software Engineer @ Google</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "The skill gap analysis showed me exactly what to learn. Got promoted within 6 months!"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👩‍💼</div>
                  <div className="author-info">
                    <span className="author-name">Priya Sharma</span>
                    <span className="author-role">Tech Lead @ Microsoft</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "AI career guidance changed my entire career trajectory. Best investment ever!"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍🎓</div>
                  <div className="author-info">
                    <span className="author-name">Arjun Patel</span>
                    <span className="author-role">Product Manager @ Amazon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPro;