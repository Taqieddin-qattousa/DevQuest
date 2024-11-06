import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/user/HomePage';
import CoursesPage from 'pages/user/CoursesPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
