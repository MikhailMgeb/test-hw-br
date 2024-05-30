import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cnCart } from './Cart.classname';
import { fetchCartProducts } from '../../store/Cart/cartSlice';
import { RootCartState } from '../types/ReduxTypes';
import { AppDispatch } from '../../store/store';

import './Cart.css';

type CartProps = {
    isFull: boolean;
}

const Cart: FC<CartProps> = ({isFull}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootCartState) => state.cart);

    console.log(products, loading, error)

    useEffect(() => {
        if (loading === false) {
            dispatch(fetchCartProducts());
        }
    }, []);

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
