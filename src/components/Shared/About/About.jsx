import { Col, Container, Row } from "react-bootstrap";
import aboutOne from "./../../../assets/about-1.jpg"
import aboutTwo from "./../../../assets/about-2.jpg"
import aboutThree from "./../../../assets/about-3.jpg"
import aboutFour from "./../../../assets/about-4.jpg"
import "./About.css"
import AboutLeft from "./AboutLeft/AboutLeft.jsx";

const About = () => {
   
    return (
        <section className="container-xxl py-5 about-wrap">
            hello
            <Container>
                <Row className="g-5 service-container">
                    <AboutLeft></AboutLeft>
                </Row>
            </Container>
        </section>
    );
};

export default About;