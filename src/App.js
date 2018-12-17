import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Game from './components/game/';

const App = () => (
  <div className="App">
  <Header />
  <div className="GameContainer">
    <Game />
  </div>
</div>
);


export default App;
