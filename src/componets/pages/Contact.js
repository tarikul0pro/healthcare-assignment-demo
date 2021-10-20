import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Contact = () => {
    return (
        <div >
            <ContactForm />
        </div>
    );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
    return (
        <div style={{ padding: "58px 0 40px" }}>
            <h1 right>
                <h2 className="text-center text-white">Contact Us</h2>
            </h1>

            <h1 left>

                <h3 className="text-center text-muted mb-4">
                    Your Contats page
                </h3>

            </h1>
            <div>
                <Container>
                    <h1 bottom>
                        <Form>
                            <Row>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicText"
                                    >
                                        <Form.Label>Your Name </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Your Email </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="email"
                                            placeholder="Enter Your Email"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Control
                                style={formStyle}
                                className="my-3"
                                type="text"
                                placeholder="Write Your Subject..."
                            />
                            <Form.Group
                                className="mb-3 text-white"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Your Messages</Form.Label>
                                <Form.Control
                                    style={formStyle}
                                    placeholder="Write you message..."
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button className="mb-5 px-4" variant="info" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </h1>
                </Container>
            </div>
        </div>
    );
}

export default Contact;