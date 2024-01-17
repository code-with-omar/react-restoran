import { Card, Col, Row } from "react-bootstrap";
import aboutOne from "./../../../../assets/about-1.jpg"
import aboutTwo from "./../../../../assets/about-2.jpg"
import aboutThree from "./../../../../assets/about-3.jpg"
import aboutFour from "./../../../../assets/about-4.jpg"
import "./AboutLeft.css"

const AboutLeft = () => {
    
    return (
        <div>
            <Row className="g-3">
                <Col  className="text-start" data-aos="zoom-in-up"data-aos-delay="50">
                    <img src={aboutOne} alt="" className="img-fluid rounded w-100"/>
                </Col>
                <Col className="text-start">
                    <img src={aboutTwo} alt="" className="img-fluid rounded w-75" data-aos="zoom-in-up"data-aos-delay="100"/>
                </Col>
            </Row>
            <Row className="g-3 mt-2">
                <Col  className="text-end">
                    <img src={aboutThree} alt="" className="img-fluid rounded w-75" data-aos="zoom-in-up"data-aos-delay="150"/>
                </Col>
                <Col className="text-end">
                    <img src={aboutFour} alt="" className="img-fluid rounded w-100" data-aos="zoom-in-up"data-aos-delay="200"/>
                </Col>
            </Row>
        </div>
    );
};

export default AboutLeft;