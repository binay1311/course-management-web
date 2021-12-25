import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from "react-toastify";

export function updateCourse(course){
    return axios.put(`${base_url}/courses/${course.id}`, course);
}

export function addCourse(course){
    return axios.post(`${base_url}/courses`, course);
}

export function getAllCourses(){
    return axios.get(`${base_url}/courses`);
}

export function getCourseById(courseId){
    return axios.get(`${base_url}/courses/${courseId}`);
}

export function deleteCourse(courseId){
    return axios.delete(`${base_url}/courses/${courseId}`);
}