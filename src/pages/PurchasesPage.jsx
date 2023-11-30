import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/Purchases.css'
import getConfigToken from '../utils/getTokenConfig'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'

const PurchasesPage = () => {

  const [ purchases, getPurchases] = useFetch()

  useEffect( () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    getPurchases(url, getConfigToken())
  }, [])

  
  return (
    <div className='purchases container2'>
        <h1 className='page__title cart__title'>My Purchases</h1>
      {
        purchases?.map(purchase => (
            <PurchaseCard 
                key={purchase.id}
                purchase={purchase}
            />
        ))
      }
    </div>
  )
}

export default PurchasesPage
