import './styles/CartPage.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'


const CartPage = () => {

  const cart = useSelector(store => store.cart)

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getCartThunk());
  }, [])

  console.log(cart)

  const totalPriceCart = cart.reduce((acc, cv) => {
    return acc + cv.product.price * cv.quantity
  }, 0)

  return (
    <div className='container2 cart'>
      <h1>Cart</h1>
      <div>
        {
          cart?.map(product => (
            <CartProduct 
              key={product.id}
              product={product}
            />  
          ))
        }
      </div>
      <hr />
      <footer>
        <span> Total: </span>
        <span> {totalPriceCart} </span>
      </footer>
    </div>
  )
}

export default CartPage