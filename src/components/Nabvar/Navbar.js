import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import {Button } from '../Button';
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);  

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Pri$ma<i className="fas fa-money-bill-wave"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        )
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default Navbar;
