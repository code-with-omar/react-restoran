import { Col, Container, Row } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
const Service = () => {
    return (
        <section className="container-xxl py-5">
            <Container>
                <Row className="g-4">
                    <Col lg={3} sm={6} className="animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FaUserTie></FaUserTie>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="animate__animated animate__fadeInUp wow" data-wow-delay="0.2s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FaUserTie></FaUserTie>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="animate__animated animate__fadeInUp wow" data-wow-delay="0.3s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FaUserTie></FaUserTie>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="animate__animated wow animate__fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FaUserTie></FaUserTie>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Service;