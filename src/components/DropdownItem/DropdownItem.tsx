import React, { FC } from 'react';

import { cnDropdownItem } from './DropdownItem.classname';

import './DropdownItem.css';

type DropdownItemProps = {
    content: string;
}

const DropdownItem: FC<DropdownItemProps> = ({ content }) => {
    return (
        <li className={cnDropdownItem()}>
            {content}
        </li>
    );
}

export { DropdownItem };
