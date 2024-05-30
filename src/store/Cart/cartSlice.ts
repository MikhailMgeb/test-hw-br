import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { InitialCartState } from '../../components/types/ReduxTypes';

const urlCart = `${BASE_URL}/ShoppingCart/products`;

export const fetchCartProducts = createAsyncThunk(
    'cart/fetchCartProducts',
    async () => {
        try {
            const response = await fetch(urlCart);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState: InitialCartState = {
    products: [],
    loading: false,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        initialState
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProducts.pending, (state) => {
                state.initialState.loading = true;
                state.initialState.error = null;
            })
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.initialState.loading = false;
                state.initialState.products = action.payload;
            })
            .addCase(fetchCartProducts.rejected, (state, action) => {
                state.initialState.loading = false;
                state.initialState.error = action.error.message;
            });
    },
});

const cartReducer = cartSlice.reducer;

export { cartReducer };
