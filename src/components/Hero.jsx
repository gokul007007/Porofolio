import React, { useState, useEffect } from 'react'
import '../components/hero.scss'
import working from '../images/working.png'
import sleeping from '../images/sleeping.png'
import ReadmeCard from './ReadmeCard'

const Hero = () => {

  const [time, setTime] = useState(new Date().getHours());
  const [text, setText] = useState("I'm currently working");
  const [image, setImage] = useState("../images/working.png");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getHours();
      setTime(currentTime);

      if (currentTime >= 9 && currentTime < 20) {
        setText("I'm currently working");
        setImage(working);  
      }
       else {
        setText("I'm currently sleeping");
        setImage(sleeping);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero align-items-center pt-5">
        <div className='status-container container'>
            <div className='status-logo'>
              <img className='' src={ image } alt="" />
            </div>
            <div className='status-txt'>
              <h3 className='txt'>{ text }</h3>
            </div>
        </div>
        <div className="hero-text-container container mt-3 text-center">
          <h1 className='hero-text'>Hello, I'm <br />Gokul</h1>
          <p className='pt-3'>I'm a Software Engineer who has unending enthusiasm for solving <br /> problems.</p>
        </div>
        <ReadmeCard />
    </div>
  )
}

export default Hero