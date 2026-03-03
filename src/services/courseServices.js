import axios from 'axios';

const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3100';

export function getCourses() {
    return axios.get(`${apiUrl}/courses`);
}

export function addCourse(course) {
    return axios.post(`${apiUrl}/courses`, course);
}

export function updateCourse(id, data) {
    return axios.put(`${apiUrl}/courses/${id}`, data);
}

export function deleteCourse(id) {
    return axios.delete(`${apiUrl}/courses/${id}`);
}
