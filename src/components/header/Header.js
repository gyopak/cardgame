import React from 'react';
import './Header.css';
import Logo from './Logo';
import GameController from './GameController';

const Header = () => (
  <div className="Header">
    <Logo />
    <GameController />
    <div className="placeholder"></div>
  </div>
);

export default Header;