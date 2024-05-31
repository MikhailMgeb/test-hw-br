import React, { FC } from 'react';

import { cnCardCart } from './CardCart.classname';
import { CartProduct } from '../types/ReduxTypes';
import deleteIcon from '../../assets/image/icons-delete.png';

import './CardCart.css';

type CardCartProps = {
    products: CartProduct;
}

const CardCart: FC<CardCartProps> = ({ products }) => {
    const { Id, Name, Description, Quantity, Unit, Сurrency, Price, DiscountedPrice, Images } = products;

    return (
        <article className={cnCardCart()}>
            <div className={cnCardCart('BlockImage')}>
                <img className={cnCardCart('Image')} alt={Images[0].FileName} src={`data:image/jpeg;base64,${Images[0].Image}`}></img>
            </div >
            <div className={cnCardCart('Description')}>
                <h3 className={cnCardCart('Title')}>{Name}</h3>
                <p className={cnCardCart('Text')}>{Description}</p>
            </div>
            <div className={cnCardCart('Quantity')}>
                <div className={cnCardCart('QuantityControl')}>
                    <button className={cnCardCart('QuantityMinus')}>-</button>
                    <span className={cnCardCart('QuantityValue')}>{Quantity}</span>
                    <button className={cnCardCart('QuantityPlus')}>+</button>
                </div>
                {Quantity > 1 ? <div>цена за 1 шт. <span>{Price}</span></div> : null}
            </div>
            <div className={cnCardCart('Details')}>
                <div className={cnCardCart('DetailsPrice')}>
                    <p className={cnCardCart('Discount')}>{DiscountedPrice === 0 ? null : DiscountedPrice}</p>
                    <p className={cnCardCart('Price')}>{Math.floor(Price * Quantity)}
                        <span> {Сurrency}</span>
                    </p>
                </div>
                <div>
                    <button className={cnCardCart('ButtonRemove')}>
                        <img src={deleteIcon} alt='remove'></img>
                    </button>
                </div>
            </div>
        </article>
    );
}

export { CardCart };
