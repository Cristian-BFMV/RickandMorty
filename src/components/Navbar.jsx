import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from '../styled/Header';
import rickandmorty from '../assets/img/rickandmorty.png';

const activeLink = { color: 'rgb(143, 143, 143)' };

const Navbar = () => (
  <HeaderStyles>
    <nav className="navbar">
      <div className="nav-brand">
        <img src={rickandmorty} alt="Rick and Morty logo" className="nav-brand-logo" />
        <h3 className="nav-brand-title">Rick and Morty</h3>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeStyle={activeLink} exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/characters" className="nav-link" activeStyle={activeLink}>
            Characters
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/locations" className="nav-link" activeStyle={activeLink}>
            Locations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/episodes" className="nav-link" activeStyle={activeLink}>
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  </HeaderStyles>
);

export default Navbar;
