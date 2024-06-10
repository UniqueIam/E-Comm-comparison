import React from 'react'
import './Cart.css'
import ProductDetails from '../ProductDetails/ProductDetails'
function Cart() {
  return (
   <>
    <div className='cart-portion'>
      Cart Page<br/>
      <ProductDetails/>
      
    </div>
   </>
  )
}

export default Cart
