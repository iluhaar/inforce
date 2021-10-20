import { configureStore,combineReducers } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice'
const rootReducer = combineReducers({
  productReducer
})

export const setupStore = () => {
  return configureStore({
    reducer:rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']