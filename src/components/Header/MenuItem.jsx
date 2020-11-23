import React from 'react';
import { NavLink } from "react-router-dom";

const MenuItem = ({ item }) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={item.path}>
                {item.name}
            </NavLink>
        </li>
    );
}

export default MenuItem;
