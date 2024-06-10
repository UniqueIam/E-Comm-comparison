import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';


const API = "http://localhost:5000/products";

function SingleProduct() {
    const { singleProduct,isSingleError,fetchSingleProduct } = useProductContext();
    
    const { id } = useParams();
    console.log("File:Single Product.jsx Single-product~id",id);

   
  useEffect(() => {
    if (id) {
      fetchSingleProduct(`${API}?id=${id}`);
    }
  }, [id]);

  if (isSingleError) {
    return <div>Error loading product</div>;
  }
  return (
    <>
        <h1>Single Product Page</h1>
      {singleProduct ? (
        <div>
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
          <img src={singleProduct.image} alt={singleProduct.title} width={100} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default SingleProduct
