import React from 'react';
import Sidebar from 'pages/admin/components/Sidebar';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import 'pages/admin/styles/AdminCourses.css';

const CourseTable = () => {
  const courses = [
    { name: 'Basic Python', enrolled: 200, sections: 10 },
    { name: 'Advanced JavaScript', enrolled: 105, sections: 8 }
  ];

  return (
    <div className="course-page">
      <Sidebar />

      <div className="course-content">
        <div className="header">
          <h2>All Courses</h2>
          <button className="add-course-button">Add Course</button>
        </div>
        
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Number of Students Enrolled</th>
              <th>Sections</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.enrolled}</td>
                <td>
                  <FaEdit className="icon edit-icon" title="Edit Sections" />
                </td>
                <td>
                  <FaEdit className="icon edit-icon" title="Edit Course" />
                  <FaTrash className="icon delete-icon" title="Delete Course" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
