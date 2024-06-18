import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
 import { CiSearch } from "react-icons/ci"; */
import { FaShoppingCart } from "react-icons/fa";
import { BiUserCircle } from 'react-icons/bi';
/* 
import Search from '../Search';
import Route from 'react-router-dom'; */

function Header() {

  return (
    <>
      <div className='nav-portion'>
        <div className='left-part'><p>Price<span>Peek</span></p></div>
        <div className='middle-part'>
        <NavLink
          to="/"
           style={({isActive})=>({
            color:isActive? "#d60c0c" :"aliceblue",textDecoration:isActive?"":'none'
           })}
           >
           Home
          </NavLink>

         <NavLink
          to='/about'
          style={({isActive})=>({
            color:isActive ?"#d60c0c":"aliceblue", textDecoration:isActive?"":'none'
          })}
         >
          About
         </NavLink>

         <NavLink
          to='/contact'
          style={({isActive})=>({
            color:isActive ?"#d60c0c":"aliceblue", textDecoration:isActive?"":'none'
          })}
         >
          Contact
         </NavLink>

         <NavLink
          to='/signup'
          style={({isActive})=>({
            color:isActive ?"#d60c0c":"aliceblue", textDecoration:isActive?"":'none'
          })}
         >
          Signup
         </NavLink>

        </div>

        <div className='right-portion'>
        <div className='searchinput'>
         <CiSearch id='search-icon' />
          <input 
            type='text'
            placeholder='What are you looking for ?'
            id='search'
          />
           

          {/* <Route render={(history)=><Search history={history}/>  }/> */}



          </div>
          
            <div>
            <Link to='/cart'>
                <FaShoppingCart id='cart-icon' />
              </Link>
            </div>
              
            
            
            <div>
            <Link to=''>
              <BiUserCircle id='id-icon'/>
            </Link>
            </div>
            
            
        </div>
      </div>
    </>
  )
}

export default Header
