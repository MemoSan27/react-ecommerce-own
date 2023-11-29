import React from 'react'
import user from '../../assets/img/user.png'
import './styles/User.css'
import { useNavigate } from 'react-router-dom';
import { setIsLogged } from '../../store/slices/log.slice';
import { useDispatch } from 'react-redux';


const User = () => {

    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const localst = JSON.parse(localStorage.getItem('user'))
    const completeName = `${localst?.name} ${localst?.lastname}`
    
    const logout = () => {
      localStorage.clear();
      dispatch(setIsLogged(false));
      navigate('/login');
    }

  return (
    <div className="form">
    <p className='page__title'> Welcome {completeName} </p>
    <img className='user-avatar' src={user} alt='User Photo' />
    <button className="form__submit" onClick={logout}>Logout</button>
    
</div>
  )
}

export default User
