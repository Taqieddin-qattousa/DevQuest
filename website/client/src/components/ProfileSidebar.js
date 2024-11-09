import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/ProfileSidebar.css';

function Sidebar({ activeLink }) {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/profile" className="link">
          <li className={activeLink === 'profile' ? 'active' : ''}>Profile</li>
        </Link>
        <Link to="/changepassword" className="link">
          <li className={activeLink === 'login' ? 'active' : ''}>Login</li>
        </Link>
        <Link to="/billing" className="link">
          <li className={activeLink === 'billing' ? 'active' : ''}>Billing</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
