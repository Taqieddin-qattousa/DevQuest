import React from 'react';
import 'pages/admin/styles/DashboardContent.css';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="profile">
          <span>John Doe</span>
          <p>Admin</p>
        </div>
      </header>
      
      <div className="stats-cards">
        <div className="card">
          <h3>3280</h3>
          <p>Students</p>
        </div>
        <div className="card">
          <h3>3280</h3>
          <p>New Students in the last week</p>
        </div>
        <div className="card">
          <h3>28</h3>
          <p>Courses</p>
        </div>
      </div>

      <div className="activity-section">
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>New student registered: Ahmed</li>
            <li>Course "JavaScript Basics" published</li>
            <li>Section "Advanced Python" updated</li>
            <li>Lesson "Introduction to C++" deleted</li>
          </ul>
        </div>
        <div className="new-students">
          <h2>New Students</h2>
          <ul>
            <li>Ahmed Ali</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
