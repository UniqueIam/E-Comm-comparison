import React from 'react'
import './Signup.css'
import { FaGoogle } from "react-icons/fa";
import {Link} from 'react-router-dom';

function SignUp() {


  return (
   <>
    <div className='signup-portion'>
      <img src='./images/image1.svg' alt='image' id='cartImage' />
      <div className='account-section'>
        <h3>Create an <span>Account</span></h3><br/>
        <p>Enter your details below</p><br/><br/>
        <input 
          type='text'
          placeholder='Name'
          required
          id='name-field'
          autoComplete='off'
        /><br/><br/><br/>
        <input 
          type='email'
          placeholder='Email or Phone Number'
          required
          id='email-field'
          autoComplete='off'
        /><br/><br/><br/>
          <input 
          type='password'
          placeholder='Password'
          required
          id='password-field'
          autoComplete='off'
        /><br/><br/>
        <button id='account'>Create Account</button><br/><br/>
        <button id='signup-google'><FaGoogle id='google-icon' />
          Sign up with Google
          </button><br/><br/>
         <p>Already have account? <span><Link to='/login' id='login-link'> Log in</Link></span></p>
      </div>
      </div>
    
   </>
  )
}

export default SignUp
