import React from 'react'
import './Home.css'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'



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
          <button id='watch-btn'>Watches</button>
          </div>

          <div className='grid-item'>
          <img src='./images/shoes.jpg' />
          <button id='shoes-btn'>Shoes</button>
          </div>

          <div className='grid-item'>
           <img src='./images/Bags.jpg' />
           <button id='bags-btn'>Bags and Trolleys</button>
          </div>

          <div className='grid-item'>
          <img src='./images/dresses.jpg' />
           <button id='dress-btn'>Dresses</button>
          </div>

          <div className='grid-item'>
          <img src='./images/phones.jpg' />
           <button id='phones-btn'>Phones</button>
          </div>

          <div className='grid-item'>
           <img src='./images/laptops.jpg' />
           <button id='laptops-btn'>Laptops</button>
          </div>

          <div className='grid-item'>
          <img src='./images/headphones.jpg' />
           <button id='headphones-btn'>Headphones & Speaker</button>
          </div>

          <div className='grid-item'>
          <img src='./images/kidswear.jpg' />
           <button id='kids-btn'>Kidswear</button>
          </div>
        </div>
         
           {/* <div className='accordion'>
          <FAQ />
         </div> */}
        
      </div>
      <div className='view-all'>
      <button id='all-prod'>view all products</button>
      </div>
       
    </div>   
    </>
  )
}

export default Home
