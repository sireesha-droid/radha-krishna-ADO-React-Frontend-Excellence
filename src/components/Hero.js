import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content container">
                <h1 className="hero-title">
                    Shape Your Future in <br />
                    <span>Technology &amp; Software</span>
                </h1>
                <p className="hero-subtitle">
                    Join Perseverance Software Training Institute on the journey to becoming a highly skilled IT Professional. Learn from industry experts and secure your dream career.
                </p>
                <div className="hero-actions">
                    <Link to="/register" className="btn-primary hero-btn">Register Now</Link>
                    <a href="#featured-courses-section" className="btn-secondary hero-btn">Explore Courses</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
