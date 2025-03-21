import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>PartnerPayz - Build Your Future Together</h1>
          <p className="hero-subtitle">
            The ultimate platform for young couples seeking meaningful relationships and financial success.
          </p>
          <div className="cta-buttons">
            <Link to="/partner-finding" className="btn btn-primary">Find Partner</Link>
            <Link to="/pricing" className="btn btn-secondary">View Plans</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Our Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Partner Finding</h3>
              <p>Find your ideal partner based on compatibility, values, and financial goals.</p>
              <Link to="/partner-finding" className="feature-link">Learn More</Link>
            </div>
            <div className="feature-card">
              <h3>Financial Planning</h3>
              <p>Set goals, track investments, and build a secure future together.</p>
              <Link to="/financial-planning" className="feature-link">Learn More</Link>
            </div>
            <div className="feature-card">
              <h3>Relationship Building</h3>
              <p>Plan dates, celebrate milestones, and strengthen your bond.</p>
              <Link to="/relationship-building" className="feature-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="quote">"PartnerPayz helped us align our financial goals and strengthen our relationship. We're now saving for our dream home!"</p>
              <p className="author">- Rahul & Priya, Delhi</p>
            </div>
            <div className="testimonial-card">
              <p className="quote">"The date planner feature has reignited the spark in our relationship. We've never been happier!"</p>
              <p className="author">- Amit & Neha, Mumbai</p>
            </div>
            <div className="testimonial-card">
              <p className="quote">"Thanks to PartnerPayz, we've cleared our debt and are now planning our future together with confidence."</p>
              <p className="author">- Vikram & Meera, Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Your Future Together?</h2>
          <p>Join thousands of couples who are transforming their relationships and financial lives.</p>
          <Link to="/partner-finding" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 