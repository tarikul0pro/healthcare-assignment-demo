import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import nav from './../../assets/images/nav.jpg'
import HeaderBG from './../../assets/images/header-bg.png'
import { Link, } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';


import "./Header.css"


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
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
                            <Nav.Link className="login text-white" as={Link} to={"/details"}>Details</Nav.Link>
                           
                                
                           

                            {user.displayName ?<>
                            <Navbar.Text className="text-light">
                                    <span className="text-light">{user?.displayName}</span>
                                    <span className="text-light">{user?.email}</span>
                            </Navbar.Text>

                                <Button  className="text-light" variant="danger " onClick={logOut}>logOut</Button>
                             
                            </> : <Link className="text-light nav-link login" variant="light " to="/login">log In</Link>

                            }




                                
                          
                           
                                                      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;