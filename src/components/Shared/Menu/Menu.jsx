import { Col, Container, Nav, Row } from "react-bootstrap";
import { RiCupFill } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import MenuOne from "./../../../assets/menu-1.jpg"
import MenuTwo from "./../../../assets/menu-2.jpg"
import MenuThree from "./../../../assets/menu-3.jpg"
import MenuFour from "./../../../assets/menu-4.jpg"
import MenuFive from "./../../../assets/menu-5.jpg"
import MenuSix from "./../../../assets/menu-6.jpg"
import MenuSeven from "./../../../assets/menu-7.jpg"
import MenuEight from "./../../../assets/menu-8.jpg"
import "./Menu.css"
import MenuIteams from "./MenuIteams/MenuIteams";

const Menu = () => {
    const menu = [
        { id: 1, img: MenuOne, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 120 },
        { id: 2, img: MenuFour, title: "Chicken Parmesan", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 105 },
        { id: 3, img: MenuThree, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 110 },
        { id: 4, img: MenuFour, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 125 },
        { id: 5, img: MenuFive, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 120 },
        { id: 6, img: MenuSix, title: "Chicken Parmesan", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 105 },
        { id: 7, img: MenuSeven, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 110 },
        { id: 8, img: MenuEight, title: "Chicken Burger", details: "Ipsum ipsum clita erat amet dolor justo diam", price: 125 },
    ]
    return (
        <section className="container-xxl py-5">
            <Container className="text-center">
                <div className="text-center">
                    <h5 className="text-center">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <Nav className="nav-pills d-inline-flex justify-content-center border-bottom mb-5 align-items-center">
                    <Nav.Item>
                        <Nav.Link className="d-flex align-items-center text-start mx-3 pb-3" eventKey="tab-1">
                            < RiCupFill className="menu-logo" />
                            <div className="ps-3 menu-items-title">
                                <small className="text-body">Popular</small>
                                <h6 className="mt-n1 mb-0">BreakFast</h6>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="d-flex align-items-center text-start mx-3 pb-3" eventKey="tab-2">
                            < FaHamburger className="menu-logo" />
                            <div className="ps-3 menu-items-title">
                                <small className="text-body">Special</small>
                                <h6 className="mt-n1 mb-0">Lunch</h6>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" eventKey="tab-3">
                            <FaUtensils className="menu-logo"></FaUtensils>
                            <div className="ps-3 menu-items-title">
                                <small className="text-body">Lovely</small>
                                <h6 className="mt-n1 mb-0">Dinner</h6>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row>

                    {menu.map(data => {
                         <Col key={data.id} md={6}>
                         <MenuIteams data={data} />
                     </Col>
                    })}

                </Row>
            </Container>
        </section>
    );
};

export default Menu;