import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import './Singleproduct.css'
import Stars from '../Stars';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from '../../context/CartContext';


const reducer = (state,action) =>{
    switch (action.type) {
      case "GET_SINGLE_PRODUCT":
        return{
          ...state,
          isLoading:false,
          product:action.payload,
        };
       case "GET_SINGLE_PRODUCT_ERROR":
       return{
          ...state,
          isLoading:false,
          isError:true,
       };
        
    
      default:
        return state;
    }
};

const initialState = {
  product:null,
  isLoading:true,
  isError:false,
};

function SingleProductPage() {
  





  const { id,category } = useParams();
  console.log("Id of the product is",id);
  console.log("The category of the product is:",category);
  const [ state,dispatch] = useReducer(reducer,initialState);
  const [mainImage,setMainImage] = useState('');
  const { cartProducts } = useCartContext();

  const fetchSingleProduct = async() =>{
    try {
      const res = await fetch(`http://localhost:5000/products?id=${id}&category=${category}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      // console.log(data[0].image);
      // console.log(data[0].image[0]);
      const singleProduct = data[0];
      console.log("My data",data);
      console.log(data[0].stars);
      dispatch({type:"GET_SINGLE_PRODUCT",payload:singleProduct});
      setMainImage(singleProduct.image[0]);
    } catch (error) {
      console.log("Error",error);
      dispatch({type:"GET_SINGLE_PRODUCT_ERROR"});
    }
  };

   useEffect(()=>{
   fetchSingleProduct();
  },[id,category]);

  const { product,isLoading,isError } = state;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch product details.</div>;
  }

  if (!product) {
    return <div>No product data available.</div>;
  }
  return (
   <>
    
    <div className='single-product-page'>
      <div className='image-thumbnails'>
        {product.image.map((img, index) => (
          <div className='thumbnail' key={index} onClick={() => setMainImage(img)}>
            <img src={img} alt={`product thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='main-image'>
        <img src={mainImage} alt='main product' style={{height:"440px",width:"400px"}} />
      </div>
       
      <div className='single-product-page-details'>
        <h2 id='single-product-name'>{product.title}</h2>
        <p id='star'>star</p><br/>
        <p>{product.single_page_description}</p>
        <p>{product.price}</p>
        <Stars stars={product.stars}/>
        <Link to='https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0BF57RN3K/ref=sr_1_7?crid=354ZAD850V6IC&dib=eyJ2IjoiMSJ9.1ziruIke18LfDZManf-o-OebEm1M_zH4mISKMdHRmGaZmY8nDNfzQGIn1aVs6PNrYpb7D3hb_QIIhozIJePhx2DvJANeusR16W_AgjLKql37VRJMuQyPRKTxfxGVMQZbfM4sS4oTMh4keSyYnzWip0opUGPmyAm4ivcORXRB-tQLYAiH7eM4L-Uc2bvgtfUE6xsV8xlzzg8J97quTxSF6cUCzf-Q1mFo-x-QU2QZBVBlqO2APJAXbYQfpxMpOG-NFF5uNdWNKhyp5_-IjvsnXeMByyRho5lOte1fhXs0Zvc.Ird4yMuRVuR9CIkciCjBWVxMvH0ScoxgrTkHau8oLcI&dib_tag=se&keywords=watches&qid=1718786531&sprefix=watches%2Caps%2C639&sr=8-7'>
          <p>Buy Now</p>
        </Link>
    </div>
    </div>

    <p id='comparison'>Comparison</p>
    <div className='single-product-comparison'>
      <div className='amazon-price'>
         <h2 id='amazon-heading'>Amazon</h2>
         <p id='price'>Price :-<span id='price-color'> {product.price}</span></p><br/>  
         <p id='ratings'>Rating :- <span id='rating-color'> <Stars stars={product.stars}/> </span></p><br/>
         <Link to='/cart'
         onClick={() => cartProducts({ id: product.id, price: product.price,product })}         >
         <button 
         id='add-to-cart' 
         
         >
         <FaShoppingCart id='cart-icon' />
         Add To Cart
         </button>
         </Link><br/><br/>
         <Link >
         <button id='buy-now'>Buy Now</button>
         </Link>
      </div>
      <div className='flipkart-price'> 
      <h2 id='flipkart-heading'>Flipkart</h2>
      </div>
      <div className='meesho-price'>
      <h2 id='meesho-heading'>Meesho</h2>
      </div>
      <div className='myntra-price'>
      <h2 id='myntra-heading'>myntra</h2>
      </div>
    </div>

    
   </>

      
  )
}

export default SingleProductPage
