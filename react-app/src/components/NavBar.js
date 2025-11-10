import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>
        Products
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
        About
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
