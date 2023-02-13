import React from 'react'
import './experience.scss'
import innova from '../images/Innova.png'



const Experience = () => {
  const style = {
    txtColor: {
      color: "#7f7f7f"
    }
  }
  return (
    <div className='experience container'>
        <div className='container heading'>
            <h1>Experience</h1>
        </div>
        <div className="container content">
          <div className="exp-container">
            <img src={ innova } alt="" />
            <h4 style={style.txtColor}>Software Developer</h4>
          </div>
          <div className="exp-content">
            <p style={style.txtColor}>2021 - Present</p>
            <div className='inline-block description'>
              <span style={{ color: '#fff'}}>
              Led the development of front-end features, including designing and implementing user-centered interfaces and ensuring a seamless user experience.
              </span>
              <span>
              {" " }Created and implemented the UX design for the project, conducting user research and testing to improve the overall usability and user satisfaction.
              </span>
              <span style={{ color: '#fff'}}>
              Managed and optimized the backend database, ensuring efficient data storage and retrieval while maintaining security and data integrity.              
              </span>
              <span>
              {" " }Collaborated with cross-functional teams to deliver a fully-featured web application, utilizing my expertise in front-end development, UX design, and backend database management.
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience