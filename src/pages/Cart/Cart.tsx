import React from 'react';
import { useSelector } from 'react-redux';

import { cnCart } from './Cart.classname';
import { RootState } from '../../store/store';

import './Cart.css';
import { CardCart } from '../../components/CardCart/CardCart';
import { uid } from 'uid/single';

const Cart = () => {
    const { products, loading, error } = useSelector((state: RootState) => state.cart);
    console.log(products);

    return (
        <section className={cnCart()}>
            <div className={cnCart('Container')}>
                <div className={cnCart('CartTitle')}>Ваша корзина</div>
            </div>
            <div>
                {products.map((card) => <CardCart key={uid()}/>)
                }
            </div>
        </section>
    );
}

export { Cart };
