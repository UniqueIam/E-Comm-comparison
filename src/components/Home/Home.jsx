import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {


  return (
    <>
        
    <div className='home-portion'>
      <div className='firstprt'>
        <div className='heading'>
         <h2><span className='front_des'>Discover a pocket full of fashion treasures </span><br/><br/>
         that won't empty your wallet. </h2>
        </div>
      </div>
      <div className='secndprt'>
        
          <div className='categories-section'>
              <button></button>
              <p id='cate'>categories</p>
              <p id='browse_cate'>Browse By categories</p>
          </div>
        
        <div className='grid-container'>

          <div className='grid-item'>
          <img src='./images/watches.jpg' />
          {/* <button id='watch-btn'>Watches</button> */}
          <Link to='/products/watches' id='watch-link'>
          <button id='watch-btn'>
            Watches
           </button>
           </Link>
          </div>

          <div className='grid-item'>
          <img src='./images/shoes.jpg' />
          <Link to='/products/shoes' id='shoes-link'>
          <button id='shoes-btn'>
          Shoes
           </button>
           </Link>
          </div>

          <div className='grid-item'>
           <img src='./images/Bags.jpg' />
           <Link to='/products/bags' id='bags-link'>
           <button id='shoes-btn'>
          Bags
           </button>
           </Link>
          </div>

          <div className='grid-item'>
          <img src='./images/dresses.jpg' />
          <Link to='/products/dress' id='dress-link'>
          <button id='shoes-btn'>
          Dress
           </button>
           </Link>
          </div>

          <div className='grid-item'>
          <img src='./images/phones.jpg' />
          <Link to='/products/phones' id='phones-link'>
          <button id='shoes-btn'>
          Phones
           </button>
           </Link>
          </div>

          <div className='grid-item'>
           <img src='./images/laptops.jpg' />
           <Link to='/products/laptops' id='laptops-link'>
           <button id='shoes-btn'>
          Laptops
           </button>
           </Link>
          </div>

          <div className='grid-item'>
          <img src='./images/headphones.jpg' />
          <Link to='/products/headphones' id='headphones-link'>
          <button id='shoes-btn'>
          Headphones
           </button>
           </Link>
          </div>

          <div className='grid-item'>
          <img src='./images/kidswear.jpg' />
          <Link to='/products/kidswear' id='kidswear-link'>
          <button id='shoes-btn'>
           KidsWear
           </button>
           </Link>
          </div>
        </div>

        <div className='view-all'>

            <button id='all-prod'><Link to='/products'>View all Products</Link>
            
            </button>
        </div>
       </div> 
       
    </div>   
    </>
  )
}

export default Home
