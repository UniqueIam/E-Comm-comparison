import React, { useEffect } from 'react'
import './Contact.css'
import { FaPhone } from 'react-icons/fa';
import SingleProduct from '../SingleProduct/SingleProduct';

function Contact() {

  useEffect(()=>{
   window.scrollTo(0,0);
  },[]);
  return (
    <>
      <div className='contact-portion'>
        <div className='left-portion'>
           <h2 id='contact-heading'>Connect With Our Team</h2>
             <div className='callus'>
               <FaPhone id='call'/><h3 className=''>Call To Us</h3>
              </div>
             
        </div>
        <SingleProduct/>
      </div>
      
    </>
  )
}

export default Contact
