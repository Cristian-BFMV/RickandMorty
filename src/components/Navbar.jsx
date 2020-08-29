import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from '../styled/Header';
import rickandmorty from '../assets/img/rickandmorty.png';

const activeLink = { color: 'rgb(143, 143, 143)' };

const navSlide = () => {
  const navlist = document.querySelector('.nav-list');
  const burger = document.querySelector('.burger-menu');
  const body = document.body;
  body.classList.toggle('modal-open');
  navlist.classList.toggle('responsive-nav-list');
  burger.classList.toggle('toggle');
};

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
      <div className="burger-menu" onClick={navSlide}>
        <div className="burger-line line1"></div>
        <div className="burger-line line2"></div>
        <div className="burger-line line3"></div>
      </div>
    </nav>
  </HeaderStyles>
);

export default Navbar;
