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
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.products = action.payload.products;
        })
        builder.addCase(fetchCartProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

const cartReducer = cartSlice.reducer;

export { cartReducer };
