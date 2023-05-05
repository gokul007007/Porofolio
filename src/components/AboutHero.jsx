import React from 'react'
import './aboutHero.scss'
import myImg from '../images/my-img.jpg'
import linkedin from '../images/linkedin-1.png'
import github from '../images/github-logo.png'
import instagram from '../images/instagram-1.png'
import facebook from '../images/facebook.png'
import arrow from '../images/arrow.png'
import Nav from 'react-bootstrap/Nav';

const AboutHero = () => {

      // Function will execute on click of button
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('ResumeGokul_resume_N.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ResumeGokul_resume_N.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className="aboutHero container">
        <div className='content'>
            <h1 className='heading'>Hi it's Gokul & i'm a<br />Software Engineer</h1>
            <h3>I have honed my skills and developed a passion for Front end Developement.</h3>
            <h3>I have developed a passion for creating visually appealing and user-friendly websites that provide a seamless experience for users.</h3>
            <h3>This portfolio website is a showcase of some of my best work, and I am excited to share it with you. I hope it gives you a sense of my style, approach, and the impact I can make as a front-end software developer.</h3>
        </div>
        <div className="img-card">
            <div className="boxcontainer">
                <img className='myImg' src={myImg} alt="" />
                <div className="name">Gokul</div>
                <div className="location">Bengaluru, India</div>
                <hr style={{color: '#fff', margin: '25px'}} />
                <div style={{paddingBottom: '10px'}} className="location">Have a look at my resume.</div>
                <button onClick={onButtonClick} type="button" class="btn btn-outline-success">Download</button>
                <hr style={{color: '#fff', margin: '25px'}} />
                <div className="aboutContact">
                    <div className="blocks">
                        <Nav.Link href="https://github.com/gokul007007/Porofolio"><img className='socialMedia' src={github} alt="" /></Nav.Link>
                        <Nav.Link className='text' href="https://github.com/gokul007007/Porofolio"><p>Github</p></Nav.Link>
                        
                        {/* <Nav.Link href="https://github.com/gokul007007/Porofolio"><img className='socialMedia arrow' src={arrow} alt="" /></Nav.Link> */}
                    </div>
                    <div className="blocks">
                        <Nav.Link href="https://www.linkedin.com/in/gokul-s-n/"><img className='socialMedia' src={linkedin} alt="" /></Nav.Link>
                        <Nav.Link className='text' href="https://www.linkedin.com/in/gokul-s-n/"><p>Linkedln</p></Nav.Link>
                        {/* <img className='arrow' src={arrow} alt="" /> */}
                    </div>
                    <div className="blocks">
                        <Nav.Link href="https://www.instagram.com/gowda___gokul/"><img className='socialMedia' src={instagram} alt="" /></Nav.Link>
                        <Nav.Link className='text' href="https://www.instagram.com/gowda___gokul/"><p href="https://www.instagram.com/gowda___gokul/" >Instagram</p>  </Nav.Link>    
                        
                        {/* <img className='arrow' src={arrow} alt="" /> */}
                    </div>
                    <div className="blocks">
                        <Nav.Link href="https://www.facebook.com/gokul.gowda.56"><img className='socialMedia' src={facebook} alt="" /></Nav.Link>
                        <Nav.Link className='text'  href="https://www.facebook.com/gokul.gowda.56"> <p>Facebook</p> </Nav.Link>
                       
                        {/* <img className='arrow' src={arrow} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero    