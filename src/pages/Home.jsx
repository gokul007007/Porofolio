import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Toolbox from '../components/Toolbox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home' style={{ backgroundColor: '#040b10' }}>
        <Hero />
        <Experience />
        <Toolbox />
        <Footer />
    </div>
  )
}

export default Home

