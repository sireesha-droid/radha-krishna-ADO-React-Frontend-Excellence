import React, { useEffect, useState } from "react";
import "./CourseList.css";
import { getCourses } from "../services/courseServices";

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses();
                setCourses(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load courses");
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) return <p className="loading">Loading courses...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <section id="featured-courses-section" className="section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Featured Courses</h2>
                    <p>Explore a variety of courses designed to enhance your skills and career opportunities.</p>
                </div>
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card glass-card">
                            <div className="course-icon">
                                {/* Placeholder icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>{course.title}</h3>
                            <p>Duration: {course.duration}</p>
                            <p>Start Date: {new Date(course.start_date).toLocaleDateString()}</p>
                            <p>Fee: ${course.fee}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseList;
