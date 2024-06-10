import React from 'react'
import { useProductContext } from '../../context/ProductContext'

function ProductDetails() {

    const {products,isError}  = useProductContext();
  
    if(isError){
        return <div>Error in calling the API</div>;

    }
    console.log("Products in ProductDetails:", products);
  return (
    <>
        Product Details
        <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductDetails;
