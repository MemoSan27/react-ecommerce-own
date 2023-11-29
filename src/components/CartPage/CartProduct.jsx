import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductFromCartThunk } from '../../store/slices/cart.slice';

const CartProduct = ({ product }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductFromCartThunk(product.id))
  }

  return (
    <section>
      <header>
        <img src={product.product.images[0].url} alt='Img' />
      </header>
      <article>
        <h3>{product.product.title}</h3>
        <span>{product.quantity}</span>
        <div>
          <p>Unit Price: {product.product.price} </p>
          <p>Subtotal: {product.product.price * product.quantity}</p>
        </div>
      </article>
      <button onClick={handleDelete}>
        <i className='bx bx-trash'></i>
      </button>
    </section>
  )
}

export default CartProduct