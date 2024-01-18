import { Col, Row } from "react-bootstrap";
import "./AboutRight.css"
import { MdOutlineRestaurant } from "react-icons/md";
const AboutRight = () => {
    return (
        <div className="about-right-content " data-aos="fade-up"  data-aos-delay="100">
            <h5 className="about-right-title mb-4">About Us</h5>
            <h1 className="mb-4">Welcome to<MdOutlineRestaurant className="about-right-logo"></MdOutlineRestaurant>Restoran</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <Row className="align-items-center mb-4">
                <Col sm={6} className="d-flex border-start border-5  about-right-border">
                    <h1 className="count">15</h1>
                    <div className="ps-4 d-flex flex-column  text-start">
                        <p className="mb-0">Year Of</p>
                        <p className="text-uppercase mb-0 count-text experience">Experience</p>
                    </div>
                </Col>
                <Col sm={6} className="d-flex border-start border-5  about-right-border">
                    <h1 className="count">15</h1>
                    <div className="ps-4 d-flex flex-column  text-start">
                        <p className="mb-0">Popular</p>
                        <p className="text-uppercase mb-0 count-text experience">MASTER CHEFS</p>
                    </div>
                </Col>
            </Row>
            <button className="button text-uppercase button py-sm-3 px-sm-5 me-3">Read More</button>
        </div>
    );
};

export default AboutRight;