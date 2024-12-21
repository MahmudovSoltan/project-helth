import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../slices/productSlice'
import { blogSlice } from '../slices/blogSlice'
import { basketSlice } from '../slices/basketSlice'
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    blog:blogSlice.reducer,
    cards: basketSlice.reducer,
  },
})