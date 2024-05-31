import React from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'uid/single';

import { cnCart } from './Cart.classname';
import { RootState } from '../../store/store';

import './Cart.css';
import { CardCart } from '../../components/CardCart/CardCart';
import { CartProduct } from '../../components/types/ReduxTypes';

const Cart = () => {
    const { products, loading, error } = useSelector((state: RootState) => state.cart);

    return (
        <section className={cnCart()}>
            <div className={cnCart('Container')}>
                <div className={cnCart('CartTitle')}>Ваша корзина</div>
            </div>
            <div className={cnCart('List')}>
                {products.map((card: CartProduct) => <CardCart products={card} key={uid()} />)
                }
            </div>
        </section>
    );
}

export { Cart };
