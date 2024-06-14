import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function Header() {

  return (
    <>
      <div className='nav-portion'>
        <div className='left-part'>PricePeek</div>
        <div className='middle-part'>
        <NavLink
          to="/"
           style={({isActive})=>({
            color:isActive? "red" :"black",textDecoration:isActive?"":'none'
           })}
           >
           Home
          </NavLink>

         <NavLink
          to='/about'
          style={({isActive})=>({
            color:isActive ?"red":"black", textDecoration:isActive?"":'none'
          })}
         >
          About
         </NavLink>

         <NavLink
          to='/contact'
          style={({isActive})=>({
            color:isActive ?"red":"black", textDecoration:isActive?"":'none'
          })}
         >
          Contact
         </NavLink>

         <NavLink
          to='/signup'
          style={({isActive})=>({
            color:isActive ?"red":"black", textDecoration:isActive?"":'none'
          })}
         >
          Signup
         </NavLink>

        </div>

        <div className='right-portion'>
          <input
            type='text'
            placeholder='what are you lookin for?'
           
          />
            <CiSearch id='search-icon' />
            <Link to='/cart'>
            <FaShoppingCart id='cart-icon' />
            </Link>
            
        </div>
      </div>
    </>
  )
}

export default Header
