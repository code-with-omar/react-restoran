import { Button, Col, Container, Row } from "react-bootstrap";
import HeroImage from "../../assets/hero.png"
import 'animate.css/animate.min.css';
import "./Hero.css"

const Hero = () => {
    return (
        <Container fluid className="py-5 bg-dark hero-header mb-5">
            <Container className="my-5 py-5">
                <Row className="align-items-center g-5">
                    <Col lg={6} className="text-center text-lg-start">
                        <h1 className="display-3 text-white animate__animated animate__slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                        <p className="text-white animate__animated animate__slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <Button href="" className="button py-sm-3 px-sm-5 me-3 animate__animated animate__slideInLeft">Book A Table</Button>
                    </Col>
                    <Col lg={6} className="text-center text-lg-end overflow-hidden">
                        <img className="img-fluid" src={HeroImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>

    );
};

export default Hero;