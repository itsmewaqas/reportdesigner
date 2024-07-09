import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPermission } from '../redux/reducer/menuSlice';
import icon1 from '../assets/images/menuIcon1.svg';
import icon2 from '../assets/images/menuIcon2.svg';
import icon3 from '../assets/images/menuIcon3.svg';

function TopMenu(props) {

    const dispatch = useDispatch();

    const [selectTitle, setselectTitle] = useState("Home");

    const permissionMenu = [
        {
            id: 0,
            title: 'Home',
        },
        {
            id: 1,
            title: 'Visualization',
        },
        {
            id: 2,
            title: 'Organization',
        },
    ]

    const renderMenuIcon = (icon) => {
        switch (icon) {
            case "Home":
                return icon1;
            case "Visualization":
                return icon2;
            case "Organization":
                return icon3;
            default:
                return null
        }
    }

    const getPermission = (item) => {
        setselectTitle(item.title);
        dispatch(selectPermission(item.id));
    }

    return (
        <ul>
            {permissionMenu.map((item, index) => (
                <li key={index.toString()}>
                    <a onClick={() => getPermission(item)}
                        className={selectTitle === item.title ? 'active' : ''}>
                        <img src={renderMenuIcon(item.title)} alt="" /> {item.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default TopMenu;