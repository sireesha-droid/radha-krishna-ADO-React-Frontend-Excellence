import React, { useState } from "react";
import "./AddCourseForm.css";
import { addCourse } from "../services/courseServices";

const AddCourseForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        duration: "",
        start_date: "",
        fee: "",
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });
        try {
            await addCourse(formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({ title: "", duration: "", start_date: "", fee: "" });
        } catch (err) {
            console.error(err);
            setStatus({ loading: false, success: false, error: "Failed to add course" });
        }
    };

    return (
        <div className="add-course-form glass-card">
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Fee</label>
                    <input type="number" name="fee" value={formData.fee} onChange={handleChange} required />
                </div>
                <button type="submit" disabled={status.loading}> {status.loading ? "Adding..." : "Add Course"} </button>
                {status.success && <p className="success-msg">Course added successfully!</p>}
                {status.error && <p className="error-msg">{status.error}</p>}
            </form>
        </div>
    );
};

export default AddCourseForm;
