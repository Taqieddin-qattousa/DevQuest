import React from 'react';
import 'styles/CourseDetailPage.css';
import Navbar from 'components/Navbar';
import CourseDetail from 'components/CourseDetail'; // Import the new component

const CourseDetailPage = () => {
  return (
    <div className="course-detail-page">
      <Navbar />
      <CourseDetail /> {/* Use the new component here */}
    </div>
  );
};

export default CourseDetailPage;
