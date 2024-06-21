
import React, { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaClock,FaPiggyBank,FaSmile } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';


function Home() {

  useEffect(()=>{
    window.scrollTo(0,0);
    },[]); 

  return (
    <>
    
    <div className='home-portion'>
      <div className='firstprt'>
        <div className='heading'>
            <p className='head'>Hurry, Pricepeek Is Almost Here !</p><br/>
          <p className='front_des'>Discover a pocket full of <span className='des'> fashion treasures <br/><br/>
            that won't empty your wallet.</span>
          </p>
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
          
            <Link to='/products'><button id='all-prod'>View all Products</button></Link>
          
        </div>
      </div>
    
    <div className='lasthalf'>
              <div className='leftpor'>
                  <p className='why'>Why choose <br></br> Pricepeek ?</p>
                  <p className='joy'>THE JOY OF <br></br>SHOPPING AT ITS<br></br> BEST</p>
              </div>
    <div className='rightpor'>
                 <div className="feature">
                    <div className="icon"><FaClock/></div>
                    <h3>Time-Saving</h3>
                    <p className='fea-p'>No more endless browsing and multiple tabs, all the information you need is now in one location.</p>
                  </div>
                  <div className="feature">
                    <div className="icon"><FaPiggyBank/></div>
                    <h3>Money-Saving</h3>
                    <p className='fea-p'>By comparing prices across various sites, giving you the best deal available.</p>
                  </div>
                  <div className="feature">
                    <div className="icon"><FaSmile/></div>
                    <h3>User-Friendly Interface</h3>
                    <p className='fea-p'>Designed with simplicity in mind so that easy to navigate, even for those who are not tech-savvy.</p>
                  </div>
                  <div className="feature">
                    <div className="icon"><MdUpdate/></div>
                    <h3>Real-Time Updates</h3>
                    <p className='fea-p'>Prices and deals are updated continuously, providing you with the most current information.</p>
                  </div>
              </div>
        
    </div>
 </div>
    </>
  );
}

export default Home;
