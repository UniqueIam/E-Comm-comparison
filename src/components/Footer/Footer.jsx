import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className='footer-portion'>
        <div className='first-col'>
        <h3>Account</h3><br/>
        <ul>
          <li>My Account</li><br/>
          <li>
          <Link to='/login' id='login-btn'>
          Login/Register
          </Link>
          </li><br/>
          <li>
          <Link to='/cart' id='cart-btn'> Cart</Link>
          </li>
         
        </ul>
        </div>

        <div className='second-col'>
          <h3>Reach out to us</h3>
          <div className='social-icons'>
          <Link to='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242'>
          <FaInstagram id='insta-logo'/>
            </Link>
          
            <Link to='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242'>
            <FaFacebookSquare id='face-logo' />
            </Link>
        
          <Link to='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242'>
          <FaLinkedin id='linkedin-logo' />
            </Link>

            <Link to='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242'>
            <FaSquareTwitter />
            </Link>
          
          </div>
        </div>

        <div className='third-col'>
          <h3>Quick Link</h3><br/>
          <Link to='/about' id='about-btn'>
            About Us
          </Link><br/><br/>
          <Link to='/contact' id='contact-btn'>
            Contact Us
          </Link><br/><br/>
          <Link id='faq-btn'>
            FAQ
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer
