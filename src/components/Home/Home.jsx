import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'

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
          <button id='watch-btn'>
            <Link to='/watches'>Watches</Link>
           </button>
          </div>

          <div className='grid-item'>
          <img src='./images/shoes.jpg' />
          <button id='shoes-btn'>
          <Link to='/shoes'>Shoes</Link>
           </button>
          </div>

          <div className='grid-item'>
           <img src='./images/Bags.jpg' />
           <button id='bags-btn'>
           Bags
           </button>
          </div>

          <div className='grid-item'>
          <img src='./images/dresses.jpg' />
          <button id='dress-btn'>
          Dress
           </button>
          </div>

          <div className='grid-item'>
          <img src='./images/phones.jpg' />
          <button id='phones-btn'>
          Phones
           </button>
          </div>

          <div className='grid-item'>
           <img src='./images/laptops.jpg' />
           <button id='laptops-btn'>
           Laptops
           </button>
          </div>

          <div className='grid-item'>
          <img src='./images/headphones.jpg' />
          <button id='headphones-btn'>
          Headphones
           </button>
          </div>

          <div className='grid-item'>
          <img src='./images/kidswear.jpg' />
          <button id='kids-btn'>
          KidsWear
           </button>
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
