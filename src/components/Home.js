import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {useNavigate} from "react-router-dom";

function Home(){
    let navigate = useNavigate();

    useEffect(() => {
        document.title = "Home";
    }, []);

    const redirect = () => {
        navigate("/view-courses");
    }

    return(
      <div>
          <Card class="bg-info">
              <CardBody>
                  <CardTitle tag="h3">LearningCode for Free</CardTitle>
                  <CardText>
                      <img src="https://www.ecampusnews.com/files/2016/08/onlinecontent.jpg"
                           width="90%"
                           height="350"
                      />
                  </CardText>
                  <Button color="primary" outline
                          onClick={() => {
                              redirect();
                          }}>
                  Get Started</Button>
              </CardBody>
          </Card>
      </div>
    );
}

export default Home;