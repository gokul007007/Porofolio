import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
// import Facebook from '../images/facebook.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="content">
          <Nav.Link as={Link} to={'/about'} href="#work">About</Nav.Link>
          <Nav.Link as={Link} to={'/skills'} href="#skills">Skills</Nav.Link>
          <Nav.Link as={Link} to={'/contact'} href="#skills">Contact</Nav.Link>
        </div>
        <div className="images">
          <img href="https://www.linkedin.com/in/gokul-s-n/" src={Linkedin} alt="" />
          <img href="https://www.instagram.com/gowda___gokul/" src={Instagram} alt="" />
          {/* <img src={Linkedin} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Footer