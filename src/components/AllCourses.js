import React, {useEffect, useState} from "react";
import Course from "./Course";
import {getAllCourses} from "./service";
import {toast} from "react-toastify";
import {SUCCESS} from "../api/responseCode";
import {Card, CardBody, CardTitle} from "reactstrap";

function AllCourses(){
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        document.title = "All Courses";
        getAllCourses().then(
            (response) => {
                if (response.data.responseCode === SUCCESS) {
                    setCourses(response.data.response);
                    toast.success("All courses has been loaded");
                    console.log(response);
                } else {
                    toast.error("Could not load courses");
                    console.log(response.data.responseMessage);
                }
            }).catch((err) => {
                toast.error("Something went wrong ! Please reload the page and try again");
                console.log(err);
            });

    }, []);

    const updateCourses = (courseId) => {
        setCourses(courses.filter((course) => course.id !== courseId));
    }

    return(
        <div>
            <h2>All Courses</h2>
            {
                courses.length > 0 ?
                    courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
                    : (
                        <Card>
                            <CardBody>
                                <CardTitle className="text-danger"><h3>No courses available</h3></CardTitle>
                            </CardBody>
                        </Card>
                    )
            }
        </div>
    );
}

export default AllCourses;