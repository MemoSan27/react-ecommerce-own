import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductFromCartThunk } from '../../store/slices/cart.slice';
import './styles/CartProduct.css'
import addComa from '../../utils/addComa';

const CartProduct = ({ product }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductFromCartThunk(product.id))
  }

  return (
    <section className='cart__card-product'>
      <header className='cart__card-product-imgCont'>
        <img className='cart__card-product-img' src={product.product.images[0].url} alt='Img' />
      </header>
      <article>
        <h3 className='cart__card-title'>{product.product.title}</h3>
        <span className='cart__card-quantity'>Quantity: {product.quantity}</span>
        <div className='divider'>
          <div>
            <p className='cart__card-quantity'>Unit Price: $ {addComa(product.product.price)} </p>
            <p className='cart__card-quantity'>Subtotal: $ {addComa((product.product.price * product.quantity).toFixed(2))}</p>
          </div>
          <button className='form__submit trash-submit' onClick={handleDelete}>
            <i className='trash bx bx-trash'></i>
          </button>
        </div>
      </article>
    </section>
  )
}

export default CartProduct