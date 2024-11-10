import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/user/HomePage';
import CoursesPage from 'pages/user/CoursesPage';
import CourseSection from 'pages/user/CourseSection'
import EnrollmentPage from 'pages/user/EnrollmentPage';
import FAQPage from 'pages/user/FAQPage';
import PricingPage from 'pages/user/PricingPage';
import RegistrationPage from 'pages/user/RegistrationPage';
import LoginPage from 'pages/user/LoginPage';
import ForgotPasswordPage from 'pages/user/ForgotPasswordPage';
import Dashboard from 'pages/admin/Dashboard';
import Profile from 'pages/user/Profile';
import ChangePassword from 'pages/user/ChangePassword';
import Billing from 'pages/user/Billing';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route path="/CourseSection/:courseId" element={<CourseSection />} />
        <Route path="/enroll/:courseId" element={<EnrollmentPage />} /> {/* Enrollment page route */}
    
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/Billing" element={<Billing />} />

      </Routes>
    </Router>
  );
}

export default App;
