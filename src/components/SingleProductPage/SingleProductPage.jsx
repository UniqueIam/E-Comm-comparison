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

import React from 'react'

function SingleProductPage() {
  return (
    <div>
      Single Product
    </div>
  )
}

export default SingleProductPage
