import React, { Component } from "react";
import { TextField, Checkbox, Button } from "@material-ui/core";
import { addTask, getTasks, updateTask, deleteTask } from "../services/taskServices";
import "./TaskManager.css";

class TaskManager extends Component {
    state = { tasks: [], currentTask: "", loading: true, error: null };

    async componentDidMount() {
        try {
            const { data } = await getTasks();
            this.setState({ tasks: data, loading: false });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false, error: "Failed to load courses. Please try again later." });
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTask: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.currentTask.trim()) return;

        const originalTasks = this.state.tasks;
        try {
            const { data } = await addTask({ task: this.state.currentTask });
            const tasks = [...originalTasks];
            tasks.push(data);
            this.setState({ tasks, currentTask: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;
            this.setState({ tasks });
            await updateTask(currentTask, {
                completed: tasks[index].completed,
            });
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    handleDelete = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = originalTasks.filter((task) => task._id !== currentTask);
            this.setState({ tasks });
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    render() {
        const { tasks, currentTask, loading, error } = this.state;
        return (
            <section className="section-padding task-section">
                <div className="container">
                    <div className="task-manager-wrapper glass-card">
                        <div className="task-header text-center">
                            <h2>My Course Interests</h2>
                            <p>Track the courses you're interested in.</p>
                        </div>

                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input-field"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="E.g. Advanced AWS Architecture"
                                InputProps={{
                                    style: { color: 'white' }
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="btn-add-task"
                            >
                                Add Course
                            </Button>
                        </form>

                        <div className="tasks-container">
                            {loading ? (
                                <p className="task-loading text-center">Loading your courses...</p>
                            ) : error ? (
                                <p className="task-error text-center">{error}</p>
                            ) : tasks.length === 0 ? (
                                <p className="task-empty text-center">No courses added yet. Start by adding one above!</p>
                            ) : (
                                <div className="tasks-list">
                                    {tasks.map((task) => (
                                        <div key={task._id} className="task-item glass-card">
                                            <Checkbox
                                                checked={task.completed}
                                                onClick={() => this.handleUpdate(task._id)}
                                                color="primary"
                                                className="task-checkbox"
                                            />
                                            <div className={`task-text ${task.completed ? "completed" : ""}`}>
                                                {task.task}
                                            </div>
                                            <Button
                                                onClick={() => this.handleDelete(task._id)}
                                                color="secondary"
                                                variant="outlined"
                                                size="small"
                                                className="btn-delete-task"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TaskManager;
