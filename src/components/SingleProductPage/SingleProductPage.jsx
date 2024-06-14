// // SingleProduct.js

// import React, { useReducer, useEffect } from 'react';
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
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchSingleProduct = async () => {
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

//     fetchSingleProduct();
//   }, [id]);

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

//   if (state.error) {
//     return <div>Error: {state.error}</div>;
//   }

//   return (
//     <div className="product-detail">
//       {state.product && (
//         <div>
//           <h1>{state.product.name}</h1>
//           <p>{state.product.description}</p>
//           <p>Price: ${state.product.price}</p>
//           <img src={state.product.image} alt={state.product.name} />
//           <button>Add to Cart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;
import React from 'react';
import './singleproduct.css'

function SingleProductPage() {
  return (
    <div>
    <h1>helloo</h1>
      
    </div>
  )
}

export default SingleProductPage
