import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cnHeader } from './Header.classname';
import { fetchHeaderData } from './../../store/Header/HeaderSlice';
import { AppDispatch } from '../../store/store';
import { ROUTES } from '../../utils/routes';
import { RootState } from '../types/ReduxTypes';
import userAvatarUrl from '../../assets/image/user-avatar.png';
import openMenuIcon from '../../assets/image/drop-menu.png';
import closeMenuIcon from '../../assets/image/drop-menu-close.png';

import './Header.css';
import { Cart } from '../Cart/Cart';

type HeaderProps = {
    isFull: boolean
}

const Header: FC<HeaderProps> = ({isFull}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { LogoImg, UsedGuid, UserName, status, error } = useSelector((state: RootState) => state.header);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropMenuIcon, setDropMenuIcon] = useState(openMenuIcon);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHeaderData());
        }
    }, [status, dispatch]);

    const handleOpenDropMenu = () => {
        setIsDropdownOpen((prev) => !prev);
        if (isDropdownOpen === false) {
            setDropMenuIcon(closeMenuIcon);
        } else {
            setDropMenuIcon(openMenuIcon);
        }
    }

    return (
        <div className={cnHeader()}>
            <div className={cnHeader('Logo')}>
                <Link to={ROUTES.HOME}>
                    <img className={cnHeader('LogoImage')} src={`data:image/jpeg;base64,${LogoImg}`} alt='Logo' />
                </Link>
            </div>
            <div className={cnHeader('User')}>
                <img className={cnHeader('UserImage')} src={userAvatarUrl} alt='Avatar' />
                <p className={cnHeader('UserName')}>{UserName}</p>
            </div>
            <div className={cnHeader('Dropdown')}>
                <div className={cnHeader('DropdownTitle')}>5 фактов об этом сайте
                    <button className={cnHeader('DropMenuButton')} onClick={handleOpenDropMenu}>
                        <img src={dropMenuIcon} alt='drop-menu' />
                    </button>
                </div>
                {isDropdownOpen ?
                    <ul className={cnHeader('DropdownMenu')}>
                        <li className={cnHeader('DropdownItem')}>Логику сайта придумал Мгебришвили Михаил</li>
                        <li className={cnHeader('DropdownItem')}>Дизайн придумал Мгебришвили Михаил </li>
                        <li className={cnHeader('DropdownItem')}>SEO сайта придумал Мгебришвили Михаил</li>
                        <li className={cnHeader('DropdownItem')}>Потому что Мгебришвили Михаил очень хочет работать у вас!</li>
                    </ul>
                    : null}

            </div>
            <Cart isFull={isFull} />
        </div>
    );
}

export { Header }
