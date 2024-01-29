import { Col, Container, Row } from "react-bootstrap"
import "./BookTable.css"
import BookTableLeft from "./BookTableLeft/BookTableLeft";
import BookTableRight from "./BookTableRight/BookTableRight";

const BookTable = () => {
    return (
        <section className="container-xxl py-5 book-table-wrap" data-aos="fade-up" data-aos-delay="150">
            <Container className="book-table-content">
                <Row>
                    <Col lg={6} className="book-table-left">
                        <BookTableLeft></BookTableLeft>
                    </Col>
                    <Col lg={6} className="book-table-right">
                        <BookTableRight></BookTableRight>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default BookTable;