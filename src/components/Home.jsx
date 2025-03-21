import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to PartnerPayz</h1>
            <h2>Build Your Future Together</h2>
            <p className="hero-description">
              The ultimate platform for young couples to build meaningful relationships and achieve financial freedom together.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
              <Link to="/how-it-works" className="btn btn-secondary">How It Works</Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder for hero image */}
            <div className="image-placeholder">
              <span role="img" aria-label="Couple planning together">👫💰</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose PartnerPayz?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💘</div>
              <h3>Partner Finding</h3>
              <p>Find your ideal match based on compatibility, values, and financial goals.</p>
              <Link to="/profile" className="feature-link">Start Matching</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Financial Planning</h3>
              <p>Set goals, track investments, and build a secure future together.</p>
              <Link to="/financial-goals" className="feature-link">Set Goals</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Relationship Building</h3>
              <p>Plan dates, celebrate milestones, and strengthen your bond.</p>
              <Link to="/date-planner" className="feature-link">Plan Dates</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Community</h3>
              <p>Connect with like-minded couples and share your journey.</p>
              <Link to="/community" className="feature-link">Join Community</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How PartnerPayz Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Tell us about yourself, your interests, and your financial goals.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Find Your Match</h3>
              <p>Our algorithm will help you find compatible partners with shared values.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Plan Your Future</h3>
              <p>Set financial goals together and track your progress.</p>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Strengthen Your Bond</h3>
              <p>Use our relationship tools to build a lasting connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"PartnerPayz helped us align our financial goals and strengthen our relationship. We're now saving for our dream home!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {/* Placeholder avatar */}
                  <div className="avatar-placeholder"></div>
                </div>
                <div className="author-info">
                  <h4>Priya & Rahul</h4>
                  <p>Together for 2 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="pricing-preview">
        <div className="container">
          <h2 className="section-title">Flexible Plans for Every Couple</h2>
          <p className="section-description">
            Choose the plan that fits your relationship goals and financial needs.
          </p>
          <div className="pricing-cta">
            <Link to="/pricing" className="btn btn-primary">View Pricing Plans</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Future Together?</h2>
            <p>Join thousands of couples on their journey to financial freedom and stronger relationships.</p>
            <Link to="/signup" className="btn btn-accent">Sign Up Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 