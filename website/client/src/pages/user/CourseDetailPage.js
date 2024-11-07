import React from 'react';
import 'styles/CourseDetailPage.css';
import Navbar from 'components/Navbar';
import pythonLogo from 'assets/images/python.png'; // Import the image here

const CourseDetailPage = () => {
  return (
    <div className="course-detail-page">
      <Navbar />
      <header className="course-header">
        <div className="course-info">
          <span className="course-tag">introduction to python</span>
          <h1>Master the Language of the Future</h1>
          <p>
            Python is a versatile and powerful programming language, widely used in web development,
            data analysis, machine learning, and more. Dive into the world of Python and unlock
            endless possibilities.
          </p>
          <button className="start-button">Start learning Python</button>
        </div>
        <div className="course-image">
          <img src={pythonLogo} alt="Python logo" /> {/* Use the imported image here */}
        </div>
      </header>
    </div>
  );
};

export default CourseDetailPage;
