// // src/components/SingleProduct/SingleProduct.js
// import React, { useEffect, useReducer } from 'react';
// import { useParams } from 'react-router-dom';

// const initialState = {
//   product: null,
//   loading: true,
//   error: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS':
//       return {
//         ...state,
//         product: action.payload,
//         loading: false,
//       };
//     case 'FETCH_ERROR':
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const SingleProduct = () => {
//   const { id } = useParams();
//   console.log("Id clicked is",id);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/products?id=${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch product');
//         }
//         const data = await response.json();
//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (error) {
//         dispatch({ type: 'FETCH_ERROR', payload: error.message });
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

//   if (state.error) {
//     return <div>Error: {state.error}</div>;
//   }

//   const { product } = state;

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Add more product details as needed */}
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import './Singleproduct.css'
import { useParams } from 'react-router';

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
      console.log(data);
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
    {/* <div className='single-product-part'>
    <div className='top-single-product'>
     <div className='left-part-single-product'>
      <div className='left-grid1-single-product'>
        <div className='left-grid-item' onClick={(()=>{
          setMainProduct(product.image[0])
        })}>
          <img src={product.image[0]} alt='1st product' style={{height:"110px",width:"150px"}}/>
        </div>
        <div className='left-grid-item' onClick={(()=>{
          setMainProduct(product.image[1])
        })}>
        <img src={product.image[1]} alt='1st product' style={{height:"110px",width:"150px"}}/>
        </div>
        <div className='left-grid-item' onClick={(()=>{
          setMainProduct(product.image[2])
        })}>
        <img src={product.image[2]} alt='1st product' style={{height:"110px",width:"150px"}}/>
        </div>
        <div className='left-grid-item' onClick={(()=>{
          setMainProduct(product.image[3])
        })}>
        <img src={product.image[3]} alt='1st product' style={{height:"110px",width:"150px"}}/>
        </div>
      </div>

      <div className='left-grid2-single-product'>
        <div className='left2-grid-item'>
        
        <img src={product.image[0]} alt='1st product' style={{height:"555px",width:"400px"}}/>
        </div>
      </div>
    </div>
    <div className='right-part-single-product'>

    </div>
    </div>
    <div className='comparison-part-single-product'>

    </div>
    </div> */}
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
    </div>
    </div>

    
   </>

      
  )
}

export default SingleProductPage
