import { Col, Container, Row } from "react-bootstrap";
import "./About.css"
import AboutLeft from "./AboutLeft/AboutLeft.jsx";
import AboutRight from "./AboutRight/AboutRight.jsx";

const About = () => {

    return (
        <section className="container-xxl py-5 about-wrap">

            <Container>
                <Row className="g-5 about-container align-items-center">
                    <Col lg={6}>
                        <AboutLeft></AboutLeft>
                    </Col>
                    <Col lg={6}>
                        <AboutRight></AboutRight>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;