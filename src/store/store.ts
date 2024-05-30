import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from './Header';
import { cartReducer } from './Cart';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        cart: cartReducer,
    },
    //@ts-expect-error
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
