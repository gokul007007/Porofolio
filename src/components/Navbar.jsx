import React from 'react'
import './navbar.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/my-logo-1.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
  return (
    <Router>
        <Navbar collapseOnSelect className='nanbar' expand="lg" bg="" variant="dark">
          <Container className='container'>
            <Navbar.Brand as={Link} to={'/home'} href="#home" className='brand'><img src={logo} alt="logo"  /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={'/home'} href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to={'/about'} href="#about">About</Nav.Link>
                <NavDropdown title="Contact" id="collasible-nav-dropdown">
                  <NavDropdown.Item  href="https://www.instagram.com/gowda___gokul/">Instagram</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={'/action/3.2'} href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={'/action/3.3'} href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={'/action/3.4'} href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={'/deet'} href="#deets">More deets</Nav.Link>
                <Nav.Link as={Link} to={'/memes'} eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Router>
  )
}

export default Header



