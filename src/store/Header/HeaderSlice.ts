import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InitialHeaderState } from '../../components/types/ReduxTypes';
import { BASE_URL } from '../../utils/constants';

const initialState: InitialHeaderState = {
    LogoImg: '',
    UsedGuid: '',
    UserName: '',
    status: 'idle',
    error: null,
}

const urlHeader = `${BASE_URL}/ShoppingCart/header`;

export const fetchHeaderData = createAsyncThunk('header/fetchHeader', async () => {
    try {
        const response = await fetch(urlHeader);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const headerSlice = createSlice({
    name: 'Header',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHeaderData.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchHeaderData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.LogoImg = action.payload.LogoImg;
            state.UsedGuid = action.payload.UsedGuid;
            state.UserName = action.payload.UserName;
        });
        builder.addCase(fetchHeaderData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

const headerReducer = headerSlice.reducer;

export { headerReducer };
