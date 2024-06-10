import React, { useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { FaClock,FaPiggyBank,FaSmile } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';


function About() {

  useEffect(()=>{
  window.scrollTo(0,0);
  },[]);
  return (
    <>
        <div className='about-portion'>
          <div className='firsthalf'>
            <div className='storybx'>
              <h1>About Us</h1>
              
              <p>In the vast and ever-growing world of online shopping, navigating through countless websites to find the best deals can be overwhelming. That's where PricePeek comes in, revolutionizing the way savvy shoppers make informed decisions. The platform scans a vast array of e-commerce sites in real-time, compiling and presenting prices, deals, and discounts for a wide range of products. 
                  <br/>
                  <br/>
                  <br/>
               PricePeek is a cutting-edge e-commerce comparison website designed with one mission: to help you save money and time. At PricePeek, we believe that everyone deserves to shop smarter. Our goal is to become the go-to platform for price comparison, helping consumers make informed decisions and find the best deals effortlessly. We are committed to continuously improving our services, expanding our product range, and incorporating user feedback to enhance the shopping experience. Start your journey towards smarter shopping today and let us do the hard work for you...</p>
            </div>
            <img src='./images/aboutpg.jpg' className='aboutimg'/>
          </div>

          <div className='secondhalf'>
            <h2 className='para'>Developers</h2>
              <div className="cover">
                  <div className='wrap'><Link to='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242'>
                      <div className='abhi'></div>
                      <div className='descr'>Abhimanyu</div></Link>
                  </div>
            
                  <div className='wrap'><Link to='https://www.linkedin.com/in/sruti-prusty-995882258'>
                      <div className='sru'></div>
                      <div className='descr'>Sruti  Prusty</div></Link>
                  </div>
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
  )
}

export default About
