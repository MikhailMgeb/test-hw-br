import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cnCardCart } from './CardCart.classname';
import { CartProduct } from '../types/types';
import { AppDispatch, RootState } from '../../store/store';
import { fetchAddOneProduct, fetchDeleteOneProduct, fetchDeleteProduct } from '../../store/FetchProducts/thunks';
import deleteIcon from '../../assets/image/icons-delete.png';

import './CardCart.css';

type CardCartProps = {
    products: CartProduct;
}

const CardCart: FC<CardCartProps> = ({ products }) => {
    const { UsedGuid } = useSelector((state: RootState) => state.header);
    const dispatch = useDispatch<AppDispatch>();
    const { Id, Name, Description, Quantity, Сurrency, Price, DiscountedPrice, Images } = products;

    const getDeleteOneProductHandler = (Id: number, UserGuid: string) => {
        return () => {
            dispatch(fetchDeleteOneProduct({ Id, UserGuid }));
        }
    }

    const getAddOneProductHandler = (Id: number, UserGuid: string) => {
        return () => {
            dispatch(fetchAddOneProduct({ Id, UserGuid }));
        }
    }

    const handleRemoveProduct = (Id: number, UserGuid: string) => {
        return () => {
            dispatch(fetchDeleteProduct({ Id, UserGuid }));

        }
    }

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
                    <button onClick={getDeleteOneProductHandler(Id, UsedGuid)}
                        className={cnCardCart('QuantityMinus')}
                        disabled={Quantity > 1 ? false : true}>-</button>
                    <span className={cnCardCart('QuantityValue')}>{Quantity}</span>
                    <button onClick={getAddOneProductHandler(Id, UsedGuid)} className={cnCardCart('QuantityPlus')}>+</button>
                </div>
                {Quantity > 1 ? <div>цена за 1 шт. <span>{Price}</span></div> : <span> </span>}
            </div>
            <div className={cnCardCart('Details')}>
                <div className={cnCardCart('DetailsPrice')}>
                    <p className={cnCardCart('Discount')}>{DiscountedPrice === 0 ? null : DiscountedPrice}</p>
                    <p className={cnCardCart('Price')}>{Math.floor(Price * Quantity)}
                        <span> {Сurrency}</span>
                    </p>
                </div>
                <div>
                    <button onClick={handleRemoveProduct(Id, UsedGuid)} className={cnCardCart('ButtonRemove')}>
                        <img src={deleteIcon} alt='remove'></img>
                    </button>
                </div>
            </div>
        </article>
    );
}

export { CardCart };
