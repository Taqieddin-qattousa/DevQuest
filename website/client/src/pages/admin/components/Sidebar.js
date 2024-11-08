import React, { useState } from 'react';
import {FaMoneyCheckAlt ,FaChalkboardTeacher  ,FaHome , FaUser, FaBook, FaMoneyBill, FaComment, FaCog, FaSignOutAlt } from 'react-icons/fa';
import 'pages/admin/styles/Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li
          className={activeItem === 'Dashboard' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Dashboard')}
        >
          <FaHome  /> <span>Dashboard</span>
        </li>
        <li
          className={activeItem === 'Students' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Students')}
        >
          <FaUser /> <span>Students</span>
        </li>
        <li
          className={activeItem === 'Courses' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Courses')}
        >
          <FaChalkboardTeacher  /> <span>Courses</span>
        </li>

        <li
          className={activeItem === 'Payment' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Payment')}
        >
          <FaMoneyCheckAlt  /> <span>Payment</span>
        </li>

        <li
          className={activeItem === 'Feedback' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Feedback')}
        >
          <FaComment /> <span>Feedback</span>
        </li>

        <li
          className={activeItem === 'Settings' ? 'sidebar-item active' : 'sidebar-item'}
          onClick={() => handleItemClick('Settings')}
        >
          <FaCog /> <span>Settings</span>
        </li>

        {/* Add more items here as needed */}
        <li className="sidebar-item" onClick={() => handleItemClick('Logout')}>
          <FaSignOutAlt /> <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
