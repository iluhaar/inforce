import { IProduct } from './../../models/IProduct';
import axios from "axios";
import { AppDispatch } from "../store";
import { productSlice } from './productSlice';
export const fetchProducts = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>('http://localhost:3001/product')
        dispatch(productSlice.actions.productFetchingSuccess(response.data))

    } catch (error) {
        // dispatch(productSlice.actions.productFetchingError(error.message))
    }
}