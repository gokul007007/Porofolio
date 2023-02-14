import React from 'react'
import ContactMeHero from '../components/ContactMeHero'
import Footer from '../components/Footer'

const ContactMe = () => {
  return (
    <div className='contactMe' style={{ backgroundColor: '#040b10' }}>
      <ContactMeHero  />
      <Footer />
    </div>
  )
}

export default ContactMe