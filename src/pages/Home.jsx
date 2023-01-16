import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Toolbox from '../components/Toolbox'

const Home = () => {
  return (
    <div className='home' style={{ backgroundColor: '#040b10' }}>
        <Navbar />
        <Hero />
        <Experience />
        <Toolbox />
    </div>
  )
}

export default Home