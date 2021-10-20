import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

const Details = () => {
    return (
       
            <Container>
              
                <Row>
                    <Col md className="pe-3">
                        <h1>
                            <h5 className="text-white">About Us</h5>
                            <p className="text-muted">
                                There are countless online education marketplaces on the
                                internet. And there’s us. We are not the biggest. We are not the
                                cheapest. But we are the fastest growing. We have the highest
                                course completion rate in the industry.
                            </p>
                           
                    </h1>
                    </Col>
                    <Col md className="pe-3">
                        <h1 bottom>
                            <h5 className="text-white">Our Vision</h5>
                            <p className="text-muted">
                                To become the largest online learning ecosystem for continuing
                                education, in partnership with corporates and academia.
                            </p>
                            <h5 className="text-white">Our Mission</h5>
                         
                    </h1>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                    <h1 bottom>
                            <h5 className="text-white">Sign up for our monthly newsletter</h5>
                            
                    </h1>
                    </Col>
                    <Col md className="d-flex align-items-center">
                    <h1 bottom>
                            <Form className="w-100">
                                <Form.Label className="text-white">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn rounded-0 btn-primary"
                                    >
                                        SIGN UP
                                    </button>
                                </Form.Group>
                            </Form>
                    </h1>
                    </Col>
                </Row>
            </Container>
       
    );
};

export default Details;
