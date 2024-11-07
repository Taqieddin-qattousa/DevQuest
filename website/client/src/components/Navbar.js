// /src/components/Navbar.js
import React from 'react';
import 'styles/Navbar.css';
import Logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={Logo} alt="DevQuest Logo" className="navbar-logo-image" />
        </Link>
        <ul className="navbar-links navbar-left-links">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/courses">Courses</Link>
          </li>
        </ul>
        <input type="search" className="navbar-search" placeholder="Search..." />
        <ul className="navbar-links navbar-right-links">
          <li className="navbar-item">
            
            <Link className="navbar-link" to="/pricing">pricing </Link>
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
