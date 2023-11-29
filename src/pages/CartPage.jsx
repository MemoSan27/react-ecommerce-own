import './styles/CartPage.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import addComa from '../utils/addComa'


const CartPage = () => {

  const cart = useSelector(store => store.cart)

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getCartThunk());
  }, [])

  const totalPriceCart = cart.reduce((acc, cv) => {
    return acc + cv.product.price * cv.quantity
  }, 0)

  

  return (
    <div className='container2 cart'>
      <h1 className='page__title'>Your articles inside your cart</h1>
      <div className='cart__card'>
        {
          cart?.map(product => (
            <CartProduct 
              key={product.id}
              product={product}
            />  
          ))
        }
      </div>
      <hr className='hr' />
      <footer className='cart__footer'>
        <span className='cart__card-title totals'> Total: </span>
        <span className='cart__card-title totals'> $ &nbsp;  {addComa(totalPriceCart.toFixed(2))} </span>
      </footer>
    </div>
  )
}

export default CartPage