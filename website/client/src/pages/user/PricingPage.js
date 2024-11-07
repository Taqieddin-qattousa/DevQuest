// PricingPage.js

import React from 'react';
import './PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">DevQuest</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#pricing">Pricing</a>
          <a href="#login">Log in</a>
          <a href="#signup">Sign up</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1>Select the best plan that suits you</h1>
        <p>Unlock the full potential of DevQuest</p>

        {/* Monthly/Yearly Toggle */}
        <div className="toggle">
          <button className="toggle-option">Monthly</button>
          <button className="toggle-option">Yearly</button>
        </div>

        {/* Pricing Card */}
        <div className="pricing-card">
          <h2>$20</h2>
          <p>per month</p>
          <h3>Access to <span>everything</span></h3>
          <p>All Courses available</p>
          <button className="choose-plan">Choose Plan</button>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
