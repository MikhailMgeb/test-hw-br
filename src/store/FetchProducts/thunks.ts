import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { RootState } from '../store';
import { CartProduct, CreateProductPayload } from '../../components/types/types';
import { getProductsCart, finishLoading, startLoading, getMinusProduct, getPlusProduct, getDeletePermanently } from '.';

const urlCart = `${BASE_URL}/ShoppingCart/products`;

export const fetchGetCartProducts = createAsyncThunk<void, void, { state: RootState }>(
    'products/fetchProducts',
    async (_, { dispatch }) => {

        dispatch(startLoading());
        const response = await fetch(urlCart);

        const products: CartProduct[] = await response.json();

        dispatch(getProductsCart(products));
        dispatch(finishLoading());
    }
);

const urlDeleteProducts = `${BASE_URL}/ShoppingCart/products`;

export const fetchDeleteProducts = createAsyncThunk<void, void, { state: RootState }>(
    'products/fetchDeleteProducts',
    async (_, { dispatch }) => {

        dispatch(startLoading());
        await fetch(urlDeleteProducts, {
            method: 'DELETE'
        });

        dispatch(getProductsCart([]));
        dispatch(finishLoading());
    }
);

const urlDeleteOneProduct = `${BASE_URL}/ShoppingCart/quantitydec`;

export const fetchDeleteOneProduct = createAsyncThunk<void, CreateProductPayload, { state: RootState }>(
    'products/fetchDeleteOneProduct',
    async (productData: CreateProductPayload, { dispatch }) => {
        dispatch(startLoading());

        const body = {
            ProductId: productData.Id,
            UserGuid: productData.UserGuid,
        }

        await fetch(urlDeleteOneProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        dispatch(getMinusProduct(productData.Id));
        dispatch(finishLoading());
    }
);

const urlPlusOneProduct = `${BASE_URL}/ShoppingCart/quantityinc`;

export const fetchAddOneProduct = createAsyncThunk<void, CreateProductPayload, { state: RootState }>(
    'products/fetchAddOneProduct',
    async (productData: CreateProductPayload, { dispatch }) => {

        dispatch(startLoading());

        const body = {
            ProductId: productData.Id,
            UserGuid: productData.UserGuid,
        }

        await fetch(urlPlusOneProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        dispatch(getPlusProduct(productData.Id));
        dispatch(finishLoading());
    }
);

const urlDeleteProduct = `${BASE_URL}/ShoppingCart/product`;

export const fetchDeleteProduct = createAsyncThunk<void, CreateProductPayload, { state: RootState }>(
    'products/fetchAddOneProduct',
    async (productData: CreateProductPayload, { dispatch }) => {

        dispatch(startLoading());

        const body = {
            ProductId: productData.Id,
            UserGuid: productData.UserGuid,
        }

        await fetch(urlDeleteProduct, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        dispatch(getDeletePermanently(productData.Id));
        dispatch(finishLoading());
    }
);

