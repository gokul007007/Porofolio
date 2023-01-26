import React from 'react'
import './experience.scss'
import innova from '../images/Innova.png'

const Experience = () => {
  return (
    <div className='experience'>
        <div className='container heading'>
            <h1>Experience</h1>
        </div>
        <div className="container d-flex content">
          <div className="exp-container">
            <img src={ innova } alt="" />
            <h3>Software Developer</h3>
          </div>
          <div className="exp-content container">
            <p>2021 - Present</p>
            <div className='inline-block description'>
              <span style={{ color: '#fff'}}>
                Highly skilled in front-end development, I have a holistic approach to build performant and secure websites and apps that deliver great user experiences and business values,
              </span>
              <span>
              {" " }using TypeScript, JavaScript, TailwindCss, PostCss, JamStack including Prismic, Vercel and NextJs.  I manage projects and communicate with the  team using Slack, Notion and Linear. My second nature is uncovering and fixing bugs in the software through testing.
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience