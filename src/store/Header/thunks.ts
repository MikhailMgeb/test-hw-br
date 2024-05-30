import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { RootState } from '../store';
import { finishLoading, getHeaderData, startLoading } from '.';

const urlHeader = `${BASE_URL}/ShoppingCart/header`;

export const fetchHeaderData = createAsyncThunk<void, void, { state: RootState }>(
    'header/fetchHeader',
    async (_, { dispatch, getState }) => {
        dispatch(startLoading());
        const response = await fetch(urlHeader);

        const data: any = await response.json();

        dispatch(getHeaderData(data));
        dispatch(finishLoading());
    }
);
