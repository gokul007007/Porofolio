import React from 'react'
import '../components/experience.scss'
import innova from '../images/Innova.png'

const Experience = () => {
  return (
    <div className='experience' style={{ backgroundColor: '#040b10' }}>
        <div className='container'>
            <h1 className='m-0'>Experience</h1>
        </div>
        <div className="container d-flex">
          <div className="exp-container container">
            <img style={{ width: '200px', height: '50px' }}  src={ innova } alt="" />
            <h3>Software Developer</h3>
          </div>
          <div className="exp-content container">
            <p>2021 - Present</p>
            <div className='inline-block'>
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