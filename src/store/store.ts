import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from './Header/HeaderSlice';
import { cartReducer } from './Cart/cartSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        cart: cartReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
