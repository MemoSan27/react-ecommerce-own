import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/Header.css'; 
import logo from "../../assets/img/onshop.png";

const Header = () => {

    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        window.scrollTo(0,0);
        navigate(`/login`)
    }

    const handleNavigateHome = () => {
        window.scrollTo(0,0);
        navigate(`/`)
    }

    const handleNavigateCart = () => {
      window.scrollTo(0,0);
      navigate('/cart');
    }

  return (
    <header className='header'>
      <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' onClick={handleNavigateHome}/>
            <div className='buttons'>
                <button className='navbar__button' onClick={handleNavigateLogin}> <i className='child bx bx-child'></i>Login </button>
                <button className='navbar__button'> <i className='child bx bxs-purchase-tag'></i> Purchases </button>
                <button className='navbar__button' onClick={handleNavigateCart}> <i className='child bx bxs-cart-add'></i> Cart </button>
            </div>
        </nav>
    </header>
  )
}

export default Header
