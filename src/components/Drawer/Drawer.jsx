import React from "react";

import "./index.scss";
import logo from "../../assets/img/logo.svg";

const Drawer = ({ open, handleOpenMenu }) => {
  const items = [
    { name: "About me" },
    { name: "Relationships" },
    // {name: 'Requirements'},
    { name: "Users" },
    { name: "Sign Up" },
    { name: "Terms and Conditions" }
  ];
  const items2 = [
    { name: "How it works" },
    { name: "Partnership" },
    { name: "Help" },
    { name: "Leave testimonial" },
    { name: "Contact us" },
    { name: "Terms and Conditions" }
  ];
  const items3 = [
    { name: "Articles" },
    { name: "Our news" },
    { name: "Testimonials" },
    { name: "Licenses" },
    { name: "Privacy Policy" }
  ];

  return (
    <>
      <div className={open ? "open drawer" : "drawer"}>
        {open && <div className="bg" onClick={handleOpenMenu} />}

        <div className="drawer__header">
          <img src={logo} alt="Logo" />
        </div>

        <div className="drawer__content">
          <ul>
            {items.map(i => (
              <li key={i.name}>
                <a href="#">{i.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            {items2.map(i => (
              <li key={i.name}>
                <a href="#">{i.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            {items3.map(i => (
              <li key={i.name}>
                <a href="#">{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
