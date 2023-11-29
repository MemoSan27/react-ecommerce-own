import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../pages/LoginPage';
import { Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const logged = useSelector(store => store.login);

    if(logged === false){
        return <LoginPage />
    } else{
        return <Outlet />
    }
  
}

export default ProtectedRoutes
