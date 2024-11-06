// /src/components/Navbar.js
import React from 'react';
import 'styles/Navbar.css';
import Logo from 'assets/icons/logo.svg';

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="pages/user/HomePage.js">
          <img src={Logo} alt="DevQuest Logo" className="navbar-logo-image" />
          
        </a>
        <ul className="navbar-links navbar-left-links">
          <li className="navbar-item">
            <a className="navbar-link" href="HomePage.js">Home</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="pages/user/CoursesPage.js">Courses</a>
          </li>
        </ul>
        <input type="search" className="navbar-search" placeholder="Search..." />
        <ul className="navbar-links navbar-right-links">
          <li className="navbar-item">
            <a className="navbar-link" href="#.">Pricing</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#.">Log in</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#.">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
