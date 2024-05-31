import React from 'react';
import { useSelector } from 'react-redux';
import { uid } from 'uid/single';

import { cnCart } from './Cart.classname';
import { RootState } from '../../store/store';
import { CardCart } from '../../components/CardCart/CardCart';
import { CartProduct } from '../../components/types/ReduxTypes';
import deleteIcon from '../../assets/image/icons-delete.png';

import './Cart.css';

const Cart = () => {
    const { products, loading, error } = useSelector((state: RootState) => state.cart);

    return (
        <section className={cnCart()}>
            <div className={cnCart('Container')}>
                <div className={cnCart('CartTitle')}>Ваша корзина</div>
                <div className={cnCart('CartClear')}>
                    <label htmlFor="clear">Очистить корзину</label>
                    <button className={cnCart('ButtonClear')} id='clear'><img src={deleteIcon} alt='cart-clear'></img></button>
                </div>
            </div>
            <div className={cnCart('List')}>
                {products.map((card: CartProduct) => <CardCart products={card} key={uid()} />)
                }
            </div>
        </section>
    );
}

export { Cart };
