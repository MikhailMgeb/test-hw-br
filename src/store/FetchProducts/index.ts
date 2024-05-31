import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct, CreateProductPayload, InitialCartState } from '../../components/types/types';

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
            console.log(state.products);
            state.products = action.payload;
        },
        getMinusProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.map(product => {
                if (product.Id === action.payload) {
                    product.Quantity -= 1;
                }

                return product;
            });
        },
        getPlusProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.map(product => {
                if (product.Id === action.payload) {
                    product.Quantity += 1;
                }

                return product;
            });
        },
        getDeletePermanently: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.Id !== action.payload);
        },
        startLoading: (state) => {
            state.loading = true;
        },
        finishLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { getProductsCart, startLoading, finishLoading, getMinusProduct, getPlusProduct, getDeletePermanently } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartReducer };
