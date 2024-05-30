import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from './Header/HeaderSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
