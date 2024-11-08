import React, { useState } from 'react';
import 'styles/AuthPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Log in</h1>
        <p>Don't have an account? <a href="/RegistrationPage">Sign up</a></p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <div className="captcha">
            <input type="checkbox" required /> I'm not a robot
          </div>
          <button type="submit" className="button">Log in</button>
        </form>
        <p><a href="/ForgotPasswordPage">Forgot your password?</a></p>
      </div>
      <div className="welcome-container">
        <h2>Welcome Back!</h2>
        <p>Log in to continue your programming journey with us. We’re here to support your learning every step of the way. Let’s keep coding together!</p>
      </div>
    </div>
  );
};

export default LoginPage;
