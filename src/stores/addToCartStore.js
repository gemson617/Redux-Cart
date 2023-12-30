import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from '../states/addToCartSlice'

export const store = configureStore({
  reducer: {
    myCart: addToCartReducer,
  },
})