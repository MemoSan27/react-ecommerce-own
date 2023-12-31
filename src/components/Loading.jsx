import React from 'react'
import './styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading-screen'>
        <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      
    </div>
  )
}

export default Loading
