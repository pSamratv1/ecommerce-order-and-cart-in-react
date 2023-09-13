  import React from 'react'
  import { setCartTotal } from '../redux-app/slices/OrderSlice';
  import { useDispatch } from 'react-redux';
import { addToCart } from '../redux-app/slices/CartSlice';



  const Cards = ({data}) => {


    const dispatch = useDispatch();
    const handleClick=(e)=> {
      dispatch(setCartTotal(data.id))
      dispatch(addToCart(data))





    }
    

    return (
      <div className='cards'>
        <h2 className='card-product-title'>
          {data.title}
          </h2> 
          <span className="product">
              <img src={data.thumbnail} alt="" className="product-img" />
              <p className='product-info'>{data.description}</p>
          </span>
          <p className='price'>$ {data.price}</p>
          <button className='addtocart' id={data.id} type='submit'onClick={(e)=> handleClick(e) }>Add to cart</button>
          
      </div>
    )
  }

export default Cards
