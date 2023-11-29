import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getTokenConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (currentValue, {payload}) => [...currentValue, payload],
        removeFromCart: (currentValue, {payload}) => currentValue.filter(product => product.id !== payload), 
        setCart: (currentValue, {payload}) => payload
    }
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;

const baseURL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

export const getCartThunk = () => (dispatch) => {
    const url = `${baseURL}`
    axios.get(url, getConfigToken())
    .then( res => dispatch(setCart(res.data)))
    .catch(err => console.log(err))
}

export const addProductToCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${baseURL}`
    const data = {
        productId,
        quantity,
    }
    axios.post(url, data, getConfigToken())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const deleteProductFromCartThunk = (id) => (dispatch) => {
    const url = `${baseURL}/${id}`
    axios.delete(url, getConfigToken())
    .then(res => {
        dispatch(removeFromCart(id));
        console.log(res.data)})
    .catch(err => console.log(err))
}