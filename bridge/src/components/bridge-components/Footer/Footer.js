import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const currentYear = new Date().getFullYear();
  const isScrollTopVisible = useScrollToTop();

  const studentLinks = [
    { name: 'Find Internships', icon: 'fas fa-search' },
    { name: 'Career Guidance', icon: 'fas fa-compass' },
    { name: 'Skill Development', icon: 'fas fa-graduation-cap' },
    { name: 'Resume Builder', icon: 'fas fa-file-alt' },
    { name: 'Mock Interviews', icon: 'fas fa-comments' }
  ];

  const employerLinks = [
    { name: 'Post Opportunities', icon: 'fas fa-bullhorn' },
    { name: 'Candidate Search', icon: 'fas fa-search' },
    { name: 'Campus Recruitment', icon: 'fas fa-university' },
    { name: 'Employer Branding', icon: 'fas fa-chart-line' },
    { name: 'Analytics Dashboard', icon: 'fas fa-chart-pie' }
  ];

  const supportLinks = [
    { name: 'Help Center', icon: 'fas fa-question-circle' },
    { name: 'Contact Us', icon: 'fas fa-envelope' },
    { name: 'Privacy Policy', icon: 'fas fa-shield-alt' },
    { name: 'Terms of Service', icon: 'fas fa-file-contract' },
    { name: 'FAQs', icon: 'fas fa-info-circle' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#', color: '#0077B5' },
    { name: 'GitHub', icon: 'fab fa-github', url: '#', color: '#333333' },
    { name: 'Coursera', icon: 'fas fa-graduation-cap', url: '#', color: '#0056D3' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: '#', color: '#FF0000' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', color: '#1DA1F2' }
  ];

  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="footer section-gradient">
      {/* Animated Background Elements */}
      <div className="footer-background">
        <div className="footer-orb orb-1"></div>
        <div className="footer-orb orb-2"></div>
      </div>

      <div ref={ref} className={`footer-content ${isVisible ? 'visible' : ''}`}>
        {/* Company Info Column */}
        <div className="footer-column scroll-fade-in">
          <div className="footer-logo glass-neon">
            <i className="fas fa-rocket"></i>
            <div className="footer-logo-content">
              <span className="gradient-text">BriDGe</span>
              <span className="footer-tagline">Bridge the gap; Build the future!</span>
            </div>
          </div>
          <p className="footer-description">
            Transforming career development through AI-powered insights and personalized recommendations. 
            Bridging the gap between talent and opportunity.
          </p>
          
          <div className="newsletter-form glass">
            <h4>Stay Updated</h4>
            <p>Get the latest opportunities and insights</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" className="glass" />
              <button className="btn btn-primary glass-neon">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`social-link glass magnetic-hover ${
                  hoveredSocial === index ? 'active' : ''
                }`}
                style={{
                  '--social-color': social.color,
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label={social.name}
              >
                <i className={social.icon}></i>
                <span className="social-tooltip">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* For Students Column */}
        <div className="footer-column scroll-fade-in" style={{ transitionDelay: '0.1s' }}>
          <h3 className="gradient-text">
            <i className="fas fa-user-graduate"></i>
            For Students
          </h3>
          <ul className="footer-links">
            {studentLinks.map((link, index) => (
              <li key={index}>
                <a href="#students" className="footer-link glass magnetic-hover">
                  <i className={link.icon}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Employers Column */}
        <div className="footer-column scroll-fade-in" style={{ transitionDelay: '0.2s' }}>
          <h3 className="gradient-text">
            <i className="fas fa-briefcase"></i>
            For Employers
          </h3>
          <ul className="footer-links">
            {employerLinks.map((link, index) => (
              <li key={index}>
                <a href="#employers" className="footer-link glass magnetic-hover">
                  <i className={link.icon}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column scroll-fade-in" style={{ transitionDelay: '0.3s' }}>
          <h3 className="gradient-text">
            <i className="fas fa-headset"></i>
            Support
          </h3>
          <ul className="footer-links">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a href="#support" className="footer-link glass magnetic-hover">
                  <i className={link.icon}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="contact-info glass">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>support@bridge.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom glass-frosted">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; {currentYear} BriDGe. All rights reserved.</p>
          </div>
          
          <div className="footer-extra-links">
            <a href="/privacy" className="extra-link glass magnetic-hover">Privacy Policy</a>
            <a href="/terms" className="extra-link glass magnetic-hover">Terms of Service</a>
            <a href="/cookie-policy" className="extra-link glass magnetic-hover">Cookie Policy</a>
            <a href="/sitemap.xml" className="extra-link glass magnetic-hover">Sitemap</a>
          </div>

          <div className="footer-badges">
            <div className="badge glass-neon">
              <i className="fas fa-shield-alt"></i>
              <span>Secure</span>
            </div>
            <div className="badge glass-neon">
              <i className="fas fa-bolt"></i>
              <span>Fast</span>
            </div>
            <div className="badge glass-neon">
              <i className="fas fa-mobile-alt"></i>
              <span>Mobile</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className={`scroll-to-top btn-glass glass-neon ${isScrollTopVisible ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;