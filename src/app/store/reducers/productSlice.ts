import { IProduct } from './../../models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface productState {
    product: IProduct[];
    isLoading: boolean;
    error: string
}

const initialState: productState = {
    product: [
        // {
        //     "id": 1,
        //     "imageUrl": "some url here",
        //     "name": "Product name",
        //     "count": 4,
        //     "size": {
        //         "width": 200,
        //         "height": 200
        //     },
        //     "weight": "200g",
        // },
        // {
        //     "id": 2,
        //     "imageUrl": "some url here",
        //     "name": "Product name",
        //     "count": 4,
        //     "size": {
        //         "width": 200,
        //         "height": 200
        //     },
        //     "weight": "300g",
        // },
    ],
    isLoading: false,
    error: ''

}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productFetching(state){
            state.isLoading = true
        }, 
        productFetchingSuccess(state, action:PayloadAction<IProduct[]>){
            state.isLoading = false;
            state.error = '';
            state.product = action.payload;

        },
        productFetchingError(state, action:PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        newProductSet(state, action:PayloadAction<IProduct[]>){
            state.product = action.payload
        }
    }
})

export default productSlice.reducer;