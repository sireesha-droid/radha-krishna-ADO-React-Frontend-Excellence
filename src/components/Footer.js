import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>SSP Software Solutions</h3>
                    <p>
                        Perseverance Software Training Institute
                        <br />
                        Empowering the next generation of IT Professionals.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#featured-courses-section">Courses</a></li>
                        <li><a href="/#about-section">About Us</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Phone: 7075505229 / 7075506229</p>
                    <p>Email: <a href="mailto:persevcareers@gmail.com">persevcareers@gmail.com</a></p>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61550316355738" target="_blank" rel="noreferrer" className="social-icon">
                            FB
                        </a>
                        <a href="https://www.instagram.com/perseverance_institute/" target="_blank" rel="noreferrer" className="social-icon">
                            IG
                        </a>
                        <a href="https://www.youtube.com/@persevcareers6577" target="_blank" rel="noreferrer" className="social-icon">
                            YT
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} SSP Group - House of Software Excellence. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
