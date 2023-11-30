import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductFromCartThunk } from '../../store/slices/cart.slice';
import './styles/CartProduct.css'
import addComa from '../../utils/addComa';

const CartProduct = ({ product }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure on deleting ${product.product.title} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductFromCartThunk(product.id))
      }
    });
  }

  const handlePlus = () => {
    
  }

  return (
    <section className='cart__card-product'>
      <header className='cart__card-product-imgCont'>
        <img className='cart__card-product-img' src={product.product.images[0].url} alt='Img' />
      </header>
      <article>
        <h3 className='cart__card-title'>{product.product.title}</h3>
        <div className='productInfo__quantity'>
              <button className='productInfo__btn'>-</button>
              <div className='productInfo__number'>{product.quantity}</div>
              <button className='productInfo__btn productInfo__plus'>+</button>
        </div>
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