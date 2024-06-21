import React,{ useState } from 'react'
import './Login.css'
import { useFirebase } from '../../context/Firebase';

function Login() {
    
  const firebase = useFirebase();
  console.log(firebase);

  const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');

  const changeBgColor = () =>{
    document.querySelector('#login-btn').style.backgroundColor='white';
    document.querySelector('#login-btn').style.color='black';
  }

  const changeBgBack = () =>{
    document.querySelector('#login-btn').style.backgroundColor='#d60c0c';
    document.querySelector('#login-btn').style.color='white';
  }
  return (
    <>
      <div className='login-portion'>
      <div className='signpg'>
       <img src='./images/image1.svg' alt='image' id='cartImage' />
        <div className='account-section-login'>
        <h2>Log in to <span> PricePeek</span></h2>
        <p className="details">Enter your details below</p><br/><br/>
        <input 
          onChange={e=>(setEmail(e.target.value))}
          value={email}
          type='email'
          placeholder='Enter your Email'
          required
          autoComplete='off'
          id='email-field'
        /><br/><br/><br/>

        <input 
          onChange={e=>(setPassword(e.target.value))}
          value={password}
          type='password'
          placeholder='Enter your Password'
          required
          autoComplete='off'
          id='password-field'
        /><br/><br/><br/>
        <button 
         onMouseEnter={changeBgColor}
         onMouseLeave={changeBgBack}
        onClick={()=>{
          firebase.signinuser(email,password)
        }} 
        id='login-btn'>
        Log In
        </button>
        <p id='forgot-pass'>Forgot Password ?</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
