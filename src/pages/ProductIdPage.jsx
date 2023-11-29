import React, { useEffect } from 'react'
import ProductInfo from '../components/ProductIdPage/ProductInfo'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import SimilarProducts from '../components/ProductIdPage/SimilarProducts';
import './styles/ProductIdPage.css'
import Loading from '../components/Loading';

const ProductIdPage = () => {

  const { id } = useParams();

  const [ product, getProduct ] = useFetch();

  useEffect( () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  }, [id])


  return (
    <>
    { !product && <Loading /> }
    <div className='container productid'>
      <ProductInfo 
        product={product}
      />
      <SimilarProducts 
      categoryId={product?.category.id}
      idProd={product?.id}
      />
    </div>
    </>
  )
}

export default ProductIdPage
