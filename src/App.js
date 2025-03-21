import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import components
import HomePage from './components/HomePage';
import ProfileForm from './components/PartnerFinding/ProfileForm';
import GoalSetting from './components/FinancialPlanning/GoalSetting';
import DatePlanner from './components/RelationshipBuilding/DatePlanner';
import PricingPlans from './components/Subscription/PricingPlans';

// GitHub Pages Fix - get the basename from package.json homepage
const getBasename = () => {
  const { homepage } = require('../package.json');
  if (!homepage) return '/';
  // Get the last part of the URL
  return new URL(homepage).pathname;
};

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">PartnerPayz</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/partner-finding">Partner Finding</Link></li>
          <li><Link to="/financial-planning">Financial Planning</Link></li>
          <li><Link to="/relationship-building">Relationship Building</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Simple HomePage component
const App = () => {
  return (
    <Router basename={getBasename()}>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partner-finding" element={<ProfileForm />} />
            <Route path="/financial-planning" element={<GoalSetting />} />
            <Route path="/relationship-building" element={<DatePlanner />} />
            <Route path="/pricing" element={<PricingPlans />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>© 2023 PartnerPayz. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 