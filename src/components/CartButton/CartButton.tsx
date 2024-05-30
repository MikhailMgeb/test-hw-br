import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cnCartButton } from './CartButton.classname';
import { fetchCartProducts } from '../../store/Cart/thunks';
import { AppDispatch, RootState } from '../../store/store';
import CartButtonIcon from '../../assets/image/cart-icon.png'
import { ROUTES } from '../../utils/routes';

import './CartButton.css';

type CartButtonProps = {
    isFull: boolean;
}

const CartButton: FC<CartButtonProps> = ({ isFull }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.cart);

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
        <section className={cnCartButton()}>
            <button className={cnCartButton('Button')}>
                <Link to={ROUTES.CART}>
                    <img className={cnCartButton('image')} src={CartButtonIcon} alt='CartButton' />
                </Link>
            </button>
        </section>
    );
}

export { CartButton };
