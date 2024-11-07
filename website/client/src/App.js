import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import CoursesPage from './pages/user/CoursesPage';
import CourseDetailPage from './pages/user/CourseDetailPage';
import FAQPage from './pages/user/FAQPage';  
import PricingPage from './pages/user/PricingPage';
import RegistrationPage from './pages/user/RegistrationPage';
import './App.css';
function App() {
 
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/python" element={<CourseDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
