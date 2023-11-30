import React from 'react'

const PurchaseCard = ({ purchase }) => {
  return (
    <article>
      <header>
        <img src={purchase.product.images[0].url} alt='Img Purchase' />
      </header>
      <h3>{purchase.product.title}</h3>
      <p>{purchase.quantity}</p>
      <p>{(purchase.product.price * purchase.quantity)}</p>
    </article>
  )
}

export default PurchaseCard
