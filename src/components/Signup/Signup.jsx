import React, { useState } from 'react'
import { useFirebase } from '../../context/Firebase';
import './Signup.css'
import { FaGoogle } from "react-icons/fa";
import {Link} from 'react-router-dom';


function SignUp() {

 const firebase = useFirebase();
 console.log(firebase);

 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');

  return (
   <>
    <div className='signup-portion'>

     <div className='signpg'>
         <img src='./images/image1.svg' alt='image' id='cartImage' />
            <div className='account-section-signUp'>
              <h2>Create an <span>Account</span></h2><br/>
              <p className="details">Enter your details below</p><br/><br/>
                <input 
                type='text'
                placeholder='Name'
                 required
                 id='name-field'
                  autoComplete='off'
                 /><br/><br/><br/>
               <input 
                 onChange={e=>(setEmail(e.target.value))}
                 value={email}
                  type='email'
                  placeholder='Email or Phone Number'
                   required
                  id='email-field'
                  autoComplete='off'
                  /><br/><br/><br/>
                  <input 
                    onChange={e=>(setPassword(e.target.value))}
                      value={password}
                     type='password'
                      placeholder='Password'
                      required
                      id='password-field'
                     autoComplete='off'
                    /><br/><br/>
                    <button onClick={()=>{
                     firebase.signupUserWithEmailandPassword(email,password)
                    firebase.putData("users/"+"Abhimanyu",{email,password })
                   }} 
                   id='account'>
                   Create Account
                     </button><br/><br/>
                     <button onClick={()=>{
                     firebase.signUpWithGoogle()
                     }} 
                    id='signup-google'>
                     <FaGoogle id='google-icon'/>
                     Sign up with Google
                    </button><br/>

                    <p>Already have account? <span><Link to='/login' id='login-link'> Log in</Link></span></p>
         
            </div>
    
      </div>
    </div>
   </>
  )
}

export default SignUp
