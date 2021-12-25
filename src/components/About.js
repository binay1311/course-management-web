import React, {useEffect} from "react";
import {
    Card,
    CardBody, CardSubtitle,
    CardTitle,
} from "reactstrap";

function About(){
    useEffect(() => {
        document.title = "About";
    }, []);

    return(
        <Card class="bg-info">
            <CardBody>
                <CardTitle tag="h5" style={{color: 'darkblue'}}>
                    Our Vision
                </CardTitle>
                <br />
                <CardSubtitle
                    Style={{color: 'red'}}
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    We envision a world where anyone, anywhere has the power to transform their life through learning.
                </CardSubtitle>
                <br />
                <CardTitle tag="h5">
                    <p style={{color: 'darkblue'}}>
                        Serving the world through learning
                    </p>
                </CardTitle>
                <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                     width="100%"
                     height="350px"
                />
            </CardBody>
        </Card>

    );
}

export default About;