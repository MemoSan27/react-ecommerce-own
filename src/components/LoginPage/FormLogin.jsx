import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/onshop.png";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {

  const navigate = useNavigate();

    const handleNavigateHome = () => {
        window.scrollTo(0,0);
        navigate(`/`)
    }

    const handleNavigateReg = () => {
      window.scrollTo(0,0);
      navigate(`/register`)
  }

  const { register, handleSubmit, reset } =  useForm();

  const { loginUser } =  useAuth();

  const submit = (data) => {
    loginUser(data);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
        <p className='page__title'> Login <i className='bx bxs-key'></i> </p>
        <div className="shop" onClick={handleNavigateHome}>
          <img src={logo} alt="Company Logo" />
        </div>
        <label>
          <span className="form__span">Email:</span>
          <input {...register('email')} type="email" className="form__input"></input>
        </label>

        <label>
          <span className="form__span">Password:</span>
          <input {...register('password')} type="password" className="form__input"></input>
        </label>

        <button className="form__submit">Login</button>
        <p className="question"> Dont you have an account yet?</p>
        <button className="form__submit registerBtn" onClick={handleNavigateReg}>Register</button>
    </form>
    
  )
}

export default FormLogin
