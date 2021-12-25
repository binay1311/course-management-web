import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Menus = () => {
    return(
        <ListGroup>
            <Link
                className="list-group-item list-group-item-action text-lg-start"
                tag="a"
                to="/"
                action >
                    Home
            </Link>
            <Link
                className="list-group-item list-group-item-action text-lg-start"
                tag="a"
                to="/add-course"
                action >
                    Add Course
            </Link>
            <Link
                className="list-group-item list-group-item-action text-lg-start"
                tag="a"
                to="/view-courses"
                action >
                    View Courses
            </Link>
            <Link
                className="list-group-item list-group-item-action text-lg-start"
                tag="a"
                to="/about"
                action >
                    About
            </Link>
            {/*<Link*/}
            {/*    className="list-group-item list-group-item-action text-lg-start"*/}
            {/*    tag="a"*/}
            {/*    to="/#!"*/}
            {/*    action >*/}
            {/*        Contact*/}
            {/*</Link>*/}
        </ListGroup>
    );
}

export default Menus;