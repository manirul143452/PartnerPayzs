import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';

// Page components
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileForm from './components/PartnerFinding/ProfileForm';
import GoalSetting from './components/FinancialPlanning/GoalSetting';
import DatePlanner from './components/RelationshipBuilding/DatePlanner';
import PricingPlans from './components/Subscription/PricingPlans';

// CSS
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/financial-goals" element={<GoalSetting />} />
            <Route path="/date-planner" element={<DatePlanner />} />
            <Route path="/pricing" element={<PricingPlans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 