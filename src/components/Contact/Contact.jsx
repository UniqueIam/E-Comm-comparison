import React from 'react'
import './Contact.css'
import { FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div className='contact-portion'>
        <div className='left-portion'>
           <h2 id='contact-heading'>Connect With Our Team</h2>
             <div className='callus'>
               <FaPhone id='call'/><h3 className=''>Call To Us</h3>
              </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Contact
