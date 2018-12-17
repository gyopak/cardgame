import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Game from './components/game/Game';

const App = () => (
  <div className="App">
  <Header />
  <div className="GameContainer">
    <Game size={20} />
  </div>
</div>
);


export default App;
