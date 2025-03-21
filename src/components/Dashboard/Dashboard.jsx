import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const userData = {
    name: 'Rahul Singh',
    partner: 'Priya Sharma',
    joinDate: 'January 15, 2023',
    profileCompletion: 85,
    upcomingDates: [
      { id: 1, title: 'Movie Night', date: '2023-07-22', time: '18:30' },
      { id: 2, title: 'Financial Planning Session', date: '2023-07-25', time: '10:00' }
    ],
    financialGoals: [
      { id: 1, title: 'Buy a House', amount: 5000000, saved: 1500000, completion: 30 },
      { id: 2, title: 'Emergency Fund', amount: 500000, saved: 250000, completion: 50 }
    ],
    relationshipMilestones: [
      { id: 1, title: 'Anniversary', date: '2023-08-15', daysRemaining: 25 },
      { id: 2, title: 'Birthday - Priya', date: '2023-09-05', daysRemaining: 46 }
    ],
    messages: [
      { id: 1, sender: 'System', content: 'Welcome to PartnerPayz!', time: '2023-07-01 10:30' },
      { id: 2, sender: 'Priya', content: 'Let\'s discuss our budget tonight!', time: '2023-07-20 09:15' }
    ]
  };
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="container">
          <h1>Welcome, {userData.name}</h1>
          <p>Partner: {userData.partner} | Member since: {userData.joinDate}</p>
        </div>
      </div>
      
      <div className="dashboard-tabs">
        <div className="container">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'financial' ? 'active' : ''}`}
            onClick={() => setActiveTab('financial')}
          >
            Financial Goals
          </button>
          <button 
            className={`tab-button ${activeTab === 'relationship' ? 'active' : ''}`}
            onClick={() => setActiveTab('relationship')}
          >
            Relationship
          </button>
          <button 
            className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button 
            className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="dashboard-overview">
              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <h3>Profile Completion</h3>
                  <div className="completion-bar">
                    <div 
                      className="completion-progress" 
                      style={{ width: `${userData.profileCompletion}%` }}
                    ></div>
                  </div>
                  <p>{userData.profileCompletion}% Complete</p>
                  <Link to="/profile" className="btn btn-outline">Complete Profile</Link>
                </div>
                
                <div className="dashboard-card">
                  <h3>Upcoming Dates</h3>
                  {userData.upcomingDates.length > 0 ? (
                    <ul className="dates-list">
                      {userData.upcomingDates.map(date => (
                        <li key={date.id}>
                          <span className="date-title">{date.title}</span>
                          <span className="date-time">{date.date} at {date.time}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No upcoming dates</p>
                  )}
                  <Link to="/date-planner" className="btn btn-outline">Plan a Date</Link>
                </div>
                
                <div className="dashboard-card">
                  <h3>Financial Goals</h3>
                  {userData.financialGoals.length > 0 ? (
                    <ul className="goals-list">
                      {userData.financialGoals.map(goal => (
                        <li key={goal.id}>
                          <span className="goal-title">{goal.title}</span>
                          <div className="goal-progress">
                            <div 
                              className="progress-bar" 
                              style={{ width: `${goal.completion}%` }}
                            ></div>
                          </div>
                          <span className="goal-amount">
                            ₹{goal.saved.toLocaleString()} of ₹{goal.amount.toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No financial goals set</p>
                  )}
                  <Link to="/financial-goals" className="btn btn-outline">Manage Goals</Link>
                </div>
                
                <div className="dashboard-card">
                  <h3>Relationship Milestones</h3>
                  {userData.relationshipMilestones.length > 0 ? (
                    <ul className="milestones-list">
                      {userData.relationshipMilestones.map(milestone => (
                        <li key={milestone.id}>
                          <span className="milestone-title">{milestone.title}</span>
                          <span className="milestone-date">{milestone.date}</span>
                          <span className="days-remaining">{milestone.daysRemaining} days remaining</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No upcoming milestones</p>
                  )}
                  <Link to="/milestones" className="btn btn-outline">Add Milestone</Link>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'financial' && (
            <div className="financial-dashboard">
              <h2>Financial Goals</h2>
              <p>Manage your financial goals and track your progress</p>
              <Link to="/financial-goals" className="btn btn-primary">Go to Financial Planning</Link>
            </div>
          )}
          
          {activeTab === 'relationship' && (
            <div className="relationship-dashboard">
              <h2>Relationship Tools</h2>
              <p>Plan dates, celebrate milestones, and strengthen your bond</p>
              <Link to="/date-planner" className="btn btn-primary">Go to Date Planner</Link>
            </div>
          )}
          
          {activeTab === 'messages' && (
            <div className="messages-dashboard">
              <h2>Messages</h2>
              <div className="messages-list">
                {userData.messages.map(message => (
                  <div key={message.id} className="message-item">
                    <div className="message-header">
                      <span className="message-sender">{message.sender}</span>
                      <span className="message-time">{message.time}</span>
                    </div>
                    <div className="message-content">{message.content}</div>
                  </div>
                ))}
              </div>
              <div className="message-compose">
                <textarea placeholder="Type a message..."></textarea>
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="settings-dashboard">
              <h2>Account Settings</h2>
              <p>Manage your profile, preferences, and subscription</p>
              <div className="settings-options">
                <Link to="/settings/profile" className="btn btn-outline">Edit Profile</Link>
                <Link to="/settings/notifications" className="btn btn-outline">Notification Settings</Link>
                <Link to="/settings/subscription" className="btn btn-outline">Manage Subscription</Link>
                <Link to="/settings/privacy" className="btn btn-outline">Privacy Settings</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 