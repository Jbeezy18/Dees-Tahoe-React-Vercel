import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const CompNavbar = () => (
    <Navbar expand='lg'>
        <Container>
            <Navbar.Brand href='#home'>Dee's Tahoe</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link></Nav.Link>
                    <Nav.Link></Nav.Link>
                    <NavDropdown>
                        <NavDropdown.Item></NavDropdown.Item>
                        <NavDropdown.Item></NavDropdown.Item>
                        <NavDropdown.Item></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);


export default CompNavbar;