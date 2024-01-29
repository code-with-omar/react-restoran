import { Button, Col, Container, Form, Row } from "react-bootstrap";


const BookTableRight = () => {
    return (
        <Container className=" bg-dark d-flex align-items-center">
          <div className="p-5">
            <h5 className="section-title">Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
            <Form>
              <Container>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control type="text" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control type="email" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Select id="select1">
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                      </Form.Select>
                      <label htmlFor="select1">No Of People</label>
                    </Form.Floating>
                  </Col>
                  <Col>
                    <Form.Floating>
                      <Form.Control
                        as="textarea"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: '100px' }}
                      />
                      <label htmlFor="message">Special Request</label>
                    </Form.Floating>
                  </Col>
                  <Col>
                    <Button variant="primary" className="w-100 py-3" type="submit">
                      Book Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </Container>
      );
};

export default BookTableRight;