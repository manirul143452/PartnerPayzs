import React, { useState } from 'react';

/**
 * Pricing Plans component
 * Displays subscription options for users
 */
const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      id: 'free',
      name: 'Free Tier',
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        'Basic matching algorithm',
        'Limited financial goal setting',
        '5 date ideas per month',
        'Basic community access',
        'Email support'
      ],
      disabled: [
        'Advanced partner matching',
        'Investment tracking',
        'Unlimited date ideas',
        'Conflict resolution tools',
        'Priority support'
      ],
      buttonText: 'Start Free',
      color: 'var(--color-primary)'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: {
        monthly: 799,
        yearly: 7990
      },
      features: [
        'Advanced matching algorithm',
        'Complete financial planning tools',
        'Unlimited date ideas',
        'Full community access',
        'Relationship analytics',
        'Priority email support',
        'No advertisements'
      ],
      popular: true,
      buttonText: 'Go Premium',
      color: 'var(--color-secondary)'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: {
        monthly: 1999,
        yearly: 19990
      },
      features: [
        'Everything in Premium',
        'Custom integrations',
        'Dedicated relationship coach',
        'Financial advisor access',
        'Personalized investment advice',
        'Premium conflict resolution tools',
        '24/7 priority support'
      ],
      buttonText: 'Contact Sales',
      color: 'var(--color-accent)'
    }
  ];
  
  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };
  
  const getDiscountPercent = (plan) => {
    if (billingCycle === 'yearly' && plan.price.yearly > 0) {
      const monthlyTotal = plan.price.monthly * 12;
      const yearlyTotal = plan.price.yearly;
      const savings = monthlyTotal - yearlyTotal;
      return Math.round((savings / monthlyTotal) * 100);
    }
    return 0;
  };
  
  return (
    <div className="pricing-plans-container">
      <div className="pricing-header">
        <h2>Choose Your Perfect Plan</h2>
        <p>Select the plan that fits your relationship goals</p>
        
        <div className="billing-toggle">
          <span className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
          <div 
            className="toggle-switch" 
            onClick={toggleBillingCycle}
          >
            <div className={`toggle-knob ${billingCycle === 'yearly' ? 'yearly' : ''}`}></div>
          </div>
          <span className={`toggle-option ${billingCycle === 'yearly' ? 'active' : ''}`}>
            Yearly
            <span className="yearly-discount">Save up to 20%</span>
          </span>
        </div>
      </div>
      
      <div className="pricing-cards">
        {plans.map(plan => {
          const discount = getDiscountPercent(plan);
          return (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-tag">Most Popular</div>
              )}
              
              <div className="plan-header" style={{ backgroundColor: plan.color }}>
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price[billingCycle].toLocaleString()}</span>
                  {plan.price[billingCycle] > 0 && (
                    <span className="billing-cycle">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="discount-tag">Save {discount}%</div>
                )}
              </div>
              
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-included">
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {plan.disabled && plan.disabled.map((feature, index) => (
                    <li key={`disabled-${index}`} className="feature-disabled">
                      <span className="feature-icon">✗</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="plan-footer">
                <button 
                  className="btn"
                  style={{ 
                    backgroundColor: plan.color,
                    color: '#fff'
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="pricing-faq">
        <h3>Frequently Asked Questions</h3>
        
        <div className="faq-item">
          <h4>Can I switch plans later?</h4>
          <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
        </div>
        
        <div className="faq-item">
          <h4>Is there a refund policy?</h4>
          <p>We offer a 14-day money-back guarantee if you're not satisfied with our premium services.</p>
        </div>
        
        <div className="faq-item">
          <h4>What payment methods do you accept?</h4>
          <p>We accept all major credit cards, UPI, and net banking options.</p>
        </div>
        
        <div className="faq-item">
          <h4>Can I share my account with my partner?</h4>
          <p>Yes! One subscription covers both partners. You'll be able to link your accounts and share a dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 