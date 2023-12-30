import React from 'react'
import App from './App';
import { useSelector, useDispatch } from 'react-redux'
import {addToCart } from './states/addToCartSlice'
import MyCart from './MyCart';
import Cart from './Cart';
import Alert from '@mui/material/Alert';

export default function View() {
    const isClicked = useSelector((state) => state.myCart.isClicked)
console.log(isClicked)
  return (
    <div>
        {isClicked ? <MyCart/>:<App/>}
        {/* <Cart/> */}
    </div>
  )
}
