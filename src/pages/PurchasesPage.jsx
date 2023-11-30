import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/Purchases.css'
import getConfigToken from '../utils/getTokenConfig'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'
import Loading from '../components/Loading'

const PurchasesPage = () => {

  const [ purchases, getPurchases] = useFetch()

  useEffect( () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    getPurchases(url, getConfigToken())
  }, [])

  
  return (
    
    <div className='purchases container2'>
        { !purchases && <Loading /> }
        <h1 className='page__title cart__title'>My Purchases</h1>
        <div className='purchases__container'>
            <div className='purchase__top'>
                <p className='purchase__desc tableTop'>Product Image</p>
                <p className='purchase__desc tableTop'>Model</p>
                <p className='purchase__desc tableTop'>Quantity</p>
                <p className='purchase__desc tableTop'>Unit Price</p>
            </div>
            {
                purchases?.map(purchase => (
                    <PurchaseCard 
                        key={purchase.id}
                        purchase={purchase}
                    />
                ))
            }

            {
                !purchases?.[0] &&
                (<><hr className='hr' /> <h1 className='page__title cart__title'> No articles in your car yet</h1></>)
            }
        </div>
    </div>
  )
}

export default PurchasesPage
