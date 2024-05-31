import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'uid/single'

import { cnHeader } from './Header.classname';
import { CartButton } from '../CartButton/CartButton';
import { fetchHeaderData } from '../../store/Header/thunks';
import { AppDispatch, RootState } from '../../store/store';
import { ROUTES } from '../../utils/routes';

import userAvatarUrl from '../../assets/image/user-avatar.png';
import openMenuIcon from '../../assets/image/drop-menu.png';
import closeMenuIcon from '../../assets/image/drop-menu-close.png';

import './Header.css';
import { DropdownItem } from '../DropdownItem/DropdownItem';

type HeaderProps = {
    isReady: boolean
    dropMenuContent: string[];
}

const Header: FC<HeaderProps> = ({ isReady, dropMenuContent }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { LogoImg, UserName, status, error } = useSelector((state: RootState) => state.header);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHeaderData());
        }
    }, [status, dispatch]);

    const handleOpenDropMenu = () => {
        setIsDropdownOpen((prev) => !prev);
    }

    if (error) {
        return (<div>error</div>);
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
                        <img src={isDropdownOpen ? closeMenuIcon : openMenuIcon} alt='drop-menu' />
                    </button>
                </div>
                {isDropdownOpen ?
                    <ul className={cnHeader('DropdownMenu')}>
                        {dropMenuContent.map(text => <DropdownItem content={text} key={uid()} />)}
                    </ul>
                    : null}
            </div>
            <CartButton isFull={isReady} />
        </div>
    );
}

export { Header }
