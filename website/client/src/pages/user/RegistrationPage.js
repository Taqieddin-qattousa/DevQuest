// RegistrationPage.js

import React from 'react';
import 'styles/RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      {/* Left Column - Registration Form */}
      <div className="registration-form">
        <h2>Create an account</h2>
        <p>Already have an account? <a href="#login">Log in</a></p>
        
        <form>
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          
          <label>
            Email address
            <input type="email" placeholder="Email address" />
          </label>
          
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          
          <label>
            Country
            <select>
              <option value="palestine">Palestine</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </label>

          <p>By creating an account, you agree to our <a href="#terms">Terms of Use</a> and <a href="#privacy">Privacy Policy</a>.</p>

          <div className="captcha-placeholder">[CAPTCHA Placeholder]</div>
          
          <button type="submit" className="create-account-btn">Create account</button>
        </form>
      </div>

      {/* Right Column - Welcome Message */}
      <div className="welcome-message">
        <p>
          Welcome! Create your account to embark on your programming journey with us.
          Whether you're a beginner or looking to sharpen your skills, we're here to help 
          you every step of the way. Let's start coding together!
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
