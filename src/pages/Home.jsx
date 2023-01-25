import React from 'react'
import Navigator from '../components/Navigator'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Toolbox from '../components/Toolbox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Experience />
        <Toolbox />
        <Footer />
    </div>
  )
}

export default Home

