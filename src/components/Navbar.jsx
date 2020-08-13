import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from '../styled/Header';
import rickandmorty from '../assets/img/rickandmorty.png';

const Navbar = () => {
  const activeLink = { color: 'rgb(143, 143, 143)' };
  return (
    <HeaderStyles>
      <nav className="navbar">
        <div className="nav-brand">
          <img src={rickandmorty} alt="Rick and Morty logo" className="nav-brand-logo" />
          <h3 className="nav-brand-title">Rick and Morty</h3>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeStyle={activeLink} exact>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/characters" className="nav-link" activeStyle={activeLink}>
              Personajes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/locations" className="nav-link" activeStyle={activeLink}>
              Ubicaciones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/episodes" className="nav-link" activeStyle={activeLink}>
              Episodios
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Navbar;
