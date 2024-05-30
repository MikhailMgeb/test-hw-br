import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct, InitialCartState } from '../../components/types/ReduxTypes';



const INITIAL_STATE: InitialCartState = {
    products: [],
    loading: false,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        getProductsCart: (state, action: PayloadAction<CartProduct[]>) => {
            state.products = action.payload;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        finishLoading: (state) => {
            state.loading = false;
        },
    },
});


export const { getProductsCart, startLoading, finishLoading } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartReducer };
