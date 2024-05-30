import React from 'react';
import { Link } from 'react-router-dom';

import { cnHeader } from './Header.classname';

import './Header.css';
import { ROUTES } from '../../utils/routes';

const Header = () => {
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

export { Header };
