import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about-section" className="section-padding">
            <div className="container about-container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <div className="about-text">
                        <p>
                            Welcome to <strong>Perseverance Software Training Institute</strong>, located in the vibrant city of Tirupati. Our institute is committed to providing top-notch education in the field of software development and IT.
                        </p>
                        <p>
                            At Perseverance, we believe in fostering a learning environment that encourages creativity, critical thinking, and hands-on experience. Our dedicated team of instructors brings industry expertise to the classroom, ensuring that our students are well-prepared for the challenges of the IT field.
                        </p>
                        <div className="about-highlight glass-card">
                            <p>
                                Whether you're looking to start a career in DevOps, Cloud Computing, Programming, or other IT domains, Perseverance is here to guide you on your journey. Join us and become a part of a community that values perseverance, dedication, and continuous learning.
                            </p>
                        </div>
                        <p>
                            Come, be a part of our community, and let's build a successful future together.
                        </p>
                    </div>
                </div>
                <div className="about-image-wrapper">
                    <div className="about-image-card glass-card">
                        <h3>Why IT?</h3>
                        <ul>
                            <li>Continuous learning & Innovation</li>
                            <li>Diverse roles and specializations</li>
                            <li>High demand across industries</li>
                            <li>Competitive salaries and growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
