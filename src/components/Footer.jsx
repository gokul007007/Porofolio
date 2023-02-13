import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Instagram from '../images/instagram-1.png'
import Linkedin from '../images/linkedin-1.png'
// import Facebook from '../images/facebook.png'
import './footer.scss'

const Footer = () => {
  const style = {
    txtColor: {
      color: "#7f7f7f"
    }
  }
  return (
    <div className='footer'>
      <div className="container">
        <div className="content">
          <Nav.Link style={style.txtColor} as={Link} to={'/about'} href="#work">About</Nav.Link>
          <Nav.Link style={style.txtColor} as={Link} to={'/skills'} href="#skills">Skills</Nav.Link>
          <Nav.Link style={style.txtColor} as={Link} to={'/contact'} href="#skills">Contact</Nav.Link>
        </div>
        <div className="images">
          <Nav.Link href="https://www.linkedin.com/in/gokul-s-n/"><img  src={Linkedin} alt="" /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/gowda___gokul/"><img src={Instagram} alt="" /></Nav.Link>
        </div>
      </div>
    </div>
  )
}

export default Footer