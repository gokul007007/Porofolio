import React, { useState } from 'react'
import './navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/my-logo-1.png'
import gitLogo from '../images/github-logo.png'
import Button from 'react-bootstrap/Button';
import sun from '../images/sun.png'
import moon from '../images/moon.png'

import { Link } from "react-router-dom";

const Header = () => {

  const [myStyle, setMyStyle] = useState({
    backgroundColor: '#040b10'
  })

  // const toggleStyle = () => {
  //   if(myStyle.backgroundColor == '#040b10'){
  //     setMyStyle({
  //       backgroundColor: 'white'
  //     })
  //   }
  //   else{
  //     setMyStyle({
  //       backgroundColor: '#040b10'
  //     })
  //   }
  // }

  return (
    <Navbar style={ myStyle } collapseOnSelect className='nanbar' expand="lg" bg="" variant="dark">
      <Container className='container'>
        <Navbar.Brand as={Link} to={'/'} href="#home" className='brand'><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to={'/'} href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to={'/about'} href="#about">About</Nav.Link>
                <Nav.Link as={Link} to={'/contact'} href="#contact">Contact-me</Nav.Link>
                {/* <NavDropdown title="Contact" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="https://www.instagram.com/gowda___gokul/">Instagram</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.linkedin.com/in/gokul-s-n/">Linkedin</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.facebook.com/gokul.gowda.56">Facebook</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="mailto:gokul007n@gmail.com">Mail</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav className='nav'>
              {/* <div class="form-check form-switch" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
              </div> */}
              <Nav.Link  className='nav-link' href="https://github.com/gokul007007/Porofolio"><img className='git-logo' src={gitLogo} alt="" /></Nav.Link>
              <NavDropdown title="Contact" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="https://www.instagram.com/gowda___gokul/">Instagram</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.linkedin.com/in/gokul-s-n/">Linkedin</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.facebook.com/gokul.gowda.56">Facebook</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="mailto:gokul007n@gmail.com">Mail</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Nav>
                <Nav.Link as={Link} to={'/work'} href="#work">Work</Nav.Link>
                <Nav.Link as={Link} to={'/skills'} eventKey={2} href="#skills">Skills</Nav.Link>
            </Nav> */}
            <Nav>
                <Nav.Link as={Link} to={'/contact'} eventKey={2} href="#contact-us">
                <Button variant="primary">Say Hello</Button>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header



