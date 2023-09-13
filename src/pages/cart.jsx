import React from 'react'
import Header from '../component/Header'
import CartCard from '../component/CartCard'



const Cart = (item) => {

  return (
    <>
    <Header/>
        <h2 className='cart-title'>Cart Item</h2>
        <div className='cart'>
          <div className='table-head'>
              <h3 className='cart-head1'>Desc.</h3>
              <h3 className='cart-head2'>Quantity</h3>
              <h3 className='cart-head3'>Remove</h3>
              <h3 className='cart-head4'>Price</h3>
          </div>
          <CartCard/>                     
                                   
        </div>
    </>
  )
}

export default Cart
