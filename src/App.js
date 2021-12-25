import './App.css';
import {Col, Container, Row} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <Router>
            <ToastContainer />
            <Container>
                <Header />
                <Row>
                    <Col md={4}>
                        <Menus />
                    </Col>
                    <Col md={8}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/add-course" element={<AddCourse />} />
                            <Route path="/view-courses" element={<AllCourses />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    </div>
  );
}

export default App;
