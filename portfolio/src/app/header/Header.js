import React from 'react';
import './styles/Header.css';
import HeaderLinks from './HeaderLinks';
import Menu from './Menu';

const Header = () => (
  <div>
    <HeaderLinks />
    <div className="header-label">
      <h2>Abel Saiz</h2>
      <p>Anything is possible</p>
    </div>
    <Menu />
  </div>
)

export default Header;