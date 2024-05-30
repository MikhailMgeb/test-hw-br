import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { RootState } from '../store';
import { CartProduct } from '../../components/types/ReduxTypes';
import { getProductsCart, finishLoading, startLoading } from '.';

const urlCart = `${BASE_URL}/ShoppingCart/products`;

export const fetchCartProducts = createAsyncThunk<void, void, { state: RootState }>(
    'products/fetchProducts',
    async (_, { dispatch }) => {

        dispatch(startLoading());
        const response = await fetch(urlCart);

        const products: CartProduct[] = await response.json();

        dispatch(getProductsCart(products));
        dispatch(finishLoading());
    }
);

