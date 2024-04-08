import React from 'react'
import ContactForm from './ContactForm'
import Address from './Address'
import "./page.css"

const contact = () => {
  return (
    <div className='contact-wrapper container text-left text-[rgb(68, 68, 68)] px-10'>
      <h1 className='font-bold text-2xl text-blue-900'>Contact Us</h1>
      <p className='font-semibold text-gray-600'>Fill out the form below</p>
      <hr />

      <div className="component">
        <ContactForm />
        <Address />
      </div>
    </div>
  )
}

export default contact
