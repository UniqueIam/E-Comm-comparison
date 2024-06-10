import React, { useEffect } from 'react'
import './Contact.css'
import { FaPhone ,FaEnvelope } from 'react-icons/fa';

function Contact() {

  useEffect(()=>{
   window.scrollTo(0,0);
  },[]);
  return (
    <>
      <div className='contact-portion'>
       <h2 id='contact-heading'>Connect With Our Team</h2>
        <div className='contact-wrap'>
          <div className='left-portion'>
           
             <div className='callus'>
               <div className='cont-icon'><FaPhone/></div>
               <h3 className='call'>Call To Us</h3>
              </div>
              <div className='contact'>
               <p className='cont'>We are available 24/7, 7 days a week.<br></br><br></br>Phone : <span id='no'> +91 7325860606 <br/>+91 74889 57748</span></p>
              </div>
           
              <div className='callus'>
               <div className='cont-icon'><FaEnvelope/></div>
               <h3 className='call'>Write To Us</h3>
              </div>
              <div className='contact'>
               <p className='cont'>Fill out our form and we will contact you within 24 hours.<br></br><br></br>Emails : <span id='no'> srutiprusty0@gnail.com <br/>srutiprusty0@gnail.com</span></p>
              </div>    
          </div>
          <div class="contact-form">

          <form action='https://formspree.io/f/xbjnvnbg' method='post'>
            <div className='first'>
              <input 
                type="text" 
                placeholder="Your Name *"
                name='Name'
                  required
                  autoComplete='off'
                />
                <input 
                  type="email" 
                  placeholder="Your Email *"
                  name='Email'
                    autoComplete='off'
                    required
                  />
                <input 
                type="tel"
                placeholder="Your Phone *"
                name='Contact'
                  autoComplete='off'
                  required
                 />
            </div>
                <textarea
                 placeholder="Your Message"
                 name='Message'
                 autoComplete='off'
                  required
                 ></textarea>
                 
            <div className='but'>
              <button type="submit">Send Message</button>
             </div>
             </form>
          </div> 
        </div>
            
         
        
      </div>
    </>
  );
}

export default Contact
