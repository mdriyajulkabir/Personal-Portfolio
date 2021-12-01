import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="white" className='sticky-top' variant="light" collapseOnSelect expand="lg ">
            <Container>
                <Navbar.Brand href="#home">Riyajul kabir </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className=' justify-text-end fw-normal'>
                <Nav className="me-auto">
                <Nav.Link>
                    Home
                </Nav.Link>
                <Nav.Link>
                    Explore 
                </Nav.Link>
                <Nav.Link>
                Contact Us 
                </Nav.Link>
                <Nav.Link>
                    About Us 
                </Nav.Link>
                
                
                
               
                </Nav>
                </Navbar.Collapse>

                
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;