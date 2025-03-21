import React, { useState } from 'react';

/**
 * User profile form component for partner matching
 * Collects user information for the matching algorithm
 */
const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    interests: [],
    financialGoals: [],
    relationshipGoals: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMultiSelect = (e, category) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prevState => ({
      ...prevState,
      [category]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would call the API to process the profile data
    console.log('Profile data submitted:', formData);
    // In future: axios.post('/api/profile', formData)
  };

  return (
    <div className="profile-form-container">
      <h2>Create Your Profile</h2>
      <p>Let's find your perfect match based on compatibility, values, and financial goals.</p>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="35"
            value={formData.age}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="interests">Interests (Hold Ctrl to select multiple)</label>
          <select
            id="interests"
            name="interests"
            multiple
            onChange={(e) => handleMultiSelect(e, 'interests')}
            className="form-control"
          >
            <option value="travel">Travel</option>
            <option value="cooking">Cooking</option>
            <option value="fitness">Fitness</option>
            <option value="reading">Reading</option>
            <option value="movies">Movies</option>
            <option value="music">Music</option>
            <option value="arts">Arts</option>
            <option value="technology">Technology</option>
            <option value="investing">Investing</option>
            <option value="entrepreneurship">Entrepreneurship</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="financialGoals">Financial Goals (Hold Ctrl to select multiple)</label>
          <select
            id="financialGoals"
            name="financialGoals"
            multiple
            onChange={(e) => handleMultiSelect(e, 'financialGoals')}
            className="form-control"
          >
            <option value="buying-home">Buying a Home</option>
            <option value="retirement">Early Retirement</option>
            <option value="debt-free">Becoming Debt Free</option>
            <option value="travel-world">Travel the World</option>
            <option value="education">Higher Education</option>
            <option value="starting-business">Starting a Business</option>
            <option value="investing">Building Investment Portfolio</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="relationshipGoals">Relationship Goals (Hold Ctrl to select multiple)</label>
          <select
            id="relationshipGoals"
            name="relationshipGoals"
            multiple
            onChange={(e) => handleMultiSelect(e, 'relationshipGoals')}
            className="form-control"
          >
            <option value="marriage">Marriage</option>
            <option value="children">Having Children</option>
            <option value="travel-together">Traveling Together</option>
            <option value="building-wealth">Building Wealth Together</option>
            <option value="personal-growth">Personal Growth</option>
            <option value="spiritual-connection">Spiritual Connection</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm; 