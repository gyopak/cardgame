import React from 'react';
import './Logo.css';
import mainLogo from'../../assets/logo.svg';

const Logo = () => (
  <div className="Logo">
    <img alt="logo" src={mainLogo} />
    <h1>MEMORY GAME</h1>
  </div>
);

export default Logo;
