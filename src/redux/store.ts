import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products';

const reducer = {
  products: productsReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;