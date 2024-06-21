import React from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'


const CartAmountToggle = () => {
    
  
    const [amount,setAmount]=useState(5);
    const setDecrease=()=>{
      amount > 1 ? setAmount(amount-1):setAmount(1);
    };
  
    const setIncrease=()=>{
      amount < stock ? setAmount(amount+1) : setAmount(stock);
    };
  
  return (
    
    <div className='cart-button'>
        <div className='amount-toggle'style={{display:'flex',textAlign:'center'}}>
            <div ><button onClick={()=>setDecrease()}style={{width:'20px',height:'20px'}}><FaMinus/></button></div>
                <div className='amount'style={{width:'20px',height:'20px'}}>{amount}</div>
            <div ><button onClick={()=>setIncrease()} style={{width:'20px',height:'20px'}}><FaPlus/></button></div>
        </div>
      
    </div>
  )
}

export default CartAmountToggle
