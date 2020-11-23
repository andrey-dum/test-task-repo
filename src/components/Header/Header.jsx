import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

import logo from "../../assets/img/logo.svg";
import menuIcon from "../../assets/img/menu-icon.svg";
import { useSelector } from "../../hooks/store";
import MenuItem from "./MenuItem";
import coverphoto from "../../assets/img/photo-cover.png";

const Header = ({ handleOpenMenu }) => {
  const user = useSelector(state => state.users.user);

  const items = [
    { id: 1, name: "About me", path: "/aboutMe" },
    { id: 2, name: "Relationships", path: "/banner" },
    { id: 3, name: "Requirements", path: "/banner" },
    { id: 4, name: "Users", path: "/users" },
    { id: 5, name: "Sign Up", path: "/signUp", login: true }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container header__wrapper">
          <div className="header">
            <Link to="/" className="logo navbar-brand">
              <img src={logo} alt="" />
            </Link>
            <button
              onClick={handleOpenMenu}
              className="navbar-toggler collapsed"
              type="button"
            >
              <img src={menuIcon} alt="" />
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav">
                {items.map(item => {
                  if (item.login && user) {
                    return (
                      <li key={item.id} className="nav-item user__panel">
                        <img src={coverphoto} alt={user.name} />
                        {user.name}
                      </li>
                    );
                  }
                  return <MenuItem key={item.id} item={item} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
