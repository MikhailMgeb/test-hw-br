import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'uid/single';

import { cnCart } from './Cart.classname';
import { AppDispatch, RootState } from '../../store/store';
import { CardCart } from '../../components/CardCart/CardCart';
import { CartProduct } from '../../components/types/types';
import { fetchDeleteProducts } from '../../store/FetchProducts/thunks';
import deleteIcon from '../../assets/image/icons-delete.png';

import './Cart.css';

const Cart = () => {
    const { products, loading, error } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch<AppDispatch>();

    const handelClearAllCart = () => {
        dispatch(fetchDeleteProducts());
    }

    return (
        <section className={cnCart()}>
            <div className={cnCart('Container')}>
                <div className={cnCart('CartTitle')}>Ваша корзина</div>
                <div className={cnCart('CartClear')}>
                    <label htmlFor="clear">Очистить корзину</label>
                    <button className={cnCart('ButtonClear')} onClick={handelClearAllCart} id='clear'><img src={deleteIcon} alt='cart-clear'></img></button>
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

