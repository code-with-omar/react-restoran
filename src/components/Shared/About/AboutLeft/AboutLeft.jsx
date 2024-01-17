import { Card, Col, Row } from "react-bootstrap";
import aboutOne from "./../../../../assets/about-1.jpg"
import aboutTwo from "./../../../../assets/about-2.jpg"
import aboutThree from "./../../../../assets/about-3.jpg"
import aboutFour from "./../../../../assets/about-4.jpg"
import "./AboutLeft.css"

const AboutLeft = () => {
    
    return (
        <Col lg={6}>
            <Row className="g-3">
                <Col  className="text-start">
                    <img src={aboutOne} alt="" className="img-fluid rounded w-100"/>
                </Col>
                <Col className="text-start">
                    <img src={aboutTwo} alt="" className="img-fluid rounded w-75"/>
                </Col>
            </Row>
            <Row className="g-3 mt-2">
                <Col  className="text-end">
                    <img src={aboutThree} alt="" className="img-fluid rounded w-75"/>
                </Col>
                <Col className="text-end">
                    <img src={aboutFour} alt="" className="img-fluid rounded w-100"/>
                </Col>
            </Row>
        </Col>
    );
};

export default AboutLeft;