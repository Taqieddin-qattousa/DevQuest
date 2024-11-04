// /src/components/Navbar.js
import React from 'react';
//import 'styles/Navbar.css';
import Logo from 'assets/icons/logo.svg';

const Navbar = () => {
  return (
    <nav
  className="navbar navbar-expand-md bg-body"
  style={{
    width: 1920,
    height: 80,
    background:
      "linear-gradient(0deg, white, #1E3C90 0%, #1E3C90 100%), #1E3C90",
    color: "#ffffff",
    textAlign: "center",
    borderBottom: "1px none #000000"
  }}
>
  <div className="container-fluid">
    <a className="navbar-brand" href="#." style={{ marginRight: 90 }}>
      <img src={Logo} alt='logo'/>
    </a>
    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navcol-1"
    >
      <span className="visually-hidden">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div
      id="navcol-1"
      className="collapse navbar-collapse"
      style={{ marginLeft: 136 }}
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="#."
            style={{
              marginLeft: 19,
              marginRight: 19,
              color: "rgb(255,255,255)"
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#."
            style={{ marginRight: "-4px", color: "rgb(255,255,255)" }}
          >
            Courses
          </a>
        </li>
      </ul>
      <input
        type="search"
        style={{
          width: 400,
          margin: "0px 232px",
          marginRight: 210,
          paddingRight: 14,
          paddingLeft: 8,
          marginLeft: 208,
          height: 54,
          borderStyle: "none",
          borderRadius: 5
        }}
      />
      <ul className="navbar-nav" style={{ marginLeft: 157 }}>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#."
            style={{ marginRight: 19, color: "rgb(255,255,255)" }}
          >
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#."
            style={{ marginRight: 19, color: "rgb(255,255,255)" }}
          >
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#."
            style={{ marginRight: 0, color: "rgb(255,255,255)" }}
          >
            Sign up
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>




  );
};

export default Navbar;
