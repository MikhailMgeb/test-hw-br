import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cnHeader } from './Header.classname';
import { fetchHeaderData } from './../../store/Header/HeaderSlice';
import { AppDispatch } from '../../store/store';

import './Header.css';
import { ROUTES } from '../../utils/routes';
import { RootState } from '../types/ReduxTypes';


const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { LogoImg, UsedGuid, UserName, status, error } = useSelector((state: RootState) => state.header);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHeaderData());
        }
    }, [status, dispatch]);

    return (
        <div className={cnHeader()}>
            <div className={cnHeader('Logo')}>
                <Link to={ROUTES.HOME}>
                    <img src={'/'} alt='Logo' />
                </Link>
            </div>
        </div>
    );
}

export { Header }
