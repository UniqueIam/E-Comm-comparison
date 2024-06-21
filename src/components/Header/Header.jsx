import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { BiUserCircle } from 'react-icons/bi';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='nav-portion'>
        <div className='left-part'>
        <div className='hamburger' onClick={toggleMobileMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div><p>Price<span>Peek</span></p></div>
        <div className='middle-part'>
          <div className='option'>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#d60c0c" : "aliceblue",
                textDecoration: isActive ? "" : 'none'
              })}
            >
              Home
            </NavLink>
          </div>
          <div className='option'>
            <NavLink
              to='/about'
              style={({ isActive }) => ({
                color: isActive ? "#d60c0c" : "aliceblue",
                textDecoration: isActive ? "" : 'none'
              })}
            >
              About
            </NavLink>
          </div>
          <div className='option'>
            <NavLink
              to='/contact'
              style={({ isActive }) => ({
                color: isActive ? "#d60c0c" : "aliceblue",
                textDecoration: isActive ? "" : 'none'
              })}
            >
              Contact
            </NavLink>
          </div>
          <div className='option'>
            <NavLink
              to='/signup'
              style={({ isActive }) => ({
                color: isActive ? "#d60c0c" : "aliceblue",
                textDecoration: isActive ? "" : 'none'
              })}
            >
              Signup
            </NavLink>
          </div>
        </div>
        <div className='right-portion'>
          <div className='searchinput'>
            <CiSearch id='search-icon' />
            <input 
              type='text'
              placeholder='What are you looking for?'
              id='search'
            />
          </div>
          <div>
            <Link to='/cart'>
              <FaShoppingCart id='cart-icon' />
            </Link>
          </div>
          <div>
            <Link to='/profile'>
              <BiUserCircle id='id-icon' />
            </Link>
          </div>
          
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" id='option' onClick={toggleMobileMenu}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink>
        <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
        <NavLink to="/signup" onClick={toggleMobileMenu}>Signup</NavLink>
      </div>
      
    </>
  );
}

export default Header;