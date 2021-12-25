import React from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, Container} from "reactstrap";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {deleteCourse, getCourseById} from "./service";
import {SUCCESS} from "../api/responseCode";

function Course({course, update}){
    let navigate = useNavigate();

    const deleteCourseById = (courseId) => {
        deleteCourse(courseId)
            .then((response) => {
                    if (response.data.responseCode === SUCCESS) {
                        toast.success("course deleted successfully !");
                        update(courseId);
                    } else {
                        toast.error("Could not update course");
                        console.log(response.data.responseMessage);
                    }
                }).catch((err) => {
                    toast.error("Something went wrong ! Please reload the page and try again");
                    console.log(err);
                });
    }

    const updateCourseById = (courseId) => {
        getCourseById(courseId)
            .then((response) => {
                if (response.data.responseCode === SUCCESS) {
                    toast.success("updating course");
                    console.log(response);
                    let course = response.data.response;
                    navigate("/add-course", {
                        state: {course},
                        disabled: true
                    });
                } else {
                    toast.error("Could not update course");
                    console.log(response.data.responseMessage);
                }
            }).catch((err) => {
            toast.error("Something went wrong ! Please reload the page and try again");
            console.log(err);
            });
    }

    return(
        <Card>
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger"
                            onClick={() => {
                                deleteCourseById(course.id);
                            }}>
                        Delete</Button>
                    <Button className="m-lg-3" color="warning"
                            onClick={() => {
                                updateCourseById(course.id);
                            }}>
                        Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;