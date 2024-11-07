import React from 'react';
import 'styles/CourseCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, level, rating, students, description }) => {
  const navigate = useNavigate();
  return (
    <div className="course-card"
    onClick={() => navigate('/courses/python')}>
      <div className="course-icon">{/* Add an icon or image here */}</div>
      <h3>{title}</h3>
      <div className="course-rating">⭐ {rating}</div>
      <div className="course-level">Level: {level}</div>
      <p>{description}</p>
      <div className="course-students">{students} students</div>
      <button className="enroll-button">Enroll now</button>
    </div>
  );
};

export default CourseCard;
