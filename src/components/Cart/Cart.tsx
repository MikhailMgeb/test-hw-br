import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cnCart } from './Cart.classname';
import { fetchCartProducts } from '../../store/Cart/thunks';
import { AppDispatch, RootState } from '../../store/store';

import './Cart.css';


type CartProps = {
    isFull: boolean;
}

const Cart: FC<CartProps> = ({ isFull }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.cart);

    console.log(products)

    useEffect(() => {
        dispatch(fetchCartProducts());
    }, [dispatch, isFull]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className={cnCart()}>
            <h2 className={cnCart('Title')}>Твоя корзина</h2>
        </section>
    );
}

export { Cart };
