import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem } = useCartContext();

  return (
    <>
    <div className='cart-portion'>
    <div className='cart-left'>
      {cart.length === 0 ? (
        <p id='empty-cart'>Your cart is empty</p>
      ) : (
        <div className='cart-items'>
          {cart.map((item, index) => (
            <div key={index} className='individual-cart-item'>
              <div className='cart-product-image'>
                <img src={item.image} alt={`Product ${item.id}`} id='cart-image' />
              </div>
              <div className='cart-product-details'>
                <p className='cart-product-description'>{item.description}</p>
                <p className='cart-product-price'>{item.price}</p>
                <p className='remove-text' onClick={() => removeItem(item.id)}>
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
    <div className='price-details'>
      <h2 id='price-detail-heading'>Price Details of the cart Items</h2>
    </div>
    </div>
    </>
  );
};

export default Cart;
