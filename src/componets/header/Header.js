import React from 'react';
import { Container, Nav, Navbar,Badge } from 'react-bootstrap';
import nav from './../../assets/images/nav.jpg'
import HeaderBG from './../../assets/images/header-bg.png'
import { Link, } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        
        <div>
            
            <Navbar style={{ background: `url(${HeaderBG})`}} expand="lg">
                <Container>
                    <Navbar.Brand  className="text-white" href="#home">
                        <img width="50px" src={nav} alt="nav" />         Hospital Services
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="login text-white" as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link className="login text-white" as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link className="login text-white" as={Link} to={"/service"}>Service</Nav.Link>
                           
                            <Nav.Link className="login text-white" as={Link} to={"/doctors"}>Doctors</Nav.Link>
                            
                            <Nav.Link className="login text-white" as={Link} to={"/contact"}>Contact</Nav.Link>
                            <Nav.Link className=" register text-white" as={Link} to={"/register"}>Register</Nav.Link>

                            <Nav.Link className="login text-white" as={Link} to={"/login"}>Login</Nav.Link>
                           
                           
                           
                           
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;