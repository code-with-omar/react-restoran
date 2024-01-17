import { Card, Col, Container, Row } from "react-bootstrap";
import { FaUserTie, FaCartPlus } from "react-icons/fa";
import { FaUtensils, FaHeadset } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Service.css"
import { useEffect } from "react";
const Service = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="container-xxl py-5 service-wrap">
            <Container>
                <Row className="g-4 service-container">
                    <Col lg={3} sm={6} className="service-content" data-aos="fade-up" data-aos-delay="50">
                        <Card className="service-item rounded pt-3 ervice-content">
                            <Card.Body className="p-4">
                                <FaUserTie className="icon-img"></FaUserTie>
                                <h5 className="service-title">Master Chefs</h5>
                                <p className="service-details">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} sm={6} className="service-content" data-aos="fade-up" data-aos-delay="100">
                        <Card className="service-item rounded pt-3">
                            <Card.Body className="p-4">
                                <FaUtensils className="icon-img"></FaUtensils>
                                <h5 className="service-title">Quality Food</h5>
                                <p className="service-details">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} sm={6} className="service-content" data-aos="fade-up" data-aos-delay="150">
                        <Card className="service-item rounded pt-3">
                            <Card.Body className="p-4">
                                <FaCartPlus className="icon-img"></FaCartPlus>
                                <h5 className="service-title">Online Order</h5>
                                <p className="service-details">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} sm={6} className="service-content" data-aos="fade-up" data-aos-delay="200">
                        <Card className="service-item rounded pt-3">
                            <Card.Body className="p-4">
                                <FaHeadset className="icon-img"></FaHeadset>
                                <h5 className="service-title">24/7 Service</h5>
                                <p className="service-details">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Service;