import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Pro Overview' },
    { id: 'recommendations', label: 'AI Recommendations' },
    { id: 'career-path', label: 'Personalised Path' },
    { id: 'courses', label: 'Pro Features' }
  ];

  const stats = [
    { value: '85%', label: 'Pro Profile Score' },
    { value: '12', label: 'AI Job Matches' },
    { value: '5', label: 'Personalised Paths' },
    { value: '8', label: 'Pro Features Active' }
  ];

  const skills = ['Python', 'JavaScript', 'React', 'SQL', 'Data Structures'];
  const aiRecommendations = ['Software Engineer at TCS', 'Frontend Developer at Infosys', 'Data Analyst at Wipro'];

  const structuredPaths = [
    { name: 'Full Stack Development Path', courses: 5, progress: 60 },
    { name: 'Data Science Career Track', courses: 8, progress: 35 }
  ];

  // AI Recommendations Data with Indian companies
  const jobRecommendations = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TCS',
      type: 'Full-time',
      location: 'Mumbai, Maharashtra',
      salary: '₹12L - ₹18L',
      match: '95%',
      skills: ['Python', 'JavaScript', 'React'],
      description: 'Build scalable web applications and work with cutting-edge technologies.',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Infosys',
      type: 'Full-time',
      location: 'Bangalore, Karnataka',
      salary: '₹8L - ₹14L',
      match: '92%',
      skills: ['JavaScript', 'React', 'CSS'],
      description: 'Create engaging user interfaces for millions of users across India.',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Wipro',
      type: 'Full-time',
      location: 'Hyderabad, Telangana',
      salary: '₹6L - ₹10L',
      match: '88%',
      skills: ['Python', 'SQL', 'Data Structures'],
      description: 'Analyze large datasets to drive business insights and decisions.',
      posted: '3 days ago'
    }
  ];

  const internshipRecommendations = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Flipkart',
      type: 'Internship',
      location: 'Bangalore, Karnataka',
      salary: '₹35,000/month',
      match: '90%',
      skills: ['Python', 'JavaScript'],
      description: 'Work on real-world e-commerce projects with experienced engineers.',
      duration: '12 weeks',
      posted: '1 day ago'
    },
    {
      id: 2,
      title: 'Frontend Development Intern',
      company: 'Zomato',
      type: 'Internship',
      location: 'Gurgaon, Haryana',
      salary: '₹30,000/month',
      match: '87%',
      skills: ['React', 'JavaScript'],
      description: 'Build user interfaces for food delivery platform features.',
      duration: '10 weeks',
      posted: '2 days ago'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Swiggy',
      type: 'Internship',
      location: 'Bangalore, Karnataka',
      salary: '₹28,000/month',
      match: '85%',
      skills: ['Python', 'SQL'],
      description: 'Analyze food delivery data to improve user experience and operations.',
      duration: '12 weeks',
      posted: '4 days ago'
    }
  ];

  // Personalized Course Recommendations
  const courseraRecommendations = [
    {
      id: 1,
      title: 'Python Programming Specialization',
      instructor: 'IIT Bombay',
      platform: 'Coursera',
      duration: '8 months',
      rating: '4.8',
      students: '2.1M',
      match: '95%',
      skills: ['Python', 'Data Structures'],
      level: 'Beginner',
      price: 'Free to audit',
      certificate: true
    },
    {
      id: 2,
      title: 'React Development Masterclass',
      instructor: 'Coding Ninjas India',
      platform: 'Coursera',
      duration: '6 weeks',
      rating: '4.9',
      students: '890K',
      match: '92%',
      skills: ['React', 'JavaScript'],
      level: 'Intermediate',
      price: '₹3,999/month',
      certificate: true
    }
  ];

  const youtubeRecommendations = [
    {
      id: 1,
      title: 'JavaScript Complete Course in Hindi',
      channel: 'CodeWithHarry',
      platform: 'YouTube',
      duration: '8 hours',
      views: '12M',
      likes: '450K',
      match: '90%',
      skills: ['JavaScript', 'Web Development'],
      level: 'Beginner',
      uploaded: '2 years ago',
      free: true
    },
    {
      id: 2,
      title: 'SQL Tutorial in Hindi - Complete Database Course',
      channel: 'Apna College',
      platform: 'YouTube',
      duration: '4 hours',
      views: '8.5M',
      likes: '320K',
      match: '88%',
      skills: ['SQL', 'Database'],
      level: 'Beginner to Advanced',
      uploaded: '1 year ago',
      free: true
    }
  ];

  return (
    <section id="dashboard" className="section">
      <div className="section-title">
        <h2>BriDGe Pro Personalised Features</h2>
        <p>Unlock your potential with premium personalised insights, AI recommendations, and advanced career guidance</p>
      </div>
      <div className="dashboard-preview glass">
        <div className="dashboard-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="dashboard-content">
          {activeTab !== 'courses' && (
            <div className="profile-sidebar glass">
              <div className="profile-header">
                <div className="profile-avatar">
                  <i className="fas fa-user"></i>
                  <div className="pro-badge">
                    <i className="fas fa-crown"></i>
                    PRO
                  </div>
                </div>
                <div>
                  <h3>Arjun Sharma</h3>
                  <p>Computer Science Student</p>
                  <span className="pro-status">BriDGe Pro Member</span>
                </div>
              </div>
              <div className="profile-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat glass">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <h4>Top Skills</h4>
              <div className="opp-skills">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'recommendations' ? (
            <div className="ai-recommendations-tab">
              <div className="recommendations-header">
                <h3>🤖 AI-Powered Job & Internship Recommendations</h3>
                <p>Based on your skills: {skills.join(', ')}</p>
              </div>

              <div className="recommendations-section">
                <div className="section-header">
                  <h4>💼 Recommended Jobs</h4>
                  <span className="match-info">Showing top matches for your profile</span>
                </div>
                <div className="recommendations-grid compact-grid">
                  {jobRecommendations.slice(0, 2).map((job, index) => (
                    <div 
                      key={job.id} 
                      className="recommendation-card glass job-card compact-card animate-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="card-header">
                        <div className="job-info">
                          <h5>{job.title}</h5>
                          <p className="company">{job.company}</p>
                        </div>
                        <div className="match-score">
                          <span className="match-percentage">{job.match}</span>
                          <span className="match-label">Match</span>
                        </div>
                      </div>
                      
                      <div className="job-details">
                        <div className="detail-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{job.location}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-dollar-sign"></i>
                          <span>{job.salary}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-briefcase"></i>
                          <span>{job.type}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-clock"></i>
                          <span>{job.posted}</span>
                        </div>
                      </div>

                      <div className="job-skills">
                        {job.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag matched-skill">{skill}</span>
                        ))}
                      </div>

                      <div className="card-actions compact-actions">
                        <button className="btn btn-primary btn-sm">Apply</button>
                        <button className="btn btn-outline btn-sm">Save</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recommendations-section">
                <div className="section-header">
                  <h4>🎓 Recommended Internships</h4>
                  <span className="match-info">Perfect for building experience</span>
                </div>
                <div className="recommendations-grid compact-grid">
                  {internshipRecommendations.slice(0, 2).map((internship, index) => (
                    <div 
                      key={internship.id} 
                      className="recommendation-card glass internship-card compact-card animate-in"
                      style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                    >
                      <div className="card-header">
                        <div className="job-info">
                          <h5>{internship.title}</h5>
                          <p className="company">{internship.company}</p>
                        </div>
                        <div className="match-score">
                          <span className="match-percentage">{internship.match}</span>
                          <span className="match-label">Match</span>
                        </div>
                      </div>
                      
                      <div className="job-details">
                        <div className="detail-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{internship.location}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-dollar-sign"></i>
                          <span>{internship.salary}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-calendar-alt"></i>
                          <span>{internship.duration}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-clock"></i>
                          <span>{internship.posted}</span>
                        </div>
                      </div>

                      <div className="job-skills">
                        {internship.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag matched-skill">{skill}</span>
                        ))}
                      </div>

                      <div className="card-actions compact-actions">
                        <button className="btn btn-primary btn-sm">Apply</button>
                        <button className="btn btn-outline btn-sm">Save</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === 'career-path' ? (
            <div className="personalized-path-tab">
              <div className="recommendations-header">
                <h3>🎯 Personalized Learning Path</h3>
                <p>Curated courses based on your skills: {skills.join(', ')}</p>
              </div>

              <div className="recommendations-section">
                <div className="section-header">
                  <h4>📚 Coursera Recommendations</h4>
                  <span className="match-info">Professional certificates and specializations</span>
                </div>
                <div className="recommendations-grid compact-grid">
                  {courseraRecommendations.map((course, index) => (
                    <div 
                      key={course.id} 
                      className="recommendation-card glass course-card compact-card animate-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="card-header">
                        <div className="course-info">
                          <h5>{course.title}</h5>
                          <p className="instructor">{course.instructor}</p>
                        </div>
                        <div className="match-score">
                          <span className="match-percentage">{course.match}</span>
                          <span className="match-label">Match</span>
                        </div>
                      </div>
                      
                      <div className="course-details">
                        <div className="detail-item">
                          <i className="fas fa-clock"></i>
                          <span>{course.duration}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-star"></i>
                          <span>{course.rating} rating</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-users"></i>
                          <span>{course.students} students</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-dollar-sign"></i>
                          <span>{course.price}</span>
                        </div>
                      </div>

                      <div className="course-skills">
                        {course.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag matched-skill">{skill}</span>
                        ))}
                        <span className="level-badge">{course.level}</span>
                      </div>

                      <div className="card-actions compact-actions">
                        <button className="btn btn-primary btn-sm">
                          <i className="fab fa-coursera"></i> Enroll
                        </button>
                        <button className="btn btn-outline btn-sm">Save</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="recommendations-section">
                <div className="section-header">
                  <h4>🎥 YouTube Recommendations</h4>
                  <span className="match-info">Free video tutorials and courses</span>
                </div>
                <div className="recommendations-grid compact-grid">
                  {youtubeRecommendations.map((video, index) => (
                    <div 
                      key={video.id} 
                      className="recommendation-card glass video-card compact-card animate-in"
                      style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                    >
                      <div className="card-header">
                        <div className="course-info">
                          <h5>{video.title}</h5>
                          <p className="instructor">{video.channel}</p>
                        </div>
                        <div className="match-score">
                          <span className="match-percentage">{video.match}</span>
                          <span className="match-label">Match</span>
                        </div>
                      </div>
                      
                      <div className="course-details">
                        <div className="detail-item">
                          <i className="fas fa-play-circle"></i>
                          <span>{video.duration}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-eye"></i>
                          <span>{video.views} views</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-thumbs-up"></i>
                          <span>{video.likes} likes</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-calendar"></i>
                          <span>{video.uploaded}</span>
                        </div>
                      </div>

                      <div className="course-skills">
                        {video.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag matched-skill">{skill}</span>
                        ))}
                        <span className="level-badge">{video.level}</span>
                      </div>

                      <div className="card-actions compact-actions">
                        <button className="btn btn-primary btn-sm">
                          <i className="fab fa-youtube"></i> Watch
                        </button>
                        <button className="btn btn-outline btn-sm">Save</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === 'courses' ? (
            <div className="pro-features-details-tab">
              <div className="pro-section">
                <div className="pro-section-header">
                  <h3>💼 Student Pro Features</h3>
                </div>
                
                <div className="pro-features-grid">
                  <div className="pro-feature-card glass">
                    <h4>1. Micro-Credentialing</h4>
                    <p>Earn verified micro-credentials for every milestone and project completion. Showcase achievements on your AI-generated profile with streak-based rewards and badges.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>2. Premium Personalization Tools</h4>
                    <p>Auto-generate professional portfolio webpages from your projects. Test-drive real-world jobs through interactive career simulations and virtual internships.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>3. Career Talks & Live Q&A Panels</h4>
                    <p>Join exclusive live sessions with industry experts and alumni. AI generates insight summaries and smart FAQs from each session.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>4. Emotion-Based Engagement</h4>
                    <p>AI companion detects stress and burnout through your text inputs. Proactively recommends relaxation techniques and learning breaks for well-being.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>5. Virtual Alumni Mentoring Hub</h4>
                    <p>Get matched with alumni using intelligent algorithms. Receive mentorship, career guidance, and networking opportunities from graduates.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>6. Geo-Aware Internship Map</h4>
                    <p>Discover internships visually on an AI-powered map near your location. Filter by skill match, role type, and distance instantly.</p>
                  </div>
                </div>
              </div>

              <div className="pro-section">
                <div className="pro-section-header">
                  <h3>🏢 Employer Subscription Features</h3>
                </div>
                
                <div className="pro-features-grid">
                  <div className="pro-feature-card glass">
                    <h4>1. Employer Collaboration Center</h4>
                    <p>Intelligent hiring hub with AI-ranked candidates and auto-generated shortlists. Smart feedback loop learns recruiter preferences with reputation scoring system.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>2. Candidate Analytics</h4>
                    <p>Deep insights into student performance and potential with real-time data. Track engagement, skill strengths, and learning progress for informed hiring decisions.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>3. Predictive Employability Insights Dashboard</h4>
                    <p>Advanced AI analytics for placement predictions and skill gap trends. Department-wise insights with curriculum improvement recommendations based on live industry data.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>4. Employer Engagement & Branding Portal</h4>
                    <p>Create custom company pages showcasing culture and career paths. Host virtual job fairs and webinars to reach qualified candidates effectively.</p>
                  </div>
                </div>
              </div>

              <div className="pro-section">
                <div className="pro-section-header">
                  <h3>🎓 Institutional Plan Features</h3>
                </div>
                
                <div className="pro-features-grid">
                  <div className="pro-feature-card glass">
                    <h4>1. Advanced Analytics Dashboard Suite</h4>
                    <p>Predictive AI dashboards with placement forecasts and skill gap tracking. Custom report builder exports insights in PDF/CSV formats for data-driven decisions.</p>
                  </div>

                  <div className="pro-feature-card glass">
                    <h4>2. Cloud Ecosystem & API Integrations</h4>
                    <p>Seamless integration with Skill Odisha, Digital Odisha, and BPUT SIS platforms. Federated learning with anonymized multi-college data for enhanced AI models.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="dashboard-main">
              <div className="recommendation-card glass pro-card">
                <div className="card-header">
                  <h3>
                    <i className="fas fa-crown pro-icon"></i>
                    AI Recommended Jobs & Internships
                  </h3>
                  <button className="btn btn-outline">View All</button>
                </div>
                <p>Based on your BriDGe Pro analysis, here are premium personalized job and internship recommendations:</p>
                <div className="opp-skills">
                  {aiRecommendations.map((recommendation, index) => (
                    <span key={index} className="skill-tag pro-tag">{recommendation}</span>
                  ))}
                </div>
              </div>
              <div className="recommendation-card glass pro-card">
                <div className="card-header">
                  <h3>
                    <i className="fas fa-crown pro-icon"></i>
                    BriDGe Pro Personalised Career Paths
                  </h3>
                  <button className="btn btn-outline">Explore Pro Features</button>
                </div>
                <p>Transform your skills with BriDGe Pro personalised career roadmaps and premium course recommendations:</p>
                {structuredPaths.map((path, index) => (
                  <div key={index} className="skill-item pro-item">
                    <div className="skill-info">
                      <span>{path.name}</span>
                      <span>{path.courses} pro courses available</span>
                    </div>
                    <div className="progress-bar pro-progress">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;