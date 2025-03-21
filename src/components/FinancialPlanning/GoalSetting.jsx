import React, { useState } from 'react';

/**
 * Financial goal setting component
 * Allows couples to set and track financial goals
 */
const GoalSetting = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Buy a House', amount: 5000000, saved: 1500000, timeline: 36, priority: 'high' },
    { id: 2, title: 'Emergency Fund', amount: 500000, saved: 250000, timeline: 12, priority: 'medium' },
    { id: 3, title: 'Vacation', amount: 300000, saved: 100000, timeline: 6, priority: 'low' }
  ]);
  
  const [newGoal, setNewGoal] = useState({
    title: '',
    amount: '',
    saved: '',
    timeline: '',
    priority: 'medium'
  });
  
  // Calculate percentage completion for progress bars
  const calculateCompletion = (saved, target) => {
    return (saved / target) * 100;
  };
  
  // Calculate estimated monthly savings needed
  const calculateMonthlySavings = (target, saved, months) => {
    const remaining = target - saved;
    return remaining / months;
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal(prev => ({
      ...prev,
      [name]: name === 'title' ? value : Number(value)
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const goalToAdd = {
      id: goals.length + 1,
      ...newGoal
    };
    
    setGoals([...goals, goalToAdd]);
    
    // Reset form
    setNewGoal({
      title: '',
      amount: '',
      saved: '',
      timeline: '',
      priority: 'medium'
    });
  };
  
  // Priority badge color based on priority level
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high':
        return 'var(--color-accent)';
      case 'medium':
        return 'var(--color-secondary)';
      case 'low':
        return 'var(--color-primary)';
      default:
        return 'var(--color-secondary)';
    }
  };
  
  return (
    <div className="goal-setting-container">
      <h2>Financial Goals</h2>
      <p>Set and track your financial goals together</p>
      
      <div className="goals-list">
        {goals.map(goal => (
          <div key={goal.id} className="goal-card">
            <div className="goal-header">
              <h3>{goal.title}</h3>
              <span 
                className="priority-badge" 
                style={{ backgroundColor: getPriorityColor(goal.priority) }}
              >
                {goal.priority}
              </span>
            </div>
            
            <div className="goal-details">
              <div className="amount-details">
                <span className="label">Target Amount:</span>
                <span className="value">₹{goal.amount.toLocaleString()}</span>
              </div>
              
              <div className="amount-details">
                <span className="label">Saved So Far:</span>
                <span className="value">₹{goal.saved.toLocaleString()}</span>
              </div>
              
              <div className="amount-details">
                <span className="label">Timeline:</span>
                <span className="value">{goal.timeline} months</span>
              </div>
              
              <div className="amount-details">
                <span className="label">Monthly Saving Needed:</span>
                <span className="value">
                  ₹{calculateMonthlySavings(goal.amount, goal.saved, goal.timeline).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
            
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${calculateCompletion(goal.saved, goal.amount)}%` }}
              ></div>
              <span className="progress-text">
                {calculateCompletion(goal.saved, goal.amount).toFixed(1)}% Complete
              </span>
            </div>
            
            <div className="goal-actions">
              <button className="btn btn-outline">Update Progress</button>
              <button className="btn btn-outline">Edit Goal</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="add-goal-section">
        <h3>Add New Goal</h3>
        <form onSubmit={handleSubmit} className="add-goal-form">
          <div className="form-group">
            <label htmlFor="title">Goal Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newGoal.title}
              onChange={handleInputChange}
              required
              className="form-control"
              placeholder="e.g., Buy a Car"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="amount">Target Amount (₹)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={newGoal.amount}
              onChange={handleInputChange}
              required
              min="1000"
              className="form-control"
              placeholder="e.g., 1000000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="saved">Amount Already Saved (₹)</label>
            <input
              type="number"
              id="saved"
              name="saved"
              value={newGoal.saved}
              onChange={handleInputChange}
              required
              min="0"
              className="form-control"
              placeholder="e.g., 200000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="timeline">Timeline (months)</label>
            <input
              type="number"
              id="timeline"
              name="timeline"
              value={newGoal.timeline}
              onChange={handleInputChange}
              required
              min="1"
              max="240"
              className="form-control"
              placeholder="e.g., 24"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={newGoal.priority}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary">Add Goal</button>
        </form>
      </div>
    </div>
  );
};

export default GoalSetting; 