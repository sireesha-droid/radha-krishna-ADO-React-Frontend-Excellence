import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          SSP <span>Excellence</span>
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="nav-item">Home</Link>
          <a href="/#featured-courses-section" className="nav-item">Courses</a>
          <a href="/#about-section" className="nav-item">About Us</a>
          <Link to="/register" className="nav-item btn-primary">Register Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
