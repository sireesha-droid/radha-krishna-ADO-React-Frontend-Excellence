import React from "react";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import About from "../components/About";
import TaskManager from "../components/TaskManager";
import AddCourseForm from "../components/AddCourseForm";

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <CourseList />
            <AddCourseForm />
            <About />
            <TaskManager />
        </div>
    );
};

export default Home;
