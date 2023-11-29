import axios from "axios"
import { setIsLogged } from "../store/slices/log.slice";
import { useDispatch } from "react-redux";

const useAuth = () => {

    const dispatch = useDispatch();
  
    const registerUser = (user) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
        axios.post(url, user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const loginUser = async(credentials) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
        axios.post(url, credentials)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify({
                email: res.data.user.email,
                name: res.data.user.firstName,
                lastname: res.data.user.lastName 
            }))
            dispatch(setIsLogged(true));
        })
        .catch(err => console.log(err))
    }
  
    return { registerUser, loginUser }
}

export default useAuth
