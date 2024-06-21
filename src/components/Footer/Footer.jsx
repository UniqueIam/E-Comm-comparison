import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () =>{
 
 
  return(
    <>
    
        <div className='footer-portion'>
        <div className='first-col'>
        <h2>Account</h2><br/>
        <ul>
          <li>
          <Link to='/myAccount' id='account-btn'>
           My Account
          </Link>
          </li><br/>
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
          <h2>Reach out to us</h2>
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
            <FaSquareTwitter id='twitter-logo'/>
            </Link>
          
          </div>
        </div>

        <div className='third-col'>
          <h2>Quick Link</h2><br/>
          <Link to='/about' id='about-btn'>
            About Us
          </Link><br/><br/>
          <Link to='/contact' id='contact-btn'>
            Contact Us
          </Link><br/><br/>
          <Link to='/faq' id='faq-btn'>
            FAQ
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Footer;