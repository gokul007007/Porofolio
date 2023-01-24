import React from 'react'
import Navigator from '../components/Navigator'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Toolbox from '../components/Toolbox'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Experience />
        <Toolbox />
    </div>
  )
}

export default Home

