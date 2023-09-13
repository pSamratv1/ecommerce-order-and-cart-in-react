import React from 'react';
import cart from '../assets/cart.svg'
import {useSelector} from "react-redux"
import { Link} from "react-router-dom";


const Header = () => {
  const {cartTotal} = useSelector((state)=>state.order)
  const items = cartTotal.length

  return (
    <div className='header'>
     <Link to="/"><h1 className='logo'>Logo</h1></Link>
     <span className="cart-feild">
        <p className='items'>
            ({items})
        </p>
            <Link to="/cart"><img className='cart-img' src={cart} alt="cart" /></Link>
     </span>
    </div>
  )
}

export default Header
