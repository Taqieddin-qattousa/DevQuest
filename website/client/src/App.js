import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/user/HomePage';
import CoursesPage from 'pages/user/CoursesPage';
import CourseSection from 'pages/user/CourseSection'
import EnrollmentPage from 'pages/user/EnrollmentPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route path="/CourseSection/:courseId" element={<CourseSection />} />
        <Route path="/enroll/:courseId" element={<EnrollmentPage />} /> {/* Enrollment page route */}

      </Routes>
    </Router>
  );
}

export default App;
