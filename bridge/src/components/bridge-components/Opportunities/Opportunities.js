import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// Backend removed - using static data only
import './Opportunities.css';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const fetchOpportunities = () => {
      // Backend removed - using static data only
      console.log('📊 Using static opportunities data');
      setLoading(true);
      
      // Simulate loading delay
      setTimeout(() => {
        setOpportunities(staticOpportunities);
        setLoading(false);
        console.log('✅ Static opportunities loaded:', staticOpportunities.length);
      }, 500);
    };

    fetchOpportunities();
  }, []);

  // Static opportunities data
  const staticOpportunities = [
    {
      company: 'TechMahindra',
      industry: 'Software Development',
      logo: 'TM',
      type: 'internship',
      title: 'Frontend Developer Intern',
      location: 'Pune, Maharashtra',
      salary: '₹25k/mo',
      skills: ['React', 'JavaScript', 'CSS'],
      deadline: 'Jun 30, 2024',
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
      deadline: 'Jul 15, 2024',
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
      deadline: 'Jun 25, 2024',
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
      deadline: 'Aug 10, 2024',
      urgent: false,
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
      deadline: 'Jul 05, 2024',
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
      deadline: 'Jul 20, 2024',
      urgent: false,
      featured: false,
      gradient: 'linear-gradient(135deg, #ff6b6b, #feca57)'
    },
    {
      company: 'Ola Electric',
      industry: 'Electric Vehicles',
      logo: 'OE',
      type: 'internship',
      title: 'Sustainability Research Intern',
      location: 'Bangalore, Karnataka',
      salary: '₹30k/mo',
      skills: ['Research', 'Sustainability', 'Data Analysis'],
      deadline: 'Aug 01, 2024',
      urgent: false,
      featured: false,
      gradient: 'linear-gradient(135deg, #48cae4, #06ffa5)'
    }
  ];

  // Filter opportunities based on search and filters
  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'all' || opp.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || opp.location.includes(selectedLocation);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const handleApply = (opportunityId) => {
    console.log('Apply clicked for opportunity:', opportunityId);
    // Mock application (backend removed)
    alert('Application submitted successfully! (Mock - Backend removed)');
  };

  if (loading) {
    return (
      <section className="opportunities-section">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading opportunities...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="opportunities-section">
        <div className="container">
          <div className="error-message">
            <h3>Unable to load opportunities</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="opportunities-section" id="opportunities">
      <div className="container">
        <div className={`opportunities-header ${isVisible ? 'animate-in' : ''}`} ref={ref}>
          <h2>Latest Opportunities</h2>
          <p>Discover internships and jobs tailored for BPUT students</p>
        </div>

        {/* Search and Filters */}
        <div className="opportunities-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-group">
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="internship">Internships</option>
              <option value="job">Jobs</option>
            </select>
            
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="opportunities-grid">
          {filteredOpportunities.map((opportunity, index) => (
            <div 
              key={opportunity.id || index} 
              className={`opportunity-card ${opportunity.featured ? 'featured' : ''} ${opportunity.urgent ? 'urgent' : ''}`}
            >
              {opportunity.featured && <div className="featured-badge">Featured</div>}
              {opportunity.urgent && <div className="urgent-badge">Urgent</div>}
              
              <div className="card-header">
                <div 
                  className="company-logo"
                  style={{ background: opportunity.gradient }}
                >
                  {opportunity.logo}
                </div>
                <div className="company-info">
                  <h3>{opportunity.company}</h3>
                  <p>{opportunity.industry}</p>
                </div>
                <div className="opportunity-type">
                  <span className={`type-badge ${opportunity.type}`}>
                    {opportunity.type}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <h4>{opportunity.title}</h4>
                <div className="opportunity-details">
                  <div className="detail-item">
                    <span className="icon">📍</span>
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">💰</span>
                    <span>{opportunity.salary}</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">⏰</span>
                    <span>Deadline: {opportunity.deadline}</span>
                  </div>
                </div>

                <div className="skills-list">
                  {opportunity.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                  {opportunity.skills.length > 3 && (
                    <span className="skill-tag more">+{opportunity.skills.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="card-footer">
                <button 
                  className="apply-btn"
                  onClick={() => handleApply(opportunity.id || index)}
                >
                  Apply Now
                </button>
                <button className="save-btn">
                  ♡ Save
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="no-results">
            <h3>No opportunities found</h3>
            <p>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Opportunities;