import React, {Fragment, useEffect, useState} from "react";
import {Button, Container, Form, FormGroup, Input} from "reactstrap";
import {toast} from "react-toastify";
import {useLocation} from "react-router-dom";
import {addCourse, updateCourse} from "./service";
import {SUCCESS} from "../api/responseCode";

function AddCourse(){
    const[course, setCourse] = useState({});
    const[isDisabled, setIsDisabled] = useState(false);

    const location = useLocation();
    const getCourse = location.state != null ? location.state.course : null;

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    useEffect(async () => {
        document.title = "Add Course";
        if (getCourse) {
            setCourse({id: getCourse.id, title: getCourse.title, description: getCourse.description});
            setIsDisabled(true);
            console.log({course});
        }
    }, []);

    const handleForm = (e) => {
        if(getCourse){
            updateCourse(course)
                .then((res) => {
                    if(res.data.responseCode === SUCCESS){
                        toast.success("course updated successfully !");
                        clearField();
                    } else {
                        toast.error("Failed to update course !");
                        console.log(res.data.response);
                    }
                })
                .catch((err) => {
                    toast.error("Failed to update Course since invalid parameters passed !");
                    console.log(err);
                });
        } else {
            addCourse(course)
                .then((res) => {
                    if(res.data.responseCode === SUCCESS){
                        toast.success("course added successfully !");
                        clearField();
                    } else {
                        toast.error("Failed to add course !");
                        console.log(res.data.response);
                    }
                })
                .catch((err) => {
                    toast.error("Failed to add Course since invalid parameters passed !");
                    console.log(err);
                })
        }
        console.log(course);
        e.preventDefault();
    }

    const clearField = () => {
        setCourse({id: "", title: "", description: ""});
    };

    return(
        <Fragment>
            <h2 className="m-lg-3">Fill Course Detail</h2>
            <Form onSubmit={handleForm}>
                <FormGroup className="text-lg-start">
                    <label for="userId">Course Id</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        value={course.id}
                        disabled={isDisabled}
                        onChange={(e) => {
                            setCourse({...course, id: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className="text-lg-start">
                    <label for="tile">Title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        id="title"
                        value={course.title}
                        onChange={(e) => {
                            setCourse({...course, title: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className="text-lg-start">
                    <label for="description">Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter description here"
                        id="description"
                        style={{height: 100}}
                        value={course.description}
                        onChange={(e) => {
                            setCourse({...course, description: e.target.value})
                        }}
                    />
                </FormGroup>
                <Container>
                    <Button type="submit" color="success" >Submit</Button>
                    <Button type="reset" color="warning" className="m-lg-3"
                            onClick={() => clearField()}>
                        Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;
