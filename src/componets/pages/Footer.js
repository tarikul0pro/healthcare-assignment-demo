import React from "react";

import "./Footer.css"
import payment from "./../../assets/images/payment.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-white">
            <div className="py-4 gradient">
                <Container>
                    <Row>
                        <Col md={6}>
                            

                            <ul className="list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span className="ms-1 fs-5">Contact Details
</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="ms-1 fs-5">
                                        Park Drive, Varick Str NY 10012, USA

                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="ms-1 fs-5">
                                        Getwell@Hospitals.com

                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="ms-1 fs-5">
                                        Mon-Friday: 9am to 18pm

                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="ms-1 fs-5">
                                        Sat-Sunday: 10am to 16pm

                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service">service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/doctors">doctors</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">contact</NavLink>
                                </li>
                                
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className="">
                                <img
                                    className="img-fluid"
                                    src={payment}
                                    alt="payment methods"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className="m-0 p-0" />
            <p className="text-center m-0 py-3 copyright">
                Copyright © 2018 Oreo Theme by ThemeMakker
            </p>
        </div>
    );
};

export default Footer;
