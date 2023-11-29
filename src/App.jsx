import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import CartPage from './pages/CartPage'

function App() {
    
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/product/:id' element={<ProductIdPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
