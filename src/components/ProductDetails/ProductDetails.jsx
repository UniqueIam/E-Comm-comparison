import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

const initialState = {
  products: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const ProductDetails = () => {
  const { category } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!category) {
          throw new Error('Category is undefined');
        }

        const response = await fetch(`http://localhost:5000/products?category=${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        const filteredProducts = data.filter(product => product.category === category);
        console.log(filteredProducts);
        if (filteredProducts.length > 0) {
          dispatch({ type: 'FETCH_SUCCESS', payload: filteredProducts });
        } else {
          dispatch({ type: 'FETCH_SUCCESS', payload: [] });
          console.warn('No products found for the category:', category);
        }
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchProducts();
  }, [category]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }
    
  return (
    <div className='product-part'>
      {/* <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1> */}
      <div className='filter-section'>
        Filters
      </div>
      <div className='product-category'>
        {state.products.length > 0 ? (
          state.products.map((product) => (
            <div key={product.id} id='single-product'>
            <Link to={`/products/${category}/${product.id}`}>
              <img src={product.image[0]} style={{height:'220px',width:'180px'}} alt={product.title} />
              <h2 id='product-title'>{product.title}</h2>
              <p id='product-description'>{product.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}s
      </div>
    </div>
  );
};

export default ProductDetails;