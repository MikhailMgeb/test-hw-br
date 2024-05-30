import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HeaderState } from '../../components/types/ReduxTypes';

const initialState: HeaderState = {
    LogoImg: '',
    UsedGuid: '',
    UserName: '',
    status: 'idle',
    error: null,
}

const headerSlice = createSlice({
    name: 'Header',
    initialState,
    reducers: {
        getHeaderData: (state, action: PayloadAction<HeaderState>) => {
            state.LogoImg = action.payload.LogoImg;
            state.UserName = action.payload.UserName;
            state.UsedGuid = action.payload.UsedGuid;
            state.status = 'idle';
            state.error = null;
        },
        startLoading: (state) => {
            state.status = 'loading';
        },
        finishLoading: (state) => {
            state.status = 'succeeded';
        },
    }
})

export const { getHeaderData, startLoading, finishLoading } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
