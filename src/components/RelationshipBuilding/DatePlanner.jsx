import React, { useState } from 'react';

/**
 * Date Planner component
 * Helps couples plan and schedule dates
 */
const DatePlanner = () => {
  const [dates, setDates] = useState([
    { 
      id: 1, 
      title: 'Romantic Dinner', 
      date: '2023-07-15', 
      time: '19:00', 
      location: 'Olive Garden Restaurant',
      description: 'Anniversary dinner celebration',
      budget: 3000,
      category: 'romantic'
    },
    { 
      id: 2, 
      title: 'Movie Night', 
      date: '2023-07-22', 
      time: '18:30', 
      location: 'PVR Cinemas',
      description: 'Watch the new action movie',
      budget: 1500,
      category: 'entertainment'
    },
    { 
      id: 3, 
      title: 'Financial Planning Session', 
      date: '2023-07-25', 
      time: '10:00', 
      location: 'Home',
      description: 'Review our investment portfolio and set new goals',
      budget: 0,
      category: 'productive'
    }
  ]);
  
  const [newDate, setNewDate] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    budget: '',
    category: 'romantic'
  });
  
  // Date ideas by category for inspiration
  const dateIdeas = {
    romantic: [
      'Sunset picnic in the park',
      'Couples massage',
      'Wine tasting tour',
      'Cooking class together',
      'Stargazing night'
    ],
    adventure: [
      'Hiking trip',
      'Rock climbing',
      'Road trip to a new city',
      'Kayaking or canoeing',
      'Ziplining adventure'
    ],
    entertainment: [
      'Concert or live music show',
      'Comedy club night',
      'Theater performance',
      'Art gallery visit',
      'Museum exploration'
    ],
    productive: [
      'Joint workout session',
      'Financial planning meeting',
      'DIY home project',
      'Skill learning workshop',
      'Future planning discussion'
    ],
    budget: [
      'Home movie marathon',
      'Cook a fancy meal at home',
      'Local park exploration',
      'Free community events',
      'Library date'
    ]
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDate(prev => ({
      ...prev,
      [name]: name === 'budget' ? Number(value) : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dateToAdd = {
      id: dates.length + 1,
      ...newDate
    };
    
    setDates([...dates, dateToAdd]);
    
    // Reset form
    setNewDate({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      budget: '',
      category: 'romantic'
    });
  };
  
  const handleRandomIdea = () => {
    const selectedCategory = newDate.category;
    const ideasForCategory = dateIdeas[selectedCategory];
    const randomIdea = ideasForCategory[Math.floor(Math.random() * ideasForCategory.length)];
    
    setNewDate(prev => ({
      ...prev,
      title: randomIdea
    }));
  };
  
  // Get color for category badge
  const getCategoryColor = (category) => {
    switch(category) {
      case 'romantic':
        return 'var(--color-accent)';
      case 'adventure':
        return '#ff9800';
      case 'entertainment':
        return '#9c27b0';
      case 'productive':
        return 'var(--color-secondary)';
      case 'budget':
        return 'var(--color-primary)';
      default:
        return 'var(--color-accent)';
    }
  };
  
  return (
    <div className="date-planner-container">
      <h2>Date Planner</h2>
      <p>Plan special moments together to strengthen your relationship</p>
      
      <div className="dates-list">
        {dates.map(date => (
          <div key={date.id} className="date-card">
            <div className="date-header">
              <h3>{date.title}</h3>
              <span 
                className="category-badge" 
                style={{ backgroundColor: getCategoryColor(date.category) }}
              >
                {date.category}
              </span>
            </div>
            
            <div className="date-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span>{date.date} at {date.time}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{date.location}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">💰</span>
                <span>₹{date.budget.toLocaleString()}</span>
              </div>
              
              <div className="detail-item description">
                <span className="detail-icon">📝</span>
                <span>{date.description}</span>
              </div>
            </div>
            
            <div className="date-actions">
              <button className="btn btn-outline">Edit</button>
              <button className="btn btn-outline">Add to Calendar</button>
              <button className="btn btn-outline">Send Reminder</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="add-date-section">
        <h3>Plan Your Next Date</h3>
        <div className="idea-generator">
          <p>Need inspiration? Generate a random date idea based on your selected category!</p>
          <button onClick={handleRandomIdea} className="btn btn-secondary">Generate Random Idea</button>
        </div>
        
        <form onSubmit={handleSubmit} className="add-date-form">
          <div className="form-group">
            <label htmlFor="category">Date Category</label>
            <select
              id="category"
              name="category"
              value={newDate.category}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="romantic">Romantic</option>
              <option value="adventure">Adventure</option>
              <option value="entertainment">Entertainment</option>
              <option value="productive">Productive</option>
              <option value="budget">Budget-Friendly</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="title">Date Title/Activity</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newDate.title}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="e.g., Dinner and Movie"
            />
          </div>
          
          <div className="date-time-group">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={newDate.date}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={newDate.time}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newDate.location}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="e.g., Central Park"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="budget">Budget (₹)</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={newDate.budget}
              onChange={handleInputChange}
              required
              min="0"
              className="form-control"
              placeholder="e.g., 2000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description/Notes</label>
            <textarea
              id="description"
              name="description"
              value={newDate.description}
              onChange={handleInputChange}
              className="form-control"
              rows="3"
              placeholder="Add details about your planned date..."
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Add to Date Planner</button>
        </form>
      </div>
    </div>
  );
};

export default DatePlanner; 