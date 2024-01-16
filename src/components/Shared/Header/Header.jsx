import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { MdOutlineRestaurant } from "react-icons/md";
import "./Header.css"
import { Link } from "react-router-dom";
import Hero from "../../Hero/Hero";

const Header = () => {
    return (

        <Container fluid className="position-relative p-0 user-header-wrap">
            <Navbar expand="lg" variant="dark" className="bg-dark px-4 px-lg-5 py-3 py-lg-0 user-header-navbar">
                <Navbar.Brand href="#" className="p-0 user-header-band">
                    <h1 className="text-primary m-0"><MdOutlineRestaurant className="me-3" />Restoran</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarCollapse">
                    <span className="fa fa-bars"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarCollapse">
                    <Nav className="ms-auto py-0 pe-4 user-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="menu">Menu</Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown" className="">
                            <Link to="/booking">Booking</Link>
                            <Link to="/team">Our Team</Link>
                            <Link to="/team">Testimonial</Link>
                        </NavDropdown>
                        <Link to="contact">Contact</Link>
                    </Nav>
                    <Button  href="" className="py-2 px-4 button">Book A Table</Button>
                </Navbar.Collapse>
            </Navbar>
            {/* Hero section  */}
            <Hero></Hero>
        </Container>
    );
};

export default Header;