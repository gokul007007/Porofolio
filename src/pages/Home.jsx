import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Experience />
    </div>
  )
}

export default Home