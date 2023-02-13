import React from 'react'
import ContactMeHero from '../components/ContactMeHero'
import Footer from '../components/Footer'

const ContactMe = () => {
  return (
    <div className='contactMe' style={{ backgroundColor: '#040b10' }}>
      <ContactMeHero  />
      {/* <div style={{ position: 'absolute', bottom: '0', backgroundColor: '#040b10', width: '100%'}}>
        <Footer />
      </div> */}
      <Footer />
    </div>
  )
}

export default ContactMe