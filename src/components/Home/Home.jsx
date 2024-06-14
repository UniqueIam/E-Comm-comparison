
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-portion'>
      <div className='firstprt'>
        <div className='heading'>
          <h2><span className='front_des'>Discover a pocket full of fashion treasures </span><br/><br/>
            that won't empty your wallet.
          </h2>
        </div>
      </div>
      <div className='secndprt'>
        <div className='categories-section'>
          <button></button>
          <p id='cate'>Categories</p>
          <p id='browse_cate'>Browse By Categories</p>
        </div>
        <div className='grid-container'>
          <div className='grid-item'>
            <img src='./images/watches.jpg' alt='Watches' />
            <Link to='/products/watches'>
              <button id='watch-btn'>Watches</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/shoes.jpg' alt='Shoes' />
            <Link to='/products/shoes'>
              <button id='shoes-btn'>Shoes</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/Bags.jpg' alt='Bags' />
            <Link to='/products/bags'>
              <button id='shoes-btn'>Bags</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/dresses.jpg' alt='Dresses' />
            <Link to='/products/dress'>
              <button id='shoes-btn'>Dress</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/phones.jpg' alt='Phones' />
            <Link to='/products/phones'>
              <button id='shoes-btn'>Phones</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/laptops.jpg' alt='Laptops' />
            <Link to='/products/laptops'>
              <button id='shoes-btn'>Laptops</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/headphones.jpg' alt='Headphones' />
            <Link to='/products/headphones'>
              <button id='shoes-btn'>Headphones</button>
            </Link>
          </div>
          <div className='grid-item'>
            <img src='./images/kidswear.jpg' alt='KidsWear' />
            <Link to='/products/kidswear'>
              <button id='shoes-btn'>KidsWear</button>
            </Link>
          </div>
        </div>
        <div className='view-all'>
          <button id='all-prod'>
            <Link to='/products'>View all Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
